const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('bsky', {
  post: (text) => ipcRenderer.invoke('post-to-bluesky', text)
})