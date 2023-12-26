import { render, screen, fireEvent } from "@testing-library/react";
import PlanetName from "./PlanetName";

test("renders form element and displays planetName props", () => {
  const mockOnChange = jest.fn();
  const mockValidatePlanetName = jest.fn();
  mockValidatePlanetName.mockReturnValue([]);

  render(
    <PlanetName
      planetName="mars"
      onChangePlanetName={mockOnChange}
      validateField={mockValidatePlanetName}
    />
  );

  const labelText = screen.getByLabelText(/Planet Name/i);
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("mars");
  expect(inputText).toBeInTheDocument();

  const errorMessage = screen.queryByText("Planet name: error!panic!");
  expect(errorMessage).toBe(null);
});

test("calls the onChange function in input with correct value", () => {
  const mockOnChange = jest.fn();
  const mockValidatePlanetName = jest.fn();
  mockValidatePlanetName.mockReturnValue([]);

  render(
    <PlanetName
      planetName="mars"
      onChangePlanetName={mockOnChange}
      validateField={mockValidatePlanetName}
    />
  );

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Earth" } });
  expect(mockOnChange).toHaveBeenCalledWith("Earth");
});

test("error messages are displayed when invalid planet name is used", () => {
  const mockOnChange = jest.fn();
  const mockValidatePlanetName = jest.fn();
  mockValidatePlanetName.mockReturnValue(["panic!"]);

  render(
    <PlanetName
      planetName="mars"
      onChangePlanetName={mockOnChange}
      validateField={mockValidatePlanetName}
    />
  );

  const errorMessage = screen.getByText("panic!");
  expect(errorMessage).toBeInTheDocument();
});
