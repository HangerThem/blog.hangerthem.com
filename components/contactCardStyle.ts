import styled from "styled-components";

export const ContactCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: fixed;
  left: 10%;
  top: 20%;
  padding: 1rem;

  @media screen and (max-width: 375px) {
    position: relative;
  }
`;

export const ContactCardLink = styled.div`
  padding: 0.5rem 0;
  transition: scale 0.125s ease-in-out;
  a {
    color: #fff;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 1.5rem;
  }
  :hover {
    scale: 1.1;
  }
`;
