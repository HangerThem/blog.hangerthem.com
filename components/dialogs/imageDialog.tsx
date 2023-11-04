import React, { useState } from "react"
import Button from "@/components/buttons/button"
import { requestUploadImage } from "@/services/api-services/imageServices"
import { Upload } from "react-bootstrap-icons"

interface ImageDialogProps {
  onClose: () => void
  onImageSelected: (image: string) => void
  onSuccessfulUpload: (image: string) => void
}

const ImageDialog: React.FC<ImageDialogProps> = ({
  onClose,
  onImageSelected,
  onSuccessfulUpload,
}) => {
  const [image, setImage] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const handleImageSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setImage(file)
    }
  }

  const handleUpload = async () => {
    if (!image) return
    setUploading(true)
    const formData = new FormData()
    formData.set("image", image)
    const res = await requestUploadImage(formData)
    if (res.error) {
      setUploadError(res.error)
      setUploading(false)
      return
    }
    setUploading(false)
    if (!res.imageUrl) return
    onSuccessfulUpload(res.imageUrl)
    onImageSelected(res.imageUrl)
  }

  return (
    <>
      <h1>Upload image</h1>
      <Button type="button" size="small" variant="solid" color="primary">
        <label htmlFor="image" style={{ cursor: "pointer" }}>
          <Upload /> Select image
        </label>
      </Button>
      {image && (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            style={{ width: "100%", height: "auto", maxHeight: "250px" }}
          />
        </div>
      )}
      <input
        type="file"
        onChange={handleImageSelected}
        id="image"
        style={{ display: "none" }}
      />
      <Button onClick={handleUpload} type="button" disabled={uploading}>
        Upload
      </Button>
      <Button onClick={onClose}>Cancel</Button>
      {uploadError && <div>{uploadError}</div>}
    </>
  )
}

export default ImageDialog
