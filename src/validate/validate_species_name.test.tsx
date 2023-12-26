import validateSpeciesName from "./validate_species_name";

const LENGTH_ERROR = "Species Name: Must be between 3 and 23 characters";
const CHARACTER_ERROR =
  "Species Name: No special numbers or special characters allowed";

describe("valid species name", () => {
  test("species name should be valid", () => {
    expect(validateSpeciesName("hello world")).toEqual([]);

    expect(validateSpeciesName("yoo")).toEqual([]);

    expect(validateSpeciesName("hello world ")).toEqual([]);

    const longWord = Array(23).fill("a");
    expect(validateSpeciesName(longWord.join(""))).toEqual([]);
  });
});
describe("validation for number of characters", () => {
  test("species name should return error message if characteres outside of 3 to 23", () => {
    const smallWord = "to";
    expect(validateSpeciesName(smallWord)).toEqual([LENGTH_ERROR]);

    const longWord = Array(24).fill("a");
    expect(validateSpeciesName(longWord.join(""))).toEqual([LENGTH_ERROR]);
  });
});
describe("validation for special characters and numbers", () => {
  test("species name should not allow numbers or special characters", () => {
    expect(validateSpeciesName("hello!world")).toEqual([CHARACTER_ERROR]);

    expect(validateSpeciesName("hellooooo3Me")).toEqual([CHARACTER_ERROR]);

    expect(validateSpeciesName("not @llowed o£k")).toEqual([CHARACTER_ERROR]);
  });
});

describe("more than 1 error in species name", () => {
  expect(validateSpeciesName("n0")).toEqual([LENGTH_ERROR, CHARACTER_ERROR]);
});
