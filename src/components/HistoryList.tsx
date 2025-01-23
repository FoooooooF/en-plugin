//实现 HistoryList 组件
import React, { useMemo } from 'react'
import { useHistoryStorage } from '@/hooks/useHistoryStorage'

type TranslationRecord = {
  word: string
  translation: string
  timestamp: number
}

const HistoryList: React.FC = () => {
  const { records } = useHistoryStorage()

  const sortedRecords = useMemo(() => {
    return [...records].sort((a, b) => b.timestamp - a.timestamp)
  }, [records])

  const renderRecordItem = (record: TranslationRecord) => {
    const formattedDate = new Date(record.timestamp).toLocaleString()

    return (
      <div
        key={record.timestamp}
        className=" p-2 border-b hover:bg-gray-100 transition-colors"
      >
        {/* 鼠标悬停显示日期 */}

        <div className="flex-grow flex justify-between" title={formattedDate}>
          <span className="font-semibold text-blue-600">{record.word}</span>
          <span className="ml-2 text-gray-700">
            {/* {record.translation || '--'} */}
          </span>
        </div>
        {/* <p className="text-sm text-gray-500">{formattedDate}</p> */}
      </div>
    )
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-xl font-bold p-4 border-b bg-gray-50 text-gray-500">
        历史
      </h2>
      {sortedRecords.length === 0 ? (
        <div className="text-center p-4 text-gray-500">暂无翻译历史</div>
      ) : (
        <div className="max-h-96 overflow-y-auto">
          {sortedRecords.map(renderRecordItem)}
        </div>
      )}
    </div>
  )
}

export default HistoryList
