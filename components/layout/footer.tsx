"use client"

import Link from "next/link"
import {
  FooterContainer,
  FooterText,
  FooterDivider,
} from "@/components/layout/footerStyles"

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>Made with ❤️ by HangerThem</FooterText>
      <FooterDivider />
      <FooterText>Copyright © 2023 HangerThem</FooterText>
      <FooterDivider />
      <FooterText>
        <Link
          href="https://github.com/HangerThem/blog.hangerthem.com"
          target="_blank"
        >
          Source Code
        </Link>
      </FooterText>
    </FooterContainer>
  )
}
