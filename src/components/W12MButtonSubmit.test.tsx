import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";
test("Is Button Submit?", () => {
    render(<W12MForm />);
    const submitButton = screen.getByText("Submit");
  
    expect(submitButton).toHaveAttribute("type", "submit");
  });
  