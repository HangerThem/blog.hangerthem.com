"use client"

import { useEffect, useState } from "react"
import { requestVerify } from "@/services/api-services/authService"
import { decodeToken } from "@/utils/tokenUtils"
import {
  FormContainer,
  Form,
  FormTitle,
  FormButton,
} from "@/components/forms/formStyles"

export default function Verify({ params }: { params: { token: string } }) {
  const [userData, setUserData] = useState<any>({})
  const { token } = params

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token.toString())
      setUserData(decodedToken)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (token) {
      await requestVerify(token.toString()).then((res) => {})
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Verify user</FormTitle>
        <p>
          Email: <b>{userData.email}</b>
        </p>
        <FormButton type="submit">Verify</FormButton>
      </Form>
    </FormContainer>
  )
}
