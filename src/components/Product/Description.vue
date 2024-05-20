<template>
  <v-sheet class="decription" color="transparent">
    <v-row>
      <v-col cols="12" class="decription-title d-flex align-center justify-space-between pb-0">
        <h1 class="text-h5 font-weight-bold text-uppercase">Ford Edge 2016</h1>
        <div class="decription-title-icons d-flex align-center">
          <v-btn size="small" icon variant="text">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 4V8C6.42501 9.028 3.98001 14.788 3.00001 20C2.96301 20.206 8.38401 14.038 13 14V18L21 11L13 4Z"
                stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </v-btn>
          <v-btn icon variant="text">
            <svg size="small" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 7V21L12 17L6 21V7C6 5.93913 6.42143 4.92172 7.17157 4.17157C7.92172 3.42143 8.93913 3 10 3H14C15.0609 3 16.0783 3.42143 16.8284 4.17157C17.5786 4.92172 18 5.93913 18 7Z"
                stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="decription-location pb-0">
        <div class="d-flex align-center justify-space-between">
          <span class="text-grey-lighten-1">Код товара: 40845</span>
          <span class="text-secondary mb-3">Львов</span>
        </div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" class="decription-amount pb-0">
        <span class="font-weight-bold">Цена</span>
        <v-btn-toggle v-model="amount" :ripple="false" color="primary" variant="plain" mandatory>
          <v-btn size="x-small">ГРН</v-btn>
          <v-btn size="x-small">USD</v-btn>
          <v-btn size="x-small">EUR</v-btn>
          <v-btn size="x-small">crypto</v-btn>
        </v-btn-toggle>
        <div v-if="amount === 0">
          <h3 class="text-h5 font-weight-bold mb-3">
            2,461,206 ГРН
          </h3>
          <span>от 20,123 ГРН/мес</span>
        </div>
        <div v-if="amount === 1">
          <h3 class="text-h5 font-weight-bold mb-3">
            62 490 USD
          </h3>
          <span>от 511$/мес</span>
        </div>
        <div v-if="amount === 2">
          <h3 class="text-h5 font-weight-bold mb-3">
            57,436 EUR
          </h3>
          <span>от 470 EUR/мес</span>
        </div>
        <div v-if="amount === 3">
          <h3 class="text-h5 font-weight-bold mb-3">
            0.930 BTC
          </h3>
          <span>от 0.0076 BTC/мес</span>
        </div>
        <p class="text-grey-lighten-1 mt-3">*Ежемесячный платеж носит информационный характер и может меняться
          на
          момент получения детального
          расчета
          *Возможна оплата криптовалютой</p>
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col cols="12" class="decription-chips pb-0">
        <v-chip-group column class="mb-2">
          <v-chip v-for="tag in tags" :key="tag" label class="decription-chips-chip rounded-lg text-secondary"
            size="x-large" variant="outlined" color="primary">
            {{ tag }}
          </v-chip>
        </v-chip-group>
        <span class="text-grey-lighten-1">Опубликовано 14.12.2023</span>
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col cols="12" class="decription-phone pb-0">
        <v-btn block color="primary" variant="flat" @click="showPhone = !showPhone">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 3H9L11 8L8.5 9.5C9.57096 11.6715 11.3285 13.429 13.5 14.5L15 12L20 14V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20C14.0993 19.763 10.4202 18.1065 7.65683 15.3432C4.8935 12.5798 3.23705 8.90074 3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3Z"
              stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="ml-1 text-capitalize font-weight-bold">
            {{ showPhone ? '(777)-777-77-77' : 'Показать телефон' }}
          </span>
        </v-btn>
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col cols="12" class="decription-order pb-0">
        <span class="font-weight-bold">Заказать услугу</span>
        <v-row class="mt-1">
          <v-col cols="12" md="6" class="pr-1 pb-1">
            <v-btn block color="secondary" variant="outlined">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.0175 10.7469C21.6739 10.2908 20.3975 9.97672 19.8575 9.15594C19.3175 8.33516 18.8755 6.55766 17.5011 5.87469C16.1268 5.19172 13.4999 5 11.9999 5C10.4999 5 7.87488 5.1875 6.49863 5.87328C5.12238 6.55906 4.68223 8.33516 4.14223 9.15453C3.60223 9.97391 2.32582 10.2908 1.98223 10.7469C1.63863 11.203 1.39676 14.0863 1.54394 15.5C1.69113 16.9137 1.96582 17.75 1.96582 17.75H5.99707C6.65707 17.75 6.87176 17.502 8.22176 17.375C9.70301 17.2344 11.1561 17.1875 11.9999 17.1875C12.8436 17.1875 14.3436 17.2344 15.8239 17.375C17.1739 17.503 17.3957 17.75 18.0486 17.75H22.033C22.033 17.75 22.3077 16.9137 22.4549 15.5C22.6021 14.0863 22.3593 11.203 22.0175 10.7469ZM18.7499 17.75H21.3749V18.5H18.7499V17.75ZM2.62488 17.75H5.24988V18.5H2.62488V17.75Z"
                  stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M7.82825 15.4531L7.91384 14.708C7.85158 14.7008 7.7692 14.6788 7.68439 14.6405C7.77782 14.5959 7.90047 14.5467 8.05812 14.4964C8.40675 14.3853 8.86135 14.2898 9.4055 14.2192C9.50452 14.2064 9.59827 14.1941 9.68758 14.1824C10.636 14.0584 11.0833 14 12.0095 14C13.0299 14 13.4268 14.0417 14.5984 14.2172C15.1741 14.3034 15.6568 14.4078 16.0159 14.521C16.1488 14.5629 16.2568 14.6036 16.3418 14.6413C16.2629 14.677 16.1813 14.6997 16.1129 14.7083C15.6875 14.7563 14.9222 14.7542 13.5417 14.7503C13.099 14.749 12.593 14.7476 12.0147 14.7476C11.4363 14.7476 10.9303 14.749 10.4876 14.7503C9.10359 14.7542 8.33786 14.7563 7.91318 14.7079L7.82825 15.4531ZM7.82825 15.4531C8.30002 15.5069 9.13232 15.5044 10.5428 15.5003C10.9766 15.499 11.4651 15.4976 12.0147 15.4976C12.5642 15.4976 13.0527 15.499 13.4865 15.5003C14.897 15.5044 15.7293 15.5069 16.2011 15.4531L7.45487 14.7818C7.45295 14.7837 7.4521 14.7847 7.4521 14.7847C7.4521 14.7847 7.45248 14.7843 7.45317 14.7834L6.93434 14.2418M7.82825 15.4531C7.19168 15.38 6.38074 14.7781 6.93434 14.2418M6.93434 14.2418L7.45567 14.78M6.93434 14.2418C7.30324 13.8884 8.1634 13.624 9.30903 13.4754C9.40848 13.4625 9.50296 13.4502 9.59328 13.4384C10.5434 13.3141 11.0335 13.25 12.0095 13.25C13.0782 13.25 13.5142 13.2964 14.7095 13.4754C15.9048 13.6545 16.8076 13.9217 17.0847 14.2418L7.45567 14.78M7.45567 14.78C7.45994 14.7741 7.46749 14.7623 7.47538 14.7442C7.4926 14.7046 7.50279 14.6543 7.49955 14.6013C7.49582 14.5402 7.4773 14.5054 7.47114 14.4956M7.45567 14.78L7.47114 14.4956M7.47114 14.4956C7.46967 14.4938 7.46908 14.4928 7.46914 14.4928C7.46921 14.4928 7.46994 14.4938 7.47114 14.4956Z"
                  fill="#161616" stroke="#161616" stroke-width="1.5" />
                <path
                  d="M20.25 8.75H21M3 8.75H3.75M3.65625 9.64062C3.65625 9.64062 5.82891 9.07812 12 9.07812C18.1711 9.07812 20.3438 9.64062 20.3438 9.64062"
                  stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="ml-1 text-capitalize font-weight-bold">Тест драйв</span>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="pl-1 pb-1">
            <v-btn block color="secondary" variant="outlined">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.5 12C3.5 13.1819 3.73279 14.3522 4.18508 15.4442C4.63738 16.5361 5.30031 17.5282 6.13604 18.364C6.97177 19.1997 7.96392 19.8626 9.05585 20.3149C10.1478 20.7672 11.3181 21 12.5 21C13.6819 21 14.8522 20.7672 15.9442 20.3149C17.0361 19.8626 18.0282 19.1997 18.864 18.364C19.6997 17.5282 20.3626 16.5361 20.8149 15.4442C21.2672 14.3522 21.5 13.1819 21.5 12C21.5 9.61305 20.5518 7.32387 18.864 5.63604C17.1761 3.94821 14.8869 3 12.5 3C10.1131 3 7.82387 3.94821 6.13604 5.63604C4.44821 7.32387 3.5 9.61305 3.5 12Z"
                  stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.72222 10.3333H17.5L15.2778 8M15.2778 12.6667H7.5L9.72222 15" stroke="#161616"
                  stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span class="ml-1 text-capitalize font-weight-bold">Trade in</span>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="pr-1 pt-1">
            <v-btn block color="secondary" variant="outlined">
              <span class="text-capitalize font-weight-bold">Онлайн просмотр</span>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="pl-1 pt-1">
            <v-btn block color="secondary" variant="outlined">
              <span class="text-capitalize font-weight-bold">Доставка</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col cols="12" class="decription-check pb-0">
        <span class="font-weight-bold">Заказать проверку</span>
        <v-row class="mt-1">
          <v-col cols="12" md="6" class="pr-1 pb-1">
            <v-btn block color="secondary" variant="outlined">
              <span class="text-capitalize font-weight-bold">СarVertical</span>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="pl-1 pb-1">
            <v-btn block color="secondary" variant="outlined">
              <span class="text-capitalize font-weight-bold">Autopark.ua</span>
            </v-btn>
          </v-col>
          <v-col cols="12" class="pt-1">
            <v-btn block color="primary" variant="flat">
              <span class="text-capitalize font-weight-bold">Полная проверка авто
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, ref } from 'vue'
const amount = ref(1)
const showPhone = ref(false)
const tags = ref(['Все авто', 'Официальное авто', 'Авто с Европы'])


onBeforeMount(async () => {


})


</script>
<style lang="scss" scoped>
.decription {
  .v-btn {
    font-size: 16px;
    opacity: 1;
    letter-spacing: 0;
  }

  &-location {
    font-size: 18px;
  }

  &-amount {
    font-size: 18px;

    .v-btn--active {
      text-decoration: underline;
    }

    p {
      font-size: 14px;
    }
  }

  &-chips {
    &-chip {
      font-size: 16px;
      border-color: rgb(var(--v-theme-primary));
    }
  }

  &-order {
    font-size: 18px;
  }
}
</style>
