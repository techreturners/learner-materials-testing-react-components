import { useState } from 'react';
import W12MHeader from './W12MHeader';
import {SpeciesName} from './species_name';
import { PlanetName } from './planet_name';
import { NumberOfBeings } from './number_of_beings';
import { ReasonsForSparing } from './reasons_for_sparing';

const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [planetName, setPlanetName] = useState('earth');
	const [numberOfBeings, setNumberOfBeings] = useState('population');
	const [reasonsForSparing, setReasonsForSparing] = useState('reasons');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
			<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />
			<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} />
			<ReasonsForSparing reasonsForSparing={reasonsForSparing} onChangeReasonsForSparing={(value) => setReasonsForSparing(value)} />
		</section>
	);
};

export default W12MForm;
