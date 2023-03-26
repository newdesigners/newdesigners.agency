<template>
  <div class="services text-center lg:flex lg:space-x-1">

    <Service
      class="mb-1 lg:mb-0"
      image="branding"
      heading="Branding"
      price="1500"
      text="We'll work with you to develop a comprehensive branding strategy that reflects your values and resonates with your target audience."
    />


    <Service
      class="mb-1 lg:mb-0"
      image="websites"
      heading="Websites"
      price="4500"
      text="We'll work closely with you to understand your needs and preferences and then build a customized website that reflects your brand and meets your goals."
    >
      <h1>Hi there</h1>
    </Service>


    <Service
      class="mb-1 lg:mb-0"
      image="video"
      heading="Video"
      price="3500"
      text="Let us help you create a video that stands out from the crowd and drives results for your business."
    />
  </div>
</template>

<style lang="postcss" scoped>
.services {
  filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.1));
}
</style>
