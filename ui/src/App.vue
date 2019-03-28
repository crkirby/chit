<template>
  <div id="app">
    <ChatRoom/>
  </div>
</template>

<script>
import ChatRoom from './views/ChatRoom.vue';

export default {
  name: 'app',
  components: {
    ChatRoom,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
