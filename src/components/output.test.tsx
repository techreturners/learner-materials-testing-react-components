import { render, screen, fireEvent } from '@testing-library/react';
import { Output } from './output';
import { FormValuesProps } from './output';

test('renders title for species name in output following form submission', () => {

	const requiredProps: FormValuesProps = {
		title: "Species Name",
		value: "Woman",
		role: "speciesName",
		regex: /^[a-z]{3,23}$/gi,
		message: "",
		validate: () =>  "",
		submitted: true,
	};
	render(<Output {...requiredProps}/>);

	const labelText : HTMLInputElement = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});

test('Reasons For Sparing output does not display if there has been no submission', async () => {
    //Arrange
	const requiredProps = {
		title: "Reasons For Sparing",
		role: "reasonsForSparing",
		value: "Because we are a special species",
		onChange: () => {},
		regex: /^.{17,153}$/gi,
		message: "Must be between 17 and 153 characters",
		submitted: false,
		validate: () =>  "",
		size: {rows: 5, cols: 20}
	};
	//Act
	render(<Output {...requiredProps}/>);
	//Assert
	expect(screen.queryByRole("paragraph")).not.toBeInTheDocument();
});


