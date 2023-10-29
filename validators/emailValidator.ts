const emailValidator = (email: string): IValidatorResponse | undefined => {
  if (!email) {
    return {
      message: "Email is required",
    }
  }
  if (!/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(email)) {
    return {
      message: "Email is invalid",
    }
  }
  return undefined
}

export { emailValidator }
