"use client";
import React from "react";

const SidebarNavItem = ({ icon, label, isActive }) => {
  return (
    <button
      className={`flex gap-3 items-center p-4 rounded-lg w-full text-left ${
        isActive ? "bg-indigo-50" : ""
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      <span className="w-5 h-5">{icon}</span>
      <span
        className={`text-base ${isActive ? "text-blue-500" : "text-stone-500"} max-sm:hidden`}
      >
        {label}
      </span>
    </button>
  );
};

export default SidebarNavItem;
