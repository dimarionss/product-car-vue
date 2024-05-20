<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <Card />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import Card from '../components/Product/Card.vue';


</script>
<style lang="scss">
.v-container {
  inline-size: 100%;
  margin-inline: auto;
  max-inline-size: 1440px;
}

@font-face {
  font-family: "Proxima";
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("@/src/assets/fonts/proxima/ProximaNova-Black.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("@/assets/fonts/proxima/ProximaNova-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("@/assets/fonts/proxima/ProximaNova-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Proxima";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("@/assets/fonts/proxima/ProximaNova-Light.ttf") format("truetype");
}

::-webkit-scrollbar {
  width: 10px;
  height: 8px;
  background-color: #fff;
  border: 1px solid #e6e8f0;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #c3c3c5;
  border-radius: 20px;
}

::-webkit-scrollbar-track {
  width: 15px;
  background-color: #f5f5f5;

}

::-webkit-scrollbar-thumb:hover {
  background-color: #adadad;
}

html {
  font-family: "Proxima", sans-serif;
}
</style>
<style lang="scss" scoped></style>
