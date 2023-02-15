<template>
  <q-page class="flex justify-evenly space-y-8">
    <q-img
      src="~assets/honey-main.png"
      spinner-color="brown"
      style="width: 20rem; height: 17rem"
      class="q-mt-sm rounded-borders no-paddings q-mx-auto justify-center"
    >
      <!-- <div class="absolute-bottom text-subtitle1 text-right"> -->
      <q-btn round color="primary transparent" icon=""
        ><q-img clickable src="~assets/small-bee.png" />
      </q-btn>
      <!-- </div> -->
    </q-img>

    <div class="flex column text-center content-around space-y-5">
      <div>
        <p class="my-font self-center text-h2 q-mx-md">
          H<span class="text-amber-8">o</span>ney, y<span class="text-amber-8"
            >o</span
          >ur s<span class="text-amber-9">o</span>ul is g<span
            class="text-amber-9"
            >o</span
          >lden.
        </p>
      </div>

      <div>
        <q-btn
          outline
          rounded
          color="primary"
          class="q-mx-auto"
          label="PRODUCTS"
          size="20px"
        />
      </div>

      <div><q-separator color="orange" spaced="16px" inset /></div>
    </div>
    <!-- ============ End First Section ====================== -->

    <div class="flex flex-col space-y-4">
      <div>
        <q-img src="~assets/products.png" class="q-ml-md" width="2em" />
      </div>
      <div>
        <p class="q-ml-md text-h3 text-weight-bolder text-amber-9">Honey</p>
      </div>
      <div>
        <p class="self-center text-h6 q-mx-md">
          is a one-ingredient recipe made by bees, flowers and mother nature
          herself.
        </p>
      </div>
      <FloatButton />
      <div>
        <q-btn
          color="primary"
          icon-right="send"
          label="Learn About Honey"
          class="q-ml-md mt-10"
        />
      </div>

      <div><q-separator color="orange" spaced="16px" inset /></div>
    </div>
    <q-separator color="orange" spaced="16px" inset />

    <div class="w-full space-y-8">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="350px"
        class="bg-grey-1 shadow-2 rounded-borders w-full transparent"
      >
        <q-carousel-slide :name="1" class="column no-wrap">
          <h3 class="text-h5 text-weight-bolder text-amber-9 q-pb-sm">
            Modern Manufacture
          </h3>

          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.efsa.europa.eu/sites/default/files/styles/lg_col_12_16x9/public/news/bees_beekeeper.jpg?h=91d67b52&itok=jYzprNF2"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://media.istockphoto.com/id/623103036/photo/hives-in-an-apiary-with-bees-flying-to-the-landing.jpg?s=612x612&w=0&k=20&c=4q6oj20j0JeTG4W1rxLZu_iUX1NyyE9YLXlU_-ohg5g="
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="column no-wrap">
          <h3 class="text-h5 text-weight-bolder text-amber-9 q-pb-sm">
            100% Natural
          </h3>

          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://cdn7.dissolve.com/p/D1062_38_175/D1062_38_175_1200.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://images.immediate.co.uk/production/volatile/sites/4/2020/09/GettyImages-1204957609-crop-cfd245a.jpg"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3" class="column no-wrap">
          <h3 class="text-h5 text-weight-bolder text-amber-9 q-pb-sm">
            Batch Production
          </h3>
          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0jnpcOYs5uVWogKPnHSOghifZ0bjwfyO0Mf--ZljZzKo-_8D99-atEnUQ-yd-qhas4s&usqp=CAU"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7_dYcg4d5_BXtU_yi9lwxZzVVYLfuZhI6YnbhgdyBhAts-WI43jbg7LOtBC3XFyvRGE&usqp=CAU"
            />
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4" class="column no-wrap">
          <h3 class="text-h5 text-weight-bolder text-amber-9 q-pb-sm">
            Fast Delivery
          </h3>

          <div
            class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
          >
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://www.shutterstock.com/image-vector/big-truck-honey-smiling-men-260nw-1150435877.jpg"
            />
            <q-img
              class="rounded-borders col-6 full-height"
              src="https://thumbs.dreamstime.com/z/honey-truck-icon-isometric-honey-truck-vector-icon-web-design-isolated-white-background-honey-truck-icon-isometric-style-121678197.jpg"
            />
          </div>
        </q-carousel-slide>
      </q-carousel>

      <q-separator color="orange" spaced="16px" inset />
      <q-btn
        color="primary"
        icon-right="send"
        label="Learn About Honey"
        class="mx-4"
      />
    </div>
  </q-page>
</template>

<script scoped>
import { ref } from "vue";
import FloatButton from "../components/floatButton.vue";

export default {
  components: { FloatButton },
  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
