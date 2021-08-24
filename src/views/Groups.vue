<template>
  <div class="groups">
    <br>
    <br>
    <br>
    <br>
    <!-- SHOW GROUP INFO -->
    <p>Search Group: <input v-model="searchTerm"></p>
    <hr> 
    <div v-for="group in filterBy(groups, searchTerm) ">
      <p>{{ group.name }}</p> 
      <p>{{ group.description }}</p>
      <button v-on:click="showGroup(group)">More info</button>
      <hr>
    </div>
    <!-- UPDATE/DESTROY GROUP INFO -->
    <div>
      <dialog id="group-details">
        <form method="dialog">
          <p>
            Group Name: <input type="text" v-model="currentGroup.name" />
          </p>
          <p>
            Subject: <input type="text" v-model="currentGroup.subject" />
          </p>
          <p>
            Location/Zipcode: <input type="text" v-model="currentGroup.zipcode" />
          </p>
          <p>
            Maximum Number of Students: <input type="text" v-model="currentGroup.max_students" />
          </p>
          <p>
            Owner ID: <input type="text" v-model="currentGroup.user_id" />
          </p>
          <p>
            Group Description: <input type="text" v-model="currentGroup.description" />
          </p>
          <button v-on:click="updateGroup(currentGroup)">Update Group Info</button> |
          <button v-on:click="destroyGroup(currentGroup)">Destroy Group</button> |
          <button v-on:click="joinGroup(currentGroup)">Join Group</button> |
          <button>Close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      groups: [],
      currentGroup: {},
      joinedGroups: { status: "joined", group_id: this.$route.params.id },
      searchTerm: "",
    };
  },
  created: function () {
    this.indexGroup();
  },
  methods: {
    indexGroup: function () {
      axios.get("/groups").then((response) => {
        console.log("groups index", response);
        this.groups = response.data;
      });
    },
    showGroup: function (group) {
      this.currentGroup = group;
      document.querySelector("#group-details").showModal();
    },
    updateGroup: function (group) {
      var editGroupParams = group;
      axios
        .patch("/groups/" + group.id, editGroupParams)
        .then((response) => {
          console.log("groups update", response);
          this.currentGroup = {};
        })
        .catch((error) => {
          console.log("groups update error", error.response);
        });
    },
    joinGroup: function (group) {
      var params = {
        status: "joined",
        group_id: group.id,
      };
      axios
        .post("/joined_groups", params)
        .then((response) => {
          console.log("join group", response);
        })
        .catch((error) => {
          console.log("join group error", error.response);
        });
    },
    destroyGroup: function (group) {
      axios.delete("/groups/" + group.id).then((response) => {
        console.log("groups destroy", response);
        var index = this.groups.indexOf(group);
        this.groups.splice(index, 1);
      });
    },
  },
};
</script>