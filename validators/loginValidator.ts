// validator for login
import { emailValidator } from "@/validators/emailValidator"

const loginValidator = async (
  email: string,
  password: string
): Promise<ILoginErrors | undefined> => {
  const errors: ILoginErrors = {}

  const emailError = emailValidator(email)
  if (emailError) {
    errors.email = emailError.message
  }

  if (!password) {
    errors.password = "Password is required"
  }

  if (Object.keys(errors).length > 0) {
    return errors
  }

  return undefined
}

export { loginValidator }
