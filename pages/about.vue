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
            to="/get-started">contact info </nuxt-link> if you want
          to apply for our incubator.
        </p>
      </div>
    </section>
    <!-- FAQ -->
    <!-- <section id="faq">
    <div class="containerv2 lg:pr-9 lg:pl-9 md:pr-5 md:pl-5 sm:pl-2 sm:pr-2">
      <div class="relative">
        <h1 class="z-20 relative">FAQ</h1>
        <div class="absolute z-0 top-1.75 left-0.5 bg-yellow w-5 h-0.875"></div>
      </div>

      <div class="flex flex-col justify-center items-center mt-5 ">
        <questionblock question="Do you work with strict contracts full of fine sprint?" answer="We work on a flexible contract system. We can sign a contract for the entire project, or we can book a sprint only. Each sprint consists of two weeks. The number of sprints needed to implement the project is determined when discussing the project with the client."/>
        <questionblock question="What sets you apart from other agencies?" answer="We work on a flexible contract system. We can sign a contract for the entire project, or we can book a sprint only. Each sprint consists of two weeks. The number of sprints needed to implement the project is determined when discussing the project with the client."/>
        <questionblock question="What are you all doing for further training?" answer="We work on a flexible contract system. We can sign a contract for the entire project, or we can book a sprint only. Each sprint consists of two weeks. The number of sprints needed to implement the project is determined when discussing the project with the client."/>
        <questionblock question="Project internships or follow-up internships?" answer="We work on a flexible contract system. We can sign a contract for the entire project, or we can book a sprint only. Each sprint consists of two weeks. The number of sprints needed to implement the project is determined when discussing the project with the client."/>
      </div>
    </div>
    </section>     -->
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
