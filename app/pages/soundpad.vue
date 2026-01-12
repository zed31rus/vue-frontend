<script setup>
    import useSoundpadStore from '~/stores/soundpad';

    useHead({
        title: "soundpad | zed31rus"
    })

    const soundpadStore = useSoundpadStore();

    const history = ref([]);
    const volume = ref(0);
    const sortMethod = ref("index");

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
</script>

<template>
    <div class=" text-neutral-100 selection:bg-neutral-500/30">
        <div class="max-w-[90%] mx-[5%] p-6 flex flex-col h-screen gap-6">
            <SoundpadHeader>
                <SelectionSort :sort-methods="sortMethods" v-model="sortMethod"/>
            </SoundpadHeader>

            <SoundpadSoundRoot>
                <SoundpadSoundButton
                v-for="sound in soundpadStore.soundList"
                :key="sound.index"
                :index="sound.index"
                :tag="sound.tag"
                :durationmmss="sound.durationmmss"
                :playCount="sound.playCount"
                />
            </SoundpadSoundRoot>
        </div>
    </div>
</template>