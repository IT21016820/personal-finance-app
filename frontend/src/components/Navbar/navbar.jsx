// src/components/Navbar/navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Finance Tracker
        </Link>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <div className={`space-x-4 md:flex ${isOpen ? "block" : "hidden"}`}>
          <Link href="/" className="block py-2 md:inline-block hover:text-blue-300">
            Dashboard
          </Link>
          <Link href="/budget" className="block py-2 md:inline-block hover:text-blue-300">
            Budget
          </Link>
          <Link href="/transactions" className="block py-2 md:inline-block hover:text-blue-300">
            Transactions
          </Link>
        </div>
      </div>
    </nav>
  );
}
