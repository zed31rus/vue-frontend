<script setup lang="ts">
import { ref, computed } from 'vue'; 
import useSoundpadStore from '~/stores/soundpad.store';
import useTitleStore from '~/stores/title.store';

interface Sound {
  index: number;
  tag: string;
  playCount: number;
  durationmmss: string;
}

interface SortMethod {
  id: number;
  value: string;
  name: string;
  sort: (a: Sound, b: Sound) => number;
}

const titleStore = useTitleStore();
titleStore.setCurrentPageTitle('Soundpad');

const soundpadStore = useSoundpadStore();
soundpadStore.initSocket();

const history = ref<any[]>([]); 
const volume = ref<number>(0);

const sortMethods: SortMethod[] = [
  {
    id: 1,
    value: "index",
    name: "Номер звука",
    sort: (a, b) => a.index - b.index
  },
  {
    id: 2,
    value: "tag",
    name: "Имя",
    sort: (a, b) => a.tag.localeCompare(b.tag)
  },
  {
    id: 3,
    value: "playCount",
    name: "Количество воспроизведений",
    sort: (a, b) => b.playCount - a.playCount
  },
];

const sortMethod = ref<SortMethod>(sortMethods[0]!);

const sortedSoundList = computed<Sound[]>(() => {
  return [...soundpadStore.soundList].sort(sortMethod.value.sort);
});

</script>

<template>
    <div class=" text-neutral-100 selection:bg-neutral-500/30">
        <div class=" flex flex-col w-full gap-1 max-h-[calc(100% - 8px)]">
            <SoundpadHeader>
                <SelectionSort
                :sort-methods="sortMethods"
                v-model="sortMethod"
                />
            </SoundpadHeader>

            <SoundpadSoundRoot>
                <SoundpadSoundButton
                v-for="sound in sortedSoundList"
                :key="sound.index"
                :index="sound.index"
                :tag="sound.tag"
                :durationmmss="sound.durationmmss"
                :playCount="sound.playCount"
                :ssr="false"
                />
            </SoundpadSoundRoot>
        </div>
    </div>
</template>