"use client";
import React from "react";
import ShowArticleList from "../components/ShowArticleList";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <ShowArticleList />
    </main>
  );
}
