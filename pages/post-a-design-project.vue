<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1 class="mb-2">Post a design project</h1>
      </div>
    </section>
    <form
      name="post-a-design-project"
      action="/thanks"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="post-a-design-project" />

      <!-- Project info -->
      <section>
        <div class="container max-w-3xl">
          <h2 class="text-left mb-1">What kind of project is it?</h2>

          <!-- Categories -->
          <div id="categories" class="form-group">
            <span>Please check all categories that may apply.</span>

            <div class="flex flex-col flex-wrap sm:flex-row">
              <div
                class="form-check"
                v-for="(category, index) in categories"
                :key="index"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  :name="category"
                  :value="category"
                  :id="lowercase(category)"
                />

                <label class="form-check-label" :for="lowercase(category)">
                  {{ category }}
                </label>
              </div>
            </div>
          </div>

          <!-- Languages -->
          <div id="languages" class="form-group">
            <span>Project language preference.</span>

            <div
              class="form-check"
              v-for="(language, index) in languages"
              :key="index"
            >
              <input
                class="form-check-input"
                type="radio"
                name="language"
                :value="language"
                :id="lowercase(language)"
              />

              <label class="form-check-label" :for="lowercase(language)">
                {{ language }}
              </label>
            </div>
          </div>

          <!-- Project title -->
          <div class="form-group">
            <label for="project-title">Project title *</label>
            <input
              type="text"
              name="project-title"
              class="form-control"
              id="project-title"
              required
            />
          </div>

          <!-- Project description -->
          <div class="form-group">
            <label for="project-description"
              >Project description (e.g. what is your design problem?) *</label
            >
            <textarea
              name="project-description"
              class="form-control"
              id="project-description"
              rows="3"
              required
            ></textarea>
          </div>

          <!-- Estimated duration -->
          <div class="form-group">
            <label for="estimated-duration"
              >What is the estimated duration of the project? And deadline or
              hurry?</label
            >
            <input
              type="text"
              name="estimated-duration"
              class="form-control"
              id="estimated-duration"
            />
          </div>

          <!-- Company name -->
          <div class="form-group">
            <label for="company-name">Company name *</label>
            <input
              type="text"
              name="company-name"
              class="form-control"
              id="company-name"
              required
            />
          </div>

          <!-- Company website -->
          <div class="form-group mb-4">
            <label for="company-website">Company website *</label>
            <input
              type="url"
              name="company-website"
              class="form-control"
              id="company-website"
              required
            />
          </div>

          <!-- Contact info -->
          <h2 class="text-left mb-0">Contact info</h2>
          <span class="block mb-1"
            >Please leave your contact info here. We will contact you within
            five working days.
          </span>

          <!-- Contact name -->
          <div class="form-group">
            <label for="contact-name">Your name *</label>
            <input
              type="text"
              name="contact-name"
              class="form-control"
              id="contact-name"
              required
            />
          </div>

          <!-- Contact email -->
          <div class="form-group">
            <label for="contact-email">Your email address *</label>
            <input
              type="email"
              name="contact-email"
              class="form-control"
              id="contact-email"
              required
            />
          </div>

          <!-- Contact phonenumber -->
          <div class="form-group mb-4">
            <label for="contact-phone-number">Your phone number</label>
            <input
              type="tel"
              name="contact-phone-number"
              class="form-control"
              id="contact-phonen-umber"
            />
          </div>

          <button type="submit" class="btn">Post my project!</button>
        </div>
      </section>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "Internship",
        "Graduation project",
        "Freelance",
        "Paid",
        "Unpaid",
        "Research",
        "Design",
        "Development"
      ],
      languages: ["English or Dutch", "Only English", "Only Dutch"]
    };
  },
  methods: {
    lowercase(value) {
      if (!value) return "";
      value = value.toString();
      return value.replace(/\s+/g, " ").toLowerCase();
    }
  }
};
</script>
