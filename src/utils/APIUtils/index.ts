export const getLaunchYear = (year: any): string => {
  if (year !== null) {
    return `&launch_year=${year}`
  }
  return ``
}

export const getLaunchSuccess = (launchSuccess: string): string => {
  if (launchSuccess !== null) {
    return `&launch_success=${launchSuccess.toLowerCase()}`
  }
  return ``
}

export const getLandSuccess = (landSuccess: string): string => {
  if (landSuccess !== null) {
    return `&land_success=${landSuccess.toLowerCase()}`
  }
  return ``
}
