const { app, BrowserWindow, Menu, globalShortcut, ipcMain } = require('electron')
const path = require('path')
require('dotenv').config({ path: `${__dirname}/../.env` })

//アプリウインドウ
function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 180,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })
  win.loadFile('./src/index.html')
}

//アプリメニュー
const { menuTmpl } = require('./menu')
Menu.setApplicationMenu(menuTmpl)

//アプリ画面の挙動
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  globalShortcut.register('Alt+CommandOrControl+B', () => {
    createWindow()
  })
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//アプリアバウト表示
app.setAboutPanelOptions({
  applicationName: app.name,
  applicationVersion: process.platform === 'darwin'
    ? app.getVersion()
    : `v${app.getVersion()} (electron@${process.versions['electron']})`,
  copyright: 'Copyright 2025 Yamatsu and more',
  version: `electron@${process.versions['electron']}`, //macのみ
  iconPath: path.join(__dirname, 'icon.png'), //win,linux
});

//プロセス間通信
ipcMain.handle('post-to-bluesky', async (e, text) => {
  const { postToBsky } = require('./bsky')
  return await postToBsky(text)
})
