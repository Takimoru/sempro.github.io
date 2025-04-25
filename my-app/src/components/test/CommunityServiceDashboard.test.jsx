import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import CommunityServiceDashboard from "./CommunityServiceDashboard";

// Mock the child components to simplify testing
vi.mock("./Sidebar", () => ({
  default: () => <div data-testid="sidebar-component">Sidebar Component</div>,
}));

vi.mock("./DashboardHeader", () => ({
  default: () => (
    <div data-testid="dashboard-header-component">
      Dashboard Header Component
    </div>
  ),
}));

vi.mock("./MetricsCard", () => ({
  default: ({ title, count }) => (
    <div
      data-testid={`metrics-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {title}: {count}
    </div>
  ),
}));

vi.mock("./ProgramCard", () => ({
  default: ({ title }) => (
    <div
      data-testid={`program-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {title}
    </div>
  ),
}));

describe("CommunityServiceDashboard", () => {
  it("renders the dashboard with all components", () => {
    render(<CommunityServiceDashboard />);

    // Check if sidebar is rendered
    expect(screen.getByTestId("sidebar-component")).toBeInTheDocument();

    // Check if header is rendered
    expect(
      screen.getByTestId("dashboard-header-component"),
    ).toBeInTheDocument();

    // Check if metrics cards are rendered
    expect(
      screen.getByTestId("metrics-card-upcoming-programs"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("metrics-card-in-progress")).toBeInTheDocument();
    expect(screen.getByTestId("metrics-card-completed")).toBeInTheDocument();

    // Check if program cards are rendered
    expect(
      screen.getByTestId("program-card-beach-cleanup"),
    ).toBeInTheDocument();
    expect(screen.getByTestId("program-card-food-bank")).toBeInTheDocument();
    expect(screen.getByTestId("program-card-senior-care")).toBeInTheDocument();
  });
});
