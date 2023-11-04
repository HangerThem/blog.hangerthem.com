import styled from "styled-components"
import Link from "next/link"

export const CardTag = styled.span`
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 8px;
  color: rgb(var(--white-smoke));
  background-color: rgb(var(--cornell-red));
`

export const Card = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 750px;
  padding: 16px;
  width: calc(100% - 2rem);
  margin-bottom: 16px;
  color: rgb(var(--timberwolf));
  margin-inline: 1rem;
  position: relative;

  a {
    color: rgb(var(--timberwolf));
  }

  &.new {
    background-color: rgb(var(--timberwolf));
    color: rgb(var(--eerie-black));

    a {
      color: rgb(var(--eerie-black));
    }
  }
`

export const CardNewSplash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 70px;
  width: 70px;
  overflow: hidden;

  &::before {
    content: "New";
    font-size: 0.95rem;
    position: absolute;
    width: 150px;
    text-align: center;
    transform: rotate(45deg);
    top: 16px;
    right: -66px;
    font-weight: bold;
    color: rgb(var(--timberwolf));
    background-color: rgb(var(--cornell-red));
    border-radius: 4px;
    padding: 2px 8px;
    margin-right: 8px;
    animation: pounce 0.5s ease-in-out infinite;

    @keyframes pounce {
      0% {
        transform: rotate(45deg) scale(1);
      }
      50% {
        transform: rotate(45deg) scale(1.1);
      }
      100% {
        transform: rotate(45deg) scale(1);
      }
    }
  }
`

export const CardTitle = styled.h2`
  font-size: 1.5;
  margin: 0;
  margin-bottom: 8px;

  a {
    text-decoration: none;
  }
`

export const CardContent = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 16px;
`

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardAuthor = styled.p`
  font-size: 0.75rem;
  margin: 0;
  text-align: right;
`

export const CardDate = styled.p`
  font-size: 0.75rem;
  margin: 0;
`

export const CardCategory = styled.p`
  font-size: 0.75rem;
  margin: 0;
`

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

export const CardLink = styled(Link)`
  text-decoration: none;
  color: rgb(var(--timberwolf));
  font-weight: 500;
  font-size: 0.75rem;
  margin: 0;
  display: inline-block;
  transition: 0.2s ease-in-out;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
