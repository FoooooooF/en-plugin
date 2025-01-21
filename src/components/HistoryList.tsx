//实现 HistoryList 组件
import React, { useMemo } from 'react'
import { useHistoryStorage } from '@/hooks/useHistoryStorage'

type TranslationRecord = {
  word: string
  translation: string
  timestamp: number
}

const HistoryList: React.FC = () => {
  const { translations } = useHistoryStorage()

  const sortedTranslations = useMemo(() => {
    return [...translations].sort((a, b) => b.timestamp - a.timestamp)
  }, [translations])

  const renderTranslationItem = (record: TranslationRecord) => {
    const formattedDate = new Date(record.timestamp).toLocaleString()

    return (
      <div 
        key={record.timestamp} 
        className="flex justify-between p-2 border-b hover:bg-gray-100 transition-colors"
      >
        <div className="flex-grow">
          <span className="font-semibold text-blue-600">{record.word}</span>
          <span className="ml-2 text-gray-700">{record.translation}</span>
        </div>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>
    )
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-xl font-bold p-4 border-b bg-gray-50">
        翻译历史
      </h2>
      {sortedTranslations.length === 0 ? (
        <div className="text-center p-4 text-gray-500">
          暂无翻译历史
        </div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          {sortedTranslations.map(renderTranslationItem)}
        </div>
      )}
    </div>
  )
}

export default HistoryList
