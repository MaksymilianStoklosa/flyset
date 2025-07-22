"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
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
    href: "#services",
  },
  {
    name: "Bezpieczeństwo",
    href: "#bezpieczenstwo",
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
        className="py-3 px-4 rounded hover:bg-gray-200/20 text-primary transition"
        onClick={(e) => {
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
        className="py-3 px-4 rounded hover:bg-gray-200/20 transition"
        onClick={onClick}
        scroll={link.href.startsWith("#") ? true : undefined}
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
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.classList.add("overflow-hidden");
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.classList.remove("overflow-hidden");
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    // Clean up in case component unmounts while menu is open
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
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
            "bg-light/80",
            "shadow-md"
          );
        } else {
          navRef.current.classList.remove(
            "backdrop-blur-md",
            "bg-light/80",
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
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        {/* Logo */}
        <a
          href="#witaj"
          className="flex items-center gap-2 font-extrabold text-xl tracking-tight"
        >
          <Image
            src="/flyset/logo.svg"
            alt="FlySet Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="uppercase tracking-widest">FlySet</span>
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {NAV_LINKS.map((link) => renderNavLink(link))}
          <Button
            asChild
            className="ml-6 bg-primary text-white hover:bg-white/90 shadow-lg hover:text-primary"
          >
            <a href="mailto:kontakt@flyset.pl?subject=Zapytanie o wycenę&body=Dzień dobry,%0D%0A%0D%0AChciałbym otrzymać bezpłatną wycenę usług dronowych.%0D%0A%0D%0APozdrawiam">
              Zamów bezpłatną wycenę
            </a>
          </Button>
        </div>
        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            aria-label="Otwórz menu"
            className="p-3 rounded-md hover:bg-gray-200/20 transition"
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
          <div
            className="fixed inset-0 h-screen w-full z-50 flex pointer-events-none overflow-hidden"
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
                "w-72 max-w-[85vw] h-full bg-white shadow-lg flex flex-col transition-transform duration-300 transform" +
                (menuOpen
                  ? " translate-x-0 pointer-events-auto"
                  : " translate-x-full pointer-events-none")
              }
              aria-hidden={!menuOpen}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <span className="font-extrabold text-lg">FlySet</span>
                <button
                  aria-label="Zamknij menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-3 rounded-md hover:bg-gray-200/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-4 px-6 py-4 flex-1">
                {NAV_LINKS.map((link) =>
                  link.dropdown ? (
                    <div key={link.name} className="flex flex-col gap-1">
                      <span className="font-semibold text-primary flex items-center gap-1">
                        {link.name} <ChevronDown className="w-4 h-4" />
                      </span>
                      <div className="pl-3 flex flex-col text-primary gap-1">
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
                  className="mt-6 bg-primary text-white hover:bg-white/90 shadow-lg hover:text-primary"
                >
                  <a
                    href="mailto:kontakt@flyset.pl?subject=Zapytanie o wycenę&body=Dzień dobry,%0D%0A%0D%0AChciałbym otrzymać bezpłatną wycenę usług dronowych.%0D%0A%0D%0APozdrawiam"
                    onClick={() => setMenuOpen(false)}
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
