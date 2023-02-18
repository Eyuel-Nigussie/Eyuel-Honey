<template>
  <q-layout view="hHr lpR fFf" class="background">
    <q-header
      reveal
      overlay
      class="text-black flex row justify-between q-pa-none no-wrap q-ma-none q-mb-md ellipsis transparent"
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

      <q-tabs class="left q-ma-none">
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

        <q-route-tab name="/map" icon="share" label="" class="q-pa-none lt-sm">
          <q-menu
            fit
            elevated
            anchor="top middle"
            self="bottom middle"
            icon="share"
            class="text-weight-bolder popup"
            @click="show()"
          >
            <q-item clickable class="text-weight-bolder">
              <q-item-section clickable class="flex flex-row no-wrap">
                <div>WhatsApp</div>
                <div>
                  <q-icon
                    name="call"
                    color="green-6"
                    class="ml-5"
                    size="20px"
                  />
                </div>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section clickable class="flex flex-row no-wrap">
                <div>Telegram</div>
                <div>
                  <q-icon name="send" color="blue" class="ml-5" size="20px" />
                </div>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section clickable class="flex flex-row no-wrap">
                <div>Facebook</div>
                <div>
                  <q-icon
                    name="facebook"
                    color="blue"
                    class="ml-5"
                    size="20px"
                  />
                </div>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section class="flex flex-row no-wrap">
                <div>
                  Copy Link<q-icon
                    name="content_copy"
                    class="ml-5"
                    size="20px"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-menu>
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

        <q-route-tab
          name=""
          icon="menu"
          label=""
          class="q-pa-none lt-sm"
          @click="drawerLeft = !drawerLeft"
        />
        <!--Larger screen-->
        <q-route-tab to="/map" name="" icon="menu" label="Menu" class="gt-xs" />
      </q-tabs>
    </q-header>

    <!-- ========================== Drawer End here ======================== -->

    <q-drawer
      v-model="drawerLeft"
      show-if-above
      :width="200"
      :breakpoint="300"
      overlay
      elevated
      class="backdrop-blur-sm sidebar"
    >
      <q-scroll-area class="fit sidebar">
        <div class="q-pa-sm sidebar">
          <div v-for="n in 20" :key="n">Drawer {{ n }} / 50</div>
        </div>
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

export default defineComponent({
  name: "MainLayout",

  setup() {
    const $q = useQuasar();

    function show(grid) {
      $q.bottomSheet({
        message: "Bottom Sheet message",
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
            label: "Share",
            icon: "share",
            id: "share",
          },
          {
            label: "Upload",
            icon: "cloud_upload",
            color: "primary",
            id: "upload",
          },
          {},
          {
            label: "John",
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
      drawerLeft: ref(false),
      show,
    };
  },
});
</script>

<style>
.sidebar {
  background: rgba(255, 251, 240, 0.4);
}

.background {
  /* background-image: url("src/assets/drawer.png");
  background-position: right 100% bottom -70%; */
  background: rgb(36, 33, 0);
  background: linear-gradient(
    90deg,
    rgba(36, 33, 0, 0) 70%,
    rgba(241, 185, 14, 0.3) 100%
  );
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: -20% 100%;
  backdrop-filter: blur(12px);
}

.popup {
  /* opacity: 0.5; */
  background: rgba(255, 251, 240, 0.8);
}
</style>
