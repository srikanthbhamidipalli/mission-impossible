export const getValueBasedOnItsType = (value: any): string => {
  if (value !== null || value !== undefined) {
    if (typeof value === "string") {
      return value
    } else if (typeof value === "boolean") {
      if (value) {
        return "Yes"
      }
      return "No"
    }
  }
  return "NA"
}
