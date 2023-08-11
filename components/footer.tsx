"use client";

import { FooterContainer, LinkStyle } from "./footerStyle";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      Made with ❤️ by{" "}
      <Link href="https://github.com/HangerThem" target="_blank">
        <LinkStyle>HangerThem</LinkStyle>
      </Link>
    </FooterContainer>
  );
};

export default Footer;
