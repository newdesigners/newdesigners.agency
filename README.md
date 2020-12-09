# newdesigners.agency

## Build Setup

```bash
# install dependencies
$ npm i

# install tailwinds css
# Nuxt.js doesn't support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility build for now as we've shown above.
$ npm i -D @nuxtjs/tailwindcss tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

# install Nuxt Font Awesome
$ npm i -D @nuxtjs/fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons

# install other dev dependancies
$ npm i -D vue-tasty-burgers nuxt-lazy-load

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
