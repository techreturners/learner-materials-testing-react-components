import { render, screen } from '@testing-library/react';
import { MathsQuestion } from './maths_question';

test('renders form label for maths question', () => {

	const requiredProps = {
		mathsAnswer: "4",
		onChangeMathsAnswer: () => {}
	};
	render(<MathsQuestion {...requiredProps}/>);

	const labelText = screen.getByText(
		"What is 2 + 2?"
	);
	expect(labelText).toBeInTheDocument();
});
