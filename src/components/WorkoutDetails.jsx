"use client";
import { usePlan } from "@/context/PlanContext";
import Image from "next/image";
import { toast } from "react-toastify";


// components/WorkoutDetailsPage.jsx
export default function WorkoutDetails({ workout }) {

  const { addToPlan, addToSaved } = usePlan();

  function handleAddToPlan() {
    addToPlan(workout);
    toast.success(`${workout.name} added to today's plan!`);
  }
  function handleAddToSaved() {
    addToSaved(workout);
    toast.success(`${workout.name} added to saved!`);
  }

  return (
    <div className="min-h-screen bg-gray-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Two-Column Layout */}
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative h-64 lg:h-auto">
              <Image
                src={workout.image}
                alt={workout.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Title & Description */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wide">
                  {workout.name}
                </h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  {workout.description}
                </p>
              </div>

              {/* Category Tags */}
              <div className="flex gap-2">
                {workout.muscleGroups.map((muscle) => (
                  <span
                    key={muscle}
                    className="bg-lime-400 text-gray-900 text-sm font-bold px-4 py-1.5 rounded-full uppercase"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Key Specs Panel */}
              <div className="bg-gray-800 rounded-xl p-5">
                <div className="grid grid-cols-2 gap-4">
                  {/* Equipment */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Equipment
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {workout.equipment}
                    </p>
                  </div>

                  {/* Difficulty */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Difficulty
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {workout.difficulty}
                    </p>
                  </div>

                  {/* Sets */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Sets
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {workout.sets}
                    </p>
                  </div>

                  {/* Reps */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Reps
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {workout.reps}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Duration
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {workout.duration} min
                    </p>
                  </div>

                  {/* Calories */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Calories
                    </p>
                    <p className="text-gray-200 text-sm font-medium">
                      {workout.caloriesBurned} kcal
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="space-y-1">
                    <p className="text-gray-500 text-xs uppercase font-semibold tracking-wider">
                      Rating
                    </p>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-lime-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-200 text-sm font-medium">
                        {workout.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions Section */}
              <div className="space-y-3">
                <h2 className="text-white text-lg font-bold uppercase tracking-wide">
                  Instructions
                </h2>
                <ol className="space-y-3">
                  {workout.instructions.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-lime-400 text-gray-900 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 text-sm leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {/* Primary Button */}
                <button 
                onClick={ handleAddToPlan}
                className="flex-1 bg-lime-400 text-gray-900 font-bold px-6 py-3.5 rounded-xl hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add to today's plan
                </button>

                {/* Secondary Button */}
                <button 
                onClick={ handleAddToSaved}
                className="flex-1 bg-gray-800 text-gray-200 font-semibold px-6 py-3.5 rounded-xl hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 cursor-pointer border border-gray-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  Save for later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
