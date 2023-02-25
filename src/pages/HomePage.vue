<template>
  <q-page class="flex justify-evenly space-y-9">
    <!-- =======================------ First Section ------================================ -->
    <div class="flex justify-evenly">
      <q-img
        src="~assets/honey-fairy.png"
        spinner-color="brown"
        style="width: 40%; height: auto"
        class="main-honey q-mt-sm rounded-borders no-paddings q-mx-auto justify-center"
      >
        <q-btn round color="amber-8 transparent" class="-">
          <q-img
            clickable
            src="~assets/small-bee.png"
            class="ma-md bucket-bee bounce"
          />
        </q-btn>
      </q-img>

      <div class="flex column text-center content-around space-y-9">
        <div>
          <p class="my-font self-center text-h2 q-mx-md">
            H<span class="text-amber-8">o</span>ney, y<span class="text-amber-8"
              >o</span
            >ur s<span class="text-amber-8">o</span>ul is g<span
              class="text-amber-8"
              >o</span
            >lden.
          </p>
        </div>

        <div>
          <q-btn
            to="/products"
            outline
            rounded
            color="amber-8
"
            class="q-mx-auto q-my-xl"
            label="PRODUCTS"
            size="20px"
          />
        </div>
        <img
          src="../assets/bee-1.png"
          width="50"
          class="absolute bottom-30 right-0 movement"
        />
        <img
          src="../assets/bee-2.png"
          width="30"
          class="absolute bottom-30 left-0 movement-2"
        />
        <img
          src="../assets/small-bee.png"
          width="10"
          class="absolute top-2/3"
        />

        <div><q-separator color="orange" spaced="20px" inset /></div>
      </div>
    </div>

    <!-- ============ End First Section ====================== -->

    <!-- ================------ About Honey  section -----======================== -->

    <div class="flex flex-col">
      <div class="row q-mb-md">
        <q-img src="~assets/products.png" class="q-ml-md" width="2em" />
        <p class="q-ml-md -mb-[8px] text-h3 text-weight-bolder text-yellow-8">
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
                src="https://thumbs.gfycat.com/AptUnsteadyHatchetfish-mobile.mp4"
              />
              <source
                type="video/mp4"
                src="https://thumbs.gfycat.com/AptUnsteadyHatchetfish-mobile.mp4"
              />
            </video>
          </template>
        </q-parallax>

        <p class="self-center text-h6 q-mx-md text-weight-bolder">
          Honey is a one-ingredient recipe made by bees, flowers and mother
          nature herself.
        </p>
        <p class="bg-white q-mx-md q-pa-md">
          Whether you're a brother or whether you're a mother You're stayin'
          alive, stayin' alive Feel the city breakin' and everybody shakin' And
          we're stayin' alive, stayin' alive Ah, ha, ha, ha, stayin' alive,
          stayin' alive Ah, ha, ha, ha, stayin' alive (hey) Life goin' nowhere,
          somebody help me Somebody help me, yeah Life goin' nowhere, somebody
          help me, yeah I'm stayin' alive
        </p>
        <h2
          class="text-h6 text-weight-bolder q-mx-md q-mt-md text-black for-hover"
        >
          10 Benfits of Honey
        </h2>
        <p class="bg-white q-mx-md q-pa-md">
          Well, you can tell by the way I use my walk I'm a woman's man, no time
          to talk Music loud and women warm, I've been kicked around Since I was
          born And now it's alright, it's okay And you may look the other way We
          can try to understand The New York Times' effect on man Whether you're
          a brother or whether you're a mother You're stayin' alive, stayin'
          alive Feel the city breakin' and everybody shakin' And we're stayin'
          alive, stayin' alive Ah, ha, ha, ha, stayin' alive, stayin' alive Ah,
          ha, ha, ha, stayin' alive Oh, when you walk
        </p>
      </div>

      <div class="-mt-[20px]">
        <q-btn
          color="amber-8"
          icon-left="hive"
          label="Learn About Honey"
          class="q-mt-md"
          flat
        />
      </div>
      <div><q-separator color="orange" spaced="16px" inset /></div>
    </div>

    <q-separator color="orange" spaced="5px" inset />
    <!-- ================------ End About Honey  section -----======================== -->

    <!-- ================------ News  section -----======================== -->

    <div class="flex flex-col">
      <div class="row q-mb-md">
        <div class="row q-mb-md">
          <q-img src="~assets/products.png" class="q-ml-md" width="2em" />
          <p class="q-mx-md -mb-[8px] text-h3 text-weight-bolder text-yellow-8">
            News
          </p>
        </div>
        <div class="bg-white q-mx-md q-ml-md">
          <div class="q-pa-md">
            <span class="text-orange-10 q-mt-md">JANUARY 27, 2023</span>
            <h2
              class="text-h5 text-weight-bolder text-black hover:text-orange-9 for-hover"
            >
              10 Benfits of Honey
            </h2>
            <p>
              Honey is a natural sweetener and has many health benefits. It is
              high in antioxidants, which help to protect the body from free
              radicals. It also contains vitamins A, B, C, and E, as well as
              minerals like potassium, calcium, magnesium, and zinc. Fir honey
              can be used to treat a variety of illnesses and conditions. It is
              a natural cough suppressor and helps to boost the immune system.
              Finally, it is known for its anti-inflammatory and antibacterial
              properties, which makes it ideal for treating sore throats or
              respiratory problems. If you are looking for delicious and healthy
              honey, look no further than Fir Honey!
            </p>
          </div>
          <div class="q-pa-md">
            <span class="text-orange-10 q-mt-md">JANUARY 27, 2023</span>
            <h2 class="text-h5 text-weight-bolder text-black for-hover">
              10 Benfits of Honey
            </h2>
            <p>
              Honey is a natural sweetener and has many health benefits. It is
              high in antioxidants, which help to protect the body from free
              radicals. It also contains vitamins A, B, C, and E, as well as
              minerals like potassium, calcium, magnesium, and zinc. Fir honey
              can be used to treat a variety of illnesses and conditions. It is
              a natural cough suppressor and helps to boost the immune system.
              Finally, it is known for its anti-inflammatory and antibacterial
              properties, which makes it ideal for treating sore throats or
              respiratory problems. If you are looking for delicious and healthy
              honey, look no further than Fir Honey!
            </p>
          </div>
          <div class="q-pa-md">
            <span class="text-orange-10 q-mt-md">JANUARY 27, 2023</span>
            <h2 class="text-h5 text-weight-bolder text-black for-hover">
              10 Benfits of Honey
            </h2>
            <p>
              Honey is a natural sweetener and has many health benefits. It is
              high in antioxidants, which help to protect the body from free
              radicals. It also contains vitamins A, B, C, and E, as well as
              minerals like potassium, calcium, magnesium, and zinc. Fir honey
              can be used to treat a variety of illnesses and conditions. It is
              a natural cough suppressor and helps to boost the immune system.
              Finally, it is known for its anti-inflammatory and antibacterial
              properties, which makes it ideal for treating sore throats or
              respiratory problems. If you are looking for delicious and healthy
              honey, look no further than Fir Honey!
            </p>
          </div>
        </div>
      </div>
    </div>
    <q-separator color="orange" spaced="5px" inset />
    <!-- ================------ End News  section -----======================== -->

    <!-- ================------ slider section -----======================== -->
    <div class="w-full">
      <div class="flex row q-mb-md">
        <q-img src="~assets/products.png" class="q-ml-md" width="2em" />
        <p class="q-mx-md -mb-[8px] text-h3 text-weight-bolder text-yellow-8">
          PRODUCTS
        </p>
      </div>
      <q-carousel animated v-model="slide" arrows navigation infinite>
        <q-carousel-slide
          :name="1"
          img-src="https://static.wixstatic.com/media/12fd37_e9fcb515c514406daf1cac01c85e412b~mv2.jpeg/v1/fill/w_640,h_588,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/12fd37_e9fcb515c514406daf1cac01c85e412b~mv2.jpeg"
        />
        <q-carousel-slide
          :name="2"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8woDk3fXQx_L0y8LBhOdkremTTpvS5NdDkQ&usqp=CAU"
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
      <q-btn
        to="/products"
        color="amber-8"
        label="Our Quality Products"
        flat
        class="mt-[5px]"
      />
    </div>
    <!-- ================------ Ende slider section -----======================== -->

    <!-- ===============---- Footer  -----================== -->

    <div>
      <p class="invisible">Lorem ipsum dolor sit amet</p>
    </div>
    <footer class="bg-white sm:p-6 dark:bg-gray-900">
      <img src="../assets/honey-dripping.png" class="w-full no-margin" />
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0 p-4">
          <a href="#" class="flex items-center">
            <img src="~assets/logo.png" class="h-8 mr-3" alt="FlowBite Logo" />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Eyuel Honey</span
            >
          </a>
        </div>

        <div class="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3 p-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Resources
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline"
                  >PRODCUTS</a
                >
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline"
                  >ABOUT</a
                >
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              DEVELOPER (Eyuel Nigussie)
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline"> PORTFOLIO</a>
              </li>
              <li>
                <a href="#" class="hover:underline">LINK</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Official Partner
            </h2>
            <div class="flex row">
              <img src="../assets/killer.png" alt="" width="70" />
              <q-btn
                flat
                color="amber-8
