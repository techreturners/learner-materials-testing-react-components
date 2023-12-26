const ERROR = "Two plus two is 4! Choose 4 to be spared!";

const validateTwoPlusTwo: (twoPlusTwo: string) => string[] = (twoPlusTwo) => {
  const errorMessages = Array<string>();

  if (twoPlusTwo !== "4") errorMessages.push(ERROR);

  return errorMessages;
};

export default validateTwoPlusTwo;
