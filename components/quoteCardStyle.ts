import styled from "styled-components"

export const QuoteCardContainer = styled.div`
  padding: 1rem;
  width: 650px;
`

export const QuoteCardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  a {
    color: #fff;
    text-decoration: none;
  }
`

export const QuoteCardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-bottom: 0.5rem;
`

export const QuoteCardAuthor = styled.p`
  margin-top: 0.5rem;
  font-style: italic;
`

export const QuoteCardText = styled.q`
  font-size: 1.5rem;
  font-weight: 400;
`

export const QuoteCardDetails = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`
