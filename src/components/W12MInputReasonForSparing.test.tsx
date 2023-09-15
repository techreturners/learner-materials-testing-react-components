import { render, screen } from "@testing-library/react";
import W12MInputReasonForSparing from "./W12MInputReasonForSparing";
const mockValidate = (value: string) => {
  return [];
};
test("renders without errors", () => {
  const defaultValue = "Initial reason";

  render(
    <W12MInputReasonForSparing
      state={defaultValue}
      setState={() => {}}
      validate={mockValidate}
    />
  );

  expect(screen.getByLabelText("Reason For Sparing")).toBeInTheDocument();
});
