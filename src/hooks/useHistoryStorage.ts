import { useState, useEffect } from 'react'

type TranslationRecord = {
  word: string
  translation: string
  timestamp: number
}

export const useHistoryStorage = () => {
  const [translations, setTranslations] = useState<TranslationRecord[]>([])

  useEffect(() => {
    const loadTranslations = () => {
      const storedTranslations = localStorage.getItem('translationHistory')
      if (storedTranslations) {
        setTranslations(JSON.parse(storedTranslations))
      }
    }

    loadTranslations()
  }, [])

  const addTranslation = (word: string, translation: string) => {
    const newRecord: TranslationRecord = {
      word,
      translation,
      timestamp: Date.now()
    }

    const updatedTranslations = [newRecord, ...translations]
    setTranslations(updatedTranslations)
    localStorage.setItem('translationHistory', JSON.stringify(updatedTranslations))
  }

  const clearTranslations = () => {
    setTranslations([])
    localStorage.removeItem('translationHistory')
  }

  return {
    translations,
    addTranslation,
    clearTranslations
  }
} 