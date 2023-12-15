import { useState, useRef } from 'react';
import W12MHeader from './W12MHeader';
import {TextInput} from './text_input';
import { ReasonsForSparing } from './reasons_for_sparing';
import { MathsQuestion } from './maths_question';
import { Output } from './output';
import { ChangeEvent, MouseEvent } from 'react';
import { SubmitButton } from './submit_button';
import { formInput} from '../data/alien_form_data';
import { validateTextInput } from "../validate/validate_text_input"

const W12MForm = () => {
	
	const initialValues = {
		speciesName: "", 
		planetName: "", 
		numberOfBeings: "",
		mathsAnswer: "",
		reasonsForSparing: ""
	}
	const [input, setInput] = useState({...initialValues});
	const [submitted, setSubmitted] = useState(false);

	function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
		setSubmitted(true);
	}

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {
		setInput((currentData) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
	}

	function validateTextField(title:string, regex: RegExp, value: string, message: string) {
		if (submitted) {
		const errorMessage  = validateTextInput(title, regex, value, message)
				.reduce((acc: string, message: string) => acc+" and "+message, "")
				.replace(" and ", "");
		return errorMessage;
		}
		return "";
	}

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<div className = "col-50-left">
			<TextInput title = {formInput[0].title} role = {formInput[0].role} 
			regex={formInput[0].regex} message = {formInput[0].errorMessage}
			value={input.speciesName} onChange={handleChange} submitted={submitted}
			validate = {validateTextField}/>

			<TextInput title = {formInput[1].title} role = {formInput[1].role} 
			regex={formInput[1].regex} message = {formInput[1].errorMessage} 
			value={input.planetName} onChange={handleChange} submitted={submitted}
			validate = {validateTextField}/>

			<TextInput title = {formInput[2].title} role = {formInput[2].role} 
			regex={formInput[2].regex} message = {formInput[2].errorMessage} 
			value={input.numberOfBeings} onChange={handleChange} submitted={submitted}
			validate = {validateTextField}/>

			<MathsQuestion mathsAnswer={input.mathsAnswer} onChangeMathsAnswer={handleChange} />
			
			<ReasonsForSparing reasonsForSparing={input.reasonsForSparing} onChangeReasonsForSparing={handleChange} />

			<SubmitButton buttonText = "Submit Application" onSubmitHandler = {handleSubmit}/>

			</div>
			<Output title = {formInput[0].title} value = {input.speciesName} message = {formInput[0].errorMessage}
			role = {formInput[0].role} regex={formInput[0].regex} validate = {validateTextField} submitted={submitted}/>

			<Output title = {formInput[1].title} value = {input.planetName} message = {formInput[1].errorMessage}
			role = {formInput[0].role} regex={formInput[1].regex} validate = {validateTextField} submitted={submitted}/>

			<Output title = {formInput[2].title} value = {input.numberOfBeings} message = {formInput[2].errorMessage}
			role = {formInput[0].role} regex={formInput[2].regex} validate = {validateTextField} submitted={submitted}/>

			<Output title = {formInput[3].title} value = {input.mathsAnswer} message = {formInput[3].errorMessage}
			role = {formInput[0].role} regex={formInput[3].regex} validate = {validateTextField} submitted={submitted}/>
			
			<Output title = {formInput[4].title} value= {input.reasonsForSparing} message = {formInput[4].errorMessage}
			role = {formInput[0].role} regex={formInput[4].regex} validate = {validateTextField} submitted={submitted}/>
		</section>	
	);
};

export default W12MForm;
