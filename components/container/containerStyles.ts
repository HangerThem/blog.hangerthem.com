import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`

export const PageContainerNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2rem 0;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
    text-align: left;
  }

  ul {
    list-style-type: upper-alpha;
    margin: 0;
    padding-inline-start: 1rem;

    li {
      line-height: 1.5rem;
    }

    ul {
      list-style-type: upper-roman;

      h3 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }

  a {
    color: rgb(var(--cornell-red));
    text-decoration: none;
    font-weight: 600;
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 135px - 2rem);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgb(var(--timberwolf)) rgb(var(--eerie-black));

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(var(--eerie-black));
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(var(--timberwolf));
    border-radius: 20px;
    border: 3px solid rgb(var(--eerie-black));
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgb(var(--timberwolf));
  }
`
