import Link from "next/link"
import DotLoader from "@/components/loaders/dotLoader"
import { ButtonContainer } from "@/components/buttons/buttonStyles"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  isLink?: boolean
  href?: string
  isLoading?: boolean
  disabled?: boolean
  size?: "small" | "medium" | "large"
  color?: "primary" | "secondary" | "tertiary"
  variant?: "solid" | "outline" | "ghost"
  className?: string
  type?: "button" | "submit" | "reset"
}

const Button = ({
  children,
  onClick,
  isLink,
  href,
  isLoading,
  disabled,
  size = "medium",
  color = "primary",
  variant = "solid",
  className,
  type = "button",
}: ButtonProps) => {
  if (isLink && href) {
    return (
      <ButtonContainer
        className={`${className ? className : ""} ${color ? color : ""} ${
          variant ? variant : ""
        } ${size ? size : ""}`}
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        <Link href={href}>
          <a>{children}</a>
        </Link>
      </ButtonContainer>
    )
  }

  return (
    <ButtonContainer
      className={`${className ? className : ""} ${color ? color : ""} ${
        variant ? variant : ""
      } ${size ? size : ""}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? <DotLoader size={size} /> : children}
    </ButtonContainer>
  )
}

export default Button
