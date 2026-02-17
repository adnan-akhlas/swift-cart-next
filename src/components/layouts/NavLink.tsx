"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  closeMenu?: () => void;
}

export default function NavLink({ href, closeMenu, children }: NavLinkProps) {
  const pathname = usePathname();
  const status =
    pathname === href ? "text-indigo-400" : "hover:text-indigo-400";
  return (
    <Link
      onClick={closeMenu}
      className={`block ${status} font-medium`}
      href={href}
    >
      {children}
    </Link>
  );
}
