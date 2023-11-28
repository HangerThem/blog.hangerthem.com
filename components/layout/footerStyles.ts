import styled from "styled-components"

export const FooterContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(var(--night));
  width: 100%;
  height: 100px;
  gap: 0.75rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 60px;
    justify-content: space-between;
    gap: 0;
  }
`

export const FooterText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: rgb(var(--gray));

  a {
    color: inherit;
    transition: color 0.1s;

    &:hover {
      color: rgb(var(--silver));
    }
  }

  @media screen and (min-width: 768px) {
    flex: 1;
  }
`

export const FooterDivider = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    width: 1px;
    height: 35px;
    background-color: rgb(var(--gray));
  }
`
