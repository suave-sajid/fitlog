"use client";
import { createContext, useContext, useState } from "react";

const PlanContext = createContext(null);

export function PlanProvider({ children }) {
  const [planItems, setPlanItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  function addToPlan(workout) {
    setPlanItems((prev) => {
      if (prev.some((w) => w.id === workout.id)) return prev;
      return [...prev, { ...workout, done: false }]; // 👈 নতুন item-এ done: false দিয়ে শুরু
    });
  }

  function addToSaved(workout) {
    setSavedItems((prev) =>
      prev.some((w) => w.id === workout.id) ? prev : [...prev, workout]
    );
  }

  function removeFromPlan(id) {
    setPlanItems((prev) => prev.filter((w) => w.id !== id));
  }

  function removeFromSaved(id) {
    setSavedItems((prev) => prev.filter((w) => w.id !== id));
  }

  function markAsDone(id) {
    setPlanItems((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: true } : w))
    );
  }

  function markAsUndone(id) {
    setPlanItems((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: false } : w))
    );
  }

  const value = {
    planItems,
    savedItems,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    markAsUndone,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  return useContext(PlanContext);
}