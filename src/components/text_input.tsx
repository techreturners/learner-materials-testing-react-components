import { ChangeEventHandler } from "react";
import { ErrorMessage } from "../validate/error_message";

interface TextInputProps {
	title: string;
	role: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	validate: (value: string) => Array<string>;
}

export const TextInput : React.FC<TextInputProps> = (props) => {

const errorMessages = props.validate(props.value);
return (
    <>
        <label htmlFor={props.role}>{props.title}</label>
        <input id={props.role}
					type='text'
					value={props.value}
					onChange={props.onChange} 
		/>
		{errorMessages.length === 0 && errorMessages.map((message: string, index: number) => 
		<ErrorMessage key = {index.toString()} message={message} />)}
    </> 
	);
}