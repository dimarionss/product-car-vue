<template>
  <v-sheet class="productCard" color="transparent">
    <v-row>
      <v-col cols="12">
        <TopBar />
      </v-col>
      <v-col cols="12" md="9">
        <Carousel />
        <info />
      </v-col>
      <v-col cols="12" md="3">
        <Description />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
import TopBar from './TopBar.vue';
import Carousel from './Carousel.vue';
import Info from './Info.vue';
import Description from './Description.vue';

</script>
<style lang="scss" scoped>
.productCard {}
</style>
