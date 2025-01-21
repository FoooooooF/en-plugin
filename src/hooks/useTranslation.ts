import { useState } from 'react';
import { translateWord } from '../services/translationService';

export const useTranslation = () => {
  const [translation, setTranslation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const translate = async (word: string) => {
    setIsLoading(true);
    try {
      const result = await translateWord(word);
      setTranslation(result);
    } catch (error) {
      setTranslation(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { translation, isLoading, translate };
};