import { render, screen } from '@testing-library/react';
import { ReasonsForSparing } from './reasons_for_sparing';

test('renders form label for reasons for sparing', () => {

	const requiredProps = {
		reasonsForSparing: "Because we are a special species",
		onChangeReasonsForSparing: () => {}
	};
	render(<ReasonsForSparing {...requiredProps}/>);

	const labelText = screen.getByText(
		/Reasons For Sparing/i
	);
	expect(labelText).toBeInTheDocument();
});
