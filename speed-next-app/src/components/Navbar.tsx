"use client"; // Ensure this component is treated as a Client Component

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./SearchBar";

function NavBar() {
  const currentPath = usePathname(); // Get the current path

  return (
    <div className="NavBar">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between align-items-center">
            {" "}
            {/* Flexbox for alignment */}
            <div className="nav-buttons">
              {" "}
              {/* Keeping buttons in their own div */}
              <Link
                href="/create-article"
                className={`btn btn-outline-warning ${
                  currentPath === "/create-article" ? "active" : ""
                }`}
              >
                + Create Article
              </Link>
              <Link
                href="/"
                className={`btn btn-outline-warning ${
                  currentPath === "/" ? "active" : ""
                }`}
              >
                Show Article List
              </Link>
              <Link
                href="/moderation"
                className={`btn btn-outline-warning ${
                  currentPath === "/moderation" ? "active" : ""
                }`}
              >
                Moderation
              </Link>
              <Link
                href="/analyze"
                className={`btn btn-outline-warning ${
                  currentPath === "/analyze" ? "active" : ""
                }`}
              >
                Analyze
              </Link>
            </div>
            {/* Conditionally render the Search component only if not on the create-article page */}
            {currentPath !== "/create-article" && <Search placeholder="Search..." />}
          </div>
        </div>
      </div>
      <style jsx>{`
        .NavBar {
          background-color: #f8f9fa;
          padding: 1rem 0;
        }
        .nav-buttons {
          display: flex; /* Use flex to align buttons */
        }
        .btn {
          display: inline-block;
          font-size: 16px;
          margin: 10px;
          padding: 10px 20px;
          color: #333;
          border: 1px solid #ffc107;
          text-align: center;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        .btn:hover {
          background-color: #ffc107;
          color: white;
        }
        .active {
          background-color: #ffc107;
          color: white;
          border-color: #ffc107; /* Optional: Change border color if needed */
        }
      `}</style>
    </div>
  );
}

export default NavBar;
