<template>
  <div class="page">
    <button type="button" @click="getUserList">getUserList</button>
    <p v-for="(userName, index) in $accessor.userList.list" :key="index">
      {{ userName }}
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Firebase } from "~/services/firebase";

@Component
export default class UserList extends Vue {
  fire: Firebase = new Firebase(this.$accessor);

  getUserList() {
    this.fire.getList();
  }

  // get fullName(): string {
  //   return `${this.user.firstName} ${this.user.lastName}`;
  // }
}
</script>