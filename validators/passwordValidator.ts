const passwordValidator = (
  password: string
): IValidatorResponse | undefined => {
  if (!password) {
    return {
      message: "Password is required",
    }
  }
  const requirements = []
  if (password.length < 8) {
    requirements.push("Password must be at least 8 characters long")
  }
  if (password.length > 50) {
    requirements.push("Password must be at most 50 characters long")
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    requirements.push("Password must contain at least one uppercase letter")
  }
  if (!/(?=.*[a-z])/.test(password)) {
    requirements.push("Password must contain at least one lowercase letter")
  }
  if (!/(?=.*\d)/.test(password)) {
    requirements.push("Password must contain at least one digit")
  }
  if (!/(?=.*[@$!%*?&_])/.test(password)) {
    requirements.push(
      "Password must contain at least one special character (@, $, !, %, *, ?, &, _)"
    )
  }
  if (requirements.length > 0) {
    return {
      message: "Password requirements not met",
      requirements,
    }
  }
  return undefined
}

export { passwordValidator }
