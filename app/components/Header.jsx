"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [navopen, setnavopen] = useState(false);

  return (
    <header className={`${navopen ? "active" : ""}`}>
      <nav>
        <Link href="/" className="logo">
          Policy
        </Link>

        <menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/FAQ">FAQ</Link>
        </menu>

        <menu>
          <Link href="/login" className="click secondary">
            Login
          </Link>
        </menu>

        <div className="bars" onClick={() => {setnavopen((prev)=>!prev)}}>
          <div className="bar"></div>
        </div>
      </nav>

        <menu>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/FAQ">FAQ</Link>
        </menu>
    </header>
  );
};

export default Header;
