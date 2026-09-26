export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4">
      <div className="w-10 h-10 border-4 border-gray-700 border-t-lime-400 rounded-full animate-spin" />
      <p className="text-gray-400 text-sm">Loading workouts...</p>
    </div>
  );
}