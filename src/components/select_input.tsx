import { InputProps } from "./W12MForm";
import { ChangeEventHandler} from 'react';

export interface SelectInputProps extends InputProps{
	onChange: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectInput : React.FC<SelectInputProps> = (props) => {

	function validateInput() {
		return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
	}
	const errorMessage = validateInput();

	return (
    <>
        <label htmlFor={props.role}>{props.title}</label>
        <select id={props.role} value={props.value} onChange={props.onChange} >
			<option value="Not 4">Not 4</option>
			<option value="0">0</option>
			<option value="4">4</option>
			<option value="99">99</option>
			<option value="4 million">4 million</option>
		</select>
		{errorMessage !== "" &&
		<span className = "error" >Error: {errorMessage}</span>
		}
    </> );
}