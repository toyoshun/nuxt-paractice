<template>
 <div class="page">
   <label>
     <span>
       name:
     </span>
     <input
       type="text"
       v-model="user.name"
     >
   </label>
   <label>
     <span>
       tel:
     </span>
     <input
       type="text"
       v-model="user.tel"
     >
   </label>
   <button
     type="button"
     @click="submit"
   >
     Submit
   </button>
   <br>
   <button
     type="button"
     @click="getUser"
   >
     getUser
   </button>
   <p>{{$accessor.userInfo.name}}</p>
 </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Firebase } from '~/services/firebase'

export default Vue.extend({
 data () {
   return {
     user: {
       name: "",
       tel: ""
     },
     userInfo: {
       userName: ""
     },
    //  farebaseインスタンス
     fire: new Firebase(this.$accessor)
   }
 },
 methods: {
  //  登録
   async submit () {
      await this.fire.addUser(this.user.name, this.user.tel);
     console.log('Success!!')
   },
  //  dbから取得
   async getUser () {
     this.fire.getData(this.$accessor.userInfo.id);
   }
 },
});
</script>