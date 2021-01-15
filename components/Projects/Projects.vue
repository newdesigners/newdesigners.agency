<template>
  <p v-if="$fetchState.pending">Fetching projects...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <li class="project" v-for="project of projects" :key="project.slug">
      <NuxtLink :to="`${project.dir}/${project.slug}`">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <h5 class="card-subtitle">
              {{ project.client }} - {{ project.location }}
            </h5>
            <div class="card-text">{{ project.description }}</div>
          </div>
          <div class="card-footer flex">
            <p>
              <span class="publish-date">{{
                formatDate(project.publishDate)
              }}</span>
              - <span class="duration">{{ project.duration }}</span> -
              <span class="language">{{ project.language }}</span>
            </p>
          </div>
        </div>
      </NuxtLink>
    </li>
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
    this.projects = await this.$content("projects")
      .limit(5)
      .fetch();
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    }
  }
};
</script>
