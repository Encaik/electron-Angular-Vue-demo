<template>
  <div>
    <p @click="open">登录</p>
    <p @click="close">取消</p>
  </div>
</template>

<script>
import { remote, ipcRenderer, ipcMain } from "electron";
const BrowserWindow = remote.BrowserWindow;
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      ipcRenderer.send("closeLogin");
      ipcRenderer.send("openList");
    },
    close() {
      ipcRenderer.send("closeLogin");
    },
  },
};
</script>

<style>
</style>
