"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import { toast } from "react-toastify";


export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration"); // New: Sort state
  const [isLoading, setIsLoading] = useState(false); // New: Loading state (set to true to test, or pull from context)

  const { planItems, savedItems, removeFromPlan, removeFromSaved, markAsDone, markAsUndone } = usePlan();

  const workouts = activeTab === "plan" ? planItems : savedItems;

  // --- NEW: Sorting Logic ---
  const sortedWorkouts = useMemo(() => {
    const list = [...workouts]; // Create a copy to avoid mutating state directly
    return list.sort((a, b) => {
      if (sortBy === "duration") return a.duration - b.duration;       // Low to High
      if (sortBy === "calories") return a.caloriesBurned - b.caloriesBurned; // Low to High
      if (sortBy === "rating") return a.rating - b.rating;             // High to Low
      return 0;
    });
  }, [workouts, sortBy]);

  const totalMinutes = planItems.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = planItems.reduce((sum, w) => sum + w.caloriesBurned, 0);

  function handleRemove(id, name) {
    if (activeTab === "plan") {
      removeFromPlan(id);
      toast.error(`${name} removed from today's plan!`);
    } else {
      removeFromSaved(id);
      toast.error(`${name} removed from saved!`);
    }
  }

  function handleToggleDone(id, name, isDone) {
    if (isDone) {
      markAsUndone(id);
      toast.info(`${name} marked as undone`);
    } else {
      markAsDone(id);
      toast.success(`${name} marked as done! 💪`);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* 1. Title & Subtitle */}
        <h1 className="text-3xl font-bold uppercase">MY PLAN</h1>
        <p className="text-gray-400 mt-1">Cap of five lifts for today. Finish them, then load more.</p>

        {/* 2. Metrics Summary Row */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-800">
            <p className="text-gray-500 text-xs uppercase">Exercises</p>
            <p className="text-2xl font-bold text-lime-400">{planItems.length}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-800">
            <p className="text-gray-500 text-xs uppercase">Minutes</p>
            <p className="text-2xl font-bold text-lime-400">{totalMinutes}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center border border-gray-800">
            <p className="text-gray-500 text-xs uppercase">Calories</p>
            <p className="text-2xl font-bold text-lime-400">{totalCalories}</p>
          </div>
        </div>

        {/* 3. Header Bar: Tabs + Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 mb-6 bg-gray-900/50 p-2 rounded-xl border border-gray-800">

          {/* Left: Tabs */}
          <div className="flex bg-gray-950 rounded-lg p-1 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("plan")}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeTab === "plan" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${activeTab === "saved" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
                }`}
            >
              Saved
            </button>
          </div>

          {/* Right: Sort By */}
          <div className="flex items-center gap-2 text-sm w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-gray-400">Sort by</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white px-3 py-1.5 rounded-lg border border-gray-700 outline-none focus:border-lime-400 cursor-pointer"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* 4. Content Area */}
        <div className="mt-6">

          {/* Loading State */}
          {isLoading ? (
            <p className="text-gray-400 text-center py-12 animate-pulse">Loading workouts…</p>
          ) : workouts.length === 0 ? (

            /* Empty State */
            <div className="text-center py-16 bg-gray-900 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold uppercase text-gray-300">NOTHING HERE YET</h3>
              <p className="text-gray-400 mt-2 mb-6 text-sm">Browse the library and add a lift to get today moving.</p>
              <Link href="/workouts">
                <button className="bg-lime-400 cursor-pointer text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-lime-300 text-sm">
                  Go to workouts
                </button>
              </Link>
            </div>
          ) : (

            /* Workout Cards List (Now uses sortedWorkouts) */
            <div className="space-y-3">
              {sortedWorkouts.map((w) => (
                <div key={w.id} className="bg-gray-900 p-4 rounded-xl flex items-center gap-4 border border-gray-800 hover:border-gray-700 transition-colors">

                  {/* Thumbnail */}
                  <img src={w.image} alt={w.name} className="w-16 h-16 rounded-lg object-cover bg-gray-800 flex-shrink-0" />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold uppercase text-white text-sm truncate">{w.name}</h3>
                    <p className="text-gray-500 text-xs">{w.equipment}</p>
                    <div className="flex gap-3 text-xs text-gray-400 mt-1">
                      <span>⏱ {w.duration} min</span>
                      <span>🔥 {w.caloriesBurned} kcal</span>
                      <span>⭐ {w.rating}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    <Link href={`/workouts/${w.id}`}>
                      <button className="text-xs bg-gray-800 text-gray-300 px-3 py-1.5 rounded hover:bg-gray-700 transition-colors">
                        View
                      </button>
                    </Link>
                    {activeTab === "plan" && (
                      <button
                        onClick={() => handleToggleDone(w.id, w.name, w.done)}
                        className={`text-xs px-3 py-1.5 rounded font-bold transition-colors flex items-center gap-1.5 ${w.done
                          ? "bg-lime-700 text-gray-300 hover:bg-lime-600"
                          : "bg-lime-400 text-gray-900 hover:bg-lime-300"
                          }`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {w.done ? "Done" : "Mark as Done"}
                      </button>
                    )}
                    <button
                      onClick={() => handleRemove(w.id, w.name)}
                      className="text-xs text-red-400 hover:text-red-300 px-2 py-1.5 rounded hover:bg-red-900/20 transition-colors"
                      title="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}