import React from "react";
import { render, screen, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WS from "jest-websocket-mock";
import Board from "../components/Board/Board";
import Message from "../components/Message";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store";

let ws: WS;
beforeEach(() => {
  ws = new WS("wss://hometask.eg1236.com/game-pipes/");
});
afterEach(() => {
  WS.clean();
});

describe("Web socket", () => {
  it("Web socket connects", async () => {
    render(<Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>);
    await ws.connected;
    expect(screen.getByText("Loading board")).toBeInTheDocument();
    expect(screen.getByTestId("board")).toBeInTheDocument();
  });
});