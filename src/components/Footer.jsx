import logo from "@/assets/logo.png"
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 px-6 py-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side - Brand Logo + Name */}
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

        {/* Right Side - Copyright Line */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}