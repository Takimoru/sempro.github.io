import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProgramForm from "./ProgramForm";

describe("ProgramForm", () => {
  it("renders the form with all required fields", () => {
    render(<ProgramForm />);

    // Check for heading
    expect(
      screen.getByRole("heading", { name: /add new program/i }),
    ).toBeInTheDocument();

    // Check for all form fields
    expect(screen.getByLabelText(/program name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/maximum participants/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/hours/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create program/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /back to dashboard/i }),
    ).toBeInTheDocument();
  });

  it("updates form values when user inputs data", () => {
    render(<ProgramForm />);

    // Get form fields
    const programNameInput = screen.getByLabelText(/program name/i);
    const locationInput = screen.getByLabelText(/location/i);
    const descriptionInput = screen.getByLabelText(/description/i);

    // Input test values
    fireEvent.change(programNameInput, { target: { value: "Test Program" } });
    fireEvent.change(locationInput, { target: { value: "Test Location" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });

    // Check if values were updated
    expect(programNameInput.value).toBe("Test Program");
    expect(locationInput.value).toBe("Test Location");
    expect(descriptionInput.value).toBe("Test Description");
  });

  it("calls submit handler when form is submitted", () => {
    // Mock console.log
    console.log = vi.fn();

    render(<ProgramForm />);

    // Fill out required fields
    fireEvent.change(screen.getByLabelText(/program name/i), {
      target: { value: "Test Program" },
    });
    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2023-10-10" },
    });
    fireEvent.change(screen.getByLabelText(/time/i), {
      target: { value: "10:00" },
    });
    fireEvent.change(screen.getByLabelText(/location/i), {
      target: { value: "Test Location" },
    });
    fireEvent.change(screen.getByLabelText(/maximum participants/i), {
      target: { value: "10" },
    });
    fireEvent.change(screen.getByLabelText(/hours/i), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "Test Description" },
    });

    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /create program/i }));

    // Check if submit handler was called
    expect(console.log).toHaveBeenCalledWith(
      "Form submitted:",
      expect.objectContaining({
        programName: "Test Program",
        location: "Test Location",
        description: "Test Description",
      }),
    );
  });

  it("handles cancel button click", () => {
    // Mock console.log
    console.log = vi.fn();

    render(<ProgramForm />);

    // Click cancel button
    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

    // Check if cancel handler was called
    expect(console.log).toHaveBeenCalledWith("Form cancelled");
  });

  it("handles back to dashboard button click", () => {
    // Mock console.log
    console.log = vi.fn();

    render(<ProgramForm />);

    // Click back to dashboard button
    fireEvent.click(screen.getByRole("button", { name: /back to dashboard/i }));

    // Check if back to dashboard handler was called
    expect(console.log).toHaveBeenCalledWith("Navigating back to dashboard");
  });
});
