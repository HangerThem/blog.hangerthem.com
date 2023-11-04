import prisma from "@/helpers/prismaHelper"
import { hashPassword } from "@/utils/passwordUtils"
import { createToken } from "@/utils/tokenUtils"
import { sendEmail } from "@/utils/emailUtils"
import { registerValidator } from "@/validators/registerValidator"

export async function POST(req: any) {
  const { email, name, password, passwordConfirmation, terms } =
    await req.json()
  const errors = await registerValidator(
    email,
    name,
    password,
    passwordConfirmation
  )
  if (errors) {
    return new Response(JSON.stringify(errors), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (existingUser) {
    return new Response(
      JSON.stringify({
        email: "Email already in use",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }
  const hashedPassword = await hashPassword(password)
  const token = createToken({ email })
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      verifyToken: token,
    },
  })
  const verificationLink = `${process.env.BASE_URL}/register/verify/${token}`
  const adminEmail: string | undefined = process.env.ADMIN_EMAIL
  if (!adminEmail) {
    return new Response(JSON.stringify({ message: "Admin email not found" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  await sendEmail({
    to: adminEmail,
    subject: "New user registration",
    text: `A new user has registered on your website with the email ${email}. Click on the link below to verify the user's email address: ${verificationLink}`,
    html: `
    <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  color: #222; 
              }
              .container {
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
              }
              .header {
                  background-color: #ff0000;
                  color: #222;
                  text-align: center;
                  padding: 20px 0;
              }
              .content {
                  padding: 20px;
              }
              .button {
                  display: inline-block;
                  color: #222;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>New User Registration</h1>
              </div>
              <div class="content">
                  <p>Hello Admin,</p>
                  <p>A new user has registered on your website with the email ${email}. Please verify their account by clicking the button below.</p>
                  <p>
                      <a class="button" href="${verificationLink}">Verify User</a>
                  </p>
                <p><i>If you didn't initiate this action, please disregard this email.</i></p>
              </div>
          </div>
      </body>
    </html>
    `,
  })
  const response: IRegisterResponse = {
    email,
  }
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
