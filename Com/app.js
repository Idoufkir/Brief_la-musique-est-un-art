
const { app, BrowserWindow } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) {
  app.quit();
}


// -------------------  Create the browser window.  ------------------- //
const createWindow = () => {
  
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    webPreferences: {
      nodeIntegration: true
  }, 
  
  });

  // -------------------  index HTML  ------------------- //
  mainWindow.loadFile(path.join(__dirname, './view/index.html'));
  mainWindow.setMenuBarVisibility(false);
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//reloading tool comand
try {
	require('electron-reloader')(module);
} catch (_) {}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

try {
	require('electron-reloader')(__dirname, {ignored: /Data\\Musiques.txt|[\/\\]\./});
} catch (_) {}