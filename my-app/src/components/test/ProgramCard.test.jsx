import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgramCard from "./ProgramCard";

describe("ProgramCard", () => {
  const defaultProps = {
    title: "Test Program",
    status: "upcoming",
    statusColor: "bg-blue-500",
    date: "2024-03-01 at 10:00",
    location: "Test Location",
    participants: 10,
    hours: 3,
  };

  it("renders the program card with all information", () => {
    render(<ProgramCard {...defaultProps} />);

    // Check if title and status are rendered
    expect(screen.getByText("Test Program")).toBeInTheDocument();
    expect(screen.getByText("upcoming")).toBeInTheDocument();

    // Check if date is rendered
    expect(screen.getByText("2024-03-01 at 10:00")).toBeInTheDocument();

    // Check if details are rendered
    expect(screen.getByText("Location:")).toBeInTheDocument();
    expect(screen.getByText("Test Location")).toBeInTheDocument();
    expect(screen.getByText("Participants:")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Hours:")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();

    // Check if view details button is rendered
    expect(screen.getByText("View Details")).toBeInTheDocument();
  });

  it("applies the correct status color", () => {
    render(
      <ProgramCard
        {...defaultProps}
        status="completed"
        statusColor="bg-green-500"
      />,
    );

    const statusElement = screen.getByText("completed");
    expect(statusElement).toHaveClass("bg-green-500");
  });
});
