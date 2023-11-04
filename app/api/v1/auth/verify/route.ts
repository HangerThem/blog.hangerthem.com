import prisma from "@/helpers/prismaHelper"
import { sendEmail } from "@/utils/emailUtils"

export async function POST(req: any) {
  const { token } = await req.json()

  if (typeof token !== "string") {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  const user = await prisma.user.findUnique({
    where: {
      verifyToken: token,
    },
  })
  if (!user) {
    return new Response(JSON.stringify({ message: "Invalid token" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      verified: true,
      verifyToken: null,
    },
  })
  sendEmail({
    to: user.email,
    subject: "Welcome to Ephemeris",
    text: `Hello ${user.name},\n\nYour account has been verified.\n\nRegards,\nEphemeris Team`,
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
                  <h1>Welcome to Ephemeris</h1>
              </div>
              <div class="content">
                  <p>Hello ${user.name},</p>
                  <p>Your account has been verified.</p>
                  <p>Regards, <br /> Ephemeris Team</p>
                <p><i>If you didn't initiate this action, please disregard this email.</i></p>
              </div>
          </div>
      </body>
    </html>
    `,
  })
  return new Response(JSON.stringify({ message: "User verified" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
