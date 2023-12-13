import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { SpeciesName } from './species_name';
import W12MForm from './W12MForm';

test('renders form element', () => {
	// we can hold onto the object returned from render()
	// this object has a container property that we can destructure and inspect
	const { container } = render(<W12MForm />);

	// the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
	// for example, the firstChild of our container should be our form element
	expect(container.firstChild).toHaveClass('w12MForm');
});
/*
test('When user clicks the button, the handleSubmit function is called', async () => {

	const mockSubmit = jest.fn();

	render(<W12MForm />);
	const submitButton = screen.getAllByRole('button').find((button) => button.textContent === "Submit Application");
    expect(submitButton).toBeInTheDocument();

	if (submitButton) {
		await userEvent.click(submitButton);
	}

	expect(mockSubmit).toBeCalled();

});

*/