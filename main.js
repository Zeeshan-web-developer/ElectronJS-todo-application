/**
 * @Author: Zeeshan  Ahmad
 * @Date:   2021-03-17 21:49:39
 * @Last Modified by:   Zeeshan  Ahmad
 * @Last Modified time: 2021-03-19 09:21:34
 */

const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: { nodeIntegration: true },
    });

    mainWindow.loadFile("index.html");

    mainWindow.webContents.openDevTools(); //opening developer tools

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}

app.whenReady().then(() => {
    console.log("app is ready");
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (mainWindow === null) createWindow();
});