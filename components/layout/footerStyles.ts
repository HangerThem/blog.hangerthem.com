import styled from "styled-components"

export const FooterContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-inline: 20px;
  background-color: rgb(var(--night));
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    height: fit-content;
    padding: 16px;
  }
`

export const FooterText = styled.p`
  flex: 1;
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
`

export const FooterDivider = styled.div`
  width: 1px;
  height: 35px;
  background-color: rgb(var(--gray));

  @media screen and (max-width: 768px) {
    display: none;
  }
`
