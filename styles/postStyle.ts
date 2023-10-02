import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 750px;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PostError = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-size: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;
