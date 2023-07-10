import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToggleButton from "../ToggleButton";

describe("ToggleButton", () => {
  const label = {
    on: "On",
    off: "Off",
  };

  test("renders toggle button with correct label", () => {
    const { getByText } = render(<ToggleButton label={label} />);

    expect(getByText(label.off)).toBeInTheDocument;
  });

  test("toggles the button state when clicked", () => {
    const sendF = jest.fn();
    const dispatchF = jest.fn();

    const { getByText, container } = render(
      <ToggleButton label={label} sendF={sendF} dispatchF={dispatchF} />
    );
    const button = container.querySelector(".toggle-button");

    fireEvent.click(button);

    expect(getByText(label.on)).toBeInTheDocument;
    expect(sendF).toHaveBeenCalledTimes(2);
    expect(dispatchF).toHaveBeenCalledTimes(0);
  });
});
