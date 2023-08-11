import styled from "styled-components";

export const FooterContainer = styled.div`
  color: #fff;
  background-color: #000;
  padding: 1rem;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LinkStyle = styled.span`
  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
