<script setup>
import { ref, reactive, watch, nextTick } from 'vue';
import { Icon } from '@iconify/vue';
import { useAnimate, stagger } from 'motion-v';
import { onClickOutside } from '@vueuse/core';

const isOpen = reactive({
    opened: false,
    inProgress: false
});

const [scope, animate] = useAnimate();

const menuToggleIcon = ref("line-md:menu");

function toggleMenu() { isOpen.inProgress = !isOpen.inProgress };

watch(() => isOpen.inProgress, async (val) => {
    if (val) {

        isOpen.opened = true;
        await nextTick();

        menuToggleIcon.value = "line-md:menu-to-close-alt-transition";

        await animate('.toggleMenuButton', {borderBottomLeftRadius: 0, borderBottomRightRadius: 0}, { duration: 0.2 } );
        await animate('.sideBar', { height: 'calc(100vh - 65px)' }, { duration: 0.2 });
        animate('li', { opacity: 1, x: 0 }, { delay: stagger(0.1), duration: 0.2 });
        animate('.topShadowCube', {borderBottomLeftRadius: '16px'}, {duration: 0.2});
        await animate('.sideBar', { width: 'auto',  borderTopRightRadius: '16px' }, { duration: 0.2});

    } else {

        await nextTick();

        menuToggleIcon.value = "line-md:close-to-menu-alt-transition";

        animate('.topShadowCube', {borderBottomLeftRadius: 0}, {duration: 0.2});
        animate("li", { opacity: 0, x: -10 }, { duration: 0.1 });
        await animate('.sideBar', { width: '40px',  borderTopRightRadius: 0 },{ duration: 0.2});
        await animate('.sideBar', { height: 0 },{ duration: 0.2 });
        await animate('.toggleMenuButton', {borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px'}, { duration: 0.2 });

        isOpen.opened = false;
    }
});

const pages = [
    { id: 1, name: "Home", path: "/", ico: "material-symbols:family-home-rounded", position: "top" },
    { id: 2, name: "Soundpad", path: "/soundpad", ico: "material-symbols:library-music", position: "top" },
    { id: 3, name: "Account", path: "/user/me", ico: "line-md:account", position: "bottom" }
];

const sideBar = useTemplateRef('sideBar');
onClickOutside(sideBar, () => {if (isOpen.opened) toggleMenu()})
</script>

<template>
    <div ref="scope">
        <div ref="sideBar" class="absolute m-2 left-0 top-0 z-99" >
            <button @click="toggleMenu" class="toggleMenuButton p-2 rounded-2xl bg-neutral-800/50 backdrop-blur " ref="menuToggleScope">
                <Icon :icon="menuToggleIcon" :key="isOpen.inProgress" class="w-6 h-6"/>
            </button>

            <div v-if="isOpen.opened" class="absolute top-0 left-[40px] w-10 h-10 overflow-hidden pointer-events-none ">
                <div class="topShadowCube w-full h-full bg-transparent shadow-[-8px_8px_0_0_#262626] opacity-50" ref="sideBarBorderRadiusCubeScope"></div>
            </div>

            <div
                class="sideBar absolute top-[40px] left-0 bg-neutral-800/50 backdrop-blur overflow-hidden rounded-b-2xl w-10 h-0 flex flex-col" 
                v-if="isOpen.opened"
            >
                <ul class="p-4 flex flex-col h-full space-y-2">
                    <SideBarItem v-for="page in pages"
                        :name="page.name"
                        :path="page.path"
                        :icon="page.ico"
                        :position="page.position"
                    />
                </ul>
            </div>
        </div>
    </div>

</template>