"use client";

import {
  Header,
  HeaderTitle,
  HeaderLinks,
  HeaderLink,
} from "./navigationStyle";
import Link from "next/link";

const Navigation = () => {
  return (
    <Header>
      <HeaderTitle>Ephemeris</HeaderTitle>
      <HeaderLinks>
        <HeaderLink>
          <Link href="https://hangerthem.com">Home</Link>
        </HeaderLink>{" "}
        •{" "}
        <HeaderLink>
          <Link href="https://hangerthem.com/#">About</Link>
        </HeaderLink>
      </HeaderLinks>
    </Header>
  );
};

export default Navigation;
