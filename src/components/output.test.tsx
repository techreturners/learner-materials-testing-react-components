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

	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});

