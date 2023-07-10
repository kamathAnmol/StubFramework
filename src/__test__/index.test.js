import React from "react";
import {createRoot} from "react-dom/client";
import {render, screen} from "@testing-library/react";
import {Provider, connect} from "react-redux";
import App from "../App";
import {store} from "../redux/store";
import "@testing-library/jest-dom/extend-expect";
import {act} from "react-dom/test-utils";

const rootElement = document.createElement("div");
rootElement.id = "root";
document.body.appendChild(rootElement);
const root = createRoot(rootElement);

const mapStateToProps = (state) => {
  return {
    data: {state},
  };
};

const ConnectedApp = connect(mapStateToProps)(App);

describe("App", () => {
  it("renders without errors", () => {
    act(() => {
      root.render(
        <React.StrictMode>
          <Provider store={store}>
            <ConnectedApp />
          </Provider>
        </React.StrictMode>
      );
    });
    expect(screen.queryByTestId("porter-component")).toBeDefined();
  });
});
