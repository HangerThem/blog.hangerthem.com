import styled from "styled-components"

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
  min-height: calc(100vh - 135px - 2rem);
  width: calc(100% - 2rem);
`

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`

export const PostTag = styled.span`
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 8px;
  color: rgb(var(--white-smoke));
  background-color: rgb(var(--cornell-red));
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  width: 100%;

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    width: 100%;
  }

  a {
    color: rgb(var(--cornell-red));
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`

export const PostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const PostAuthor = styled.p`
  font-size: 0.8rem;
  margin: 0;
  text-align: right;
`

export const PostDate = styled.p`
  font-size: 0.8rem;
  margin: 0;
`

export const PostCategory = styled.p`
  font-size: 0.9rem;
  margin: 0;
`

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`

export const PostHeader = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 4px;
`
