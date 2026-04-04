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
const userStore = useUserStore();

const menuToggleIcon = ref("line-md:menu");

function closeMenu() { isOpen.inProgress = false };
function openMenu() { isOpen.inProgress = true };

watch(() => isOpen.inProgress, async (val) => {
    if (val) {

        isOpen.opened = true;
        await nextTick();

        menuToggleIcon.value = "line-md:menu-to-close-alt-transition";

        await animate('.toggleMenuButton', { borderBottomRightRadius: 0, borderBottomLeftRadius: 0}, {duration: 0.1} );
        animate('.sideBar', {height: 'calc(100vh - 60px)',  width: '64px'}, {duration: 0.3 });
        animate('.sideBar',{borderTopRightRadius: '20px'},{duration: 0.2});
        animate('.topShadowCube', {borderBottomLeftRadius: '16px'}, {duration: 0.3});
        animate('li', { opacity: 1, x: 0 }, { delay: stagger(0.2), duration: 0.5 });
        await animate('.sideBar', { width: 'auto', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px' }, { duration: 0.4});

    } else {

        await nextTick();

        menuToggleIcon.value = "line-md:close-to-menu-alt-transition";

        await animate("li", { opacity: 0, x: 100 }, { delay: stagger(0.1), duration: 0.2 });
        animate('.topShadowCube', {borderBottomLeftRadius: 0}, {duration: 0.3});
        animate('.sideBar', { width: '44px'},{duration: 0.2 });
        await animate('.sideBar', { borderTopRightRadius: 0 },{ duration: 0.3});
        await animate('.sideBar', { height: 0 },{ duration: 0.25 });
        await animate('.toggleMenuButton', {borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}, { duration: 0.2 });

        isOpen.opened = false;
    }
});

const pages = [
    { id: 1, name: "Home", path: "/", ico: "material-symbols:family-home-rounded", position: "top" },
    { id: 2, name: "Soundpad", path: "/soundpad", ico: "material-symbols:library-music", position: "top" },
];

const sideBar = useTemplateRef('sideBar');
onClickOutside(sideBar, () => {if (isOpen.opened) closeMenu()})

</script>

<template>
    <div ref="scope">
        <div ref="sideBar" class="absolute m-2 left-0 top-0 z-99" >
            <button @click="isOpen.opened ? closeMenu() : openMenu()" class="toggleMenuButton p-2.5 rounded-[20px] bg-neutral-800/50 backdrop-blur " ref="menuToggleScope">
                <Icon :icon="menuToggleIcon" :key="isOpen.inProgress" class="w-[24px] h-[24px]"/>
            </button>

            <div v-if="isOpen.opened" class="absolute top-[12px] left-[44px] w-8 h-8 overflow-hidden pointer-events-none ">
                <div class="topShadowCube w-full h-full bg-transparent shadow-[-16px_16px_0_0_#262626] opacity-50" ref="sideBarBorderRadiusCubeScope"></div>
            </div>

            <div
                class="sideBar absolute top-[44px] left-0 bg-neutral-800/50 backdrop-blur overflow-hidden rounded-b-[20px] w-10 h-0 flex flex-col" 
                v-if="isOpen.opened"
            >
                <ul class="p-2.5 flex flex-col h-full space-y-1">
                    <SideBarItem v-for="page in pages"
                        :name="page.name"
                        :path="page.path"
                        :icon="page.ico"
                        :position="page.position"
                    />
                    <li class="opacity-0 mt-auto">
                        <NuxtLink :to="userStore.user ? '/user/me' : 'auth'" class="flex items-center gap-3 p-2 hover:bg-neutral-800/70 rounded-md transition-colors">
                            <Icon icon="line-md:account" :ssr="true" class="text-xl" />
                            <span>{{ userStore.user ? userStore.user.nickname : 'login' }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
