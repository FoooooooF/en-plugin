const fs = require('fs')
const path = require('path')

// 复制 manifest.json 到 dist 目录
const manifestPath = path.resolve(__dirname, '../public/manifest.json')
const distManifestPath = path.resolve(__dirname, '../dist/manifest.json')

fs.copyFileSync(manifestPath, distManifestPath)