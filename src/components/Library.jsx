import { Suspense, use } from 'react';
import WorkoutCard from './WorkoutCard';
import LoadingSpinner from './LoadingSpinner';

const WORKOUTS_API = 'https://api.abcz.workers.dev/api/fitlog';

async function getWorkouts() {
    const res = await fetch(WORKOUTS_API);

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
    return (
        <div className='container mx-auto py-8 bg-gray-700/20 rounded-lg border border-gray-800'>
            <h1 className="text-5xl text-center">THE LIBRARY</h1>
            <p className="text-center my-2">Twelve lifts covering every major muscle group</p>

            <Suspense fallback={<LoadingSpinner />}>
                <LibraryList />
            </Suspense>
        </div>
    );
};

export default Library;