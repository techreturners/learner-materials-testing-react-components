import { render, screen } from "@testing-library/react";
import W12MInputWhatIs from "./W12MInputWhatIs";

const mockValidate = (value: string) => {
  return [];
};

test("Default value checking", () => {
  const defaultValue = "Not 4";

  render(<W12MInputWhatIs validate={mockValidate} />);

  const selectElement = screen.queryByTestId("whatIsSelect");
  expect(selectElement).toHaveValue(defaultValue);
});
