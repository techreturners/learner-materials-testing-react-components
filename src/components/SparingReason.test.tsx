import { render, screen, fireEvent } from "@testing-library/react";
import SparingReason from "./SparingReason";
test("renders form element and displays sparingReason props", () => {
  const mockOnChange = jest.fn();
  const mockValidateSparingReason = jest.fn();
  mockValidateSparingReason.mockReturnValue([]);

  render(
    <SparingReason
      sparingReason="Life is good!"
      onChangeSparingReason={mockOnChange}
      validateField={mockValidateSparingReason}
    />
  );

  const labelText = screen.getByLabelText("Reason for Sparing");
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("Life is good!");
  expect(inputText).toBeInTheDocument();
  const errorMessage = screen.queryByText(
    "Reason for sparing: Must be between 17 and 153 characters"
  );
  expect(errorMessage).toBe(null);
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();
  const mockValidateSparingReason = jest.fn();
  mockValidateSparingReason.mockReturnValue([]);

  render(
    <SparingReason
      sparingReason="Life is good!"
      onChangeSparingReason={mockOnChange}
      validateField={mockValidateSparingReason}
    />
  );
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Yes it is" } });
  expect(mockOnChange).toHaveBeenCalledWith("Yes it is");
});

test("error messages are displayed when invalid sparing reason is used", () => {
  const mockOnChange = jest.fn();
  const mockValidateSparingReason = jest.fn();
  mockValidateSparingReason.mockReturnValue([
    "Reason for sparing: Must be between 17 and 153 characters",
  ]);

  render(
    <SparingReason
      sparingReason="Life is good!"
      onChangeSparingReason={mockOnChange}
      validateField={mockValidateSparingReason}
    />
  );

  const errorMessage = screen.getByText(
    "Reason for sparing: Must be between 17 and 153 characters"
  );

  expect(errorMessage).toBeInTheDocument();
});
