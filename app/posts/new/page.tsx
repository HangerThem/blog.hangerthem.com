"use client"

import { PageContainerNavbar } from "@/components/container/containerStyles"
import withAuth from "@/hoc/withAuth"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import PostForm from "@/components/forms/postForm"

function NewPostPage() {
  return (
    <PageContainerNavbar>
      <Navbar />
      <PostForm />
      <Footer />
    </PageContainerNavbar>
  )
}

export default withAuth(NewPostPage)
