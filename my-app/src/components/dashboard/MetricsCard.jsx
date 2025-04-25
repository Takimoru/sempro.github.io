"use client";
import React from "react";

const MetricsCard = ({ title, count }) => {
  return (
    <article className="p-6 bg-white rounded-xl shadow-sm">
      <h3 className="mb-2 text-sm text-stone-500">{title}</h3>
      <p className="text-2xl font-bold text-zinc-900">
        <span>{count}</span>
        <span className="ml-1.5 text-sm text-stone-500">programs</span>
      </p>
    </article>
  );
};

export default MetricsCard;
