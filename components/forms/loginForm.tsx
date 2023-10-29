// login form component
import {
  Form,
  FormLink,
  FormField,
  FormLabel,
  FormInput,
  FormError,
  FormTitle,
  FormButton,
  FormContainer,
  FormPasswordVisibility,
} from "@/components/forms/formStyles"
import { useState } from "react"
import { requestLogin } from "@/services/api-services/authService"
import { loginValidator } from "@/validators/loginValidator"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons"
import Link from "next/link"

const LoginForm = () => {
  const [errors, setErrors] = useState<ILoginErrors>({})
  const [showPassword, setShowPassword] = useState<Boolean>(false)
  const router = useRouter()
  const { login } = useAuth()

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    const newErrors: ILoginErrors | undefined = await loginValidator(
      email?.toString() || "",
      password?.toString() || ""
    )

    setErrors(newErrors || {})

    if (!newErrors && email && password) {
      await requestLogin(email.toString(), password.toString()).then((res) => {
        if (!res.token) {
          setErrors({
            ...errors,
            email: res.message,
          })
        } else {
          login(res.token)
          router.push("/profile")
        }
      })
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Login</FormTitle>
        <FormField className={errors.email ? "error" : ""}>
          <FormInput type="email" name="email" id="email" />
          <FormLabel htmlFor="email">Email</FormLabel>
          {errors.email && <FormError>{errors.email}</FormError>}
        </FormField>
        <FormField className={errors.password ? "error" : ""}>
          <FormInput
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            data-password
          />
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormPasswordVisibility onClick={togglePassword}>
            {showPassword ? <EyeSlashFill /> : <EyeFill />}
          </FormPasswordVisibility>
          {errors.password && <FormError>{errors.password}</FormError>}
        </FormField>
        <FormField>
          <FormButton type="submit">Login</FormButton>
        </FormField>
        <FormLink>
          Don't have an account? <Link href="/register">Register here</Link>
        </FormLink>
      </Form>
    </FormContainer>
  )
}

export default LoginForm
