import { useState, useEffect } from 'react'

type TranslationRecord = {
  id?: number
  word: string
  translation: string
  timestamp: number
}

export const useHistoryStorage = () => {
  const [records, setRecords] = useState<TranslationRecord[]>([])
  const [db, setDb] = useState<IDBDatabase | null>(null)

  useEffect(() => {
    const initDatabase = () => {
      const request = indexedDB.open('RecordsHistoryDB', 1)

      request.onupgradeneeded = (event) => {
        const db = request.result
        if (!db.objectStoreNames.contains('records')) {
          db.createObjectStore('records', {
            keyPath: 'id',
            autoIncrement: true
          })
        }
      }

      request.onsuccess = (event) => {
        const database = request.result
        setDb(database)
        loadRecords(database)
      }

      request.onerror = (event) => {
        console.error('IndexedDB error:', request.error)
      }
    }

    initDatabase()
  }, [])

  // 加载记录
  const loadRecords = (database: IDBDatabase) => {
    const transaction = database.transaction(['records'], 'readonly')
    const store = transaction.objectStore('records')
    const request = store.getAll()

    request.onsuccess = () => {
      const sortedRecords = request.result.sort(
        (a, b) => b.timestamp - a.timestamp
      )
      setRecords(sortedRecords)
    }
  }

  // 添加记录
  const addRecord = (word: string, translation: string) => {
    if (!db) return

    const newRecord: Omit<TranslationRecord, 'id'> = {
      word,
      translation,
      timestamp: Date.now()
    }

    const transaction = db.transaction(['records'], 'readwrite')
    const store = transaction.objectStore('records')
    const request = store.add(newRecord)

    request.onsuccess = () => {
      loadRecords(db)
    }
  }
  // 删除记录
  const deleteRecord = (id: number) => {
    if (!db) return

    const transaction = db.transaction(['records'], 'readwrite')
    const store = transaction.objectStore('records')
    const request = store.delete(id)

    request.onsuccess = () => {
      loadRecords(db)
    }
  }
  //修改记录
  const updateRecord = (id: number, word: string, translation: string) => {
    if (!db) return

    const newRecord: Omit<TranslationRecord, 'id'> = {
      word,
      translation,
      timestamp: Date.now()
    }

    const transaction = db.transaction(['records'], 'readwrite')
    const store = transaction.objectStore('records')
    const request = store.put({ ...newRecord, id })

    request.onsuccess = () => {
      loadRecords(db)
    }
  }

  // 清空记录
  const clearRecords = () => {
    if (!db) return

    const transaction = db.transaction(['records'], 'readwrite')
    const store = transaction.objectStore('records')
    const request = store.clear()

    request.onsuccess = () => {
      setRecords([])
    }
  }

  return {
    records,
    addRecord,
    deleteRecord,
    clearRecords,
    updateRecord
  }
}
