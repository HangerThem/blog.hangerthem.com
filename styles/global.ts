import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=K2D&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;

    &::selection {
      background-color: rgb(var(--cornell-red));
      color: rgb(var(--white-smoke));
    }
  }

  body {
    font-family: 'K2D', sans-serif;
    color: rgb(var(--white-smoke));
    background-color: rgb(var(--eerie-black));
    height: 100vh;
  }

  #simplemde-editor-2-wrapper {
    color: rgb(var(--night));
    width: calc(100% - 2rem);

    .editor-toolbar {
      background-color: rgb(var(--night));
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.25rem;

      button {
        color: rgb(var(--white-smoke));
        background-color: rgba(var(--eerie-black), 0.75);

        &.active {
          background-color: rgb(var(--cornell-red));
        }

        &:hover {
          background-color: rgb(var(--cornell-red));
        }

        i {
          color: rgb(var(--white-smoke));
        }
      }
    }

    .CodeMirror {
      height: 100%;
      background-color: rgb(var(--night));
      color: rgb(var(--white-smoke));

      .presentation {
        color: rgb(var(--success));
      }

      .cm-spell-error {
        color: rgb(var(--danger));
      }
    }
  }

  .CodeMirror-cursor {
    border-left: 1px solid #ff0000;
  }
`
