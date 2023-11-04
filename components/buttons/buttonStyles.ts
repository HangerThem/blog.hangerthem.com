import styled from "styled-components"

export const ButtonContainer = styled.button`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.small {
    padding: 0.5rem 1rem;
  }

  &.medium {
    padding: 0.5rem 2rem;
  }

  &.large {
    padding: 0.5rem 3.5rem;
  }

  &.primary {
    background-color: rgb(var(--cornell-red));
    color: rgb(var(--timberwolf));
    &:hover {
      background-color: rgb(var(--cornell-red-2));
    }
  }

  &.secondary {
    background-color: rgb(var(--timberwolf));
    color: rgb(var(--cornell-red));
    &:hover {
      background-color: rgb(var(--white-smoke));
    }
  }

  &.tertiary {
    background-color: transparent;
    color: rgb(var(--cornell-red));
    &:hover {
      background-color: rgb(var(--silver));
    }
  }

  &.outline {
    border: 1px solid rgb(var(--timberwolf));
    background-color: transparent;
    color: inherit;

    &:hover {
      color: rgb(var(--timberwolf));
      border: 1px solid rgb(var(--timberwolf));
      background-color: transparent;
    }
  }

  &.ghost {
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0;
    margin: 0;

    &:hover {
      background-color: transparent;
      border: 1px solid transparent;
      color: rgb(var(--white-smoke));
    }
  }

  &.full-width {
    width: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgb(var(--silver));
    border: 1px solid transparent;

    &:hover {
      background-color: rgb(var(--silver));
      border: 1px solid transparent;
    }
  }
`
