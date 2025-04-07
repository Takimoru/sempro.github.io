// DashboardHeader.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardHeader = ({ onTabChange,  }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const HandleProgramClick = () => {
    navigate('/add-program')
  };

  
  // Inisialisasi state berdasarkan URL saat komponen mount
  const initialTab = location.pathname.includes("calendar")
    ? "calendar"
    : location.pathname.includes("dashboard")
    ? "dashboard"
    : "dashboard";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    // Saat URL berubah, update state active tab
    if (location.pathname.includes("calendar")) {
      setActiveTab("calendar");
      onTabChange && onTabChange("calendar");
    } else if (location.pathname.includes("dashboard")) {
      setActiveTab("dashboard");
      onTabChange && onTabChange("dashboard");
    }
  }, [location.pathname, onTabChange]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    onTabChange && onTabChange(tabName);

    if (tabName === "calendar") {
      navigate("/calendar");
    } else if (tabName === "dashboard") {
      navigate("/dashboard");
    }
  };

  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-zinc-900">
        Community Service Schedule
      </h1>
      <div className="flex gap-4">
        <div className="flex bg-white rounded-lg shadow-sm" role="tablist">
          <button
            onClick={() => handleTabClick("dashboard")}
            className={`px-4 py-2 rounded ${
              activeTab === "dashboard"
                ? "text-white bg-blue-500"
                : "text-stone-500"
            }`}
            role="tab"
          >
            Cards
          </button>
          <button
            onClick={() => handleTabClick("calendar")}
            className={`px-4 py-2 rounded ${
              activeTab === "calendar"
                ? "text-white bg-blue-500"
                : "text-stone-500"
            }`}
            role="tab"
          >
            Calendar
          </button>
        </div>
        <button
          onClick={HandleProgramClick}
          className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-sm"
        >
          Add New Program
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
