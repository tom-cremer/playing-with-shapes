// webpack.mix.js

let mix = require('laravel-mix');

mix.ts('src/js/main.ts', 'js').sourceMaps()
    .sass('src/scss/main.scss', 'css').sourceMaps()
    .setPublicPath('dist').setResourceRoot('../')
    .browserSync("http://localhost:8000");
