import React, { useState } from 'react';
import TranslationPopup from './components/TranslationPopup';
import HistoryList from './components/HistoryList';

const App: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState('');

  return (
    <div className="w-[300px] p-4">
      <TranslationPopup 
        word={selectedWord} 
        onWordChange={setSelectedWord} 
      />
      <HistoryList />
    </div>
  );
};

export default App;
