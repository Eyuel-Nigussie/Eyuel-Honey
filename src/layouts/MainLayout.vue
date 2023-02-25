<template>
  <q-layout view="hHr lpR fFf" class="bg-defination">
    <q-header
      reveal
      overlay
      class="text-black flex row justify-between q-pa-none no-wrap q-ma-none q-mb-md ellipsis transparent z-50"
      height-hint="40"
    >
      <q-toolbar>
        <q-toolbar-title>
          <div class="flex row q-ma-none my-font lt-sm">
            <q-img
              src="~assets/logo.png"
              class="q-mr-sm"
              style="width: 50px; height: 50px"
            />
            <p class="text-subtitle1 flex q-pa-none q-ma-none self-center">
              Eyuel
            </p>
            <p class="">Honey</p>
          </div>
          <!-- large screen -->
          <div class="flex row my-font gt-xs">
            <p class="text-h4 flex q-pa-none q-ma-none self-end">Eyuel</p>
            <p class="text-h3 self-baseline q-mb-xs">Honey</p>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs class="left q-ma-none background-tab z-50">
        <q-route-tab
          to="/"
          name="/"
          icon="home"
          label=""
          class="q-pa-none lt-sm"
        />
        <!-- Home large screen -->
        <q-route-tab to="/" name="/" icon="home" label="Home" class="gt-xs" />

        <q-route-tab
          to="/products"
          name="/products"
          icon="hive"
          label=""
          class="q-pa-none lt-sm"
        />
        <!-- person large screen -->
        <q-route-tab
          to="/products"
          name="/products"
          icon="person_outline"
          label="products"
          class="gt-xs"
        />

        <q-route-tab
          name=""
          icon="share"
          label=""
          class="q-pa-none lt-sm"
          @click="show()"
        >
        </q-route-tab>

        <!-- share large screen -->
        <q-route-tab name="/map" icon="share" label="Share" class="gt-xs">
          <q-menu fit anchor="top middle" self="bottom middle" icon="share">
            <q-item clickable>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>New incognito tab</q-item-section>
            </q-item>
          </q-menu>
        </q-route-tab>

        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <!--Larger screen-->
        <q-route-tab to="/map" name="" icon="menu" label="Menu" class="gt-xs" />
      </q-tabs>
    </q-header>

    <!-- ========================== Drawer End here ======================== -->

    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="100"
      overlay
      elevated
      bordered
      class="bg-grey-3 bg-transparent"
    >
      <q-scroll-area
        class="fit bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500"
      >
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :active="menuItem.label === ''" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>

          <div class="mt-[200px]">
            <q-avatar size="56px" class="q-mb-sm q-ml-xl">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" class="" />
            </q-avatar>
            <div class="text-weight-bold">Eyu'el Nigussie</div>
            <div>@eyuthedev</div>
          </div>

          <div class="min-h-[3000px] drawer"></div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- ========================== Drawer End here ======================== -->
    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

const menuList = [
  {
    icon: "inbox",
    label: "Products",
    separator: true,
  },
  {
    icon: "send",
    label: "Waiting",
    separator: false,
  },
  {
    icon: "delete",
    label: "Orders",
    separator: false,
  },
  {
    icon: "error",
    label: "Spam",
    separator: true,
  },
  {
    icon: "settings",
    label: "Settings",
    separator: false,
  },
  {
    icon: "feedback",
    label: "Send Feedback",
    separator: false,
  },
  {
    icon: "help",
    iconColor: "amber-8",
    label: "Help",
    separator: false,
  },
];

export default defineComponent({
  name: "MainLayout",

  setup() {
    const $q = useQuasar();

    function show(grid) {
      $q.bottomSheet({
        message: "Share",
        grid,
        actions: [
          {
            label: "Drive",
            img: "https://cdn.quasar.dev/img/logo_drive_128px.png",
            id: "drive",
          },
          {
            label: "Keep",
            img: "https://cdn.quasar.dev/img/logo_keep_128px.png",
            id: "keep",
          },
          {
            label: "Google Hangouts",
            img: "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
            id: "calendar",
          },
          {
            label: "Calendar",
            img: "https://cdn.quasar.dev/img/logo_calendar_128px.png",
            id: "calendar",
          },
          {},
          {
            label: "Upload",
            icon: "cloud_upload",
            color: "amber-8",
            id: "upload",
          },
          {},
          {
            label: "Eyuel Nigussie",
            avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
            id: "john",
          },
        ],
      })
        .onOk((action) => {
          // console.log('Action chosen:', action.id)
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }

    return {
      drawer: ref(true),
      menuList,
      show,
    };
  },
});
</script>

<style>
.bg-defination {
  animation: change-bg 100s linear infinite;
}
@keyframes change-bg {
  0% {
    background-image: url("../assets/background-one.jpg");
    background-size: cover;
  }
  25% {
    background-image: url("../assets/background-two.jpg");
    background-size: cover;
  }
  45% {
    background-image: url("../assets/background-three.jpg");
    background-size: cover;
  }
  65% {
    background-image: url("../assets/background-four.jpg");
    background-size: cover;
  }
  70% {
    background-image: url("../assets/background-five.jpg");
    background-size: cover;
  }
  100% {
    background-image: url("../assets/background-six.jpg");
    background-size: cover;
  }
}

.sidebar {
  background: rgba(255, 251, 240, 0.4);
}

.background-tab {
  background: linear-gradient(
    90deg,
    rgba(36, 33, 0, 0) 30%,
    rgba(241, 184, 14, 0.405) 100%
  );
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: -20% 100%;
  backdrop-filter: blur(12px);
}

.popup {
  font-weight: bolder;
  font-size: large;
  background: rgba(255, 251, 240, 0.8);
}

/* for the remaining position of the drawer */
.drawer {
  background: url("../assets/drawer.png");
  background-position: right;
}
</style>
