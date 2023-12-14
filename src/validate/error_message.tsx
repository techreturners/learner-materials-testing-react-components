
interface ErrorMessageProps {
	message: string;
}

export const ErrorMessage : React.FC<ErrorMessageProps> = ({message}) => {
    return (
        <p>{message}</p>
    );    
}