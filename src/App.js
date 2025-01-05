import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindUrNerdPage from "./pages/FindUrNerdPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FindUrNerdPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
