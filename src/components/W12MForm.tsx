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
import { textInput, selectInput, textAreaInput } from '../data/alien_form_data';

const W12MForm = () => {
	
	const initialValues = {
		speciesName: "", 
		planetName: "", 
		numberOfBeings: "",
		mathsAnswer: "",
		reasonsForSparing: "",
		submitted: false
	}
	const [input, setInput] = useState(initialValues);

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
			setInput(initialValues);
		}
	  }

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">

			<TextInput title = {textInput[0].title} role = {textInput[0].role} 
			regex={textInput[0].regex} message = {textInput[0].errorMessage}
			 value={input.speciesName} onChange={handleChange} submitted={input.submitted}/>

			<TextInput title = {textInput[1].title} role = {textInput[1].role} 
			regex={textInput[1].regex} message = {textInput[1].errorMessage} 
			value={input.planetName} onChange={handleChange} submitted={input.submitted}/>

			<TextInput title = {textInput[2].title} role = {textInput[2].role} 
			regex={textInput[2].regex} message = {textInput[2].errorMessage} 
			value={input.numberOfBeings} onChange={handleChange} submitted={input.submitted}/>

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
