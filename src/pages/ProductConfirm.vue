<template>
  <qpage class="flex flex-col mx-auto">
    <div class="mt-[100px] mx-auto">
      <h1 class="text-5xl font-bold">Congratulation!</h1>
      <div class="ml-8">
        <p class="font-bold text-2xl">Your order is on it's way</p>
        <q-icon name="arrow_right_alt" size="200px" class="-mt-[60px]" />
      </div>
    </div>

    <div class="q-my-md w-3/5 mx-auto">
      <div class="loop-wrapper">
        <div class="mountain"></div>
        <div class="hill"></div>
        <div class="tree"></div>
        <div class="tree"></div>
        <div class="rock"></div>
        <div class="truck"></div>
        <div class="wheels"></div>
      </div>
    </div>

    <div
      class="border-solid border-2 border-slate-900 p-5 mx-6 flex flex-col space-y-20 mb-10"
    >
      <div>
        <p class="mx-auto font-bold text-[20px] text-center">
          Tell your friends family and loved once about your greate life choice:
        </p>
      </div>
      <div class="flex flex-row mx-auto space-x-4">
        <q-icon name="facebook" size="60px" class="-ml-[10px] -mt-[60px]" />
        <q-icon name="flutter_dash" size="60px" class="-ml-[10px] -mt-[60px]" />
        <q-icon name="email" size="60px" class="-ml-[10px] -mt-[60px]" />
      </div>
    </div>
  </qpage>
</template>

<script></script>

<style>
.loop-wrapper {
  margin: 0 auto;
  position: relative;
  display: block;
  width: 80%;
  height: 250px;
  overflow: hidden;
  background-color: #7f590047;
  border-bottom: 3px solid #422d02;
  color: #000000;
}
.mountain {
  position: absolute;
  right: -900px;
  bottom: -20px;
  width: 2px;
  height: 2px;
  box-shadow: 0 0 0 50px #000000, 60px 50px 0 70px #000000,
    90px 90px 0 50px #000000, 250px 250px 0 50px #000000,
    290px 320px 0 50px #000000, 320px 400px 0 50px #000000;
  transform: rotate(130deg);
  animation: mtn 20s linear infinite;
}
.hill {
  position: absolute;
  right: -900px;
  bottom: -50px;
  width: 400px;
  border-radius: 50%;
  height: 20px;
  box-shadow: 0 0 0 50px #000000, -20px 0 0 20px #000000, -90px 0 0 50px #000000,
    250px 0 0 50px #000000, 290px 0 0 50px #000000, 620px 0 0 50px #000000;
  animation: hill 4s 2s linear infinite;
}
.tree,
.tree:nth-child(2),
.tree:nth-child(3) {
  position: absolute;
  height: 100px;
  width: 35px;
  bottom: 0;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg)
    no-repeat;
}
.rock {
  margin-top: -17%;
  height: 2%;
  width: 2%;
  bottom: -2px;
  border-radius: 20px;
  position: absolute;
  background: #000000;
}
.truck,
.wheels {
  transition: all ease;
  width: 85px;
  margin-right: -60px;
  bottom: 0px;
  right: 50%;
  position: absolute;
  background: #000000;
}
.truck {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg)
    no-repeat;
  background-size: contain;
  height: 60px;
}
.truck:before {
  content: " ";
  position: absolute;
  width: 25px;
  box-shadow: -30px 28px 0 1.5px #000000, -35px 18px 0 1.5px #000000;
}
.wheels {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg)
    no-repeat;
  height: 15px;
  margin-bottom: 0;
}

.tree {
  animation: tree 3s 0s linear infinite;
}
.tree:nth-child(2) {
  animation: tree2 2s 0.15s linear infinite;
}
.tree:nth-child(3) {
  animation: tree3 8s 0.05s linear infinite;
}
.rock {
  animation: rock 4s -0.53s linear infinite;
}
.truck {
  animation: truck 4s 0.08s ease infinite;
}
.wheels {
  animation: truck 4s 0.001s ease infinite;
}
.truck:before {
  animation: wind 1.5s 0s ease infinite;
}

@keyframes tree {
  0% {
    transform: translate(1350px);
  }
  50% {
  }
  100% {
    transform: translate(-50px);
  }
}
@keyframes tree2 {
  0% {
    transform: translate(650px);
  }
  50% {
  }
  100% {
    transform: translate(-50px);
  }
}
@keyframes tree3 {
  0% {
    transform: translate(2750px);
  }
  50% {
  }
  100% {
    transform: translate(-50px);
  }
}

@keyframes rock {
  0% {
    right: -200px;
  }
  100% {
    right: 2000px;
  }
}
@keyframes truck {
  0% {
  }
  6% {
    transform: translateY(0px);
  }
  7% {
    transform: translateY(-6px);
  }
  9% {
    transform: translateY(0px);
  }
  10% {
    transform: translateY(-1px);
  }
  11% {
    transform: translateY(0px);
  }
  100% {
  }
}
@keyframes wind {
  0% {
  }
  50% {
    transform: translateY(3px);
  }
  100% {
  }
}
@keyframes mtn {
  100% {
    transform: translateX(-2000px) rotate(130deg);
  }
}
@keyframes hill {
  100% {
    transform: translateX(-2000px);
  }
}
</style>
