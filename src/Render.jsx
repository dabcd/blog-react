import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Post from "./Post";
import PostsPreview from "./PostsPreview";
import NotFound from "./NotFound";
import postsData from "./data";

export default function Render() {
  const [data, setData] = useState(null);
  if (!data) {
    // Reading data from a file for now
    setData(postsData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App data={data} />}>
          <Route index element={<Home data={data} />} />
          <Route path="posts" element={<Posts />}>
            <Route path=":postId" element={<Post data={data} />} />
            <Route index element={<PostsPreview data={data} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
