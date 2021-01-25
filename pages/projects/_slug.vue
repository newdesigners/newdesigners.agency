<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1>{{ project[`title`] }}</h1>
      </div>
    </section>

    <!-- Project -->
    <section id="project">
      <div class="container lg:max-w-6xl lg:grid lg:grid-cols-3 lg:gap-2">
        <!-- Project content -->
        <article id="project-content" class="col-span-2 mb-2 lg:mb-0">
          <span id="publish-date">
            Published at: {{ formatDate(project[`publish-date`]) }}
          </span>
          <p id="project-description" class="whitespace-pre-line text-justify">
            {{ project[`project-description`] }}
          </p>
        </article>

        <aside
          class="bg-gray shadow-md p-2 col-span-1 grid grid-cols-1 gap-2 auto-rows-min sm:grid-cols-2 sm:gap-0 lg:grid-cols-1 lg:gap-2"
        >
          <!-- Project info -->
          <div
            id="project-info"
            class="grid gap-1 sm:auto-rows-min lg:col-span-1"
          >
            <h2 class="text-left mb-0">Project info</h2>

            <!-- Categories -->
            <div id="categories">
              <h4>Categories</h4>
              <template
                v-for="(categorie, name, index) in project[`categories`]"
              >
                <span
                  v-if="categorie === true"
                  :key="index"
                  class="badge badge-primary"
                >
                  {{ capitalize(name) }}
                </span>
              </template>
            </div>

            <!-- Languages -->
            <div id="languages">
              <h4>Languages</h4>
              <template v-for="(language, name, index) in project[`languages`]">
                <span v-if="language === true" :key="index">
                  {{ capitalize(name) }}
                </span>
              </template>
            </div>

            <!-- Estimated duration -->
            <div id="estimated-duration">
              <h4>Estimated duration</h4>
              <span>{{ project[`estimated-duration`] }}</span>
            </div>
          </div>

          <!-- Company info -->
          <div id="company-info" class="grid gap-1 sm:auto-rows-min">
            <h2 class="text-left mb-0">Company info</h2>

            <!-- Company name -->
            <div id="company-name">
              <h4>Company name</h4>
              <span>{{ project[`company-name`] }}</span>
            </div>

            <!-- Company website -->
            <div id="company-website">
              <h4>Company website</h4>
              <span>{{ project[`company-website`] }}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      project: []
    };
  },

  async fetch() {
    this.project = await this.$content(this.$route.path).fetch();
  },

  mounted() {
    this.capitalize();
    this.formatDate();
  }
};
</script>
