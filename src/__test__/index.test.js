import React from "react";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import {Provider, connect} from "react-redux";
import {store} from "../redux/store";
import App from "../App";

const mapStateToProps = (state) => {
  return {
    data: {state},
    metadata: {},
    configuration: {workflow: "creation"},
    customisation: {},
    contextManager: {},
  };
};

const ConnectedApp = connect(mapStateToProps)(App);

describe("App", () => {
  it("renders without errors", () => {
    act(() => {
      render(
        <React.StrictMode>
          <Provider store={store}>
            <ConnectedApp />
          </Provider>
        </React.StrictMode>
      );
    });
  });
});
