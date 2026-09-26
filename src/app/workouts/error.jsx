'use client';

export default function Error({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
            <p className="text-gray-400">Couldn't load workouts right now.</p>
            <button
                onClick={reset}
                className="bg-lime-400 text-gray-900 font-bold px-5 py-2 rounded-xl hover:bg-lime-300 cursor-pointer"
            >
                Try Again
            </button>
        </div>
    );
}