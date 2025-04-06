"use client";
import React from "react";
import Sidebar from "../sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";
import MetricsCard from "./MetricsCard";
import ProgramCard from "./ProgramCard";

const CommunityServiceDashboard = () => {
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
          <MetricsCard title="Completed" count={1} />
        </section>

        <section
          aria-label="Program Cards"
          className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1"
        >
          <ProgramCard
            title="Beach Cleanup"
            status="upcoming"
            statusColor="bg-blue-500"
            date="2024-02-20 at 09:00"
            location="Main Beach"
            participants={12}
            hours={4}
          />
          <ProgramCard
            title="Food Bank"
            status="in-progress"
            statusColor="bg-orange-500"
            date="2024-02-22 at 10:00"
            location="Community Center"
            participants={8}
            hours={3}
          />
          <ProgramCard
            title="Senior Care"
            status="completed"
            statusColor="bg-emerald-500"
            date="2024-02-25 at 14:00"
            location="Senior Living Center"
            participants={15}
            hours={2}
          />
        </section>
      </main>
    </div>
  );
};

export default CommunityServiceDashboard;
