import styled from "styled-components"

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  gap: 1rem;
  margin-bottom: 35vh;

  h2 {
    border-top: 1px solid #fff;
    font-size: 1.5rem;
    font-weight: 700;
    padding-top: 1rem;
    margin-top: 1rem;
  }

  ul {
    margin-left: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }
`

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
`
