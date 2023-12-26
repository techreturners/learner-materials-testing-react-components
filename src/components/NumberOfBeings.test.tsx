import { render, screen, fireEvent } from "@testing-library/react";
import NumberOfBeings from "./NumberOfBeings";

test("renders form element and displays numberOfBeing props", () => {
  const mockOnChange = jest.fn();
  const mockValidateNumberOfBeings = jest.fn();
  mockValidateNumberOfBeings.mockReturnValue([]);

  render(
    <NumberOfBeings
      numberOfBeings="2"
      onChangeBeings={mockOnChange}
      validateField={mockValidateNumberOfBeings}
    />
  );

  const labelText = screen.getByLabelText(/Number Of Beings/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("2");
  expect(inputText).toBeInTheDocument();
  const errorMessage = screen.queryByText("Error message on beings number");
  expect(errorMessage).toBe(null);
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();
  const mockValidateNumberOfBeings = jest.fn();
  mockValidateNumberOfBeings.mockReturnValue([]);
  render(
    <NumberOfBeings
      numberOfBeings="2"
      onChangeBeings={mockOnChange}
      validateField={mockValidateNumberOfBeings}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "10" } });
  expect(mockOnChange).toHaveBeenCalledWith("10");
});

test("error messages are displayed when invalid number of beings is used", () => {
  const mockOnChange = jest.fn();
  const mockValidateNumberOfBeings = jest.fn();
  mockValidateNumberOfBeings.mockReturnValue(["Beings should be more than 3"]);

  render(
    <NumberOfBeings
      numberOfBeings="2"
      onChangeBeings={mockOnChange}
      validateField={mockValidateNumberOfBeings}
    />
  );

  const errorMessage = screen.getByText("Beings should be more than 3");

  expect(errorMessage).toBeInTheDocument();
});
