// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight:550,
    minWidth: 650,
    backgroundColor: '#255255255',
    show: 'ready-to-show',
    icon: __dirname + '/icon.ico',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  mainWindow.setMenuBarVisibility(false)
 
  mainWindow.loadFile('index.html')


}


app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
  
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})