import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前模块的文件路径
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 复制 manifest.json 到 dist 目录
const manifestPath = path.resolve(__dirname, '../public/manifest.json')
const distManifestPath = path.resolve(__dirname, '../dist/manifest.json')

fs.copyFileSync(manifestPath, distManifestPath)
