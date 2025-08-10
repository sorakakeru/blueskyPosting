const { app, Menu } = require('electron')

const isMac = process.platform === 'darwin'

// メニューのテンプレート配列
const menuTmpl = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New Window',
        accelerator: process.platform === 'darwin' ? 'Cmd+N' : 'Shift+N',
        click: () => { createWindow() }
      },
      process.platform === 'darwin' ? { role: 'close' } : { role: 'quit' }
    ]
  },
  //{ role: 'fileMenu' },
  { role: 'editMenu' },
  { role: 'help', submenu: [{ role: 'about' }] },
];

if (isMac) menuTmpl.unshift({ role: 'appMenu' });

module.exports = {
  menuTmpl: Menu.buildFromTemplate(menuTmpl)
}
