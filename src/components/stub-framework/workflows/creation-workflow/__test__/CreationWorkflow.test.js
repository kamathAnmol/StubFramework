import React from "react";
import {render, screen} from "@testing-library/react";
import CreationWorkflow from "../CreationWorkflow";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

import rootReducer from "../../../../../redux/rootReducer";
import mockPreloadedState from "../../../__test__/MockPreloadedStates";
describe("CreationWorkflow", () => {
  const mockStore = configureStore([]);

  const store = mockStore({
    reducer: rootReducer,
    preloadedState: mockPreloadedState,
  });

  const data = {
    appStates: {
      "83a23ac0-ac90-40a0-855a-12531986f757": {
        stage_metadata: {
          stage_id: "define_framework_parameters",
          stage_label: "Define Framework Parameters",
          stage_description: "",
        },
        stage_data: {
          "2b5fc96d-699a-47d7-8381-86f298b30bca": {},
          "6c6f1229-4525-4816-8692-22d6c624240c": {},
        },
        stage_scratchpad: {
          active_step_id: "2b5fc96d-699a-47d7-8381-86f298b30bca",
        },
      },
      "8c0b636b-f6c5-4a14-996c-02550edce95d": {
        stage_metadata: {
          stage_id: "seed_framework",
          stage_label: "Seed Framework",
          stage_description: "",
        },
        stage_data: {
          "d5c76a50-b8cf-44b3-b39e-e88f81864663": {},
          "85935821-9ab8-4360-b3ef-918aafb2ce8e": {},
          "df101645-bebf-467d-bde9-a979f856aeb9": {},
        },
        stage_scratchpad: {
          active_step_id: "",
        },
      },
      "ec06ae78-6dd2-4b73-9ab8-cf85a5cf7a31": {
        stage_metadata: {
          stage_id: "preview",
          stage_label: "Preview",
          stage_description: "",
        },
        stage_data: {
          "3c099e42-82d1-4879-bcf7-fc9b375b72fc": {},
        },
        stage_scratchpad: {
          active_step_id: "",
        },
      },
    },
  };
  const metadata = {
    title: "Stub Framework",
  };
  const contextManager = {
    context: {
      sessionId: "6498b58c-2aec-4736-93e8-d71ce2426663",
      featureInstanceId: "cfd88537-ff53-4131-83e1-bd7428b752a7",
      stageId: "83a23ac0-ac90-40a0-855a-12531986f757",
    },
  };

  it("renders all stages of the Creation Workflow", () => {
    render(
      <Provider store={store}>
        <CreationWorkflow
          data={data}
          metadata={metadata}
          contextManager={contextManager}
        />
      </Provider>
    );

    // Assert that all three stages are rendered
    expect(
      screen.getByText("STAGE 1 : Define Framework Parameters")
    ).toBeInTheDocument();
    expect(screen.getByText("STAGE 2 : Seed Framework")).toBeInTheDocument();
    expect(screen.getByText("STAGE 3 : Preview")).toBeInTheDocument();
  });
});
