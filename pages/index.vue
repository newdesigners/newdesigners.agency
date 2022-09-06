<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
<!--         <Logo class="mx-auto mb-2 max-w-logo-sm md:max-w-logo" /> -->
        <h1 class="mb-2">We are New Designers</h1>
        <p class="md:text-2xl mx-auto">
          We specialize in digital design. We love creating <a href="" class="text-white">websites</a> with beautiful UX, but also do <a href="" class="text-white">rebrands</a> and <a href="" class="text-white">motion design</a>.
        </p>
      </div>
    </section>

    <!-- Who we are -->
    <section id="who-we-are" class="bg-gray">
      <div class="container">

          <h2>A student-run digital agency</h2>
          <p class="mb-2 mx-auto">We are a bit different then your ordinary agency. You will be working with young creative and innovative minds with an eye for detail. Our core value is to #learnbydoing, iterating our designs and gradually improving them. We work from our beautiful office located in <a href="/contact">The Hague</a> (University of Applied Sciences).</p>
          <div>
            <img src="~/assets/images/new-designers-office.png"  class="block mx-auto">
          </div>
          <div>
        </div>
      </div>
    </section>

    <!-- What we do -->
    <section id="what-we-do">
      <div class="container">
        <h2>Our services</h2>
        <Services />
      </div>
    </section>

    <!-- Client -->
    <section id="clients" class="bg-gray">
      <div class="container text-center">
        <div>
          <img src="~/assets/images/how-we-work.png"  class="block mx-auto">
        </div>
        <h2 class="mt-2">How we work</h2>
        <p class="mb-2 mx-auto">
          Students work in multidisciplinary agile teams when
          realising projects. Our goal is to have every design built and put live. Do you want to         collaborate or have a design question waiting to be answered?
        </p>
        <nuxt-link to="/post-a-design-project" class="btn">Please submit your project</nuxt-link>
      </div>
    </section>


    <!-- Incubator -->
    <section id="incubator">
      <div class="container text-center overflow-hidden">
        <h2>Edtech Incubator</h2>
        <img src="~/assets/images/submit-project.png"  class="float-right pl-2 pb-6">

        <p class="mx-auto text-left">
          In addition to working for clients we also host
          educational software startups. For example, if you have an
          idea for your own educational product, we can help you with validation, design, development and
          marketing.<br><br> Want to know what is possible? Please
          <a href="mailto:newdesigners@hhs.nl">send us an email</a> or leave your  <nuxt-link to="/post-a-design-project">project description</nuxt-link> if you want
          to apply for our incubator.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>
