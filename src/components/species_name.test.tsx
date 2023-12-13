import { render, screen } from '@testing-library/react';
import { SpeciesName } from './species_name';

test('renders form label for species name', () => {

	const requiredProps = {
		speciesName: "Woman",
		onChangeSpeciesName: () => {}
	};
	render(<SpeciesName {...requiredProps}/>);

	const labelText = screen.getByText(
		/Species Name/i
	);
	expect(labelText).toBeInTheDocument();
});
