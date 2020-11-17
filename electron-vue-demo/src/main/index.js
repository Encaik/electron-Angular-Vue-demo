"use strict";

import { app, BrowserWindow, ipcMain } from "electron";

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== "development") {
  global.__static = require("path")
    .join(__dirname, "/static")
    .replace(/\\/g, "\\\\");
}

let loginWin, listWin, chatWin;
const winURL =
  process.env.NODE_ENV === "development"
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`;

function createLoginWindow() {
  loginWin = new BrowserWindow({
    height: 600,
    width: 800,
    useContentSize: true,
  });

  loginWin.loadURL(winURL);

  loginWin.on("closed", () => {
    loginWin = null;
  });

  ipcMain.on("closeLogin", () => {
    loginWin.close();
  });
}

function createListWindow() {
  listWin = new BrowserWindow({
    height: 600,
    width: 300,
    useContentSize: true,
  });

  listWin.loadURL(winURL + "/#/list");

  listWin.on("closed", () => {
    listWin = null;
  });

  ipcMain.on("closeList", () => {
    listWin.close();
  });
}

function createChatWindow() {
  chatWin = new BrowserWindow({
    height: 765,
    width: 1280,
    useContentSize: true,
  });

  chatWin.loadURL(winURL + "/#/chat");

  chatWin.on("closed", () => {
    chatWin = null;
  });

  ipcMain.on("closeChat", () => {
    chatWin.close();
  });
}

app.on("ready", createLoginWindow);

ipcMain.on("openList", createListWindow);

ipcMain.on("openChat", createChatWindow);

ipcMain.on("closeAll", () => {
  if (loginWin !== null) {
    loginWin.close();
  }
  if (listWin !== null) {
    listWin.close();
  }
  if (chatWin !== null) {
    chatWin.close();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (loginWin === null) {
    createWindow();
  }
});
