"use client";

import email from "@/public/static/icons/email.svg";
import github from "@/public/static/icons/github.svg";
import linkedin from "@/public/static/icons/linkedin.svg";
import twitter from "@/public/static/icons/twitter.svg";
import Link from "next/link";
import Image from "next/image";
import { ContactCardContainer, ContactCardLink } from "./contactCardStyle";

const ContactCard = () => {
  return (
    <ContactCardContainer>
      <ContactCardLink>
        <Link href="https://github.com/HangerThem" target="_blank">
          <Image src={github} alt="github" width={30} height={30} />
          Github
        </Link>
      </ContactCardLink>
      <ContactCardLink>
        <Link href="https://twitter.com/HangerThem" target="_blank">
          <Image src={twitter} alt="twitter" width={30} height={30} />
          Twitter
        </Link>
      </ContactCardLink>
      <ContactCardLink>
        <Link
          href="https://www.linkedin.com/in/franti%C5%A1ek-borisjuk-022686225/"
          target="_blank"
        >
          <Image src={linkedin} alt="linkedin" width={30} height={30} />
          LinkedIn
        </Link>
      </ContactCardLink>
      <ContactCardLink>
        <Link href="mailto:f.borisjuk@hangerthem.com" target="_blank">
          <Image src={email} alt="email" width={30} height={30} />
          Email
        </Link>
      </ContactCardLink>
    </ContactCardContainer>
  );
};

export default ContactCard;
