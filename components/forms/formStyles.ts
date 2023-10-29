import styled from "styled-components"

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgb(var(--night));
  padding: 2rem;
  border-radius: 1rem;
  width: 350px;
`

export const FormTitle = styled.h1`
  font-size: 1.75rem;
  margin: 0;
  margin-bottom: 1.5rem;
`

export const FormFieldHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  justify-content: center;
`

export const FormLabel = styled.label`
  position: absolute;
  left: 0.75rem;
  color: rgb(var(--silver));
  background-color: rgb(var(--night));
  font-size: 0.75rem;
  margin-top: -0.5rem;
  padding-inline: 0.25rem;
`

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  &.error {
    input {
      border: 1px solid rgb(var(--danger));
    }
    label {
      color: rgb(var(--danger));
    }
  }
`

export const FormInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  background-color: transparent;
  border: 1px solid rgb(var(--eerie-black));
  outline: none;
  border-radius: 0.5rem;
  width: 100%;
  color: rgb(var(--timberwolf));

  &[data-password] {
    padding-inline-end: 2rem;
  }

  &:focus {
    border: 1px solid rgb(var(--timberwolf));
  }

  &:focus + ${FormLabel} {
    color: rgb(var(--timberwolf));
  }
`

export const FormTextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`

export const FormButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: rgb(var(--cornell-red));
  border: none;
  border-radius: 0.5rem;
  color: rgb(var(--timberwolf));
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgb(var(--cornell-red-2));
  }
`

export const FormError = styled.p`
  font-size: 0.75rem;
  color: rgb(var(--danger));
  margin-left: 0.75rem;
`

export const FormErrorList = styled.ul`
  font-size: 0.75rem;
  color: rgb(var(--danger));
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  max-width: 300px;
`

export const FormSuccess = styled.div`
  font-size: 1.5rem;
  color: rgb(var(--success));
  margin-bottom: 1rem;
`

export const FormCheckbox = styled.input`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  accent-color: rgb(var(--cornell-red));
  cursor: pointer;
`

export const FormCheckboxLabel = styled.label`
  font-size: 0.75rem;
  cursor: pointer;
`

export const FormPasswordVisibility = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0.5rem;
  top: 0.7rem;
  cursor: pointer;
`

export const FormLink = styled.p`
  font-size: 0.75rem;
  color: rgb(var(--timberwolf));
  a {
    color: rgb(var(--cornell-red));
  }
`
