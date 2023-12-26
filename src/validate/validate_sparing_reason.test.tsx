import validateSparingReason from "./validate_sparing_reason";

const LENGTH_ERROR =
  "Reason for sparing: Must be between 17 and 153 characters";
describe("valid sparing reasons", () => {
  test("reason should be valid", () => {
    const minimumSparingReason = Array(17).fill("a").join("");
    expect(validateSparingReason(minimumSparingReason)).toEqual([]);

    const maximumSparingReason = Array(153).fill("3").join("");
    expect(validateSparingReason(maximumSparingReason)).toEqual([]);

    expect(validateSparingReason("l1fe oN e4arth is gR8!!!!@@")).toEqual([]);
  });
});

describe("validation for number of characters", () => {
  test("reason should return error message if characteres outside of 17 to 153", () => {
    expect(validateSparingReason("")).toEqual([LENGTH_ERROR]);
    expect(validateSparingReason("a")).toEqual([LENGTH_ERROR]);

    const smallWord = Array(16).fill("b").join("");
    expect(validateSparingReason(smallWord)).toEqual([LENGTH_ERROR]);

    const longWord = Array(154).fill("3").join("");
    expect(validateSparingReason(longWord)).toEqual([LENGTH_ERROR]);
  });
});
