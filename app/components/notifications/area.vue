<script setup>

    function beforeLeave(el) {
    const element = el;
    element.style.height = element.offsetHeight + 'px';
    element.style.width = element.offsetWidth + 'px';
    element.style.top = element.offsetTop + 'px';
    element.style.left = element.offsetLeft + 'px';
    }

</script>

<template>
    <div class="fixed inset-0 z-[100] pointer-events-none"> 
        
        <TransitionGroup 
            name="notificationList" 
            tag="ul" 
            class="relative w-full h-full list-none flex flex-col items-end gap-3 p-4"
            @before-leave="beforeLeave"
        >
        
        <slot>
        </slot>
            
        </TransitionGroup>
    </div>
</template>

<style>

.notificationList-move,
.notificationList-enter-active,
.notificationList-leave-active {
  transition: all 1s cubic-bezier(0.55, 0, 0.1, 1);
}

.notificationList-enter-from,
.notificationList-leave-to {
  transform: translateX(150px);
}

.notificationList-leave-active {
  position: absolute;
  right: 0;
}

</style>