"use client"

import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import { verifyToken } from "@/utils/tokenUtils"
import { useAuth } from "@/context/authContext"

interface Props {
  children?: ReactNode
}

const withAuth = (Component: React.FC<Props>) => {
  const Auth = (props: Props) => {
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
