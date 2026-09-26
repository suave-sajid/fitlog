import Image from "next/image";
import Link from "next/link";

// components/WorkoutCard.jsx
export default function WorkoutCard({workout}) {
  

  return (
<div className="w-full max-w-sm mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-xl">      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={workout.image}
          
          alt={workout.name}
         
          width={500}
      height={500}
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Muscle Group Tags */}
        <div className="flex gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-lime-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Name */}
        <div>
          <h3 className="text-white text-xl font-bold uppercase tracking-wide">
            {workout.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            {workout.equipment}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-4 pt-3 border-t border-gray-800">
          {/* Duration */}
          <div className="flex items-center gap-1.5 text-gray-300 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{workout.duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5 text-gray-300 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            <span>{workout.caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5 text-gray-300 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span>{workout.rating}</span>
          </div>
        </div>

           {/* See Details Button */}
        <Link
        href={`/workouts/${workout.id}`}
        className="w-full mt-1 bg-lime-400 hover:bg-lime-300 active:bg-lime-500 text-gray-900 font-bold text-sm py-2.5 rounded-xl uppercase tracking-wide transition-colors flex items-center justify-center"
      >
        See Details
      </Link>

      </div>
    </div>
  );
}