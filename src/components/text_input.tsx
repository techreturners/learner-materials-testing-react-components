import { ChangeEventHandler} from "react";
interface TextInputProps {
	title: string;
	role: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	regex: RegExp;
	message: string;
	submitted: boolean;
	validate: (title:string, regex: RegExp, value: string, message: string) => string;
}

export const TextInput : React.FC<TextInputProps> = (props) => {

function validateInput() {
	return props.submitted? props.validate(props.title, props.regex, props.value, props.message) : "";
}
const errorMessage = validateInput();

return (
    <>	<label htmlFor={props.role}>{props.title} </label>
        <input id ={props.role}
			className = "valid"
					type ='text'
					value = {props.value}
					onChange = {props.onChange} 
		/>
		{errorMessage !== "" &&
		<span className = "error" >Error: {errorMessage}</span>
		}
    </> 
	);
};