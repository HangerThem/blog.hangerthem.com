// Modal,
// ModalBody,
// ModalFooter,
// ModalHeader,
// ModalTitle,

import styled from "styled-components"

interface ModalProps {
  show: boolean
}

export const Modal = styled.div<ModalProps>`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: rgba(var(--night), 0.75);
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`

export const ModalBody = styled.div`
  background-color: rgb(var(--night));
  border: 1px solid rgb(var(--eerie-black));
  max-width: 500px;
  padding: 1rem;
  height: fit-content;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`
