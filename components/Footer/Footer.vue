<template>
  <footer id="site-footer" class="bg-primary py-3 text-white">
    <div class="container sm:flex flex-wrap sm:space-x-2">
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
            <span class="fa-li"> <i class="fas fa-map-marker-alt"></i> </span>
            <p>
              Location The Hague, headquarters
              <br />
              Johanna Westerdijkplein 75
              <br />
              2521 EN The Hague
            </p>
          </li>
          <li class="instagram mb-0.5">
            <span class="fa-li"><i class="fab fa-instagram"></i></span
            ><a
              href="https://instagram.com/newdesigners.agency"
              class="text-blue-pacific underline transition-colors hover:text-secondary"
              target="_blank"
              >Follow us on Instagram</a
            >
          </li>

          <li class="instagram mb-0.5">
            <span class="fa-li"><i class="fab fa-linkedin"></i></span
            ><a
              href="https://linkedin.com/companies/newdesigners"
              class="text-blue-pacific underline transition-colors hover:text-secondary"
              target="_blank"
              >Follow us on LinkedIn</a
            >
          </li>
          <li class="email">
            <span class="fa-li"><i class="fas fa-paper-plane"></i></span>
            <a
              href="mailto:newdesigners@hhs.nl"
              class="text-blue-pacific underline transition-colors hover:text-secondary"
              >newdesigners@hhs.nl</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
