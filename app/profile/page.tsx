"use client"

import { useAuth } from "@/context/authContext"
import { requestUser } from "@/services/api-services/userServices"
import { useState, useEffect } from "react"
import withAuth from "@/hoc/withAuth"

function ProfilePage() {
  const { logout } = useAuth()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    requestUser().then((res) => {
      setUser(res.user || null)
    })
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Verified: {user.verified ? "Yes" : "No"}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withAuth(ProfilePage)
