"use client"
import { useState } from "react";
import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

export default function Navbarr() {
  const pathname = usePathname();
  const { planItems, savedItems } = usePlan();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to close mobile menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Side - Logo */}
        <Link href='/' onClick={handleLinkClick}>
          <div className="flex items-center gap-2">
            <Image
              src={logo}
              className="w-6 h-auto"
              alt="logo"
            />
            <span className="text-white font-bold text-lg tracking-wide">
              FITLOG
            </span>
          </div>
        </Link>

        {/* Center - Navigation Links (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/workouts"
            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${pathname.startsWith("/workouts")
              ? "bg-gray-800 text-lime-400"
              : "text-gray-400 hover:text-white"
              }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${pathname.startsWith("/myplan")
              ? "bg-gray-800 text-lime-400"
              : "text-gray-400 hover:text-white"
              }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side - Plan & Saved (Desktop Only) */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/myplan">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">Plan</span>
              <span className="bg-lime-400 text-gray-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {planItems.length}
              </span>
            </div>
          </Link>

          <Link href="/myplan">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Saved</span>
              <span className="bg-gray-700 text-gray-300 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {savedItems.length}
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close Icon (X)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 px-6 py-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          
          <Link
            href="/workouts"
            onClick={handleLinkClick}
            className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${pathname.startsWith("/workouts")
              ? "bg-gray-800 text-lime-400"
              : "text-gray-400 hover:text-white hover:bg-gray-900"
              }`}
          >
            Workouts
          </Link>

          <Link
            href="/myplan"
            onClick={handleLinkClick}
            className={`px-4 py-2 rounded-lg text-base font-medium transition-colors ${pathname.startsWith("/myplan")
              ? "bg-gray-800 text-lime-400"
              : "text-gray-400 hover:text-white hover:bg-gray-900"
              }`}
          >
            My Plan
          </Link>

          <div className="border-t border-gray-800 my-2"></div>

          <Link href="/myplan" onClick={handleLinkClick}>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
              <span className="text-gray-300 text-base font-medium">Plan</span>
              <span className="bg-lime-400 text-gray-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {planItems.length}
              </span>
            </div>
          </Link>

          <Link href="/myplan" onClick={handleLinkClick}>
            <div className="flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
              <span className="text-gray-400 text-base font-medium">Saved</span>
              <span className="bg-gray-700 text-gray-300 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {savedItems.length}
              </span>
            </div>
          </Link>
        </div>
      )}
    </nav>
  )
}