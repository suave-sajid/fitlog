// app/my-plan/page.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState("plan");
  const { planItems, savedItems, removeFromPlan, removeFromSaved, markAsDone, markAsUndone } = usePlan();

  const workouts = activeTab === "plan" ? planItems : savedItems;

  const totalMinutes = planItems.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = planItems.reduce((sum, w) => sum + w.caloriesBurned, 0);

  function handleRemove(id) {
    if (activeTab === "plan") {
      removeFromPlan(id);
    } else {
      removeFromSaved(id);
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
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Exercises</p>
            <p className="text-2xl font-bold text-lime-400">{planItems.length}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Minutes</p>
            <p className="text-2xl font-bold text-lime-400">{totalMinutes}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg text-center">
            <p className="text-gray-400 text-sm">Calories</p>
            <p className="text-2xl font-bold text-lime-400">{totalCalories}</p>
          </div>
        </div>

        {/* 3. Tabs */}
        <div className="flex gap-4 mt-8 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("plan")}
            className={`cursor-pointer pb-2 text-sm font-medium ${activeTab === "plan" ? "text-lime-400 border-b-2 border-lime-400" : "text-gray-400"}`}
          >
            Today's Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`cursor-pointer pb-2 text-sm font-medium ${activeTab === "saved" ? "text-lime-400 border-b-2 border-lime-400" : "text-gray-400"}`}
          >
            Saved
          </button>
        </div>

        {/* 4. Content Area */}
        <div className="mt-6">

          {/* Empty State */}
          {workouts.length === 0 && (
            <div className="text-center py-16 bg-gray-900 rounded-xl">
              <h3 className="text-xl font-bold uppercase">NOTHING HERE YET</h3>
              <p className="text-gray-400 mt-2 mb-6">Browse the library and add a lift to get today moving.</p>
              <Link href="/workouts">
                <button className="bg-lime-400 cursor-pointer text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-lime-300">
                  Go to workouts
                </button>
              </Link>
            </div>
          )}

          {/* Workout Cards List */}
          {workouts.length > 0 && (
            <div className="space-y-4">
              {workouts.map((w) => (
                <div key={w.id} className="bg-gray-900 p-4 rounded-xl flex items-center gap-4">
                  <img src={w.image} alt={w.name} className="w-16 h-16 rounded-lg object-cover bg-gray-800" />
                  <div className="flex-1">
                    <h3 className="font-bold uppercase">{w.name}</h3>
                    <p className="text-gray-400 text-sm">{w.equipment}</p>
                    <div className="flex gap-3 text-xs text-gray-400 mt-1">
                      <span>⏱ {w.duration} min</span>
                      <span>🔥 {w.caloriesBurned} kcal</span>
                      <span>⭐ {w.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/workouts/${w.id}`}>
                      <button className="text-xs bg-gray-800 px-3 py-1 rounded hover:bg-gray-700">
                        View Details
                      </button>
                    </Link>
                    {activeTab === "plan" && (
                      <button
                        onClick={() => (w.done ? markAsUndone(w.id) : markAsDone(w.id))}
                        className={`text-xs px-3 py-1 rounded font-bold ${w.done
                            ? "bg-lime-700 text-gray-300 hover:bg-gray-600"
                            : "bg-lime-400 text-gray-900 hover:bg-lime-300"
                          }`}
                      >
                        {w.done ? "Done" : "Mark as Done"}
                      </button>
                    )}
                    <button
                      onClick={() => handleRemove(w.id)}
                      className="text-xs bg-red-900/30 text-red-400 px-2 py-1 rounded hover:bg-red-900/50"
                    >
                      X
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