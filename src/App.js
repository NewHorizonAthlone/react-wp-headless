import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import BottomNav from "../src/components/SimpleBottomNavigation";
import AboutPage from "./pages/About";
import "./App.css";
import { PostsList } from "./features/posts/PostsList";
import { SinglePostPage } from "./features/posts/SinglePostPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route exact path="/posts/:postId" element={<SinglePostPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
