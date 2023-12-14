import { useState } from 'react';
import W12MHeader from './W12MHeader';
import {TextInput} from './text_input';
import { PlanetName } from './planet_name';
import { NumberOfBeings } from './number_of_beings';
import { ReasonsForSparing } from './reasons_for_sparing';
import { MathsQuestion } from './maths_question';
import { FormOutput } from './form_output';
import { ChangeEvent, MouseEvent } from 'react';
import { SubmitButton } from './submit_button';
import { validateSpeciesName } from '../validate/validate_species_name';

const W12MForm = () => {
	
	const initialValue = {
		speciesName: "",
		planetName: "",
		numberOfBeings: "",
		mathsAnswer: "",
		reasonsForSparing: "",
		submitted: false
	}
	const [input, setInput] = useState(initialValue);

	function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		setInput({...input, submitted: true});
	}

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {
		setInput((currentData) =>
		  Object.assign({}, currentData, {
			[event.target.id]: event.target.value,
		  })
		)
		if (input.submitted) {
			setInput(initialValue);
		}
	  }

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">
			<TextInput title = "Species Name" role = "speciesName" 
			value={input.speciesName} onChange={handleChange} validate={validateSpeciesName} />
			<PlanetName planetName={input.planetName} onChangePlanetName={handleChange} />
			<NumberOfBeings numberOfBeings={input.numberOfBeings} onChangeNumberOfBeings={handleChange} />
			<MathsQuestion mathsAnswer={input.mathsAnswer} onChangeMathsAnswer={handleChange} />
			<ReasonsForSparing reasonsForSparing={input.reasonsForSparing} onChangeReasonsForSparing={handleChange} />
			<SubmitButton buttonText = "Submit Application" onSubmitHandler = {handleSubmit}/>
			</div>
			<FormOutput 
			speciesName = {input.speciesName}
			planetName = {input.planetName}
			numberOfBeings = {input.numberOfBeings}
			mathsAnswer = {input.mathsAnswer}
			reasonsForSparing= {input.reasonsForSparing}
			submitted = {input.submitted}/>
		</section>	
	);
};

export default W12MForm;
