<template>
  <div id="wrapper">
    <h1>Detail</h1>
    <router-link to="/home">go to home</router-link>
  </div>
</template>

<script>
import { remote, ipcRenderer, ipcMain } from "electron";
const BrowserWindow = remote.BrowserWindow;
export default {
  methods: {
    close() {
      ipcRenderer.send("closeChat");
    },
  },
};
</script>

<style>
</style>
