import React, { useState, KeyboardEvent } from 'react'
// import { useHistoryStorage } from '@/hooks/useHistoryStorage'

const RecordsInput: React.FC<{ onSave: (word: string) => void }> = ({
  onSave
}) => {
  const [word, setWord] = useState('')
  // const { addRecord } = useHistoryStorage()

  const handleSave = () => {
    if (word.trim()) {
      onSave(word)
      setWord('') // 保存后清空输入框
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // 按下 Enter 键且没有按 Ctrl 键时保存
    if (e.key === 'Enter' && !e.ctrlKey) {
      e.preventDefault()
      handleSave()
    }

    // Ctrl+Enter 触发换行
    if (e.key === 'Enter' && e.ctrlKey) {
      e.preventDefault()
      const start = e.currentTarget.selectionStart
      const end = e.currentTarget.selectionEnd
      const newValue = word.slice(0, start) + '\n' + word.slice(end)
      setWord(newValue)
    }
  }

  return (
    <div className="space-y-2 pb-5">
      <textarea
        value={word}
        className="w-full border rounded-md p-2 h-50"
        placeholder="输入单词或者句子"
        onChange={(e) => setWord(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white p-2"
        disabled={!word.trim()} // 当输入为空时禁用按钮
      >
        保存
      </button>
    </div>
  )
}

export default RecordsInput
