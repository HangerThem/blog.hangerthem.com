"use client"

import { TextContainer } from "@/components/container/containerStyles"
import { PageContainerNavbar } from "@/components/container/containerStyles"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

export default function PrivacyPolicy() {
  return (
    <PageContainerNavbar>
      <Navbar />
      <TextContainer>
        <h1>Privacy Policy for Ephemeris</h1>
        <p>Effective Date: 3rd of October 2023</p>
        <h2>1. Introduction</h2>
        <p>
          Welcome to Ephemeris. At Ephemeris, we are committed to protecting
          your privacy and ensuring that your personal information is handled in
          a secure and responsible manner. This Privacy Policy outlines our
          practices concerning the collection, use, and disclosure of your
          personal information in connection with your use of the Ephemeris
          mobile application ("App").
        </p>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            <h3>Information You Provide</h3>
          </li>
          <p>
            When you use Ephemeris, you may choose to provide us with the
            following information:
          </p>
          <ul>
            <li>
              User Profile Information: This may include your name, username,
              email address, profile picture, and other optional information you
              choose to share.
            </li>
            <li>
              Blog Posts: Any content, including text, images, videos, and other
              media, that you create and publish within the App.
            </li>
            <li>
              Comments and Interactions: Information you provide when you engage
              with other users' content, such as leaving comments, likes, or
              shares.
            </li>
          </ul>
          <li>
            <h3>Automatically Collected Information</h3>
          </li>
          <p>
            We may also collect certain information automatically when you use
            the App, including:
          </p>
          <ul>
            <li>
              Device Information: Information about the device you use to access
              the App, such as device type, operating system, and unique device
              identifiers.
            </li>
            <li>
              Usage Data: Data about your interactions with the App, including
              the content you view, the features you use, and your interactions
              with other users.
            </li>
          </ul>
        </ul>
        <h2>3. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            To provide and personalize the App, including delivering content and
            features tailored to your preferences.
          </li>
          <li>
            To communicate with you, such as to respond to your inquiries or
            send you updates about the App.
          </li>
          <li>
            To improve our services, including analyzing usage patterns and user
            feedback.
          </li>
          <li>To enforce our Terms of Service and other policies.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information to third parties. However, we
          may share your information with the following entities:
        </p>
        <ul>
          <li>
            Service Providers: We may share your information with third-party
            service providers who help us operate, maintain, and improve the
            App.
          </li>
          <li>
            Legal Requirements: We may disclose your information to comply with
            applicable laws, regulations, legal processes, or government
            requests.
          </li>
        </ul>
        <h2>5. Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information.
          However, please be aware that no method of data transmission over the
          internet is entirely secure, and we cannot guarantee the absolute
          security of your data.
        </p>
        <h2>6. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or for other operational, legal, or regulatory
          reasons. We will notify you of any material changes by posting the
          updated Privacy Policy within the App. Your continued use of the App
          after the effective date of any changes constitutes your acceptance of
          the revised Privacy Policy.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or your personal information, please contact us at{" "}
          <a href="mailto:f.borisjuk@hangerthem.com">
            f.borisjuk@hangerthem.com
          </a>
          .
        </p>
        <h2>8. Consent</h2>
        <p>
          By using Ephemeris, you consent to the collection, use, and sharing of
          your information as described in this Privacy Policy.
        </p>
      </TextContainer>
      <Footer />
    </PageContainerNavbar>
  )
}
