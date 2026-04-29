"use client";

import { useState } from "react";

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: "1px solid var(--gray-200)" }}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#"
            className="cormorant text-2xl md:text-3xl font-light tracking-widest"
            style={{ color: "var(--gray-900)", letterSpacing: "0.25em" }}
          >
            MAISON
          </a>

          <nav className="hidden md:flex items-center gap-10">
            <a href="#concept" className="nav-link">
              Concept
            </a>
            <a href="#menu" className="nav-link">
              Menu
            </a>
            <a href="#stylist" className="nav-link">
              Stylist
            </a>
            <a href="#access" className="nav-link">
              Access
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <a href="#reserve" className="hidden md:block btn-primary text-xs">
              Reserve
            </a>

            <button
              type="button"
              aria-label="モバイルメニューを開閉"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="md:hidden flex flex-col gap-1.5 cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span className="block w-6 h-px" style={{ background: "var(--gray-800)" }}></span>
              <span className="block w-6 h-px" style={{ background: "var(--gray-800)" }}></span>
              <span className="block w-4 h-px" style={{ background: "var(--gray-800)" }}></span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden px-6 pb-6 pt-2"
          style={{ borderTop: "1px solid var(--gray-200)", background: "white" }}
        >
          <nav className="flex flex-col gap-4">
            <a href="#concept" className="nav-link" onClick={closeMenu}>
              Concept
            </a>
            <a href="#menu" className="nav-link" onClick={closeMenu}>
              Menu
            </a>
            <a href="#stylist" className="nav-link" onClick={closeMenu}>
              Stylist
            </a>
            <a href="#access" className="nav-link" onClick={closeMenu}>
              Access
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
