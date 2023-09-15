import { render, screen } from "@testing-library/react";
import W12MInputNumberOfBeings from "./W12MInputNumberOfBeings";
const mockValidate = (value: string) => {
  return [];
};
test("input fields certain values through props, do they display that value?", () => {
  const initialValue = "42";

  render(
    <W12MInputNumberOfBeings
      state={initialValue}
      setState={() => {}}
      validate={mockValidate}
    />
  );

  const inputElement = screen.getByLabelText(
    "Number Of Beings"
  ) as HTMLInputElement;

  expect(inputElement.value).toBe(initialValue);
});
