import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import GameModes from "./components/GameModes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { getApiBase } from "./lib/api";

const API_BASE = getApiBase();

function App() {
  const testConnection = async () => {
    try {
      const response = await axios.get(`${API_BASE}/`);
      console.log("Backend connected:", response.data.message);
    } catch (e) {
      console.error("Backend connection error:", e);
      console.info("API base attempted:", API_BASE);
      if (!process.env.REACT_APP_BACKEND_URL) {
        console.warn(
          "REACT_APP_BACKEND_URL is not set. Attempted to reach backend via:",
          API_BASE
        );
      }
    }
  };

  useEffect(() => {
    testConnection();
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Hero />
      <ServerInfo />
      <GameModes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;