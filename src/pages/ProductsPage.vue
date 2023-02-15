<template class="background">
  <q-page class="flex column q-x-sm">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <!-- q-card -->

        <q-card class="my-card transparent" clickable>
          <q-card-section horizontal>
            <q-img
              class="col-5"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8heVHdlbeVO-LayL_IvsloKkT5-C463X7w&usqp=CAU"
            />

            <q-card-section class="flex col">
              <span>
                <span class="text-weight-bolder">Product:</span> Plastic
                Botteled Honey
              </span>
              <br />
              <span>
                <span class="text-weight-bolder">Price:</span> 230 Birr</span
              ><br />
              <span>
                <span class="text-weight-bolder">Description:</span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                ducimus repudiandae quos sunt, provident commodi cum, sequi,
                amet esse natus facilis? Perferendis autem explicabo ullam,
                quidem accusantium dolore totam hic.</span
              >
            </q-card-section>
          </q-card-section>

          <!-- <q-separator /> -->

          <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> On Sale </q-btn>
            <q-btn flat> Featuring </q-btn>
            <q-btn flat color="primary"> Discount </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div
        class="col-xs-12 col-sm-6 col-md-4"
        v-for="product in productsStore.products"
        :key="product.id"
      >
        <productCard :product="product" />
      </div>
      <!-- skeleton -->
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="row items-start no-wrap q-mt-sm">
          <q-skeleton size="56px" square animation="fade" />

          <div class="col q-pl-sm">
            <q-skeleton type="text" square width="30%" animation="fade" />
            <q-skeleton type="text" square height="12px" animation="fade" />
            <q-skeleton
              type="text"
              square
              height="12px"
              width="75%"
              animation="fade"
            />
          </div>
        </div>
        <div class="row items-start no-wrap q-mt-sm">
          <q-skeleton size="56px" square animation="fade" />

          <div class="col q-pl-sm">
            <q-skeleton type="text" square width="30%" animation="fade" />
            <q-skeleton type="text" square height="12px" animation="fade" />
            <q-skeleton
              type="text"
              square
              height="12px"
              width="75%"
              animation="fade"
            />
          </div>
        </div>
        <div class="row items-start no-wrap q-mt-sm">
          <q-skeleton size="56px" square animation="fade" />

          <div class="col q-pl-sm">
            <q-skeleton type="text" square width="30%" animation="fade" />
            <q-skeleton type="text" square height="12px" animation="fade" />
            <q-skeleton
              type="text"
              square
              height="12px"
              width="75%"
              animation="fade"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useProductStore } from "../stores/ProductStore";
import productCard from "../components/productCard.vue";

const productsStore = useProductStore();
</script>

<style scoped></style>
