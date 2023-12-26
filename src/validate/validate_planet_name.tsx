const LENGTH_ERROR = "Planet Name: Must be between 2 and 49 characters";
const CHARACTER_ERROR = "Planet Name: No special characters allowed";

const validatePlanetName: (planetName: string) => string[] = (planetName) => {
  const errorMessages = Array<string>();
  if (planetName.length < 2 || planetName.length > 49)
    errorMessages.push(LENGTH_ERROR);
  if (planetName.match("[^a-zA-Z0-9 ]")) errorMessages.push(CHARACTER_ERROR);
  return errorMessages;
};

export default validatePlanetName;
