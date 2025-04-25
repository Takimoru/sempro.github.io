"use client";
import React from "react";

const ProgramStats = () => {
  return (
    <section
      className="p-4 rounded-xl bg-slate-50"
      aria-labelledby="program-stats-title"
    >
      <h2
        id="program-stats-title"
        className="mb-3 text-base font-medium text-zinc-900"
      >
        Program Statistics
      </h2>
      <dl className="flex flex-col gap-2">
        <div className="flex justify-between">
          <dt className="text-sm text-stone-500">Total Programs</dt>
          <dd className="text-base text-zinc-900">3</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm text-stone-500">Total Hours</dt>
          <dd className="text-base text-zinc-900">9</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-sm text-stone-500">Participants</dt>
          <dd className="text-base text-zinc-900">35</dd>
        </div>
      </dl>
    </section>
  );
};

export default ProgramStats;
