// app/workouts/[id]/page.jsx
import WorkoutDetails from "@/components/WorkoutDetails";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

const WORKOUTS_API = "https://api.abcz.workers.dev/api/fitlog";

async function getWorkout(id) {
  const res = await fetch(WORKOUTS_API, {
    next: { revalidate: 60 }, 
  });

  if (!res.ok) throw new Error(`Failed to load workout (${res.status})`);

  const all = await res.json();
  const workout = all.find((w) => String(w.id) === String(id));

  return workout ?? null;
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;
  const workout = await getWorkout(id);

  if (!workout) notFound();

  return (
    <WorkoutDetails workout={workout} />
  );
}