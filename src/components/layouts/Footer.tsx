import { INavLink } from "@/app/types/navlinks";
import { navlinks } from "@/constants/navlinks";
import Link from "next/link";
import NavLink from "@/components/layouts/NavLink";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-500 mb-4">
              SwiftCart
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop shop for all your fashion and lifestyle needs.
              Quality products, fast delivery, and excellent support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {navlinks.map((link: INavLink) => (
                <li key={link.label}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-indigo-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400 transition">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400 transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-indigo-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 text-sm rounded-r-md text-white whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2026 SwiftCart, Inc. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400">
            <Link
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-indigo-400 transition"
              aria-label="Email"
            >
              <i className="fa-regular fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
