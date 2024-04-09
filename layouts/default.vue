<template>
  <Menubar>
    <template #start>
      <div class="hidden md:block">
        <div class="flex flex-row flex-wrap">
          <div class="w-15rem flex align-items-center flex-wrap">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-2rem">
              <path d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z" fill="var(--primary-color)" />
              <path d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z" fill="var(--text-color)" />
            </svg>
            <span class="font-semibold text-2xl text-primary">Your Logo</span>
          </div>

          <div class="">
            <Button icon="pi pi-bars" severity="secondary" aria-label="Bookmark" text @click="menuMain = !menuMain" />
          </div>
        </div>
      </div>

      <div class="block md:hidden">
        <div class="grid">
          <div class="col-fixed" style="width: 35px">
            <Button icon="pi pi-bars" severity="secondary" aria-label="Bookmark" text @click="menuMainMobile = !menuMainMobile" />
          </div>

          <div class="col flex align-items-center justify-content-center">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-2rem">
              <path d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z" fill="var(--primary-color)" />
              <path d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z" fill="var(--text-color)" />
            </svg>
            <span class="font-semibold text-2xl text-primary">Your Logo</span>
          </div>
        </div>
      </div>
    </template>
    <template #end>
      <div class="flex align-items-center gap-2">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" @click="toggleMenuProfile" aria-haspopup="true" aria-controls="overlay_menu" />
        <Menu ref="menuProfile" id="overlay_menu" :model="menuProfileItems" :popup="true">
          <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </router-link>
          </template>
        </Menu>
      </div>
    </template>
  </Menubar>

  <Sidebar v-model:visible="menuMain" :modal="false" :dismissable="false" :baseZIndex="100">
    <template #container="{ closeCallback }">
      <div class="flex flex-column h-full">
        <mainMenu />
      </div>
    </template>
  </Sidebar>

  <Sidebar v-model:visible="menuMainMobile" :baseZIndex="1001">
    <template #container="{ closeCallback }">
      <div class="flex flex-column h-full">
        <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
          <span class="inline-flex align-items-center gap-2">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z" fill="var(--primary-color)" />
              <path d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z" fill="var(--text-color)" />
            </svg>
            <span class="font-semibold text-2xl text-primary">Your Logo</span>
          </span>
          <span>
            <Button type="button" @click="closeCallback" icon="pi pi-times" rounded outlined class="h-2rem w-2rem"></Button>
          </span>
        </div>
        <mainMenu />
      </div>
    </template>
  </Sidebar>

  <div class="py-6 pr-3 md:pr-6" :class="menuMain ? 'container-main' : 'pl-3 md:pl-6'">
    <nuxtPage />
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuProfile = ref();
const menuMain = ref(false);
const menuMainMobile = ref(false);

const menuProfileItems = ref([
  {
    label: "Perfil",
    items: [
      {
        label: "Configuraciones",
        icon: "pi pi-cog",
        route: "/settings",
      },
      {
        label: "Salir",
        icon: "pi pi-sign-out",
        route: "/logout",
      },
    ],
  },
]);

onMounted(() => {
  if (window.innerWidth < 768) {
    menuMain.value = false;
  } else {
    menuMain.value = true;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      menuMain.value = false;
    } else {
      menuMain.value = true;
    }
  });
});

const toggleMenuProfile = (event) => {
  menuProfile.value.toggle(event);
};
</script>

<style>
html {
  font-size: 14px;
}

body {
  font-family: var(--font-family);
  font-weight: normal;
  background: var(--surface-ground);
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
}

.p-menubar {
  padding: 0.5rem 2rem;
  position: sticky;
  z-index: 1000;
}

.container-main {
  padding-left: 22.5rem;
}

@media screen and (max-width: 768px) {
  .p-menubar {
    padding: 0.5rem 1rem;
  }
  .p-menubar-start {
    width: 90%;
  }
}
</style>
