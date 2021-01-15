<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">{{ project.title }}</div>
      <div class="card-subtitle">{{ project.client }} - {{ location }}</div>
      <div class="card-text">{{ project.description }}</div>
      <div class="card-footer flex">
        <span class="publish-date">{{ formatDate(project.publishDate) }}</span>
        <span class="duration">{{ project.duration }}</span>
        <span class="language">{{ project.language }}</span>
      </div>
    </div>
  </div>
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
    console.log(this.$route.path);
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("nl", options);
    }
  }
};
</script>
