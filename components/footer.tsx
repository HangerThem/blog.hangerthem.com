"use client";

import { FooterContainer, LinkStyle } from "./footerStyle";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      Made with ❤️ by{" "}
      <LinkStyle>
        <Link href="https://github.com/HangerThem" target="_blank">
          HangerThem
        </Link>
      </LinkStyle>
    </FooterContainer>
  );
};

export default Footer;
