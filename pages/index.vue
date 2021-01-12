<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <Logo class="mx-auto mb-2" logoWidth="max-w-logo-sm md:max-w-logo" />
        <h1 class="mb-2">Hello World!</h1>
        <p class="md:text-2xl">
          We are New Designers, the first student-run design agency in The
          Hague. Take the opportunity to be responsible for running your own
          digital agency. Determine your role within the agency and work
          together in a team of international CMD students. Please
          <a href="mailto:newdesigners@hhs.nl" class="text-blue"
            >send us an email</a
          >
          with your portfolio if you want to apply as a new designer.
        </p>
      </div>
    </section>

    <!-- What we do -->
    <section id="what-we-do">
      <div class="container">
        <h2>What we do?</h2>
        <Services />
      </div>
    </section>

    <!-- Client -->
    <section id="clients">
      <div class="container text-center">
        <h2>Clients</h2>
        <p class="mb-2">
          Customers come to us with design issues that we translate into
          suitable solutions, such as complete style guides, websites and apps.
          New Designers members mainly work for external clients from the
          business world, but also do design work for THUAS lectorates and other
          educational initiatives. Students work in multidisciplinary teams when
          realising projects. Our goal is to have every design built and put
          live, so that the end product will be used IRL. Do you want to
          collaborate or have a design question waiting to be answered?
        </p>
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=m2tYomf4PEuTY1tDXF28RbTkDX42-gROkMzHS38XZmJUQ1pQME5GRFlQNUpNNkgzQzdWWVNJRkREQS4u"
          target="_blank"
          rel="noopener nofollow"
          class="btn"
          >Please submit your project here</a
        >
      </div>
    </section>

    <!-- Incubator -->
    <section id="incubator">
      <div class="container text-center">
        <h2>Incubator</h2>
        <p>
          In addition to working for clients, members also have the option to
          work on own ideas within the incubator. For example, if you have an
          idea for your own product, we will help you with the business model,
          marketing and from introduction to external partners to possible
          investment rounds. Have a great idea? Please
          <a href="mailto:newdesigners@hhs.nl">send us an email</a> if you want
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
