import { render, screen } from '@testing-library/react';
import { PlanetName } from './planet_name';

test('renders form label for planet name', () => {

	const requiredProps = {
		planetName: "Mars",
		onChangePlanetName: () => {}
	};
	render(<PlanetName {...requiredProps}/>);

	const labelText = screen.getByText(
		/Planet Name/i
	);
	expect(labelText).toBeInTheDocument();
});
