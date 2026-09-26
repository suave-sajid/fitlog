import WorkoutCard from './WorkoutCard';

const WORKOUTS_API = 'https://api.abcz.workers.dev/api/fitlog';

const Library = async () => {
    let workouts = [];
    let errorMsg = null;

    try {
        const res = await fetch(WORKOUTS_API, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            errorMsg = `Failed to load the workout library (${res.status} ${res.statusText}).`;
        } else {
            workouts = await res.json();
        }
    } catch (error) {
        errorMsg = "An unexpected error occurred while loading the workout library.";
        console.error("Workout library fetch error:", error);
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