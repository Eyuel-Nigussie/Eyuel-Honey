<template>
  <q-page class="flex justify-evenly space-y-8">
    <q-parallax
      src="https://www.beekeepingfornewbies.com/wp-content/uploads/2019/09/Honey-and-Honeycomb.jpg"
      :height="100"
    />
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
      <FloatButton />
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

    <div class="flex flex-col">
      <div class="row q-mb-md">
        <q-img src="~assets/products.png" class="q-ml-md" width="2em" />
        <p class="q-ml-md -mb-[8px] text-h3 text-weight-bolder text-amber-9">
          Honey
        </p>
      </div>

      <div>
        <q-parallax :height="250">
          <template v-slot:media>
            <video
              width="720"
              height="500"
              poster="https://assets.mixkit.co/videos/preview/mixkit-honey-dipper-with-honey-2802-large.mp4"
              autoplay
              loop
              muted
            >
              <source
                type="video/webm"
                src="https://assets.mixkit.co/videos/preview/mixkit-honey-dipper-with-honey-2802-large.mp4"
              />
              <source
                type="video/mp4"
                src="hhttps://assets.mixkit.co/videos/preview/mixkit-honey-dipper-with-honey-2802-large.mp4"
              />
            </video>
          </template>
        </q-parallax>

        <p class="self-center text-h6 q-mx-md text-weight-bolder">
          Is a one-ingredient recipe made by bees, flowers and mother nature
          herself.
        </p>
      </div>

      <div class="-mt-[20px]">
        <q-btn
          color="primary"
          icon-left="hive"
          label="Learn About Honey"
          class="q-mt-md"
          flat
        />
      </div>

      <div><q-separator color="orange" spaced="16px" inset /></div>
    </div>
    <q-separator color="orange" spaced="5px" inset />

    <div class="w-full">
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://cdn7.dissolve.com/p/D1062_38_175/D1062_38_175_1200.jpg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0jnpcOYs5uVWogKPnHSOghifZ0bjwfyO0Mf--ZljZzKo-_8D99-atEnUQ-yd-qhas4s&usqp=CAU"
        />
        <q-carousel-slide
          :name="3"
          img-src="https://media.istockphoto.com/id/623103036/photo/hives-in-an-apiary-with-bees-flying-to-the-landing.jpg?s=612x612&w=0&k=20&c=4q6oj20j0JeTG4W1rxLZu_iUX1NyyE9YLXlU_-ohg5g="
        />
        <q-carousel-slide
          :name="4"
          img-src="https://www.shutterstock.com/image-vector/big-truck-honey-smiling-men-260nw-1150435877.jpg"
        />
      </q-carousel>
      <div class="-mt-[50px]">
        <q-btn
          color="primary"
          icon-left="hive"
          label="Our Quality Products"
          class="q-mt-md"
          flat
        />
      </div>
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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 500px
</style>
