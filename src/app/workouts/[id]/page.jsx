// app/workouts/[id]/page.jsx
import WorkoutDetails from "@/components/WorkoutDetails";
import { notFound } from "next/navigation";

const WORKOUTS_API = "https://api.abcz.workers.dev/api/fitlog";

async function getWorkout(id) {
  const res = await fetch(`${WORKOUTS_API}/${id}`);


  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Failed to load workout (${res.status})`);
  return res.json();
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  console.log(id);
  const workout = await getWorkout(id);
  console.log(workout);
  if (!workout) notFound();

  return (
    <WorkoutDetails workout={workout} />
  );
}