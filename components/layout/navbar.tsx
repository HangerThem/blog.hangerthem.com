import Link from "next/link"
import {
  NavbarContainer,
  NavbarHeader,
  NavbarLinks,
  NavbarTitle,
} from "@/components/layout/navbarStyles"
import { useAuth } from "@/context/authContext"
import { decodeToken } from "@/utils/tokenUtils"
import { BoxArrowRight, BoxArrowInRight } from "react-bootstrap-icons"
import EphemerisLogo from "@/icons/logo.svg"
import Image from "next/image"
import Button from "@/components/buttons/button"

export default function Navbar() {
  const { token, logout } = useAuth()
  const name = (decodeToken(token || "") as TokenPayload)?.name || ""

  return (
    <NavbarContainer>
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
      <NavbarLinks>
        <Link href="/">Home</Link>
        <Link href="/posts/new">New Post</Link>
        {token ? (
          <>
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
            |
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
