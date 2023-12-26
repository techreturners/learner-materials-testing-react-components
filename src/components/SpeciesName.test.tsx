import { render, screen, fireEvent } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

test("renders form element and displays speciesName props", () => {
  const mockOnChange = jest.fn();
  const mockValidateSpeciesName = jest.fn();
  mockValidateSpeciesName.mockReturnValue([]);

  render(
    <SpeciesName
      speciesName="humans"
      onChangeSpeciesName={mockOnChange}
      validateField={mockValidateSpeciesName}
    />
  );

  const labelText = screen.getByLabelText(/Species Name/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("humans");
  expect(inputText).toBeInTheDocument();
  const errorMessage = screen.queryByText(
    "Species Name: Must be between 3 and 23 characters"
  );
  expect(errorMessage).toBe(null);
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();
  const mockValidateSpeciesName = jest.fn();
  mockValidateSpeciesName.mockReturnValue([]);

  render(
    <SpeciesName
      speciesName="humans"
      onChangeSpeciesName={mockOnChange}
      validateField={mockValidateSpeciesName}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Blue Whale" } });
  expect(mockOnChange).toHaveBeenCalledWith("Blue Whale");
});

test("error messages are displayed when invalid species name is used", () => {
  const mockOnChange = jest.fn();
  const mockValidateSpeciesName = jest.fn();
  mockValidateSpeciesName.mockReturnValue([
    "Species Name: Must be between 3 and 23 characters",
    "another error",
  ]);

  render(
    <SpeciesName
      speciesName="ab"
      onChangeSpeciesName={mockOnChange}
      validateField={mockValidateSpeciesName}
    />
  );

  const errorMessage = screen.getByText(
    "Species Name: Must be between 3 and 23 characters, another error"
  );

  expect(errorMessage).toBeInTheDocument();
});
