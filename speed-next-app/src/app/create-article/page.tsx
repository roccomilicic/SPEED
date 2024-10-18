"use client";
import React from "react";
import CreateArticleComponent from "../../components/CreateArticle";
import NavBar from "../../components/Navbar";

export default function CreateBook() {
  return (
    <main>
      <NavBar />
      <CreateArticleComponent />
    </main>
  );
}
