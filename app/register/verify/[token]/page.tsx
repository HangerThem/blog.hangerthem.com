"use client"

import { useEffect, useState } from "react"
import { requestVerify } from "@/services/api-services/authServices"
import { decodeToken } from "@/utils/tokenUtils"
import { FormContainer, Form, FormTitle } from "@/components/forms/formStyles"
import Button from "@/components/buttons/button"
import { PageContainer } from "@/components/container/containerStyles"

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
      await requestVerify(token.toString())
    }
  }

  return (
    <PageContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Verify user</FormTitle>
          <p>
            Email: <b>{userData.email}</b>
          </p>
          <Button
            type="submit"
            variant="solid"
            color="primary"
            className="full-width"
          >
            Verify
          </Button>
        </Form>
      </FormContainer>
    </PageContainer>
  )
}
