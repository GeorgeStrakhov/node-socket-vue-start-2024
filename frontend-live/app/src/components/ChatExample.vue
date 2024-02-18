<template>
  <div>
    <h1>Real-time Chat</h1>
    <input type="text" v-model="message" @keyup.enter="sendMessage" />
    <ul>
      <li v-for="msg in messages" :key="msg">{{ msg }}</li>
    </ul>
  </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import io from 'socket.io-client';

    const message = ref('');
    const messages = ref([]);
    let socket;

    onMounted(() => {
        socket = io('/', { path: '/api/socket.io' });

        socket.on('chat message', (msg) => {
            messages.value.push(msg);
        });
    });

    function sendMessage() {
        console.log('message.value', message.value);
        if (message.value.trim()) {
            socket.emit('chat message', message.value);
            message.value = '';
        }
    }
</script>