"
                class="-ml-[8px]"
              >
                KILLER HONEY
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5 p-4"
      />

      <div class="sm:flex sm:items-center sm:justify-between p-4">
        <span class="text-sm text-amber-8 sm:text-center dark:text-gray-400"
          >© 2023 Eyuel Honey™. <br />
          All Rights Reserved || Eyu'el Nigussie.
        </span>
        <div
          class="text-amber-8 flex mt-4 space-x-6 sm:justify-center sm:mt-0"
          color="amber-8
"
        >
          <a href="#" class="text-amber-8 hover:text-amber-400 -900">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="text-amber-8 hover:text-amber-400">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Instagram page</span>
          </a>
          <a href="#" class="text-amber-8 hover:text-amber-400">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="text-amber-8 hover:text-amber-400">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">GitHub account</span>
          </a>
          <a href="#" class="text-amber-8 hover:text-amber-400">
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Dribbbel account</span>
          </a>
        </div>
      </div>
      <FloatButton />
    </footer>
  </q-page>
</template>

<script scoped>
import { useQuasar } from "quasar";
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
<!-- app id -->
<!-- com.eyuel.honey.app -->
<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
}

.bucket-bee {
}
.bounce {
  animation-name: bounce-1;
  animation-timing-function: ease-out;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}
@keyframes bounce-1 {
  0% {
    transform: translateX(50px);
  }
  25% {
    transform: translateX(10px);
  }

  50% {
    transform: translateX(20px);
  }

  100% {
    transform: translateX(50px);
  }
}

.movement {
  animation: fly-around 4s linear infinite;
}

@keyframes fly-around {
  0% {
    transform: rotate(0deg) translateX(-30px) rotate(0deg);
  }
  50% {
    transform: rotate(360deg) translateX(0px) rotate(-360deg);
  }
  100% {
    transform: rotate(360deg) translateX(-30px) rotate(-360deg);
  }
}

.movement-2 {
  animation: fly-around-2 4s linear infinite;
}

@keyframes fly-around-2 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.main-honey {
  animation: main-honey 6s linear infinite;
}

@keyframes main-honey {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.for-hover:hover {
  background: rgba(95, 72, 8, 0.4);
  color: rgb(167, 239, 255);
  font-size: 20px;
  cursor: pointer;
}
</style>
