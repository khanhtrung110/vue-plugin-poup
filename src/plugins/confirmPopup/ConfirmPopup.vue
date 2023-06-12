<template>
    <div class="fixed z-[999] top-0 left-0  w-full h-full flex items-center justify-center bg-black/30">
        <div class="w-[300px] h-[150px] border border-cyan-200 flex flex-col items-center justify-center" :class="type == 'warning' ? 'bg-yellow-500' : 'bg-slate-100'">
            <p class="mb-10 text-center">{{ message }}</p>
            <div class="flex gap-5">
                <button class="p-[5px_10px] bg-blue-500 text-white rounded-md" @click="onSave">{{ yesText }}</button>
                <button class="p-[5px_10px] bg-red-500 text-white rounded-md" @click="onClose">{{ noText }}</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import mitt from '../mitt';
const props = defineProps({
    yesText: {
        type: String,
        default: 'Yes'
    },
    noText: {
        type: String,
        default: 'No'
    },
    message: {
        type: String,
        default: 'This is Popup'
    },
    type: {
        type: String,
        default: 'warning'
    }
})
const onClose = () => {
    mitt.emit('close');
}

const onSave = () => {
    mitt.emit('save');
}
</script>