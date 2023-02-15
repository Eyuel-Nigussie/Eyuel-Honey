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
      <q-btn flat round icon="favorite_border" />
      <q-btn flat color="primary"> Price </q-btn>
      <q-btn flat> {{ product.price }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: ["product"],
};
</script>
