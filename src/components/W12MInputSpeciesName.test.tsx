import { render, screen } from "@testing-library/react";
import W12MInputSpeciesName from "./W12MInputSpeciesName";

const mockValidate = (value: string) => {
  return [];
};

test("renders input Species name", () => {
  const speciesName = "";
  const setSpeciesName = jest.fn();
  render(
    <W12MInputSpeciesName
      state={speciesName}
      setState={(value) => setSpeciesName(value)}
      validate={mockValidate}
    />
  );
  const inputById = screen.getByLabelText(/Species Name/i);
  expect(inputById).toBeInTheDocument();
});
