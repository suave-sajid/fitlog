import Banner from "@/components/Banner";
import Library from "@/components/Library";
import WorkoutCard from "@/components/WorkoutCard";
import WorkoutDetailsPage from "@/components/WorkoutDetails";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <WorkoutCard /> */}
      <Library></Library>
      <WorkoutDetailsPage></WorkoutDetailsPage>
    </div>
  )
}
