<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1>Projects</h1>
      </div>
    </section>

    <section>
      <div class="container max-w-3xl">
        <p v-if="$fetchState.pending">Fetching projects...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <ul v-else id="projects" class="grid grid-cols-1 gap-2">
          <li
            v-for="project of projects"
            :key="project[`slug`]"
            class="project"
          >
            <NuxtLink
              :to="`${project.dir}/${project[`slug`]}`"
              class="clickable-card"
            >
              <div :to="`${project.dir}/${project[`slug`]}`" class="card">
                <div class="card-body">
                  <h3 class="card-title">{{ project[`title`] }}</h3>
                  <h5 class="card-subtitle">{{ project[`company-name`] }}</h5>
                  <p
                    class="card-text overflow-hidden overflow-ellipsis whitespace-nowrap max-h-3"
                  >
                    {{ project[`project-description`] }}
                  </p>
                </div>
                <div class="card-footer flex">
                  <p>
                    <span class="publish-date">
                      {{ formatDate(project[`publish-date`]) }}
                    </span>
                    -
                    <span class="duration">
                      {{ project[`estimated-duration`] }}
                    </span>
                    -
                    <template
                      v-for="(language, name, index) in project[`languages`]"
                    >
                      <span
                        v-if="language === true"
                        :key="index"
                        class="languages"
                      >
                        {{ capitalize(name) }}
                      </span>
                    </template>
                  </p>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </section>
  </main>
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
    console.log(this.projects);
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    },
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return value.replace(/-/g, " ");
    }
  }
};
</script>
