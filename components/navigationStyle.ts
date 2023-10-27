import styled from "styled-components"

export const Header = styled.div`
  background-color: #c90e0e;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
`

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  a {
    color: #fff;
    text-decoration: none;
  }
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
`

export const HeaderLink = styled.span`
  a {
    color: #fff;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`
