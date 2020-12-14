<template>
  <p v-if="$fetchState.pending">Fetching projects...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <span class="font-bold block mb-1"
      ><span class="text-secondary">{{ projects.length }}</span> projects has
      been found</span
    >
    <Project
      class="mb-1 lg:mb-0"
      v-for="(project, index) of projects"
      :key="index"
      :heading="project.title"
      :text="project.description"
      :footer1="project.height"
      :footer2="project.continent"
      :footer3="project.countries[0]"
    />
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: []
    };
  },
  async fetch() {
    this.projects = await fetch("https://api.nuxtjs.dev/mountains").then(res =>
      res.json()
    );
  }
};
</script>

<style></style>
