import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface TranslationPopupProps {
  word: string;
  onWordChange: (word: string) => void;
}

const TranslationPopup: React.FC<TranslationPopupProps> = ({ word, onWordChange }) => {
  const { translation, isLoading, translate } = useTranslation();

  const handleTranslate = () => {
    translate(word);
  };

  return (
    <div className="space-y-2">
      <input 
        type="text" 
        value={word}
        onChange={(e) => onWordChange(e.target.value)}
        className="w-full border p-2"
        placeholder="输入要翻译的单词"
      />
      <button 
        onClick={handleTranslate}
        className="w-full bg-blue-500 text-white p-2"
      >
        翻译
      </button>
      {isLoading && <p>加载中...</p>}
      {translation && <div>{translation}</div>}
    </div>
  );
};

export default TranslationPopup;