"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";


// Add { name: "Game", href: "/game" }, once you have a game to show off.
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Find the current page name for the mobile left-side text
  const currentPage = navItems.find((item) => item.href === pathname)?.name || "Home";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">

        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Left side: Current page name (non-clickable) */}
          <span className="font-semibold text-lg text-foreground">{currentPage}</span>

          {/* Right side: Hamburger Menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden flex flex-col p-4 gap-2 shadow-lg animate-in slide-in-from-top-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-3 px-4 rounded-md transition-colors ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}