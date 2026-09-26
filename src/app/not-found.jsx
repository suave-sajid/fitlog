import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      <p className="text-lime-400 font-bold text-sm uppercase tracking-widest mb-2">
        404
      </p>
      <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-center">
        Page Not Found
      </h1>
      <p className="text-gray-400 mt-3 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/workouts">
        <button className="mt-8 bg-lime-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-lime-300 transition-colors">
          Back to Workouts
        </button>
      </Link>
    </div>
  );
}