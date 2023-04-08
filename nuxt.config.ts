// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        {src:'~/assets/css/main.css'},
        {src:"~/assets/css/style.css",lang: 'css'}
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})
