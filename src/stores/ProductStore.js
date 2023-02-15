import { defineStore } from "pinia";

export const useProductStore = defineStore("counter", {
  state: () => ({
    products: [
      {
        id: 1,
        title: "Honey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: "120 Birr",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAOcLLeWtkFibkpxP0tUcBNKZpYrIPqBepg&usqp=CAU  ",
      },
      {
        id: 2,
        title: "Jar Honey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: "120 Birr",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqqowsymJrs-Y8uQDdMqJX9ev_4690rNvSdQ&usqp=CAU",
      },
      {
        id: 3,
        title: "Jar Honey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: "120 Birr",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdac7g9C6fqZbL6FSGvSUmGn-cksUvYENkuzD2U8_aQmqMJS6doqHBa6v-YEVoDJvINKQ&usqp=CAU",
      },
      {
        id: 4,
        title: "Jar Honey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: "120 Birr",
        picture:
          "https://cdn.shopify.com/s/files/1/1363/9225/products/KBH_071619-2_1400x.jpg?v=1663803009",
      },
      {
        id: 5,
        title: "Jar Honey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: "120 Birr",
        picture:
          "https://cf.shopee.com.my/file/f738c797746a0b5b15b89d3987726b1b",
      },
      {
        id: 6,
        title: "Jar Honey",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: "120 Birr",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1o5pKFYqVLKmfV2AYyYqh5oMsNKt6ttEqnA&usqp=CAU",
      },
    ],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
  },
});
