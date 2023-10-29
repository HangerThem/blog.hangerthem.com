import {
  Form,
  FormTitle,
  FormField,
  FormError,
  FormInput,
  FormLabel,
  FormButton,
  FormCheckbox,
  FormContainer,
  FormCheckboxLabel,
  FormFieldHorizontal,
  FormPasswordVisibility,
  FormErrorList,
  FormLink,
} from "@/components/forms/formStyles"
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons"
import { useState } from "react"
import { requestRegister } from "@/services/api-services/authService"
import { registerValidator } from "@/validators/registerValidator"
import Link from "next/link"

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false)
  const [errors, setErrors] = useState<IRegisterErrors>({})

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const name = formData.get("name")
    const password = formData.get("password")
    const passwordConfirmation = formData.get("passwordConfirmation")
    const terms = formData.get("terms")

    const newErrors: IRegisterErrors | undefined = await registerValidator(
      email?.toString() || "",
      name?.toString() || "",
      password?.toString() || "",
      passwordConfirmation?.toString() || ""
    )

    setErrors(newErrors || {})

    if (!newErrors && email && name && password && passwordConfirmation) {
      await requestRegister(
        email.toString(),
        name.toString(),
        password.toString(),
        passwordConfirmation.toString()
      ).then((res) => {
        if (res.email !== email.toString()) {
          setErrors({
            ...errors,
            email: "Email is already taken",
          })
        } else {
          setErrors({})
        }
      })
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Register</FormTitle>
        <FormField className={errors.email ? "error" : ""}>
          <FormInput id="email" type="email" name="email" />
          <FormLabel htmlFor="email">Email</FormLabel>
          {errors.email && <FormError>{errors.email}</FormError>}
        </FormField>
        <FormField className={errors.name ? "error" : ""}>
          <FormInput id="name" type="text" name="name" />
          <FormLabel htmlFor="name">Name</FormLabel>
          {errors.name && <FormError>{errors.name}</FormError>}
        </FormField>
        <FormField
          className={
            errors.password
              ? "error"
              : errors.passwordConfirmation
              ? "error"
              : ""
          }
        >
          <FormInput
            id="password"
            type={showPassword ? "text" : "password"}
            data-password
            name="password"
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormPasswordVisibility onClick={togglePassword}>
            {showPassword ? <EyeSlashFill /> : <EyeFill />}
          </FormPasswordVisibility>
          {errors.password && <FormError>{errors.password}</FormError>}
          {!errors.password && errors.passwordConfirmation && (
            <FormError>{errors.passwordConfirmation}</FormError>
          )}
          {errors.passwordRequirements && (
            <FormErrorList>
              {errors.passwordRequirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </FormErrorList>
          )}
        </FormField>
        <FormField className={errors.passwordConfirmation ? "error" : ""}>
          <FormInput
            id="passwordConfirmation"
            type={showPassword ? "text" : "password"}
            name="passwordConfirmation"
          />
          <FormLabel htmlFor="passwordConfirmation">
            Password Confirmation
          </FormLabel>
          {errors.passwordConfirmation && (
            <FormError>{errors.passwordConfirmation}</FormError>
          )}
        </FormField>
        <FormFieldHorizontal>
          <FormCheckbox id="terms" type="checkbox" name="terms" required />
          <FormCheckboxLabel htmlFor="terms">
            <FormLink>
              I agree to the <Link href="/terms">Terms of Service</Link>
            </FormLink>
          </FormCheckboxLabel>
        </FormFieldHorizontal>
        <FormField>
          <FormButton type="submit">Register</FormButton>
        </FormField>
        <FormLink>
          Already have an account? <Link href="/login">Login here</Link>
        </FormLink>
      </Form>
    </FormContainer>
  )
}

export default RegistrationForm
