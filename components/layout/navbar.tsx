import Link from "next/link"
import {
  NavbarContainer,
  NavbarHeader,
  NavbarLinks,
  NavbarTitle,
  NavHamburger,
  Hamburger,
  NavDivider,
} from "@/components/layout/navbarStyles"
import { useAuth } from "@/context/authContext"
import { decodeToken } from "@/utils/tokenUtils"
import { BoxArrowRight, BoxArrowInRight } from "react-bootstrap-icons"
import EphemerisLogo from "@/icons/logo.svg"
import Image from "next/image"
import Button from "@/components/buttons/button"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false)
  const { token, logout } = useAuth()
  const name = (decodeToken(token || "") as TokenPayload)?.name || ""

  useEffect(() => {
    const handleResize = () => setOpen(false)
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <NavbarContainer open={open}>
      <NavbarHeader>
        <Link href="/">
          <Image
            src={EphemerisLogo}
            alt="Ephemeris Logo"
            height={50}
            width={50}
          />
          <NavbarTitle>Ephemeris</NavbarTitle>
        </Link>
      </NavbarHeader>
      <NavHamburger onClick={() => setOpen(!open)}>
        <Hamburger open={open} />
      </NavHamburger>
      <NavbarLinks open={open}>
        <Link href="/">Home</Link>
        {token ? (
          <>
            <Link href="/posts/new">New Post</Link>
            <Link href="/profile">{name}</Link>|
            <Button
              onClick={() => logout()}
              size="small"
              variant="ghost"
              color="primary"
            >
              <BoxArrowRight size={25} />
            </Button>
          </>
        ) : (
          <>
            <NavDivider />
            <Link href="/login">
              <Button size="small" variant="ghost" color="primary">
                <BoxArrowInRight size={25} />
              </Button>
            </Link>
          </>
        )}
      </NavbarLinks>
    </NavbarContainer>
  )
}
