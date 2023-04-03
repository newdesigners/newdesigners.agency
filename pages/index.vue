<template>
  <main>
    <!-- Hero -->
    <section class="relative flex items-center justify-center h-screen pt-0 pb-0 text-center bg-primary">

      <video playsinline loop muted autoplay class="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-40">
        <source src="~/assets/videos/showreelND.mp4" type="video/mp4">
      </video>

      <div class="relative container text-white">
        <h1 class="mb-2.5 md:text-6xlxl">YOUR PERSONAL DESIGN AGENCY</h1>
        <!-- <p class="md:text-3xl text-1xl mx-auto max-w-4xl">
          We specialize in digital design</a>. We love creating websites with
          beautiful UX, but we also rebrand</a> and make <a href="/work"
            class="text-secondary">videos</a>.
        </p> -->

        <p class="md:text-3xl text-1xl mx-auto max-w-4xl">
          Whether you need a new <a href="/work" class="text-secondary">logo and branding</a> guidelines, a responsive and user-friendly <a href="/work" class="text-secondary">website</a>, or a stunning <a href="/work" class="text-secondary">brand video</a> that tells your company's story, we've got you covered!
        </p>
      </div>

    </section>

    <!-- Who we are -->
    <section id="who-we-are" class="bg-gray">
      <div class="container">

        <h2>Hello, how can we help you?</h2>
        <p class="mb-2 mx-auto text-center">We specialize in helping businesses become more attractive and balanced in their media presence, both online and offline. From creating new branding to producing engaging videos, our team of experts will work with you every step of the way to ensure that your company stands out from the competition.</p>
        <div>
          <img src="~/assets/images/new-designers-office.png" class="block mx-auto">
        </div>
        <div>
        </div>
      </div>
    </section>

    <!-- What we do -->
    <section id="what-we-do">
      <div class="container">
        <h2>CREATED FOR YOU</h2>
        <Services />
      </div>
    </section>

    <Testimonial />

    <!--Preview-->
    <section>
      <vue-marquee-slider class="pb-3"
        id="marquee-slider-loop"
        :speed="3000"
        :width="450"
        :space="0">
           <h2 class="text-6xl"> <span class="px-2">&bull;</span> OUR WORK</h2>
        </vue-marquee-slider>

        <div class="container grid lg:grid-cols-2 gap-1 md:gap-2 text-center">
          <div class="column items-stretch">
            <img class="h-24" src="../assets/images/work/taalgebruik-book.jpg">
            <!-- <img src="../assets/images/projects/hsif 1.png">
            <img src="../assets/images/projects/joint-cyber-range 1.png"> -->
          </div>
          <div class="column items-stretch">
            <img src="../assets/images/projects/NextFashionRetail_scaled2.jpg">
            <!-- <img class="h-24" src="../assets/images/projects/eu-impacthub 1.png">
            <img class="h-24" src="../assets/images/projects/applied-research-project 1.png"> -->
          </div>
          <div class="column items-stretch">
            <img class="h-24" src="../assets/images/projects/Joint-Cyberrange.jpg">
          </div>
          <div class="column items-stretch">
            <img src="../assets/images/projects/hsif-1.png">
          </div>
          <div class="column items-stretch">
            <img class="h-24" src="../assets/images/projects/Gemeente-Haag-Archief.jpg">
          </div>
          <div class="column items-stretch">
            <img src="../assets/images/projects/European-Impact-Hub.jpg">
          </div>
        </div>
        <div class="flex justify-center pt-2">
        <nuxt-link to="/work" class="nav-link btn btn-sm self-center">
          Take a look at our projects
        </nuxt-link>
      </div>

    </section>

    <!-- Client -->
    <section id="clients" class="bg-gray">
      <div class="container text-center">
        <div>
          <img src="~/assets/images/how-we-work.png" class="block mx-auto">
        </div>
        <h2 class="mt-2">GET STARTED</h2>
        <p class="mb-2 mx-auto">
          At New Designers, we create custom solutions tailored to your needs. After a personal consultation, we'll provide a fixed-price package that meets your goals and budget.
        </p>
        <nuxt-link to="/get-started" class="btn">Contact us to get started today!</nuxt-link>
      </div>
    </section>

  </main>
</template>

<script>
import Vue from 'vue'
import VueMarqueeSlider from 'vue-marquee-slider';
Vue.use(VueMarqueeSlider)


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
