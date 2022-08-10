import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/NavBar";
import BottomNav from "../src/components/SimpleBottomNavigation";
import AboutPage from "./pages/About";
import "./App.css";
import { PostsList } from "./features/posts/PostsList";
import { SinglePostPage } from './features/posts/SinglePostPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route exact path="/posts/:postId" component={SinglePostPage} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}

export default App;
