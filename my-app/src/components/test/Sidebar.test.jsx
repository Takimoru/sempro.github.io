import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

// Mock the child components
vi.mock("./SidebarNavItem", () => ({
  default: ({ label, isActive }) => (
    <div data-testid={`nav-item-${label.toLowerCase()}`} data-active={isActive}>
      {label}
    </div>
  ),
}));

vi.mock("./ProgramStats", () => ({
  default: () => <div data-testid="program-stats">Program Stats Component</div>,
}));

vi.mock("./icons", () => ({
  HomeIcon: () => <div data-testid="home-icon">Home Icon</div>,
  CalendarIcon: () => <div data-testid="calendar-icon">Calendar Icon</div>,
  ChartIcon: () => <div data-testid="chart-icon">Chart Icon</div>,
}));

describe("Sidebar", () => {
  it("renders the sidebar with all components", () => {
    render(<Sidebar />);

    // Check if logo and title are rendered
    expect(screen.getByAltText("TimeLoop Logo")).toBeInTheDocument();
    expect(screen.getByText("TimeLoop")).toBeInTheDocument();

    // Check if navigation items are rendered
    expect(screen.getByTestId("nav-item-dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("nav-item-schedule")).toBeInTheDocument();
    expect(screen.getByTestId("nav-item-reports")).toBeInTheDocument();

    // Check if Reports is active
    expect(
      screen.getByTestId("nav-item-reports").getAttribute("data-active"),
    ).toBe("true");

    // Check if program stats is rendered
    expect(screen.getByTestId("program-stats")).toBeInTheDocument();

    // Check if collapse button is rendered
    expect(screen.getByLabelText("Collapse sidebar")).toBeInTheDocument();
  });
});
