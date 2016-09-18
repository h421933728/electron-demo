/**
 * Created by huangfei on 16/6/24.
 */
const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    createWindow2();
}

function createWindow2() {
    var win2 = new BrowserWindow({width:300, height: 200, modal:true, parent:mainWindow});
    win2.loadURL(`file://${__dirname}/index2.html`);
    win2.on('closed', () => {
        win2 = null;
});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
    app.quit();
}
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
    createWindow();
}
});
