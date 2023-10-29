import jwt from "jsonwebtoken"

export function createToken(payload: TokenPayload | VerifyTokenPayload) {
  const secret: string | undefined = process.env.NEXT_PUBLIC_JWT_SECRET
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables")
  }
  return jwt.sign(payload, secret, {
    expiresIn: "1d",
  })
}

export function verifyToken(token: string) {
  const secret: string | undefined = process.env.NEXT_PUBLIC_JWT_SECRET
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in the environment variables")
  }
  return jwt.verify(token, secret)
}

export function decodeToken(token: string) {
  return jwt.decode(token) as TokenPayload | VerifyTokenPayload
}
