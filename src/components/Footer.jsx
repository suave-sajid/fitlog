// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 px-6 py-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side - Brand Logo + Name */}
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-lime-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.5 3C5.67 3 5 3.67 5 4.5v2C5 7.33 5.67 8 6.5 8h11c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-11zM3 9v6c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5h-1C3.67 7.5 3 8.17 3 9zm15 0v6c0 .83.67 1.5 1.5 1.5h1c.83 0 1.5-.67 1.5-1.5V9c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5zM8 11v2c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5z" />
          </svg>
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