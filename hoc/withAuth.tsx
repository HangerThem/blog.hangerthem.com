"use client"

import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import { verifyToken } from "@/utils/tokenUtils"
import { useAuth } from "@/context/authContext"

const withAuth = (Component: any) => {
  const Auth = (props: any) => {
    const { token, login } = useAuth()
    const router = useRouter()

    useEffect(() => {
      if (token && !verifyToken(token)) {
        router.push("/login")
      } else if (!token) {
        router.push("/login")
      } else {
        login(token)
      }
    }, [token])

    return <Component {...props} />
  }
  return Auth
}

export default withAuth
