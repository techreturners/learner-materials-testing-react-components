# Activity 5 - Hints

Let's imagine our Species Name field works like this:

```JavaScript
	const SpeciesName = ({ speciesName, onChangeSpeciesName }) => ( 
		<div> 
			<label htmlFor='speciesName'>Species Name</label> 
			<input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> 
		</div> 
	);
```

We need to add validation. So first, let's intercept the onChange event:

```JavaScript
	const SpeciesName = ({ speciesName, onChangeSpeciesName }) => ( 
		<div> 
			<label htmlFor='speciesName'>Species Name</label> 
			<input id='speciesName' type='text' value={speciesName} 
					onChange={(e) => { onChangeSpeciesName(e); } } /> 
		</div> 
	);
```

💡 This code does the **exact same thing** as the first snippet. It simply passes the change event back to the handler function in our form. However, we now have a place to add extra logic to our component in that function!


```JavaScript
	const SpeciesName = ({ speciesName, onChangeSpeciesName }) => ( 
		<div> 
			<label htmlFor='speciesName'>Species Name</label> 
			<input id='speciesName' type='text' value={speciesName} 
					onChange={(e) => { // extra logic goes here!
										onChangeSpeciesName(e); } } /> 
		</div> 
	);
```

We need a validation function:

```JavaScript
	const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {
		const validate = (value) => {
		// do stuff
		return '';
		}

		return(
		<div>
			<label htmlFor='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					onChangeSpeciesName(e);
				}
				}
			/>
		</div>

	);
}
```

And to store the result in state:

```JavaScript
	const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {

		const [ errorMessage, setErrorMessage ] = useState('');

		const validate = (value) => {
			// do stuff
			return '';
		}

		return(
		<div>
			<label htmlFor='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeSpeciesName(e);
				}
				}
			/>
		</div>

	);
}
```

We need to replace `// do stuff` with the actual validation. Remember the aliens said the species name _Must be between 3 and 23 characters. No numbers or special characters allowed!_

So we just have to write our own code to `validate` which checks the value meets these conditions, and then returns a suitable error message if not.

Finally, we need to add an `<ErrorMessage>` component to the project, which takes a prop of `errorMessage`. Then we add this to our field:

```JavaScript
	const SpeciesName = ({ speciesName, onChangeSpeciesName }) => {

		const [ errorMessage, setErrorMessage ] = useState('');

		const validate = (value) => {
			// do stuff
			return '';
		}

		return(
		<div>
			<label htmlFor='speciesName'>Species Name</label>
			<input
				id='speciesName'
				type='text'
				value={speciesName}
				onChange={(e) => {
					const errorMessage = validate(e.target.value);
					setErrorMessage(errorMessage);
					onChangeSpeciesName(e);
				}
				}
			/>
			<ErrorMessage errorMessage={errorMessage}/>
		</div>

	);
}
```

Hopefully this should be enough to get you going with one field, and then the remaining fields can use this pattern to validate according to its own rules.

🗣  Do reach out on Slack if you want help working through any of this!

Go back to [Activity 5](./activity-5.md) and get all the fields to display validation errors when required.
