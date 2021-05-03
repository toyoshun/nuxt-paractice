<template>
 <div class="page">
   <button
     type="button"
     @click="getUserList"
   >
     getUserList
   </button>
   <p v-for="(userName,index) in $accessor.userList.list" :key="index">{{ userName }}</p>
 </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Firebase } from '~/services/firebase'

export default Vue.extend({
 data () {
   return {
    //  farebaseインスタンス
     fire: new Firebase(this.$accessor)
   }
 },
 methods: {
  //  dbから取得
   async getUserList () {
     this.fire.getList();
   }
 },
});
</script>