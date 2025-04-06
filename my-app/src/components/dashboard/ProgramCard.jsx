"use client";
import React from "react";

const ProgramCard = ({
  title,
  status,
  statusColor,
  date,
  location,
  participants,
  hours,
}) => {
  return (
    <article className="p-6 bg-white rounded-xl shadow-sm">
      <header className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        <span
          className={`px-3 py-1 text-xs text-white ${statusColor} rounded-3xl`}
        >
          {status}
        </span>
      </header>
      <p className="mb-4 text-sm text-stone-500">{date}</p>

      <dl className="flex flex-col gap-1 mb-4">
        <div className="flex">
          <dt className="text-sm font-medium text-stone-500 w-[85px]">
            Location:
          </dt>
          <dd className="text-sm text-stone-500">{location}</dd>
        </div>
        <div className="flex">
          <dt className="text-sm font-medium text-stone-500 w-[85px]">
            Participants:
          </dt>
          <dd className="text-sm text-stone-500">{participants}</dd>
        </div>
        <div className="flex">
          <dt className="text-sm font-medium text-stone-500 w-[85px]">
            Hours:
          </dt>
          <dd className="text-sm text-stone-500">{hours}</dd>
        </div>
      </dl>

      <button className="w-full py-2 text-sm font-medium text-center text-blue-500 bg-indigo-50 rounded-md">
        View Details
      </button>
    </article>
  );
};

export default ProgramCard;
