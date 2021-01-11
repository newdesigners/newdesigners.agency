<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1 class="mb-2">Post a design project</h1>
      </div>
    </section>

    <form name="post a design project" method="POST" netlify>
      <!-- Project info -->
      <section>
        <div class="container max-w-3xl">
          <h2 class="text-left mb-1">What kind of project is it?</h2>

          <!-- Categories -->
          <div id="categories" class="form-group">
            <span>Please check all categories that may apply.</span>

            <div class="flex flex-col flex-wrap sm:flex-row">
              <!-- Internship -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="internship"
                />

                <label class="form-check-label" for="internship">
                  Internship
                </label>
              </div>

              <!-- Graduation project -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="graduation-project"
                />

                <label class="form-check-label" for="graduation-project">
                  Graduation project
                </label>
              </div>

              <!-- Freelance -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="freelance"
                />

                <label class="form-check-label" for="freelance">
                  Freelance
                </label>
              </div>

              <!-- Paid -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="paid"
                />

                <label class="form-check-label" for="paid">
                  Paid
                </label>
              </div>

              <!-- Unpaid -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="unpaid"
                />

                <label class="form-check-label" for="unpaid">
                  Unpaid
                </label>
              </div>

              <!-- Research -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="research"
                />

                <label class="form-check-label" for="research">
                  Research
                </label>
              </div>

              <!-- Design -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="design"
                />

                <label class="form-check-label" for="design">
                  Design
                </label>
              </div>

              <!-- Development -->
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="categories"
                  id="development"
                />

                <label class="form-check-label" for="development">
                  Development
                </label>
              </div>
            </div>
          </div>

          <!-- Language -->
          <div class="form-group">
            <span>Project language preference.</span>

            <!-- English or Dutch -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="language"
                id="english-or-dutch"
                checked
              />

              <label class="form-check-label" for="english-or-dutch">
                English or Dutch
              </label>
            </div>

            <!-- Only English -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="language"
                id="only-english"
              />

              <label class="form-check-label" for="only-english">
                Only English
              </label>
            </div>

            <!-- Only Dutch -->
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="language"
                id="only-dutch"
              />

              <label class="form-check-label" for="only-dutch">
                Only Dutch
              </label>
            </div>
          </div>

          <!-- Project title -->
          <div class="form-group">
            <label for="project-title">Project title *</label>
            <input
              type="text"
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
            <input type="text" class="form-control" id="estimated-duration" />
          </div>

          <!-- Company name -->
          <div class="form-group">
            <label for="company-name">Company name *</label>
            <input
              type="text"
              class="form-control"
              id="company-name"
              required
            />
          </div>

          <!-- Company website URL -->
          <div class="form-group mb-4">
            <label for="company-website-url">Company website URL *</label>
            <input
              type="url"
              class="form-control"
              id="company-website-url"
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
              class="form-control"
              id="contact-email"
              required
            />
          </div>

          <!-- Contact phonenumber -->
          <div class="form-group">
            <label for="contact-phonenumber">Your phone number</label>
            <input type="tel" class="form-control" id="contact-phonenumber" />
          </div>

          <button class="btn" type="submit">Post my project!</button>
        </div>
      </section>
    </form>
  </main>
</template>
