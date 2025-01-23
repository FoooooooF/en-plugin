import { useState, useEffect } from 'react'
import { translateWord } from '@/services/translationService'

export const useTranslation = (word: string) => {
  const [translation, setTranslation] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!word) return

    const fetchTranslation = async () => {
      setIsLoading(true)
      try {
        const result = await translateWord(word)
        setTranslation(result)
      } catch (error) {
        console.error('翻译错误', error)
        setTranslation(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTranslation()
  }, [word])

  return { translation, isLoading }
}
