<template>
  <!-- Testimonials -->
  <section id="testimonials">
    <div class="flex justify-center items-center flex-col lg:flex-row lg:ml-18 lg:mr-auto px-1">
      <a :href="linkedinUrl">
        <div class="lg:mr-4 mb-2 lg:mb-0 w-12 rounded-full">
          <img class="rounded-full aspect-square" :src="require(`@/assets/images/${imageSrc}`)">
        </div>
      </a>
      <div class="flex flex-col lg:mr-4">
        <p class="text-xl md:text-3xl font-bold">{{ quote }}</p>
        <div class="mt-1.25">
 <template v-if="linkedinUrl">
            <a :href="linkedinUrl" class="inline-block">
              <div class="flex items-center center">
                <p class="text-yellow text-2xl">{{ name }}</p>
                <svg
                  class="relative ml-0.5 lg:top-0.125 top-px"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    fill-rule="evenodd"
                    d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </template>
          <template v-else>
            <div class="flex items-center center">
              <p class="text-yellow text-2xl">{{ name }}</p>
            </div>
          </template>          
          <p class="text-blue-pacific">{{ company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    linkedinUrl: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
  },
};
</script>