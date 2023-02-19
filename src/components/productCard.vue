<template>
  <q-card
    class="my-card transparent bg-gradient-to-r from-blue-500 to-transparent"
    bordered
  >
    <q-card-section horizontal>
      <q-card-section class="col-5 flex flex-center">
        <q-img class="rounded-borders" :src="product.picture" />
      </q-card-section>

      <q-card-section class="q-pt-xs">
        <div class="text-overline">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ product.title }}</div>
        <div class="text-caption">
          {{ product.description }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn
        flat
        round
        icon="favorite_border"
        v-show="!product.liked"
        @click="productStore.likes(product.id)"
      />
      <q-btn
        flat
        round
        color="red"
        icon="favorite"
        v-show="product.liked"
        @click="productStore.likes(product.id)"
      />

      <div color="amber-8">{{ product.likes }}</div>
      <div class="q-ml-md">Price</div>
      <q-btn flat color="amber-8"> {{ product.price }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
//to use the action methods
import { useProductStore } from "../stores/ProductStore";

export default {
  props: ["product"],
  setup() {
    const productStore = useProductStore();
    return { productStore };
  },
};
</script>
