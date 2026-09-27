"use client"
import WorkoutCard from './WorkoutCard';
import { useState, useEffect } from 'react';

// const WORKOUTS_API = 'https://api.abcz.workers.dev/api/fitlog';
const WORKOUTS_API = 'https://api.api-store.workers.dev/api/fitlog';

const Library = () => {
    const [workouts, setWorkouts] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWorkouts() {
            try {
                const res = await fetch(WORKOUTS_API);
                
                if (!res.ok) {
                    throw new Error(`Failed to load (${res.status})`);
                }
                
                const data = await res.json();
                setWorkouts(data);
            } catch (error) {
                setErrorMsg("Failed to load the workout library. Please try again later.");
                console.error("Workout library fetch error:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchWorkouts();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto py-8 bg-gray-700/20 rounded-lg border border-gray-800 text-center p-8">
                <p className="text-gray-400">Loading workouts...</p>
            </div>
        );
    }

    if (errorMsg) {
        return (
            <div className="container mx-auto py-8 bg-gray-700/20 rounded-lg border border-gray-800 text-center p-8">
                <h1 className="text-3xl text-red-400 mb-4">Oops! Something went wrong.</h1>
                <p className="text-gray-300">{errorMsg}</p>
                <p className="text-gray-400 mt-2 text-sm">Please try refreshing the page later.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 bg-gray-700/20 rounded-lg border border-gray-800">
            <h1 className="text-5xl text-center">THE LIBRARY</h1>
            <p className="text-center my-2">Twelve lifts covering every major muscle group</p>

            <div
                id="library"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {workouts.map((workout) => (
                    <WorkoutCard key={workout.id} workout={workout} />
                ))}
            </div>
        </div>
    );
};

export default Library;