import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("Should render component correctly", () => {
    render(<App />);

    expect(
      screen.getByText("Click on the Vite and React logos to learn more")
    ).toBeInTheDocument();
  });

  it("Should click the count button", async () => {
    render(<App />);

    userEvent.click(screen.getByText("count is 0"));
    await waitFor(() => {
      expect(screen.getByText("count is 1")).toBeInTheDocument();
    });
  });
});
