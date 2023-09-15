import { render, screen } from "@testing-library/react";
import W12MInputPlanetName from "./W12MInputPlanetName";
const mockValidate = (value: string) => {
    return [];
  };
test("renders input Planet name", () => {
  const planetName = "";
  const setPlanetName = jest.fn();
  render(
    <W12MInputPlanetName
      state={planetName}
      setState={(value) => setPlanetName(value)}
      validate={mockValidate}
    />
  );
  const inputById = screen.getByLabelText(/PLanet Name/i);
  expect(inputById).toBeInTheDocument();
});