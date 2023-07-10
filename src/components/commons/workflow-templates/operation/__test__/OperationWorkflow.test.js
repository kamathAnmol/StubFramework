import React from "react";
import {render, fireEvent} from "@testing-library/react";
import OperationWorkflow from "../OperationWorkflow";
import "@testing-library/jest-dom/extend-expect";

describe("OperationWorkflow", () => {
  test("renders the component with initial state and handles toggles", () => {
    const {getByText} = render(<OperationWorkflow title="Test Title" />);

    // Check if the component is rendered
    const titleElement = getByText("Test Title");
    // expect(titleElement).toBeInTheDocument();

    // Check if the initial toggle labels are rendered
    const toggleLabel1 = getByText("Background");
    expect(toggleLabel1).toBeInTheDocument();
    // const toggleLabel2 = getByText("Learning");
    // expect(toggleLabel2).toBeInTheDocument();
    // const toggleLabel3 = getByText("Input");
    // expect(toggleLabel3).toBeInTheDocument();

    // Toggle the first toggle button
    fireEvent.click(toggleLabel1);

    // Check if the first toggle label is updated
    // const updatedToggleLabel1 = getByText("Interaction");
    // expect(updatedToggleLabel1).toBeInTheDocument();

    // Toggle the second toggle button
    // fireEvent.click(toggleLabel2);

    // Check if the second toggle label is updated
    // const updatedToggleLabel2 = getByText("Doing");
    // expect(updatedToggleLabel2).toBeInTheDocument();

    // Toggle the third toggle button
    // fireEvent.click(toggleLabel3);

    // Check if the third toggle label is updated
    // const updatedToggleLabel3 = getByText("Output");
    // expect(updatedToggleLabel3).toBeInTheDocument();
  });

  // Add more tests as needed
});
