<template>
  <div class="home">

    <h1>{{ message }}</h1>

    <div v-for="group in groups" v-bind:key="group.id">
      <p>{{ group.subject }}</p>
      <p>{{ group.zipcode }}</p>
      <p>{{ group.user_id }}</p>
      <p>{{ group.id }}</p>
      <hr>
    </div>
    <div>
      <p>
        Subject: <input type="text" v-model="newGroupParams.subject" />
      </p>
      <p>
        Zipcode: <input type="text" v-model="newGroupParams.zipcode" />
      </p>
      <p>
        Maximum Number of Students: <input type="text" v-model="newGroupParams.max_students" />
      </p>
      <p>
        Owner ID: <input type="text" v-model="newGroupParams.user_id" />
      </p>
      <button v-on:click="createGroup()">Create Group</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      groups: [],
      newGroupParams: {},
    };
  },
  created: function () {
    // this.groupsIndex();
  },
  methods: {
    groupsIndex: function () {
      axios.get("/groups").then((response) => {
        console.log("groups index", response);
        this.groups = response.data;
      });
    },
    createGroup: function () {
      axios
        .post("/groups", this.newGroupParams)
        .then((response) => {
          console.log("groups create", response);
          this.groups.push(response.data);
          this.newGroupParams = {};
        })
        .catch((error) => {
          console.log("groups create error", error.response);
        });
    },
  },
};
</script>