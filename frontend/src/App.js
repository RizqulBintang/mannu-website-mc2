import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import GameModes from "./components/GameModes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const testConnection = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log("Backend connected:", response.data.message);
    } catch (e) {
      console.error("Backend connection error:", e);
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