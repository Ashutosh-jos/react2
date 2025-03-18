import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import appstore from "../../utils/appstore";
import "@testing-library/jest-dom";



test("should load the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appstore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // Use getByRole to find the button by its text content
  const button = screen.getByRole("button", { name: /login/i });
  expect(button).toBeInTheDocument();
});


test("should load the header for cardItems", () => {
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cardItems = screen.getByText("Cart-(0 items)")    
    expect(cardItems).toBeInTheDocument();
  });

  
  