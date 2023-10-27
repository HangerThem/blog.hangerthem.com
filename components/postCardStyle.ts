import styled from "styled-components"

export const PostCardContainer = styled.div`
  padding: 1rem;
  width: 650px;
`

export const PostCardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
  }
`

export const PostCardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-bottom: 0.5rem;
`

export const PostCardDetails = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`

export const PostLink = styled.span`
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
