<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <h3>Create your own study group now!</h3>
      <p>
        Group Name: <input type="text" v-model="newGroupParams.name" />
      </p>
      <p>
        Subject: <input type="text" v-model="newGroupParams.subject" />
      </p>
      <p>
        Location/Zipcode: <input type="text" v-model="newGroupParams.zipcode" />
      </p>
      <p>
        Maximum Number of Students: <input type="text" v-model="newGroupParams.max_students" />
      </p>
      <p>
        Group Description: <input type="text" v-model="newGroupParams.description" />
      </p>
      <button v-on:click="createGroup()">Create Group</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newGroupParams: {},
    };
  },
  methods: {
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
      this.$router.push("/groups");
    },
  },
};
</script>