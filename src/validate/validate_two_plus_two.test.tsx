import validateTwoPlusTwo from "./validate_two_plus_two";

const ERROR = "Two plus two is 4! Choose 4 to be spared!";

describe("two plus two result", () => {
  test("two plus two should be 4", () => {
    expect(validateTwoPlusTwo("4")).toEqual([]);
  });

  test("anyhing but 4 is not a valid two plus two option", () => {
    expect(validateTwoPlusTwo("not-4")).toEqual([ERROR]);
    expect(validateTwoPlusTwo("42!")).toEqual([ERROR]);
  });
});
