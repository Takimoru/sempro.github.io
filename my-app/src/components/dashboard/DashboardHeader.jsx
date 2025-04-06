"use client";
import React from "react";

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-zinc-900">
        Community Service Schedule
      </h1>
      <div className="flex gap-4">
        <div
          className="flex bg-white rounded-lg shadow-sm"
          role="tablist"
          aria-label="View options"
        >
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            role="tab"
            aria-selected="true"
            id="cards-tab"
            aria-controls="cards-panel"
          >
            Cards
          </button>
          <button
            className="px-4 py-2 text-stone-500"
            role="tab"
            aria-selected="false"
            id="calendar-tab"
            aria-controls="calendar-panel"
          >
            Calendar
          </button>
        </div>
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-sm"
          aria-label="Add New Program"
        >
          Add New Program
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
