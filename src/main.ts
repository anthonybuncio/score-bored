import { app, BrowserWindow, Menu, Tray } from "electron";
import * as path from "path";

let appIcon: Tray = null;
let mainWindow: any = undefined;

const assetsDirectory = path.join(__dirname, '../assets');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  // createWindow();

  // app.on("activate", function () {
  //   // On macOS it's common to re-create a window in the app when the
  //   // dock icon is clicked and there are no other windows open.
  //   if (BrowserWindow.getAllWindows().length === 0) createWindow();
  // });

  createTray();
  createWindow();
});

// Quit when all windows are closed, except on macOS. 
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});


const createTray = () => {
  appIcon = new Tray(path.join(assetsDirectory, 'white-icon.jpg'));

  appIcon.on('click', function (event) {
    toggleWindow();

  });
};

const getWindowPosition = () => {
  const windowBounds = mainWindow.getBounds();
  const trayBounds = appIcon.getBounds();

  // Center window horizontally below the tray icon
  const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2));

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height);

  return { x: x, y: y };
};

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },

  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

const toggleWindow = () => {
  if (mainWindow.isVisible()) {
    mainWindow.hide();
  } else {
    showWindow();
  }
};

const showWindow = () => {
  const position = getWindowPosition();
  mainWindow.setPosition(position.x, position.y, false);
  mainWindow.show();
  mainWindow.focus();
};