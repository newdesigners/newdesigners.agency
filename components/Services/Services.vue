<template>
  <div class="services text-center lg:flex lg:space-x-1">
    <Service
      class="mb-1 lg:mb-0"
      image="design"
      heading="Visual design"
      text="From company styles, wireframes to high-fidelity prototypes, we design digital interfaces for everyone."
    >
      <h1>Hi there</h1>
    </Service>

    <Service
      class="mb-1 lg:mb-0"
      image="research"
      heading="Research"
      text="Our members are UX researchers by heart. They dive into design questions and place themselves in your users shoes. We promise that as a client you'll get a fresh angle."
    />

    <Service
      class="mb-1 lg:mb-0"
      image="development"
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
