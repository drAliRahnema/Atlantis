<template>
    <NuxtLayout>
    <div class="loading-wrapper">
      <!-- <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
    animationDuration=".5s" aria-label="Custom ProgressSpinner" /> -->
    <div class="text-center flex justify-content-center align-items-center w-full h-full">
      <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
    </div>
      <!--  -->
        <!-- <svg
          class="loader12"
          height="57"
          stroke="#fff"
          viewBox="0 0 57 57"
          width="57"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill-rule="evenodd" fill="none">
            <g stroke-width="2" transform="translate(1 1)">
              <circle class="loader12__path-left" cx="5" cy="50" r="5"></circle>
              <circle class="loader12__path-top" cx="27" cy="5" r="5"></circle>
              <circle
                class="loader12__path-right"
                cx="50"
                cy="50"
                r="5"
              ></circle>
            </g>
          </g>
        </svg> -->
      </div>
    </NuxtLayout>
</template>


<script setup lang="ts">
//  import gsap from 'gsap'

// const { gsap } = require("gsap/dist/gsap");
// const { TimelineMax } = require("gsap/dist/TimelineMax");
// gsap.registerPlugin(TimelineMax)

// useHead({
//   script: [
//     {
//       src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js',
//       integrity: "sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==",
//       crossorigin:"anonymous",
//       body: true
//     }
//   ]
// })

  

  // const loader12Timeline = new TimelineMax({ repeat: -1 });

  // loader12Timeline
  //   .to(
  //     ".loader12__path-top",
  //     0.75,
  //     {
  //       attr: {
  //         cx: 50,
  //         cy: 50,
  //       },
  //     },
  //     "l12_1"
  //   )
  //   .to(
  //     ".loader12__path-left",
  //     0.75,
  //     {
  //       attr: {
  //         cx: 27,
  //         cy: 5,
  //       },
  //     },
  //     "l12_1"
  //   )
  //   .to(
  //     ".loader12__path-right",
  //     0.75,
  //     {
  //       attr: {
  //         cx: 5,
  //         cy: 50,
  //       },
  //     },
  //     "l12_1"
  //   );
</script>