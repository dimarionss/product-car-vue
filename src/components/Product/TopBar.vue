<template>
  <div class="topbar d-flex">
    <span class="text-secondary font-weight-bold">
      Сегодня <span class="text-grey-lighten-1 font-weight-regular ml-1">14.12.2023</span>
    </span>
    <div class="topbar-summary d-flex align-center ml-3">
      <div class="topbar-summary-item d-flex align-center">
        <svg width="14" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 17V16C1 14.1435 1.7375 12.363 3.05025 11.0503C4.36301 9.7375 6.14348 9 8 9M8 9C9.85652 9 11.637 9.7375 12.9497 11.0503C14.2625 12.363 15 14.1435 15 16V17M8 9C9.06087 9 10.0783 8.57857 10.8284 7.82843C11.5786 7.07828 12 6.06087 12 5C12 3.93913 11.5786 2.92172 10.8284 2.17157C10.0783 1.42143 9.06087 1 8 1C6.93913 1 5.92172 1.42143 5.17157 2.17157C4.42143 2.92172 4 3.93913 4 5C4 6.06087 4.42143 7.07828 5.17157 7.82843C5.92172 8.57857 6.93913 9 8 9Z"
            stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="text-primary ml-2">20</span>
      </div>
      <v-divider vertical class="mx-2"></v-divider>
      <div class="topbar-summary-item d-flex align-center">
        <svg width="12" height="18" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 5V19L7 15L1 19V5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H9C10.0609 1 11.0783 1.42143 11.8284 2.17157C12.5786 2.92172 13 3.93913 13 5Z"
            stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <span class="text-primary ml-2">50</span>
      </div>
      <v-divider vertical class="mx-2"></v-divider>
      <div class="topbar-summary-item d-flex align-center ml-2">
        <svg width="17" height="17" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1H7L9 6L6.5 7.5C7.57096 9.67153 9.32847 11.429 11.5 12.5L13 10L18 12V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18C12.0993 17.763 8.42015 16.1065 5.65683 13.3432C2.8935 10.5798 1.23705 6.90074 1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1Z"
            stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <span class="text-primary ml-2">17</span>
      </div>
      <v-divider vertical class="mx-2"></v-divider>
      <div class="topbar-summary-item d-flex align-center ml-2">
        <span class="text-secondary">VIN-код:</span>
        <span class="text-primary ml-2">17</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()



onBeforeMount(async () => {

})


</script>
<style lang="scss" scoped>
.topbar {}
</style>
