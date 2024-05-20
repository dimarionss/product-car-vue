<template>
  <div class="carousel d-flex flex-column ga-3">
    <div class="carousel-wrap">
      <div class="carousel-round">
        <v-img aspect-ratio="16/9" cover src="/img/round.png" width="48"></v-img>
      </div>
      <v-carousel v-model="model" height="588" class="carousel-head rounded-lg" hide-delimiter-background>
        <template v-slot:prev="{ props }">
          <v-btn size="x-small" icon color="#FFFFFF33" variant="elevated" @click="props.onClick">
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.78495 1.34901C7.85363 1.27268 7.90731 1.18288 7.94295 1.08476C7.97858 0.986633 7.99547 0.882096 7.99264 0.777116C7.98982 0.672136 7.96733 0.568769 7.92647 0.472917C7.88561 0.377064 7.82718 0.290604 7.7545 0.218472C7.68183 0.14634 7.59635 0.0899484 7.50292 0.052518C7.4095 0.0150875 7.30998 -0.00264928 7.21003 0.000320444C7.11009 0.00329017 7.01167 0.0269082 6.92042 0.0698259C6.82916 0.112744 6.74685 0.174121 6.67817 0.250453L0.208006 7.44623C0.0743881 7.59468 -6.17163e-05 7.79122 -6.17341e-05 7.99551C-6.1752e-05 8.1998 0.074388 8.39634 0.208006 8.54478L6.67817 15.7414C6.74639 15.8194 6.82869 15.8824 6.92028 15.9267C7.01187 15.971 7.11094 15.9957 7.21171 15.9995C7.31249 16.0033 7.41298 15.9859 7.50733 15.9486C7.60169 15.9112 7.68803 15.8545 7.76135 15.7818C7.83467 15.7091 7.8935 15.6218 7.93443 15.525C7.97536 15.4282 7.99756 15.3238 7.99976 15.2179C8.00195 15.112 7.98409 15.0067 7.94722 14.9081C7.91034 14.8095 7.85519 14.7196 7.78495 14.6436L1.80804 7.99551L7.78495 1.34901Z"
                fill="white" />
            </svg>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn size="x-small" icon color="#FFFFFF33" variant="elevated" @click="props.onClick">
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.215017 1.34901C0.146343 1.27268 0.0926562 1.18288 0.0570203 1.08476C0.0213848 0.986633 0.00449808 0.882096 0.00732524 0.777116C0.0101524 0.672136 0.0326381 0.568769 0.0734983 0.472917C0.114358 0.377064 0.172792 0.290604 0.245465 0.218472C0.318137 0.14634 0.403624 0.0899484 0.497045 0.052518C0.590466 0.0150875 0.68999 -0.00264928 0.789937 0.000320444C0.889883 0.00329017 0.988295 0.0269082 1.07955 0.0698259C1.17081 0.112744 1.25312 0.174121 1.3218 0.250453L7.79196 7.44623C7.92558 7.59468 8.00003 7.79122 8.00003 7.99551C8.00003 8.1998 7.92558 8.39634 7.79196 8.54478L1.3218 15.7414C1.25358 15.8194 1.17128 15.8824 1.07969 15.9267C0.988096 15.971 0.889034 15.9957 0.788256 15.9995C0.687478 16.0033 0.586992 15.9859 0.492637 15.9486C0.398282 15.9112 0.311936 15.8545 0.238617 15.7818C0.165299 15.7091 0.106467 15.6218 0.0655407 15.525C0.0246138 15.4282 0.00240794 15.3238 0.000212569 15.2179C-0.00198328 15.112 0.0158747 15.0067 0.0527505 14.9081C0.0896257 14.8095 0.144783 14.7196 0.215018 14.6436L6.19193 7.99551L0.215017 1.34901Z"
                fill="white" />
            </svg>
          </v-btn>
        </template>
        <v-carousel-item v-for="(slide, i) in slides" :key="i" :value="i">
          <v-sheet height="100%" tile>
            <v-img aspect-ratio="16/9" cover :src="slide.img"></v-img>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <div class="carousel-nav d-flex justify-space-between">
        <div class="carousel-nav-img">
          <v-img aspect-ratio="16/9" cover src="/img/verified.png" width="260" height="100%"></v-img>
        </div>
        <div class="carousel-nav-counter">
          <v-chip color="secondary" label class="rounded-lg font-weight-bold mr-2" variant="flat" size="x-large">
            {{ model + 1 }} из {{ slides.length }}
          </v-chip>
          <v-chip color="secondary" label class="rounded-lg font-weight-bold mr-n2" variant="flat" size="x-large">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
              <rect x="9" y="7" width="7" height="8" fill="white" />
              <path
                d="M12.0765 2.99854H12.21C13.443 3.00304 19.6905 3.04804 21.375 3.50104C21.8842 3.63929 22.3483 3.90877 22.7207 4.28255C23.0932 4.65633 23.361 5.12131 23.4975 5.63104C23.649 6.20104 23.7555 6.95554 23.8275 7.73404L23.8425 7.89004L23.8755 8.28004L23.8875 8.43604C23.985 9.80704 23.997 11.091 23.9985 11.3715V11.484C23.997 11.775 23.9835 13.146 23.8755 14.574L23.8635 14.7315L23.85 14.8875C23.775 15.7455 23.664 16.5975 23.4975 17.2245C23.361 17.7343 23.0932 18.1992 22.7207 18.573C22.3483 18.9468 21.8842 19.2163 21.375 19.3545C19.635 19.8225 13.0215 19.8555 12.105 19.857H11.892C11.4285 19.857 9.5115 19.848 7.5015 19.779L7.2465 19.77L7.116 19.764L6.8595 19.7535L6.603 19.743C4.938 19.6695 3.3525 19.551 2.622 19.353C2.11294 19.2149 1.64902 18.9457 1.27658 18.5722C0.904129 18.1987 0.636185 17.734 0.4995 17.2245C0.333 16.599 0.222 15.7455 0.147 14.8875L0.135 14.73L0.123 14.574C0.0485451 13.5577 0.00752298 12.5391 0 11.52L0 11.3355C0.003 11.013 0.015 9.89854 0.096 8.66854L0.1065 8.51404L0.111 8.43604L0.123 8.28004L0.156 7.89004L0.171 7.73404C0.243 6.95554 0.3495 6.19954 0.501 5.63104C0.637456 5.12131 0.905298 4.65633 1.27776 4.28255C1.65022 3.90877 2.11426 3.63929 2.6235 3.50104C3.354 3.30604 4.9395 3.18604 6.6045 3.11104L6.8595 3.10054L7.1175 3.09154L7.2465 3.08704L7.503 3.07654C8.93056 3.03064 10.3587 3.00514 11.787 3.00004L12.0765 2.99854ZM9.6 7.81354V15.0405L15.8355 11.4285L9.6 7.81354Z"
                fill="#E73A3F" />
            </svg>
          </v-chip>
        </div>
      </div>
    </div>

    <v-slide-group v-model="model" selected-class="bg-success" :show-arrows="false">
      <v-slide-group-item v-for="(slide, idx) in slides" :key="idx" v-slot="{ isSelected, toggle, selectedClass }">
        <v-card height="132" width="180" @click="toggle" class="mr-3">
          <v-img aspect-ratio="16/9" cover :src="slide.img"></v-img>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const slides = ref([
  { img: '/img/1.png' },
  { img: '/img/2.png' },
  { img: '/img/3.png' },
  { img: '/img/4.png' },
  { img: '/img/5.png' },
  { img: '/img/1.png' },
  { img: '/img/1.png' },
  { img: '/img/1.png' },
])

const model = ref(0)
</script>
<style lang="scss">
.v-carousel__controls {
  color: rgb(var(--v-theme-primary)) !important;

  button {
    margin: 0;
  }
}

.v-slide-group__next,
.v-slide-group__prev {
  display: none !important;
}
</style>
<style lang="scss" scoped>
.carousel {
  &-head {
    min-height: 588px;
  }

  &-wrap {
    position: relative;
    overflow: hidden;
  }

  &-nav {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

    &-img {}

  }

  &-round {
    position: absolute;
    left: 20px;
    top: 20px;
    z-index: 10;
  }
}
</style>