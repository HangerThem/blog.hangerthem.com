import { emailValidator } from "@/validators/emailValidator"
import { passwordValidator } from "@/validators/passwordValidator"
import { nameValidator } from "@/validators/nameValidator"

const registerValidator = async (
  email: string,
  name: string,
  password: string,
  confirmPassword: string
): Promise<IRegisterErrors | undefined> => {
  const errors: IRegisterErrors = {}

  const emailError = emailValidator(email)
  if (emailError) {
    errors.email = emailError.message
  }

  const nameError = nameValidator(name)
  if (nameError) {
    errors.name = nameError.message
  }

  const passwordError = passwordValidator(password)
  if (passwordError) {
    errors.password = passwordError.message
    errors.passwordRequirements = passwordError.requirements
  }

  if (password !== confirmPassword) {
    errors.passwordConfirmation = "Passwords do not match"
  }

  if (Object.keys(errors).length > 0) {
    return errors
  }

  return undefined
}

export { registerValidator }
