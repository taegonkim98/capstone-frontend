<template>
  <div class = "joinedGroups">
    <!-- SHOW JOINED GROUPS -->
    <p>Search: <input v-model="searchTerm"></p>
    <div v-for="joined_group in filterBy(joined_groups, searchTerm) ">
      <p v-on:click="goToShow(joined_group)">{{ joined_group.group.name }}</p>
      <button v-on:click="showGroup(joined_group)">More info</button>
      <hr>
    </div>
    <!-- SHOW JOINED GROUP INFO / LEAVE GROUP -->
    <dialog id="joinedGroup-details">
      <form method="dialog">
        <h1>Group Information</h1>
        <p>Group Name: {{ currentGroup.group.name }}</p> 
        <p>Subject: {{ currentGroup.group.subject }}</p> 
        <p>Zipcode/Location: {{ currentGroup.group.zipcode }}</p>
        <p>Maximum Number of Students: {{ currentGroup.group.max_students }}</p> 
        <p>Owner ID: {{ currentGroup.group.user_id }}</p>
        <p>Group Description: {{ currentGroup.group.description }}</p>
        <button v-on:click="destroyGroup(currentGroup)">Leave Group</button> |
        <button>Close</button>
      </form>
    </dialog>
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
      joined_groups: [],
      currentGroup: { group: {} },
      searchTerm: "",
    };
  },
  created: function () {
    this.indexGroup();
  },
  methods: {
    indexGroup: function () {
      axios.get("/joined_groups").then((response) => {
        console.log("joined groups index", response);
        this.joined_groups = response.data;
      });
    },
    showGroup: function (joined_group) {
      this.currentGroup = joined_group;
      document.querySelector("#joinedGroup-details").showModal();
    },
    destroyGroup: function (joined_group) {
      axios.delete("/joined_groups/" + joined_group.id).then((response) => {
        console.log("leave group", response);
        var index = this.joined_groups.indexOf(joined_group);
        this.joined_groups.splice(index, 1);
      });
    },
    goToShow: function (joined_group) {
      this.$router.push(`/groups/${joined_group.group.id}`);
    },
  },
};
</script>