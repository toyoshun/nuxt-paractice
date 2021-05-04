<template>
  <div class="page">
    <label>
      <span> name: </span>
      <input type="text" v-model="user.name" />
    </label>
    <label>
      <span> tel: </span>
      <input type="text" v-model="user.tel" />
    </label>
    <button type="button" @click="submit">Submit</button>
    <br />
    <button type="button" @click="getUser">getUser</button>
    <p>{{ $accessor.userInfo.name }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Firebase } from "~/services/firebase";

interface User {
  name: string;
  tel: string;
}

export const user: User = {
    name: "",
    tel: "",
  };

@Component
export default class Resister extends Vue {
  fire: Firebase = new Firebase(this.$accessor);
  user: User = {
    name: "",
    tel: "",
  };

  //  登録
  async submit() {
    await this.fire.addUser(this.user.name, this.user.tel);
    console.log("Success!!");
  }
  //  dbから取得
  async getUser() {
    this.fire.getData(this.$accessor.userInfo.id);
  }
}
</script>