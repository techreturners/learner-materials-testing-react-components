import { validateInput } from "./validate_input";

describe("test validation of user input", () => {
	test('Maths answer validation returns empty array if answer is correct', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: /^4{1}$/,
			value: "4",
			message: '"4" must be selected'
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	

	test('Maths answer validation returns error message if answer is incorrect', () => {
		//Arrange
		const params = {
			title: "What is 2 + 2?",
			regex: /^4{1}$/,
			value: "Not 4",
			message: '"4" must be selected'
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message]);
	});	

	test('Species Name returns error message if input is invalid', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex: /^[a-z]{3,23}$/gi,
			value: "F%",
			message: "Must be between 3 and 23 characters. No numbers or special characters allowed!"
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([params.message]);
	});	

	test('Species Name validation returns empty array if input is valid', () => {
		//Arrange
		const params = {
			title: "Species Name",
			regex: /^[a-z]{3,23}$/gi,
			value: "Fred",
			message: "Must be between 3 and 23 characters. No numbers or special characters allowed!"
		};
		//Act
		const validationCall = validateInput(params.title, params.regex, params.value, params.message);
		//Assert
		expect(validationCall).toEqual([]);
	});	
});