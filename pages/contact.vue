<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <Logo class="mx-auto mb-2 max-w-logo-sm md:max-w-logo" />
        <h1 class="mb-2">Let’s get in touch!</h1>
        <p class="md:text-2xl mx-auto">The Hague University of Applied Sciences - Johanna Westerdijkplein 75 - 2521 EN The Hague -
        Room SL7.02 - <a href="mailto:newdesigners@hhs.nl" class="text-white">newdesigners@hhs.nl</a></p>

      </div>
    </section>

    <!-- Contact -->
    <section id="who-we-are" class="bg-gray">
      <div class="container">

          <h2>Visit us in The Hague</h2>
          <p class="mb-2 mx-auto">
            Feel free drop by our office for a chat. We have beautiful space located in <a href="https://www.thehagueuniversity.com/study-choice/contact/contact-offices">The Hague University of Applied Sciences</a> (room SL7.02). Where we can relax and get to know each other before starting to collaborate, as we believe good communication brings better results to the end product as well. We are excited to see you!</p>
          <div>
            <img src="~/assets/images/cmd-thuas.jpg"  class="block mx-auto">
          </div>
          <div>
        </div>
      </div>
    </section>

    <!-- Students -->
    <section id="what-we-do">
      <div class="container">
        <h2>Are you a student looking for a job?</h2>
        <p class="mb-2 mx-auto">
            We offer part-time jobs as designer, developer, photographer or video maker. We also provide half year internships where you can learn the ropes of working in a digital agency.<br><br>

            <strong>You will get a change to get hands-on experience:</strong><br>

            - as project manager; creating estimations and planning<br>

            - as visual designer; designing logos, motion or websites<br>

            - as UX designer; creating wireframes, user personas or leading workshops<br>

            - as front-end developer; translating designs into dynamic HTML/CSS, learning new frameworks or setting up a client CMS.<br>

            - And more! (e.g. Sales, Social Media, Marketing)
            <br><br>


            Interested? Please send your CV + portfolio to <a href="mailto:newdesigners@hhs.nl">newdesigners@hhs.nl</a> </p>
        <div>
          <img src="~/assets/images/meeting.jpg"  class="block mx-auto">
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
