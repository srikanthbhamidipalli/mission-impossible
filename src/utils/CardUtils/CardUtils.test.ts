import { getValueBasedOnItsType } from "."

describe("Card Utils test cases", () => {
  it("should test for getValueBasedOnItsType util function with string as parameter", () => {
    expect(getValueBasedOnItsType("Sample String")).toBe("Sample String")
  })
  it("should test for getValueBasedOnItsType util function with boolean as parameter", () => {
    expect(getValueBasedOnItsType(true)).toBe("Yes")
    expect(getValueBasedOnItsType(false)).toBe("No")
  })
  it("should test for getValueBasedOnItsType util function with null or undefined as parameter", () => {
    expect(getValueBasedOnItsType(null)).toBe("NA")
    expect(getValueBasedOnItsType(undefined)).toBe("NA")
  })
})
