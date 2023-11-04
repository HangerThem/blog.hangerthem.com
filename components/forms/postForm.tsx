"use client"

import { useEffect, useState, useCallback } from "react"
import selectStyles from "@/styles/selectStyles"
import Select from "react-select"
import hljs from "highlight.js"
import SimpleMDE from "react-simplemde-editor"
import Button from "@/components/buttons/button"
import {
  FormContainer,
  FormField,
  FormInput,
  FormLabel,
  FormTitle,
  NewPostForm,
} from "@/components/forms/formStyles"
import { Modal, ModalBody } from "@/components/modal/modalStyles"
import ImageDialog from "@/components/dialogs/imageDialog"
import { requestCreatePost } from "@/services/api-services/postServices"
import { useApp } from "@/context/appContext"
import "easymde/dist/easymde.min.css"
import "highlight.js/styles/github.css"

export default function NewPost() {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const { tagOptions, categoryOptions } = useApp()

  const onChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  useEffect(() => {
    hljs.highlightAll()
  }, [])

  useEffect(() => {
    hljs.highlightAll()
  }, [value])

  const handleShortCut = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log(e)
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.preventDefault()
      setIsImageOpen(true)
    }
  }

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const title = formData.get("title")
    const tags = formData.getAll("tags") as string[]
    const categories = formData.getAll("categories")[0] as string
    const content = value

    if (content.length < 10) return alert("Content is too short")

    requestCreatePost(title?.toString() || "", tags, categories, content)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (!categoryOptions || !tagOptions) return <div>Loading...</div>

  return (
    <FormContainer onKeyDown={(e: any) => handleShortCut(e)}>
      <Modal show={isImageOpen}>
        <ModalBody>
          <ImageDialog
            onClose={() => setIsImageOpen(false)}
            onImageSelected={() => {}}
            onSuccessfulUpload={(image) =>
              setValue(`${value} ![image](${image})`)
            }
          />
        </ModalBody>
      </Modal>
      <NewPostForm onSubmit={handlePostSubmit}>
        <FormTitle>Create a new post</FormTitle>
        <FormField>
          <FormInput type="text" id="title" name="title" required />
          <FormLabel htmlFor="title">Title</FormLabel>
        </FormField>
        <Select
          options={tagOptions}
          isMulti
          name="tags"
          styles={selectStyles}
          placeholder="Select tags"
          required
        />
        <Select
          options={categoryOptions}
          name="categories"
          styles={selectStyles}
          placeholder="Select a category"
          required
        />
        <SimpleMDE value={value} onChange={onChange} />
        <Button
          type="submit"
          variant="solid"
          color="primary"
          className="full-width"
        >
          Submit
        </Button>
      </NewPostForm>
    </FormContainer>
  )
}
