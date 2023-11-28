import styled from "styled-components"

interface NavbarProps {
  open: boolean
}

export const NavbarContainer = styled.nav<NavbarProps>`
  width: 100%;
  height: 75px;
  ${({ open }) =>
    open
      ? `
    position: absolute;
    display: grid;
    height: 100vh;
    z-index: 1;
    top: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 42.25px auto;
    grid-template-areas: "🖼 🍔" "📃 📃";
  `
      : `
    position: relative;
    display: flex;
  `}
  justify-content: space-between;
  padding: 1rem;
  background-color: rgb(var(--burgundy-red));
  border-bottom: 1px solid rgb(var(--burgundy-red));

  @media screen and (min-width: 528px) {
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
  }
`

export const NavbarHeader = styled.div`
  display: flex;
  align-items: center;
  grid-area: 🖼;

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

export const NavbarLinks = styled.div<NavbarProps>`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  grid-area: 📃;

  a {
    color: rgb(var(--white-smoke));
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
  }

  @media screen and (min-width: 528px) {
    display: flex;
    flex-direction: row;
    height: fit-content;

    a {
      font-size: 1rem;
    }
  }
`

export const NavDivider = styled.div`
  display: none;

  @media screen and (min-width: 528px) {
    display: block;
    width: 1px;
    height: 30px;
    background-color: rgb(var(--white-smoke));
  }
`

export const NavHamburger = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 50%;
  grid-area: 🍔;
  cursor: pointer;

  @media screen and (min-width: 528px) {
    display: none;
  }
`

export const Hamburger = styled.div<NavbarProps>`
  width: 30px;
  height: 3px;
  background-color: rgb(var(--white-smoke));
  border-radius: 3px;
  transition: all 0.2s ease-in-out;
  position: relative;
  transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: rgb(var(--white-smoke));
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    transform: ${({ open }) =>
      open ? "translateY(0) rotate(90deg)" : "translateY(-8px) rotate(0)"};
  }

  &::after {
    transform: ${({ open }) =>
      open ? "translateY(0) rotate(90deg)" : "translateY(8px) rotate(0)"};
  }
`
