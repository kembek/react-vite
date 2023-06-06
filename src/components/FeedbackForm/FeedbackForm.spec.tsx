import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import FeedbackForm from "./FeedbackForm";

describe("App", () => {
  it("Should render component correctly", () => {
    const mockOnSubmit = vi.fn();
    render(<FeedbackForm onSubmit={mockOnSubmit} />);

    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Your name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Your comment:")).toBeInTheDocument();
    expect(
      screen.getByText("Submit", { selector: "button" })
    ).toBeInTheDocument();
  });
});
