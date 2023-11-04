import styled from "styled-components"

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 1rem 2rem;
  height: 75px;
  background-color: rgb(var(--burgundy-red));
  border-bottom: 1px solid rgb(var(--burgundy-red));
`

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: rgb(var(--white-smoke));
    display: flex;
    font-weight: 600;
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
`

export const NavbarTitle = styled.h1`
  font-size: 2.25rem;
  margin: 0;
  color: rgb(var(--white-smoke));
`

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 1rem;
  a {
    color: rgb(var(--white-smoke));
    text-decoration: none;
    font-weight: 600;
  }
`
