"use client"

import { createContext, useContext, useState } from "react"
import { getCookie, setCookie } from "@/utils/clientCookies"

interface AuthContextData {
  token?: string
  login: (token: string) => void
  logout: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | undefined>(
    getCookie(process.env.NEXT_PUBLIC_TOKEN_NAME || "") || undefined
  )

  const login = (token: string) => {
    setCookie(process.env.NEXT_PUBLIC_TOKEN_NAME || "", token, 1)
    setToken(token)
  }

  const logout = () => {
    setCookie(process.env.NEXT_PUBLIC_TOKEN_NAME || "", "", -1)
    setToken(undefined)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
