import { app, BrowserWindow, Menu, Tray } from "electron";
import * as path from "path";

let appIcon: Tray = null;
let mainWindow: any = undefined;

const assetsDirectory = path.join(__dirname, '../assets');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
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

    // Show devtools when command clicked
    if (mainWindow.isVisible() && process.defaultApp && event.metaKey) {
      mainWindow.openDevTools({ mode: 'detach' });
    }
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
    height: 450,
    width: 300,
    show: false,
    frame: false,
    fullscreenable: false,
    // resizable: false,
    transparent: true,
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
      // Prevents renderer process code from not running when window is hidden
      backgroundThrottling: false,
      nodeIntegration: true,
      contextIsolation: false
    },

  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "../index.html"));
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