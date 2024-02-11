import React, { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar" id="Navbar">
      <ul
        className="nav nav-links"
        id={showLinks ? "nav-active" : "nav-hidden"}
      >
        <li className="nav-item phone-none">
          <Link href="/" className="nav-link phone-none">
            BMT
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/Stats">
            Stats
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link " href="/Daily">
            Daily
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/Weekly">
            Weekly
          </Link>
        </li>
      </ul>

      <Link className="nav-link " href="/">
        <p className="pc-none">BMT</p>
      </Link>

      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
