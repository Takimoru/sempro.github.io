// DashboardHeader.jsx
"use client";
import React from "react";

const DashboardHeader = ({ onAddProgramClick }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-zinc-900">
        Community Service Schedule
      </h1>
      <div className="flex gap-4">
        <div className="flex bg-white rounded-lg shadow-sm" role="tablist">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded"
            role="tab"
          >
            Cards
          </button>
          <button className="px-4 py-2 text-stone-500" role="tab">
            Calendar
          </button>
        </div>
        <button
          onClick={onAddProgramClick} // ✅ NEW
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-sm"
        >
          Add New Program
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
