import { render, screen } from '@testing-library/react';
import { TextInput } from './text_input';
import { fireEvent } from '@testing-library/react';

test('renders form label for species name', () => {

	const requiredProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		validate: () => []
	};
	render(<TextInput {...requiredProps}/>);

	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Species name Input field exists', async () => {
    //Arrange
	const requiredProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: () => {},
		validate: () => []
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
    expect(inputField).toBeInTheDocument();
});

test('Species name input field displays value passed in through props', async () => {
    //Arrange
	const requiredProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		validate: () => []
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	expect(inputField.value).toBe("Woman");
});

test('Species name input field call its onChange function', async () => {
    //Arrange
	const mockSubmit = jest.fn();
	const requiredProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: mockSubmit,
		validate: () => []
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'W'}})
	}
	expect(mockSubmit).toBeCalled();
});