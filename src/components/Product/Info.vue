<template>
  <v-sheet class="info" color="transparent">
    <v-row class="justify-space-between">
      <v-col cols="12" md="6" class="d-flex align-center justify-lg-space-between">
        <v-list width="100%" class="bg-transparent">
          <v-list-item v-for="(item, i) in leftInfo" :key="i" color="primary" rounded="xl">
            <template v-slot:prepend>
              <v-img width="24" height="24" aspect-ratio="16/9" cover :src="item.img" class="mr-2"></v-img>
            </template>

            <span class="info-title text-grey-lighten-1" v-text="item.title"></span>
            <template v-slot:append>
              <span class="text-secondary">{{ item.text }}</span>
            </template>
          </v-list-item>
        </v-list>
        <v-divider vertical inset class="ml-4"></v-divider>
      </v-col>
      <v-col cols="12" md="6">
        <v-list class="bg-transparent">
          <v-list-item v-for="(item, i) in rightInfo" :key="i" color="primary" rounded="xl">
            <template v-slot:prepend>
              <v-img width="24" height="24" aspect-ratio="16/9" cover :src="item.img" class="mr-2"></v-img>
            </template>

            <span class="info-title text-grey-lighten-1" v-text="item.title"></span>
            <template v-slot:append>
              <span class="text-secondary">{{ item.text }}</span>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

  </v-sheet>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const leftInfo = ref([
  {
    img: '/img/icons/speedometer.svg',
    title: "Пробег:",
    text: "180 000 км",
  },
  {
    img: '/img/icons/fuelling.svg',
    title: "Объем двигателя:",
    text: "2,7 л",
  },
  {
    img: '/img/icons/drive.svg',
    title: "Привод:",
    text: "Полный",
  },
  {
    img: '/img/icons/horse_power.svg',
    title: "Лошадиные силы:",
    text: "15",
  },
])
const rightInfo = ref([
  {
    img: '/img/icons/expence.svg',
    title: "Топливо:",
    text: "Бензин",
  },
  {
    img: '/img/icons/gearbox.svg',
    title: "Трансмиссия:",
    text: "Автомат",
  },
  {
    img: '/img/icons/expence_minus.svg',
    title: "Расход:",
    text: "15л/100км",
  },
  {
    img: '/img/icons/dtp.svg',
    title: "ДТП:",
    text: "Без ДТП, не бито, не крашено",
  },
])

onBeforeMount(async () => {

})


</script>
<style lang="scss" scoped>
.info {
  font-size: 18px;

  &-info-title {
    font-size: 18px;
  }
}
</style>
