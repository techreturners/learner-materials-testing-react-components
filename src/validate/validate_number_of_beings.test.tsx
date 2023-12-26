import validateNumberOfBeings from "./validate_number_of_beings";

const CHARACTER_ERROR = "Number of beings: Numbers ONLY please";
const MIN_ERROR =
  "Number of beings: Must be at least 1,000,000,000 (no commas!).";

describe("valid number of beings", () => {
  test("number of beings should be valid", () => {
    expect(validateNumberOfBeings("1000000000")).toEqual([]);

    expect(validateNumberOfBeings("1999332457213")).toEqual([]);
  });
});

describe("validation for special characters and numbers", () => {
  test("species name should not special characters or alphabet characters", () => {
    expect(validateNumberOfBeings("hello world")).toEqual([CHARACTER_ERROR]);

    expect(validateNumberOfBeings("hellooooo3Me")).toEqual([CHARACTER_ERROR]);

    expect(validateNumberOfBeings("not @llowed o£k")).toEqual([
      CHARACTER_ERROR,
    ]);
  });
});

describe("validation for number of characters", () => {
  test("planet name should return error message if numbers less than 1,000,000,000", () => {
    expect(validateNumberOfBeings("100")).toEqual([MIN_ERROR]);

    expect(validateNumberOfBeings("999999999")).toEqual([MIN_ERROR]);
  });
});
