"use client"
import { useParams } from "next/navigation"

export interface LangProps {
  lang: string
}

export const useLang = () => {
  const params = useParams<{ [key: string]: string }>()
  return params.lang
}
