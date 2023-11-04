import { DotLoaderContainer, Dot } from "@/components/loaders/dotLoaderStyles"

interface DotLoaderProps {
  className?: string
  size?: "small" | "medium" | "large"
}

const DotLoader = ({ className, size = "medium" }: DotLoaderProps) => {
  switch (size) {
    case "small":
      return (
        <DotLoaderContainer className={className}>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </DotLoaderContainer>
      )
    case "medium":
      return (
        <DotLoaderContainer className={className}>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
          <Dot delay={0.6} />
          <Dot delay={0.8} />
        </DotLoaderContainer>
      )
    case "large":
      return (
        <DotLoaderContainer className={className}>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
          <Dot delay={0.6} />
          <Dot delay={0.8} />
          <Dot delay={1} />
          <Dot delay={1.2} />
          <Dot delay={1.4} />
          <Dot delay={1.6} />
          <Dot delay={1.8} />
        </DotLoaderContainer>
      )
    default:
      return (
        <DotLoaderContainer className={className}>
          <Dot delay={0} />
          <Dot delay={0.2} />
          <Dot delay={0.4} />
        </DotLoaderContainer>
      )
  }
}

export default DotLoader
