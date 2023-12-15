
export type formInputObject = {
    title: string;
    role: string;
    regex: RegExp;
    errorMessage: string;
}

export const textInput: Array<formInputObject> = [
    {
    title: "Species Name",
    role: "speciesName",
    regex: /^[a-z]{3,23}$/gi,
    errorMessage: "Must be between 3 and 23 characters. No numbers or special characters allowed!"
    },
    {
    title: "Planet Name",
    role: "planetName",
    regex: /^[a-z0-9]{2,49}$/gi,
    errorMessage: "Must be between 2 and 49 characters. Numbers are allowed, but no special characters."
    },
    {
    title: "Number of Beings",
    role: "numberOfBeings",
    regex: /^[0-9]{10,}$/g,
    errorMessage: "Numbers ONLY. Must be at least 1,000,000,000"
    }
];

export const selectInput: Array<formInputObject> = [
    {
    title: "What is 2 + 2?",
    role: "mathsAnswer",
    regex: /^[a-z]{3,23}$/gi,
    errorMessage: `Error: "4" must be selected`
    }
];

export const textAreaInput: Array<formInputObject> = [
    {
    title: "Reasons For Sparing",
    role: "reasonsForSparing",
    regex: /^[a-z]{3,23}$/gi,
    errorMessage: "Must be between 17 and 153 characters"
    }
];
