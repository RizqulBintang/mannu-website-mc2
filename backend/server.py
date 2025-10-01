from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.get("/server-info")
async def get_server_info():
    """Get Mannuruki Server information"""
    return {
        "server_name": "Mannuruki Server",
        "version": "1.21.5",
        "support": "Java Dan Bedrock", 
        "status": "offline",
        "players_online": 0,
        "max_players": 100,
        "motd": "Server Minecraft terbaik dengan komunitas yang ramah!",
        "map_url": "https://map.bintanglima.my.id/"
    }

@api_router.get("/gallery")
async def get_gallery():
    """Get server gallery images"""
    return {
        "images": [
            {
                "id": 1,
                "src": "https://bintanglima.my.id/images/ss1.webp",
                "title": "Server Overview",
                "alt": "Screenshot 1 - Server Overview"
            },
            {
                "id": 2,
                "src": "https://bintanglima.my.id/images/ss2.webp", 
                "title": "Survival World",
                "alt": "Screenshot 2 - Survival World"
            },
            {
                "id": 3,
                "src": "https://bintanglima.my.id/images/ss3.webp",
                "title": "Creative Builds", 
                "alt": "Screenshot 3 - Creative Builds"
            },
            {
                "id": 4,
                "src": "https://bintanglima.my.id/images/ss4.webp",
                "title": "Minigames Arena",
                "alt": "Screenshot 4 - Minigames Arena"
            },
            {
                "id": 5,
                "src": "https://bintanglima.my.id/images/ss5.webp",
                "title": "Community Area", 
                "alt": "Screenshot 5 - Community Area"
            },
            {
                "id": 6,
                "src": "https://bintanglima.my.id/images/ss6.webp",
                "title": "Adventure Zone",
                "alt": "Screenshot 6 - Adventure Zone" 
            },
            {
                "id": 7,
                "src": "https://bintanglima.my.id/images/ss7.webp",
                "title": "PvP Arena",
                "alt": "Screenshot 7 - PvP Arena"
            },
            {
                "id": 8,
                "src": "https://bintanglima.my.id/images/ss8.webp", 
                "title": "Special Events",
                "alt": "Screenshot 8 - Special Events"
            }
        ]
    }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
