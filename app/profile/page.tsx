"use client"

import withAuth from "@/hoc/withAuth"
import { PageContainerNavbar } from "@/components/container/containerStyles"
import ProfileContainer from "@/components/container/profileContainer"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

function ProfilePage() {
  return (
    <PageContainerNavbar>
      <Navbar />
      <ProfileContainer />
      <Footer />
    </PageContainerNavbar>
  )
}

export default withAuth(ProfilePage)
