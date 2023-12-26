const LENGTH_ERROR = "Species Name: Must be between 3 and 23 characters";
const CHARACTER_ERROR =
  "Species Name: No special numbers or special characters allowed";

const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  const errorMessages = Array<string>();
  if (speciesName.length < 3 || speciesName.length > 23)
    errorMessages.push(LENGTH_ERROR);
  if (speciesName.match("[^a-zA-Z ]")) errorMessages.push(CHARACTER_ERROR);
  return errorMessages;
};

export default validateSpeciesName;
