	
export const validateTextInput = (title: string, regex: RegExp, value: string, message: string): Array<string> => {
	// validation code here
	// needs to return an array of error messages
	// or an empty array if there aren't any
	//
	// Must be between 3 and 23 characters. No numbers or special characters allowed!
	const errorArray : Array<string> = [];
	if (value === "") {
		errorArray.push(`${title} required`);
	}
	else {
		if (!value.match(regex)) {
			errorArray.push(message);
		}
	}
	return errorArray;
};