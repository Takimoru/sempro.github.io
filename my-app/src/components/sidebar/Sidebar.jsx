"use client";
import React from "react";
import SidebarNavItem from "./SidebarNavItem";
import ProgramStats from "./ProgramStats";
import { HomeIcon, CalendarIcon, ChartIcon } from "../Icons/Icons";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/dashboard')
  };

  return (
    <aside className="flex flex-col h-full bg-white shadow-sm w-[280px] max-md:w-60 max-sm:w-20">
      <header className="flex gap-3 items-center px-6 h-16 border-b">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd45700e2edcb13f320a58418bd7223b77ac04bb"
          alt="TimeLoop Logo"
          className="w-[32px] h-[32px] rounded-[8px]"
        />
        <h1 className="text-lg font-bold leading-7 text-zinc-900 max-sm:hidden">
          TimeLoop
        </h1>
        <button
          onClick={backToHome}
          aria-label="Collapse sidebar"
          className="ml-auto w-6 h-6 text-base bg-white shadow-sm rounded-[33554400px] text-zinc-900"
        >
          ←
        </button>
      </header>

      <nav className="flex flex-col gap-2 p-4" aria-label="Main Navigation">
        <SidebarNavItem
          icon={<HomeIcon />}
          label="Dashboard"
          isActive={true}
        />
        <SidebarNavItem
          icon={<CalendarIcon />}
          label="Schedule"
          isActive={false}
        />
        <SidebarNavItem 
          icon={<ChartIcon />} 
          label="Reports" 
          isActive={false} />
      </nav>

      <div className="p-4 mt-auto border-t">
        <ProgramStats />
      </div>
    </aside>
  );
};

export default Sidebar;
