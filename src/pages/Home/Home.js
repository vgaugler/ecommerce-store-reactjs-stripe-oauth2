import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div class="info">
      <div class="content">
        <div class="head">
          <h1>Ready for new stuff</h1>
          <p>Buy new stock at reasonable cost</p>

          <Link to="/products">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
      <div class="pic"></div>
    </div>
  );
}
