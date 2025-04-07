import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ActionButton from "./ActionButton";

describe("ActionButton", () => {
  it("renders a button with children", () => {
    render(<ActionButton>Test Button</ActionButton>);

    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
  });

  it("applies primary variant styles by default", () => {
    render(<ActionButton>Primary Button</ActionButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-blue-500");
    expect(button.className).toContain("text-white");
    expect(button.className).toContain("w-[167px]");
  });

  it("applies secondary variant styles when specified", () => {
    render(<ActionButton variant="secondary">Secondary Button</ActionButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain("bg-slate-50");
    expect(button.className).toContain("text-stone-500");
    expect(button.className).toContain("w-[100px]");
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<ActionButton onClick={handleClick}>Click Me</ActionButton>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies custom className when provided", () => {
    render(<ActionButton className="custom-class">Custom Button</ActionButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain("custom-class");
  });

  it("applies mobile full width class by default", () => {
    render(<ActionButton>Mobile Button</ActionButton>);

    const button = screen.getByRole("button");
    expect(button.className).toContain("max-sm:w-full");
  });

  it("does not apply mobile full width class when fullWidthOnMobile is false", () => {
    render(
      <ActionButton fullWidthOnMobile={false}>Fixed Width Button</ActionButton>,
    );

    const button = screen.getByRole("button");
    expect(button.className).not.toContain("max-sm:w-full");
  });

  it("passes additional props to the button element", () => {
    render(
      <ActionButton type="submit" aria-label="Submit form">
        Submit
      </ActionButton>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveAttribute("aria-label", "Submit form");
  });
});
