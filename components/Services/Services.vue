<template>
  <div class="services text-center lg:flex lg:space-x-1">
    <Service
      class="flex-1 mb-1 lg:mb-0"
      icon="search"
      heading="Research"
      text="Our members are UX researchers by heart. They dive into design questions and place themselves in your users shoes. We promise that as a client you'll get a fresh angle."
    >
      <h1>Hi there</h1>
    </Service>

    <Service
      class="flex-1 mb-1 lg:mb-0"
      icon="paint-brush"
      heading="UX/UI Design"
      text="From wireframes to high-fidelity prototypes, we design digital interfaces for everyone."
    />

    <Service
      class="flex-1 mb-1 lg:mb-0"
      icon="code"
      heading="Web Development"
      text="We specialize in translating designs pixel-perfectly into modern JamStack websites."
    />
  </div>
</template>

<style lang="postcss" scoped>
.services {
  filter: drop-shadow(0 4px 2px rgba(0, 0, 0, 0.1));
}
</style>
