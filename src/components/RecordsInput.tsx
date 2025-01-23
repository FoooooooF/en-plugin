import React, { useState } from 'react'
// import { useHistoryStorage } from '@/hooks/useHistoryStorage'

const RecordsInput: React.FC<{ onSave: (word: string) => void }> = ({
  onSave
}) => {
  const [word, setWord] = useState('')
  // const { addRecord } = useHistoryStorage()

  const handleSave = () => {
    onSave(word) // 传入空字符串作为翻译
  }

  return (
    <div className="space-y-2 pb-5">
      <textarea
        value={word}
        className="w-full border rounded-md p-2 h-50"
        placeholder="输入单词或者句子"
        onChange={(e) => setWord(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white p-2"
      >
        保存
      </button>
    </div>
  )
}

export default RecordsInput
