import styled from "styled-components"

interface DotProps {
  delay: number
}

export const DotLoaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const Dot = styled.div<DotProps>`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background-color: rgb(var(--timberwolf));
  animation: dot 1.3s infinite;
  animation-delay: ${({ delay }) => delay}s;
  @keyframes dot {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`
