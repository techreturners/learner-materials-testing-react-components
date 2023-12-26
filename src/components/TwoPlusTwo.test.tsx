import { render, screen, fireEvent } from "@testing-library/react";
import TwoPlusTwo from "./TwoPlusTwo";
test("renders form element and displays twoPlusTwoValue props", () => {
  const mockOnChange = jest.fn();
  const mockValidateTwoPlusTwo = jest.fn();
  mockValidateTwoPlusTwo.mockReturnValue([]);

  render(
    <TwoPlusTwo
      twoPlusTwoValue="4"
      onChangeTwoPlusTwoValue={mockOnChange}
      validateField={mockValidateTwoPlusTwo}
    />
  );

  const labelText = screen.getByLabelText("What is 2 + 2?");
  expect(labelText).toBeInTheDocument();
  const inputText = screen.getByDisplayValue("4");
  expect(inputText).toBeInTheDocument();
  const errorMessage = screen.queryByText(
    "Two plus two is 4! Choose 4 to be spared!"
  );
  expect(errorMessage).toBe(null);
});

describe("onChange functionality", () => {
  test("calls the onChange function in input with correct value", () => {
    const mockOnChange = jest.fn();
    const mockValidateTwoPlusTwo = jest.fn();
    mockValidateTwoPlusTwo.mockReturnValue([]);

    render(
      <TwoPlusTwo
        twoPlusTwoValue="4"
        onChangeTwoPlusTwoValue={mockOnChange}
        validateField={mockValidateTwoPlusTwo}
      />
    );
    const input = screen.getByLabelText("What is 2 + 2?");
    fireEvent.change(input, { target: { value: "not-4" } });
    expect(mockOnChange).toHaveBeenCalledWith("not-4");
  });

  test("calls the onChange function ignores values not in the option list", () => {
    const mockOnChange = jest.fn();
    const mockValidateTwoPlusTwo = jest.fn();
    mockValidateTwoPlusTwo.mockReturnValue([]);

    render(
      <TwoPlusTwo
        twoPlusTwoValue="4"
        onChangeTwoPlusTwoValue={mockOnChange}
        validateField={mockValidateTwoPlusTwo}
      />
    );
    const input = screen.getByLabelText("What is 2 + 2?");
    fireEvent.change(input, { target: { value: "42" } });
    expect(mockOnChange).toHaveBeenCalledWith("");
  });
});

test("error messages are displayed when invalid option is used used", () => {
  const mockOnChange = jest.fn();
  const mockValidateTwoPlusTwo = jest.fn();
  mockValidateTwoPlusTwo.mockReturnValue([
    "Two plus two is 4! Choose 4 to be spared!",
  ]);

  render(
    <TwoPlusTwo
      twoPlusTwoValue="4"
      onChangeTwoPlusTwoValue={mockOnChange}
      validateField={mockValidateTwoPlusTwo}
    />
  );
  const errorMessage = screen.getByText(
    "Two plus two is 4! Choose 4 to be spared!"
  );

  expect(errorMessage).toBeInTheDocument();
});
