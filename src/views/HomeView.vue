<script setup lang="ts">
import { inject } from 'vue';
import TheWelcome from '../components/TheWelcome.vue';
import mitt from '../plugins/mitt';
const useNotify = inject('useNotify');
console.log('useNotify',useNotify);

const onPopup = () => {
  useNotify({
    type: 'success',
    yesText: 'Save',
    noText: 'Cancel',
    message: 'Home View popup show content'
  }).then((isSave)=>{
    if (isSave) {
        console.log('Sucess');
    } 
  });
}
const doStuff = () => {
  console.log('ClickOutSide');
  
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <button class="bg-amber-600 text-white p-[10px_20px]" @click="onPopup">Click Show Popup</button>
    <div class="w-[300px] h-[300px] bg-slate-300 border border-orange-900" v-click-outside="doStuff">
      ClickOutSide
    </div>
  </main>
</template>
