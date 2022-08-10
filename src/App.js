import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import BottomNav from "../src/components/SimpleBottomNavigation";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import "./App.css";
import { PostsList } from "./features/posts/PostsList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
