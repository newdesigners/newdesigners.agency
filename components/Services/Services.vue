<template>
  <div class="services text-center lg:flex lg:space-x-1">

    <Service
      class="mb-1 lg:mb-0 lg:w-1/3"
      image="branding"
      heading="Fresh branding"
      price="1500"
      text="Elevate your brand with a stunning new logo, brand guide, and social media templates that reflect your values and resonate with your audience. "
    />


    <Service
      class="mb-1 lg:mb-0 lg:w-1/3"
      image="websites"
      heading="New websites"
      price="4500"
      text="We start with your content, then create custom concepts and wireframes to deliver a final product that meets your unique needs. Plus, we offer ongoing support and updates to keep your site running smoothly."
    >
      <h1>Hi there</h1>
    </Service>

    <Service
      class="mb-1 lg:mb-0 lg:w-1/3"
      image="video"
      heading="Amazing videos"
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
