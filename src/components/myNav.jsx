import logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";

// components/Navbar.jsx
export default function Navbarr() {
  return (
    <nav className="bg-gray-950 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          {/* Dumbbell Icon */}
          <Image
          src={logo}
          className="w-6 h-auto"
          alt="logo"
          />
          <span className="text-white font-bold text-lg tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex items-center gap-2">
          {/* Active Link */}
          <Link 
          href='/workouts'
          className="bg-gray-800 text-lime-400 px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer">
            Workouts
          </Link>
          {/* Inactive Link */}
          <Link
          href='/myplan'
          className="text-gray-400 px-4 py-1.5 text-sm font-medium hover:text-white transition-colors cursor-pointer">
            My Plan
          </Link>
        </div>

        {/* Right Side - Plan & Saved */}
        <div className="flex items-center gap-4">
          {/* Plan */}
          <div className="flex items-center gap-2">
            <span className="text-gray-300 text-sm">Plan</span>
            <span className="bg-lime-400 text-gray-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>

          {/* Saved */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Saved</span>
            <span className="bg-gray-700 text-gray-300 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}