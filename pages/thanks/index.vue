<template>
  <main>
    <section id="thanks">
      <div class="container text-center">
        <Logo class="mx-auto mb-2 max-w-logo-xsm" />
        <h2 class="mb-2 text-blue-pacific">Hurray!</h2> 

        <!-- Thank you message for after submitting on a project -->
        <div class="message-thanks">
          <p class="text-primary text-xl pb-1.25 mx-auto">Thanks for submitting your project!</p>
          <p class="text-primary text-xl pb-2 mx-auto">We will review your project and get back to you within a couple of days.</p>
          <NuxtLink
            to="/"
            class="btn"
          >
            Go back
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
};
</script>
