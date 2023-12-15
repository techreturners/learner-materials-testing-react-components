import { render, screen } from '@testing-library/react';
import { TextInput } from './text_input';
import { fireEvent } from '@testing-library/react';

test('renders form label for species name', () => {

	const requiredProps = {
		title: "Species Name",
		role: "speciesName",
		value: "Woman",
		onChange: () => {},
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false
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
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false
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
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	expect(inputField.value).toBe("Woman");
});

test('Species name input field call its onChange function', async () => {
    //Arrange
	const mockChange = jest.fn();
	const requiredProps = {
		title: "Species Name",
		role: "speciesName",
		value: "",
		onChange: mockChange,
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		submitted: false
	};
	//Act
	render(<TextInput {...requiredProps}/>);
	const inputField: HTMLInputElement = screen.getByLabelText("Species Name");
	//Assert
	if (inputField) {
		fireEvent.change(inputField, {target: {value: 'W'}})
	}
	expect(mockChange).toBeCalled();
});