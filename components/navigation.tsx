"use client";

import { useState } from "react";
import {
  Header,
  HeaderTitle,
  HeaderLinks,
  HeaderLink,
} from "./navigationStyle";
import Link from "next/link";
import ContactCard from "./contactCard";

const Navigation = () => {
  const [mobileView, setMobileView] = useState<boolean>(false);

  if (typeof window !== undefined) {
    window.onresize = () => {
      if (window.innerWidth <= 912) setMobileView(true);
      else setMobileView(false);
    };
  }
  return (
    <Header>
      <HeaderTitle>
        <Link href="/">Ephemeris</Link>
      </HeaderTitle>
      <HeaderLinks>
        <HeaderLink>
          <Link href="https://hangerthem.com">Home</Link>
        </HeaderLink>{" "}
        •{" "}
        <HeaderLink>
          <Link href="https://hangerthem.com/#">About</Link>
        </HeaderLink>
      </HeaderLinks>
      <div style={{ display: mobileView ? "flex" : "none" }}>
        <ContactCard />
      </div>
    </Header>
  );
};

export default Navigation;
