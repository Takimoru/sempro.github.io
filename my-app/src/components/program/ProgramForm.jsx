"use client";
import React, { useState } from "react";
import FormField from "./FormField";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";


const ProgramForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    programName: "",
    date: "",
    time: "",
    location: "",
    maxParticipants: "",
    hours: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleCancel = () => {
    // Handle cancel logic here
    console.log("Form cancelled");
  };

  const handleBackToDashboard = () => {
    navigate("/dashboard")
    // Handle navigation back to dashboard
    console.log("Navigating back to dashboard");
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      />
      <main className="px-16 py-6 mx-auto max-w-none min-h-screen bg-slate-50 max-md:p-4 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <header className="flex justify-between items-center mb-5 max-sm:flex-col max-sm:gap-3 max-sm:items-start">
          <h1 className="text-3xl font-bold leading-10 text-zinc-900 max-sm:text-2xl max-sm:leading-8">
            Add New Program
          </h1>
          <button
            onClick={handleBackToDashboard}
            className="text-base leading-6 cursor-pointer text-stone-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            aria-label="Back to Dashboard"
          >
            ← Back to Dashboard
          </button>
        </header>

        <section className="p-8 bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] max-sm:p-4">
          <form onSubmit={handleSubmit} aria-labelledby="program-form-title">
            <FormField
              label="Program Name"
              name="programName"
              placeholder="Enter program name"
              value={formData.programName}
              onChange={handleChange}
              required
              aria-required="true"
            />

            <div className="flex gap-6 mb-6 max-md:flex-col max-md:gap-6">
              <div className="flex-1 max-md:w-full">
                <FormField
                  label="Date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="flex-1 max-md:w-full">
                <FormField
                  label="Time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <FormField
              label="Location"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
              required
              aria-required="true"
            />

            <div className="flex gap-6 mb-6 max-md:flex-col max-md:gap-6">
              <div className="flex-1 max-md:w-full">
                <FormField
                  label="Maximum Participants"
                  name="maxParticipants"
                  placeholder="Enter max participants"
                  type="number"
                  value={formData.maxParticipants}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
              <div className="flex-1 max-md:w-full">
                <FormField
                  label="Hours"
                  name="hours"
                  placeholder="Enter program hours"
                  value={formData.hours}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <FormField
              label="Description"
              name="description"
              type="textarea"
              value={formData.description}
              onChange={handleChange}
              required
              aria-required="true"
            />

            <div className="flex gap-4 justify-end mt-8 max-sm:flex-col max-sm:gap-3">
              <ActionButton
                type="button"
                variant="secondary"
                onClick={handleCancel}
                aria-label="Cancel form"
              >
                Cancel
              </ActionButton>
              <ActionButton
                type="submit"
                variant="primary"
                aria-label="Create program"
              >
                Create Program
              </ActionButton>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default ProgramForm;