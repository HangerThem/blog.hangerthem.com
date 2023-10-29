const nameValidator = (name: string): IValidatorResponse | undefined => {
  if (!name) {
    return {
      message: "Name is required",
    }
  }
  if (name.length < 3) {
    return {
      message: "Name must be at least 3 characters long",
    }
  }
  if (name.length > 50) {
    return {
      message: "Name must be at most 50 characters long",
    }
  }
  return undefined
}

export { nameValidator }
