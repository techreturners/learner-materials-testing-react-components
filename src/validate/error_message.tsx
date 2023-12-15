
interface ErrorMessageProps {
    value: string;
	title: string;
    role: string;
    regex: RegExp;
    errorMessage: string;
}

export const ErrorMessage : React.FC<ErrorMessageProps> = (message) => {
    return (
        <>hello</>
    );    
}