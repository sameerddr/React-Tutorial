import { render, screen } from "@testing-library/react";
import Form from "../Commentform/Form";

test("test 1", () => {
  render(<Form />);
  const buttonelement = screen.getByRole("button", { name: "Test Button" });
  expect(buttonelement).toBeInTheDocument();
});

test("test 2", () => {
  render(<Form />);
  const id = screen.getByTestId("datatest");
  expect(id).toBeInTheDocument();
});
