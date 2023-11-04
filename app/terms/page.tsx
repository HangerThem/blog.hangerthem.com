"use client"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { PageContainerNavbar } from "@/components/container/containerStyles"
import { TextContainer } from "@/components/container/containerStyles"

export default function TermsPage() {
  return (
    <PageContainerNavbar>
      <Navbar />
      <TextContainer>
        <h1>Terms and Conditions for Ephemeris</h1>
        <p>Effective Date: 3rd of October 2023</p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Ephemeris ("App"), you agree to be bound by
          these Terms and Conditions. If you do not agree with any part of these
          terms, you may not use the App.
        </p>
        <h2>2. Use of the App</h2>
        <ul>
          <li>
            Eligibility: You must be at least 13 years old to use the App. By
            using the App, you represent and warrant that you meet the age
            requirement.
          </li>
          <li>
            User Accounts: You may be required to create an account to use
            certain features of the App. You are responsible for maintaining the
            security of your account and are prohibited from sharing your login
            credentials.
          </li>
          <li>
            User-Generated Content: When you post content on the App, you are
            solely responsible for the information and media you share. You
            agree not to post content that is illegal, offensive, or violates
            the rights of others.
          </li>
        </ul>
        <h2>3. Intellectual Property</h2>
        <ul>
          <li>
            Ownership: Ephemeris retains all rights, title, and interest in the
            App, including all intellectual property rights.
          </li>
          <li>
            User Content: You retain ownership of the content you post to the
            App. By posting content, you grant Ephemeris a non-exclusive,
            worldwide, royalty-free license to use, display, and distribute the
            content.
          </li>
        </ul>
        <h2>4. Privacy</h2>
        <p>
          Privacy Policy: Your use of the App is also governed by our Privacy
          Policy. Please review it to understand our data collection and
          handling practices, which comply with the General Data Protection
          Regulation (GDPR) in the European Union.
        </p>
        <h2>5. Termination</h2>
        <p>
          Ephemeris reserves the right to terminate or suspend your access to
          the App at our discretion, with or without notice, for any violation
          of these Terms and Conditions.
        </p>
        <h2>6. Disclaimers</h2>
        <ul>
          <li>
            No Warranty: The App is provided "as is" without any warranty.
            Ephemeris makes no guarantees regarding the accuracy, availability,
            or performance of the App.
          </li>
          <li>
            Limitation of Liability: In no event shall Ephemeris be liable for
            any indirect, special, incidental, or consequential damages arising
            from your use of the App.
          </li>
        </ul>
        <h2>7. Changes to Terms</h2>
        <p>
          Ephemeris may update these Terms and Conditions from time to time. We
          will notify users of any material changes. Your continued use of the
          App after the effective date of any changes constitutes your
          acceptance of the revised terms.
        </p>
        <h2>8. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with European Union law, including the General Data Protection
          Regulation (GDPR).
        </p>
        <h2>9. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at{" "}
          <a href="mailto:f.borisjuk@hangerthem.com">
            f.borisjuk@hangerthem.com
          </a>
          .
        </p>
        <h2>10. Entire Agreement</h2>
        <p>
          These Terms and Conditions, along with our Privacy Policy, constitute
          the entire agreement between you and Ephemeris regarding your use of
          the App.
        </p>
      </TextContainer>
      <Footer />
    </PageContainerNavbar>
  )
}
