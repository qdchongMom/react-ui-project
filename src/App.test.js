import { render, screen } from "./test-utils";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import userEvent from "@testing-library/user-event";

test("navbar header appears", () => {
  render(<App />);
  const linkElement = screen.getByText(/Jiak Simi Weather App/i);
  expect(linkElement).toBeInTheDocument();
});

test("navigating to about page", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  //check about button exist
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about/i), leftClick);
  const aboutElement = screen.getByTestId("about");

  //check about page exist
  expect(aboutElement).toBeInTheDocument();
});
