import validatePlanetName from "./validate_planet_name";

const LENGTH_ERROR = "Planet Name: Must be between 2 and 49 characters";
const CHARACTER_ERROR = "Planet Name: No special characters allowed";
describe("valid planet name", () => {
  test("planet name should be valid", () => {
    expect(validatePlanetName("mars")).toEqual([]);

    expect(validatePlanetName("mars venus")).toEqual([]);

    expect(validatePlanetName("6mars33 ")).toEqual([]);
    expect(validatePlanetName("77")).toEqual([]);

    const longWord = Array(49).fill("a");
    expect(validatePlanetName(longWord.join(""))).toEqual([]);
  });
});

describe("validation for number of characters", () => {
  test("planet name should return error message if characteres outside of 2 to 49", () => {
    const smallWord = "m";
    expect(validatePlanetName(smallWord)).toEqual([LENGTH_ERROR]);

    const longWord = Array(50).fill("b");
    expect(validatePlanetName(longWord.join(""))).toEqual([LENGTH_ERROR]);
  });
});

describe("validation for special characters and numbers", () => {
  test("species name should not allow numbers or special characters", () => {
    expect(validatePlanetName("hello!world")).toEqual([CHARACTER_ERROR]);

    expect(validatePlanetName("not @llowed 0£k")).toEqual([CHARACTER_ERROR]);
  });
});

describe("more than 1 error in planet name", () => {
  expect(validatePlanetName("!")).toEqual([LENGTH_ERROR, CHARACTER_ERROR]);
  const longWord = Array(50).fill("#");
  expect(validatePlanetName(longWord.join(""))).toEqual([
    LENGTH_ERROR,
    CHARACTER_ERROR,
  ]);
});
