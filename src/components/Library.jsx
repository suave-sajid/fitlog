'use client';

import { Suspense, use } from 'react';
import WorkoutCard from './WorkoutCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorBoundary from './ErrorBoundary';
import { useEffect, useState } from 'react';



const WORKOUTS_API = 'https://api.abcz.workers.dev/api/fitlog';

async function getWorkouts() {
    const res = await fetch(WORKOUTS_API, {
        next: { revalidate: 6 },
    });

    if (!res.ok) {
        throw new Error(
            `Failed to load the workout library (${res.status} ${res.statusText}).`
        );
    }

    return res.json();
}

const workoutsPromise = getWorkouts();

const LibraryList = () => {
    const workouts = use(workoutsPromise);

    return (
        <div
            id="library"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
            {workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
            ))}
        </div>
    );
};

const Library = () => {

    const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('...')
      .then(res => res.json())
      .then(setData);
  }, []);

  
    return (
        <div className='container mx-auto py-8 bg-gray-700/20 rounded-lg border border-gray-800'>
            <h1 className="text-5xl text-center">THE LIBRARY</h1>
            <p className="text-center my-2">Twelve lifts covering every major muscle group</p>

            <ErrorBoundary
                fallback={(retry) => (
                    <div className="flex flex-col items-center justify-center py-16 gap-3">
                        <p className="text-gray-400">Couldn't load workouts right now.</p>
                        <button
                            onClick={retry}
                            className="bg-lime-400 text-gray-900 font-bold px-5 py-2 rounded-xl hover:bg-lime-300 cursor-pointer"
                        >
                            Try Again
                        </button>
                    </div>
                )}
            >
                <Suspense fallback={<LoadingSpinner />}>
                    <LibraryList />
                </Suspense>
            </ErrorBoundary>


        </div>
    );
};

export default Library;