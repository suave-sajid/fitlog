"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Workouts" },
  { href: "/myplan", label: "My Plan" },
];

// "/" is the default page, so it is only current on "/" itself.
// Every other route is also current on its sub-paths (e.g. "/myplan/edit").
const isCurrent = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

const Navbar = ({ planCount = 0, savedCount = 0 }) => {
  const pathname = usePathname();

  // Single source of truth: the same items feed the desktop bar and the mobile menu.
  // daisyUI styles [aria-current="page"] menu items as the selected one.
  const navItems = NAV_LINKS.map(({ href, label }) => {
    const current = isCurrent(pathname, href);
    const linkClass = current
      ? "font-semibold"
      : "font-medium hover:text-primary transition-colors";

    return (
      <li key={href}>
        <Link href={href} aria-current={current ? "page" : undefined} className={linkClass}>
          {label}
        </Link>
      </li>
    );
  });

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Start: Mobile Menu Toggle & Desktop Brand */}
        <div className="navbar-start">
          {/* Mobile Dropdown (details keeps it keyboard accessible with no JS) */}
          <details className="dropdown lg:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="btn btn-ghost btn-circle list-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </summary>
            <ul className="menu dropdown-content mt-3 z-50 p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-200">
              {navItems}
            </ul>
          </details>

          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="btn btn-ghost text-xl font-black tracking-wider uppercase text-primary hover:bg-transparent"
          >
            <Image src={logo} alt="FitLog logo" className="h-7 w-auto" />
            FIT<span className="text-base-content">LOG</span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
        </div>

        {/* Navbar End: Counters */}
        <div className="navbar-end gap-1 sm:gap-2">
          <Link
            href="/myplan"
            className="btn btn-ghost btn-sm gap-1 sm:gap-2 px-2 sm:px-3"
            title="My Plan"
          >
            <span className="hidden sm:inline text-xs font-medium opacity-70">Plan</span>
            <span className="badge badge-primary badge-sm sm:badge-md font-bold">
              {planCount}
            </span>
          </Link>

          <Link
            href="/saved"
            className="btn btn-ghost btn-sm gap-1 sm:gap-2 px-2 sm:px-3"
            title="Saved"
          >
            <span className="hidden sm:inline text-xs font-medium opacity-70">Saved</span>
            <span className="badge badge-secondary badge-sm sm:badge-md font-bold">
              {savedCount}
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;