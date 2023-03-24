<template>
  <main>


    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1 class="mb-2">About us</h1>
        <p class="md:text-2xl mx-auto">We are New Designers, the first student-run digital agency in The Hague. Founded in September 2020 we are a full-service learning environment that designs and develops brand identities and tailor-made digital solutions. We create websites, brand styles, provide UX reviews, as well as motion design and testing of existing digital products.</p>
      </div>
    </section>

    <!-- Who we are -->
    <section id="who-we-are">
      <div class="container">

          <h2>Learning by doing</h2>
          <p class="mb-2 mx-auto">
            Our goal is to have every design built and put live, our products will be used in real life. Students determine their role within the agency and work together in a team of likeminded (international) students. We offer a place where students can discover who they are.
          </p>

          <p class="mb-2 mx-auto">
            Are you a student that wants to get out of your comfort zone and grow to deliver the next successful digital project? We are always looking for students with passion for design, entrepreneurship and/or frontend development that like to work in a team. Please drop by SL7.02 or send us <a href="mailto:newdesigners@hhs.nl"> an email</a> and get to know us!</p>
          </p>

          <div>

           <img src="~/assets/images/new-designers-at-work.jpg"  class="block mx-auto pt-2">
          </div>
          <div>
        </div>
      </div>
    </section>


    <!-- What we do -->
    <section id="what-we-do">
      <div class="container">
        <h2>Our partners</h2>
        <div>
          <img src="~/assets/images/partners.png"  class="block mx-auto">
        </div>
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
