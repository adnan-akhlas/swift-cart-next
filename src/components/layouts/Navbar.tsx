"use client";

import { INavLink } from "@/app/types/navlinks";
import MobileNav from "@/components/layouts/MobileNav";
import NavLink from "@/components/layouts/NavLink";
import { navlinks } from "@/constants/navlinks";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  const cartCount = 1;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full">
      {/* Navbar */}
      <nav>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/">
                <h1 className="text-xl font-semibold text-indigo-600">
                  SwiftCart
                </h1>
              </Link>
            </div>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex font-semibold gap-8 text-gray-700">
              {navlinks.map((link: INavLink) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Cart & Toggle Icon */}
            <div className="flex items-center gap-4">
              <button
                id="show-cart-btn"
                className="relative hover:text-indigo-400 text-gray-600 transition cursor-pointer"
              >
                <IconShoppingCart stroke={2} />
                {cartCount > 0 && (
                  <span
                    id="total-cart-items"
                    className="text-[10px] flex justify-center items-center rounded-full bg-indigo-400 text-white absolute -right-2 -top-3 w-5 h-5"
                  >
                    {cartCount}
                  </span>
                )}
              </button>
              {/* Mobile Nav*/}
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
