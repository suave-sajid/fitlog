import { Suspense, use } from 'react';
import WorkoutCard from './WorkoutCard';

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

// Next.js does not cache fetch requests by default, so the promise is created once,
// outside the component. React's `use` needs the *same* promise on every render --
// creating it inside the component would start a new request each time.
const workoutsPromise = getWorkouts();

const LibraryList = () => {
    const workouts = use(workoutsPromise);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {workouts.map((workout) => (
                <WorkoutCard key={workout.id} workout ={workout}></WorkoutCard>
            ))}
        </div>
    );
};

const Library = () => {
    return (
        <div className='container mx-auto '>
            <h1 className="text-5xl text-center">THE LIBRARY</h1>
            <p className="text-center my-2">Twelve lifts covering every major muscle group</p>

            <Suspense fallback={<p>Loading workouts...</p>}>
                <LibraryList />
            </Suspense>
        </div>
    );
};

export default Library;