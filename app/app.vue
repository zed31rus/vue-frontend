<script setup>
import { ref, reactive, onMounted } from 'vue'
import { io } from 'socket.io-client'
import SoundButton from './soundButton.vue'
import Sort from './sort.vue'

const soundList = ref([])
const soundpadSocket = ref(null)
const current = reactive({
  sound: null,
  status: "STOPPED",
  position: 0,
  positionmmss: "0:00",
  duration: 0,
  durationmmss: "0:00",
  percentage: 0
})
const history = ref([])
const volume = ref(0)
const sortMethod = ref("")

onMounted(() => {
  soundpadSocket.value = io('https://soundpadapi.zed31rus.ru')

  const socket = soundpadSocket.value

  socket.on('currentUpdated', (data) => {
    Object.assign(current, data)
  })

  socket.on('historyUpdated', (data) => {
    history.value = data
  })

  socket.on('soundListUpdated', (data) => {
    soundList.value = data
  })

  socket.on('volumeUpdated', (data) => {
    volume.value = data
  })
})

watch(sortMethod, (newSortMethod) => {
  console.log(newSortMethod)
})
</script>

<template>

  <Sort v-model="sortMethod"/>

  <div class="soundContainer content-start shadow-xl bg-black/30 p-2 backdrop-blur rounded-r-md rounded-l-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 overflow-y-auto h-auto">
      <template v-for="sound in soundList" :key="sound.index">
        <SoundButton
          :index="sound.index"
          :tag="sound.tag"
          :playCount="sound.playCount"
          :current="current"
        />
      </template>
  </div>
</template>
