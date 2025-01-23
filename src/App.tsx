import React, { useState } from 'react'
import RecordsInput from '@/components/RecordsInput'
import HistoryList from '@/components/HistoryList'
import { useHistoryStorage } from '@/hooks/useHistoryStorage'

const App: React.FC = () => {
  // 单词保存 成功后 刷新 HistoryList 列表
  const { addRecord } = useHistoryStorage()

  // 添加一个状态来控制 HistoryList 的刷新
  const [listKey, setListKey] = useState(0)

  const handleSave = (word: string) => {
    if (word.trim()) {
      addRecord(word, '')
      setListKey((prev) => prev + 1)
    }
  }
  return (
    <div className="w-[300px] p-4">
      <RecordsInput onSave={handleSave} />
      <HistoryList key={listKey} />
    </div>
  )
}

export default App
