"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import MetricsCard from "../dashboard/MetricsCard";
import DashboardHeader from "../dashboard/DashboardHeader";


const Calendarside = () => {
    return ( 
        <div className="flex h-screen bg-slate-50">
            <Sidebar />
            <main className="overflow-auto flex-1 p-6">
            <DashboardHeader />
        <section
        aria-label="Program Metrics"
        className="grid grid-cols-3 gap-6 mb-8 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
        <MetricsCard title="Upcoming Programs" count={1} />
        <MetricsCard title="In Progress" count={1} />
        <MetricsCard title="Completed" count={2} />
      </section>
      </main>
        </div>
        
    );
};


export default Calendarside;