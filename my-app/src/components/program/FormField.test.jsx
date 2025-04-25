import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FormField from "./FormField";

describe("FormField", () => {
  it("renders a text input field with label", () => {
    render(<FormField label="Test Label" placeholder="Test placeholder" />);

    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Test placeholder");
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
    expect(input.type).toBe("text");
  });

  it("renders a textarea when type is textarea", () => {
    render(
      <FormField
        label="Description"
        type="textarea"
        placeholder="Enter description"
      />,
    );

    const label = screen.getByText("Description");
    expect(label).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText("Enter description");
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("applies custom className to input", () => {
    render(<FormField label="Test" className="custom-class" />);

    const input = screen.getByLabelText("Test");
    expect(input.className).toContain("custom-class");
  });

  it("passes additional props to the input element", () => {
    render(
      <FormField
        label="Test"
        required
        aria-required="true"
        data-testid="test-input"
      />,
    );

    const input = screen.getByLabelText("Test");
    expect(input).toHaveAttribute("required");
    expect(input).toHaveAttribute("aria-required", "true");
    expect(input).toHaveAttribute("data-testid", "test-input");
  });

  it("generates a unique ID based on label if none provided", () => {
    render(<FormField label="Test Label" />);

    const label = screen.getByText("Test Label");
    const input = screen.getByLabelText("Test Label");

    expect(label).toHaveAttribute("for", "field-test-label");
    expect(input).toHaveAttribute("id", "field-test-label");
  });

  it("uses provided ID when specified", () => {
    render(<FormField label="Test" id="custom-id" />);

    const label = screen.getByText("Test");
    const input = screen.getByLabelText("Test");

    expect(label).toHaveAttribute("for", "custom-id");
    expect(input).toHaveAttribute("id", "custom-id");
  });
});
