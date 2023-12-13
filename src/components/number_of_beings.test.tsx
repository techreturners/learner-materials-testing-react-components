import { render, screen } from '@testing-library/react';
import { NumberOfBeings } from './number_of_beings';

test('renders form label for number of beings', () => {

	const requiredProps = {
		numberOfBeings: "999",
		onChangeNumberOfBeings: () => {}
	};
	render(<NumberOfBeings {...requiredProps}/>);

	const labelText = screen.getByText(
		/Number of Beings/i
	);
	expect(labelText).toBeInTheDocument();
});
