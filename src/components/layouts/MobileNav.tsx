"use client";
import { INavLink } from "@/app/types/navlinks";
import { navlinks } from "@/constants/navlinks";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  return (
    <>
      <button
        onClick={openMenu}
        id="open-menu-btn"
        className="md:hidden text-gray-600 hover:text-indigo-400 transition cursor-pointer"
      >
        <IconMenu2 stroke={2} />
      </button>
      <aside
        id="mobile-nav"
        className={`fixed right-0 h-fit w-full bg-white shadow-lg md:hidden transition-all duration-300 ${
          isMenuOpen ? "top-0" : "-top-full"
        }`}
      >
        {/* Menu Header */}
        <div className="p-6 border-b border-indigo-200 flex justify-between">
          <div>
            <h1 className="text-xl font-semibold text-indigo-400">SwiftCart</h1>
          </div>
          <div>
            <button
              className="text-gray-600 hover:text-indigo-400 transition cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              <IconX stroke={2} />
            </button>
          </div>
        </div>

        {/* Links */}
        <nav className="p-6 space-y-4">
          {navlinks.map((link: INavLink) => (
            <NavLink key={link.label} closeMenu={closeMenu} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
