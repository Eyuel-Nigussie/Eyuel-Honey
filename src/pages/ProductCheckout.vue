<template>
  <qpage>
    <div class="col-xs-12 col-sm-6 col-md-4">
      <h4 class="text-bold q-pl-md">Check Out</h4>
      <q-card class="my-card transparent" clickable>
        <q-card-section horizontal>
          <q-img
            class="col-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd8heVHdlbeVO-LayL_IvsloKkT5-C463X7w&usqp=CAU"
          />

          <q-card-section>
            <span class="text-weight-bolder">Product: clug<br /></span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            porro illo cumque vitae voluptatum eius quas illum facere quibusdam
            necessitatibus! Quos quidem corporis, aut quia ut aperiam quaerat
            quasi expedita?
          </q-card-section>
        </q-card-section>

        <q-separator />

        <!-- <q-card-actions>
            <q-btn flat round icon="event" />
            <q-btn flat> 5:30PM </q-btn>
            <q-btn flat> 7:00PM </q-btn>
            <q-btn flat color="amber-8"> Reserve </q-btn>
          </q-card-actions> -->
      </q-card>
      <q-input outlined v-model="text" label="Full Name" class="q-ma-md" />
      <q-input outlined v-model="text" label="EMAIL" class="q-ma-md" />

      <q-input
        filled
        v-model="cardNumber"
        label="Your Credit Card Number *"
        hint="xxxx xxx xxxxx"
        lazy-rules
        class="q-ma-md"
        :rules="[(val) => (val && val.length > 0) || 'This Card is not valid']"
      />

      <div class="row mx-1 space-x-4 no-wrap">
        <q-input
          filled
          v-model="cvv"
          label="CVV*"
          hint="****"
          lazy-rules
          size="12"
          :rules="[(val) => (val && val.length > 0) || 'Please fill out a CVV']"
        />
        <q-input
          filled
          v-model="postalCode"
          label="Postal Code *"
          hint="Name and surname"
          lazy-rules
          size="12"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          v-model="holderName"
          label="Your Credit Card Number *"
          hint="Name and surname"
          lazy-rules
          size="12"
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
      </div>

      <div class="q-pa-md">
        <h5>Choose a Payment</h5>
        <q-option-group :options="options" type="radio" v-model="group" />
      </div>

      <q-btn
        to="/confirm"
        push
        color="amber-8"
        label="Buy"
        class="q-m-md m-[8px]"
      />
      <q-btn
        @click="onReset()"
        push
        color="amber-8"
        label="Reset"
        class="q-m-md m-[8px]"
      />
    </div>
  </qpage>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const cardNumber = ref(null);
    const cvv = ref(null);
    const postalCode = ref(null);
    const holderName = ref(null);
    const age = ref(null);
    const accept = ref(false);
    const creditCard = ref(null);

    return {
      cardNumber,
      cvv,
      postalCode,
      holderName,
      group: ref(null),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      options: [
        { label: "Credit/Debit", value: "bat" },
        { label: "Buy now, Pay later", value: "friend", color: "green" },
        { label: "Pay Pal", value: "upload", color: "blue" },
      ],

      onReset() {
        name.value = null;
        cardNumber.value = null;
        cvv.value = null;
        postalCode.value = null;
        holderName.value = null;
        age.value = null;
        creditCard.value = null;
      },
    };
  },
};
</script>
