"use client";
import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

import { Menu, X, ChevronDown } from "lucide-react";

type NavLink = {
  name: string;
  href?: string;
  dropdown?: { name: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  {
    name: "Usługi",
    href: "#services"
  },
  { name: "Kontakt", href: "#kontakt" },
];

function renderNavLink(
  link: { name: string; href?: string },
  onClick?: () => void
) {
  if (link.href && link.href.startsWith("#")) {
    return (
      <a
        key={link.name}
        href={link.href}
        className="py-2 px-2 rounded hover:bg-accent/20 text-neutral-700 transition"
        onClick={e => {
          const id = link.href?.slice(1);
          if (id) {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
              e.preventDefault();
              setTimeout(() => {
                if (onClick) onClick();
              }, 350);
              return;
            }
          }
          if (onClick) onClick();
        }}
      >
        {link.name}
      </a>
    );
  }
  if (link.href) {
    return (
      <Link
        key={link.name}
        href={link.href}
        className="py-2 px-2 rounded hover:bg-accent/20 text-neutral-700 transition"
        onClick={onClick}
        scroll={link.href.startsWith('#') ? true : undefined}
      >
        {link.name}
      </Link>
    );
  }
  return <span key={link.name}>{link.name}</span>;
}

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  // Block scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up in case component unmounts while menu is open
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  const navRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 10) {
          navRef.current.classList.add(
            "backdrop-blur-md",
            "bg-white/80",
            "shadow-md"
          );
        } else {
          navRef.current.classList.remove(
            "backdrop-blur-md",
            "bg-white/80",
            "shadow-md"
          );
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-40 w-full transition-all bg-white"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-extrabold text-xl tracking-tight text-primary"
        >
          <span className="uppercase tracking-widest">DronePro</span>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {NAV_LINKS.map((link) => renderNavLink(link))}
          <Button
            asChild
            className="ml-3 bg-primary text-white hover:bg-primary/90 shadow-lg"
          >
            <Link href="#kontakt">Zamów bezpłatną wycenę</Link>
          </Button>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Otwórz menu"
            className="p-2 rounded-md hover:bg-accent/20 transition"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <div
            className="fixed inset-0 h-screen w-screen z-50 flex pointer-events-none"
            aria-hidden={!menuOpen}
          >
            {/* Clickable overlay */}
            <div
              className={
                "flex-1 bg-black/40 transition-opacity duration-300" +
                (menuOpen
                  ? " opacity-100 pointer-events-auto"
                  : " opacity-0 pointer-events-none")
              }
              onClick={() => setMenuOpen(false)}
              aria-hidden={!menuOpen}
            />
            {/* Drawer */}
            <div
              className={
                "w-72 max-w-full h-full bg-white shadow-lg flex flex-col transition-transform duration-300 transform" +
                (menuOpen
                  ? " translate-x-0 pointer-events-auto"
                  : " translate-x-full pointer-events-none")
              }
              aria-hidden={!menuOpen}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-extrabold text-lg text-primary">
                  DronePro
                </span>
                <button
                  aria-label="Zamknij menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-md hover:bg-accent/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-2 p-4 flex-1">
                {NAV_LINKS.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col gap-1">
                      <span className="font-semibold text-neutral-700 flex items-center gap-1">
                        {link.name} <ChevronDown className="w-4 h-4" />
                      </span>
                      <div className="pl-3 flex flex-col gap-1">
                        {link.dropdown.map((item) =>
                          renderNavLink(item, () => setMenuOpen(false))
                        )}
                      </div>
                    </div>
                  ) : (
                    renderNavLink(link, () => setMenuOpen(false))
                  )
                )}
                <Button
                  asChild
                  className="mt-3 bg-primary text-white hover:bg-primary/90 shadow-lg"
                >
                  <a
                    href="#kontakt"
                    onClick={e => {
                      const el = document.getElementById("kontakt");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                        e.preventDefault();
                        setTimeout(() => setMenuOpen(false), 350);
                        return;
                      }
                      setMenuOpen(false);
                    }}
                  >
                    Zamów bezpłatną wycenę
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
