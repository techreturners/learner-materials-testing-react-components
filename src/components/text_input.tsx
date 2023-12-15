import { ChangeEventHandler } from "react";
import { ErrorMessage } from "../validate/error_message";
import { validateTextInput } from "../validate/validate_text_input";

interface TextInputProps {
	title: string;
	role: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	regex: RegExp;
	message: string;
	submitted: boolean;
}

export const TextInput : React.FC<TextInputProps> = (props) => {
let message = "";
if (props.submitted) {
	const errorMessages = validateTextInput(props.title, props.regex, props.value, props.message);
	message = errorMessages.reduce((acc: string, message: string) => acc+" and "+message, "")
	.replace(" and ", "");
	//console.log(props.title, message);
}

return (
    	<>
        <label htmlFor={props.role}>{props.title}</label>
		{message === "" &&
        <input id={props.role}
			className = "valid"
					type='text'
					value= {props.value}
					onChange={props.onChange} 
		/>
		}
		{message !== "" &&
        <input id={props.role}
			className = "error"
					type='text'
					value= {message}
					onChange={props.onChange} 
		/>
		}
    </> 
	);
}