#  FitLog

FitLog is a workout discovery and daily planning app built with Next.js. Browse a library of exercises, view detailed instructions for each move, and build a focused daily plan — capped at five lifts a day to keep training sustainable and intentional.

## Technologies Used

- **Next.js (App Router)** — routing, server components, and dynamic `[id]` routes for workout details
- **React** — client components, hooks (`useState`, `useEffect`, `useContext`)
- **React Context API** — global state management for the daily plan and saved workouts, shared across routes via the root layout
- **Tailwind CSS** — utility-first styling with a dark, high-contrast theme
- **react-toastify** — toast notifications for user actions (add, remove, mark as done)
- **next/image** — optimized image loading for workout thumbnails and detail banners
- **Cloudflare Workers (REST API)** — external data source powering the workout library

## Key Features

1. **Workout Library** — Browse a responsive grid of exercises, each shown as a card with muscle group tags, equipment, duration, calories burned, and rating.

2. **Detailed Workout Pages** — Every workout has its own dynamic route (`/workouts/[id]`) with a full breakdown: description, difficulty, sets/reps, and step-by-step instructions.

3. **Today's Plan (5-Lift Cap)** — Add workouts to a daily plan capped at five lifts, with live totals for exercises, minutes, and calories that update instantly as the plan changes.

4. **Save for Later** — Bookmark workouts to a separate "Saved" list to revisit without committing them to today's plan, accessible via tabs on the My Plan page.

5. **Real-Time State Sync** — Plan and saved counts update instantly across the Navbar and My Plan page the moment an action happens, thanks to shared React Context — no reloads or manual refresh needed, with toast feedback confirming every add, remove, and done/undone action.

---

*Built as a self-directed full-stack learning project.*