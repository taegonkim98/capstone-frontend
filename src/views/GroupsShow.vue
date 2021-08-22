<template>
  <div class="home">
    <h1>{{ welcome }}</h1>
    <div v-for="message in messages"> {{message.text}} </div>

    Chat:<input type="text" v-model="newMessage" />
    <button v-on:click="createMessage()">Send</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      welcome: "Welcome to Group!",
      messages: [],
      newMessage: "",
    };
  },
  created: function () {
    this.indexMessages();
  },
  methods: {
    indexMessages: function () {
      axios
        .get(`/messages?group_id=${this.$route.params.id}`)
        .then((response) => {
          console.log("messages index", response);
          this.messages = response.data;
        });
    },
    createMessage: function () {
      axios
        .post("/messages", {
          text: this.newMessage,
          group_id: this.$route.params.id,
        })
        .then((response) => {
          console.log("messages create", response);
          this.photos.push(response.data);
          this.newMessage = "";
        })
        .catch((error) => {
          console.log("messages create error", error.response);
        });
    },
  },
};
</script>