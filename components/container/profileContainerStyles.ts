import styled from "styled-components"

export const ProfileContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: calc(100vw - 2rem);
  max-width: 800px;
  gap: 1rem;
  min-height: calc(100vh - 135px - 2rem);

  li {
    list-style-type: none;
    margin-bottom: 0.5rem;
  }
`

export const ProfileTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`
