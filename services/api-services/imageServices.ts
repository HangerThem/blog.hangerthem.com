import { requestPostFormData } from "@/helpers/requestHelper"

const requestUploadImage = async (
  formData: FormData
): Promise<IUploadImageResponse> => {
  return await requestPostFormData<IUploadImageResponse>("/images", formData)
}

export { requestUploadImage }
