import {
  QuoteCardContainer,
  QuoteCardText,
  QuoteCardAuthor,
  QuoteCardTitle,
  QuoteCardDivider,
  QuoteCardDetails,
} from "./quoteCardStyle"

interface QuoteCardProps {
  quote: {
    id: number
    title: string
    date: Date
    type: string
    content: string
    author: string
  }
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <QuoteCardContainer key={quote.id}>
      <QuoteCardTitle>{quote.title}</QuoteCardTitle>
      <QuoteCardDivider />
      <QuoteCardDetails>
        {quote.date.toLocaleDateString()} •{" "}
        {quote.type[0].toUpperCase() + quote.type.slice(1)}
      </QuoteCardDetails>
      <QuoteCardText>{quote.content}</QuoteCardText>
      <QuoteCardAuthor>- {quote.author}</QuoteCardAuthor>
    </QuoteCardContainer>
  )
}

export default QuoteCard
