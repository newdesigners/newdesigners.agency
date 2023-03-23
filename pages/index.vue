<template>
  <main>
    <!-- Hero -->
    <section class="relative flex items-center justify-center h-screen pt-0 pb-0 text-center bg-primary">

      <video playsinline loop muted autoplay class="absolute top-0 left-0 z-0 w-full h-full object-cover opacity-40">
        <source src="~/assets/videos/showreelND.mp4" type="video/mp4">
      </video>



      <div class="relative container text-white">
        <h1 class="mb-2.5 md:text-6xlxl">WE ARE NEW DESIGNERS</h1>
        <p class="md:text-3xl text-1xl mx-auto max-w-4xl">
          We specialize in <a href="/work" class="text-secondary">digital design</a>. We love creating websites with
          beautiful UX, but we also <a href="/work" class="text-secondary">rebrand</a> and do <a href="/work"
            class="text-secondary">motion design</a>.
        </p>
      </div>

    </section>

    <!-- Who we are -->
    <section id="who-we-are" class="bg-gray">
      <div class="container">

        <h2>A student-run digital agency</h2>
        <p class="mb-2 mx-auto"><a href="/about">We are a bit different</a> then your ordinary agency. You will be working
          with young creative and innovative minds with an eye for detail. Our core value is to #learnbydoing, iterating
          our designs and gradually improving them. We work from our beautiful office located in <a href="/contact">The
            Hague</a> (University of Applied Sciences).</p>
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
        <h2>Our services</h2>
        <Services />
      </div>
    </section>
    

    <!-- Client -->
    <section id="clients" class="bg-gray">
      <div class="container text-center">
        <div>
          <img src="~/assets/images/how-we-work.png" class="block mx-auto">
        </div>
        <h2 class="mt-2">How we work</h2>
        <p class="mb-2 mx-auto">
          Students work in multidisciplinary agile teams when
          realising projects. Our goal is to have every design built and put live. Do you want to collaborate or have a
          design question waiting to be answered?
        </p>
        <nuxt-link to="/post-a-design-project" class="btn">Please submit your project</nuxt-link>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials">
      <div class="flex justify-center items-center flex-col lg:flex-row lg:ml-18 lg:mr-auto px-1">

          <a href="https://www.linkedin.com/in/hanneke-van-riet-3b029613/">
            <div class="lg:mr-4 mb-2 lg:mb-0 w-12 rounded-full">

            <img class="rounded-full aspect-square"
              src="https://media.licdn.com/dms/image/C5603AQHemArdr_hkhA/profile-displayphoto-shrink_800_800/0/1637959446354?e=2147483647&v=beta&t=txyKyrOx9R8uncWCBtby-dZ50ZV5yAjW3vXfYP0rZxg">
            </div>
            </a>

        <div class="flex flex-col lg:mr-4">
          <p class="text-xl md:text-3xl font-bold">‘ Our collaboration with the New Designers surpassed our expectations,
            as they were not only easy to work with but also receptive to feedback and quick to take action.‘</p>
          <div class="mt-1.25 ">
            <a class="inline-block" href="https://www.linkedin.com/in/hanneke-van-riet-3b029613/">
              <div class="flex items-center">
                <p class="text-yellow text-2xl">Hanneke Van Riet</p>
                <svg class="relative ml-0.5 top-0.125" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  viewBox="0 0 24 24">
                  <path fill="white" fill-rule="evenodd"
                    d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838Zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388Zm-5.5 10.403h3.208V9.25H4.208v10.54ZM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0Z"
                    clip-rule="evenodd" />
                </svg>
              </div>
            </a>
            <p class="text-blue-pacific">Study & Career Center, The Hague University</p>
          </div>
        </div>

      </div>
    </section>


    <!-- Incubator -->
    <section id="incubator">
      <div class="container text-center overflow-hidden">
        <h2>Edtech Incubator</h2>
        <img src="~/assets/images/submit-project.png" class="float-right pl-2 pb-6">

        <p class="mx-auto text-left">
          In addition to working for clients we also host
          educational software startups. For example, if you have an
          idea for your own educational product, we can help you with validation, design, development and
          marketing.<br><br> Want to know what is possible? Please
          <a href="mailto:newdesigners@hhs.nl">send us an email</a> or leave your <nuxt-link
            to="/post-a-design-project">project description</nuxt-link> if you want
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
