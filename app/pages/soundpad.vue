<script setup>
    import useSoundpadStore from '~/stores/soundpad.store';

    definePageMeta({
        title: 'zed31rus.ru | Soundpad'
    })

    const soundpadStore = useSoundpadStore();
    soundpadStore.initSocket();

    const history = ref([]);
    const volume = ref(0);

    const sortedSoundList = computed(() => {
        return [...soundpadStore.soundList].sort(sortMethod.value.sort)
    })

    const sortMethods = [
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
    ]

    const sortMethod = ref(sortMethods[0]);

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