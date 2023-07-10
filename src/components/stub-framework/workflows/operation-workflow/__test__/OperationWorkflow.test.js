import React from "react";
import {render, fireEvent} from "@testing-library/react";
import OperationWorkflow from "../OperationWorkflow";
import "@testing-library/jest-dom/extend-expect";

describe("OperationWorkflow", () => {
  test("renders the component with initial state and handles toggles", () => {
    const {getByText} = render(<OperationWorkflow title="Test Title" />);

    const toggleLabel1 = getByText("Background");
    expect(toggleLabel1).toBeInTheDocument();

    fireEvent.click(toggleLabel1);
  });
});
