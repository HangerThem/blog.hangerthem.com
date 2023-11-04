"use client"

import { requestAppData } from "@/services/api-services/appDataServices"
import { createContext, useState, useContext, useEffect } from "react"

interface AppContextData {
  categories: ICategory[]
  categoryOptions: SelectOption[]
  tags: ITag[]
  tagOptions: SelectOption[]
}

interface AppProviderProps {
  children: React.ReactNode
}

const AppContext = createContext<AppContextData | undefined>(undefined)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>([])
  const [categoryOptions, setCategoryOptions] = useState<SelectOption[]>([])
  const [tags, setTags] = useState<ITag[]>([])
  const [tagOptions, setTagOptions] = useState<SelectOption[]>([])

  useEffect(() => {
    requestAppData().then((res) => {
      setCategories(Object.values(res.categories))
      setTags(Object.values(res.tags))
      setCategoryOptions(
        Object.values(res.categories).map((category) => ({
          value: category.id,
          label: category.name,
        }))
      )
      setTagOptions(
        Object.values(res.tags).map((tag) => ({
          value: tag.id,
          label: `#${tag.name}`,
        }))
      )
    })
  }, [])

  return (
    <AppContext.Provider
      value={{
        categories,
        categoryOptions,
        tags,
        tagOptions,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
