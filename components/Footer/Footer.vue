<template>
  <footer id="site-footer" class="bg-primary text-white">
    <section>
      <div class="container py-3 sm:flex flex-wrap sm:space-x-2">
        <!-- Footer logo -->
        <div id="footer-logo" class="w-full md:flex-1 mb-2 lg:mb-0">
          <Logo logoWidth="max-w-logo-sm" class="mb-2" />
          <p class="italic text-blue-light">
            We love to research.<br />
            We love to design.<br />
            We love to develop.<br />
          </p>
        </div>

        <!-- Footer menu -->
        <div id="footer-menu" class="flex-1 mb-2 lg:mb-0">
          <h3>Menu</h3>
          <Navigation />
        </div>

        <!-- Footer information -->
        <div id="footer-info" class="flex-1 mb-2 lg:mb-0">
          <h3>Contact information</h3>
          <ul class="fa-ul">
            <li class="location mb-0.5">
              <span class="fa-li"><Fa icon="map-marker-alt"/></span>
              <p>
                Location The Hague, headquarters
                <br />
                Johanna Westerdijkplein 75
                <br />
                2521 EN The Hague
              </p>
            </li>
            <li class="instagram mb-0.5">
              <span class="fa-li"><Fa :icon="['fab', 'instagram']"/></span
              ><a
                href="https://instagram.com/newdesigners.agency"
                class="text-blue-pacific underline transition-colors hover:text-secondary"
                target="_blank"
                rel="noopener nofollow"
                >Instagram</a
              >
            </li>

            <li class="linkedin mb-0.5">
              <span class="fa-li"><Fa :icon="['fab', 'linkedin']"/></span
              ><a
                href="https://linkedin.com/companies/newdesigners"
                class="text-blue-pacific underline transition-colors hover:text-secondary"
                target="_blank"
                rel="noopener nofollow"
                >LinkedIn</a
              >
            </li>

            <li class="github mb-0.5">
              <span class="fa-li"><Fa :icon="['fab', 'github']"/></span
              ><a
                href="https://github.com/newdesigners/"
                class="text-blue-pacific underline transition-colors hover:text-secondary"
                target="_blank"
                rel="noopener nofollow"
                >Github</a
              >
            </li>

            <li class="email mb-0.5">
              <span class="fa-li"><Fa icon="paper-plane"/></span>
              <a
                href="mailto:newdesigners@hhs.nl"
                class="text-blue-pacific underline transition-colors hover:text-secondary"
                >newdesigners@hhs.nl</a
              >
            </li>

            <li class="netlify">
              <span class="fa-li"><Fa icon="bolt"/></span>
              <span>This site is powered by</span>
              <a
                href="https://www.netlify.com/"
                class="text-blue-pacific underline transition-colors hover:text-secondary"
                target="_blank"
                rel="noopener nofollow"
                >Netlify</a
              >
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="copyright-footer">
      <div class="container py-1 border-t text-sm flex">
        <div class="copyright">
          <span
            >&copy; {{ currentDate.getFullYear() }} New Designers Agency</span
          >
        </div>
        <span class="divider mx-0.25">|</span>
        <div class="netlify-code">
          <span>
            <a
              href="/code-of-conduct.pdf"
              class="text-blue-pacific underline transition-colors hover:text-secondary"
              target="_blank"
              rel="noopener nofollow"
              >Code of Conduct</a
            >
          </span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>
