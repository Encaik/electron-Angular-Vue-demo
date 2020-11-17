<template>
  <div id="wrapper">
    <p @click="open">open</p>
    <p @click="close">close</p>
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
const BrowserWindow = remote.BrowserWindow;
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      ipcRenderer.send("openChat");
    },
    close() {
      ipcRenderer.send("closeAll");
    },
  },
};
</script>

<style>
</style>
