let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/assets/js/vendor.js', 'dist/js')
	.js('src/assets/js/app.js', 'dist/js')
    .sass('src/assets/scss/app.scss', 'dist/css')
    .copy('src/assets/fonts/', 'dist/fonts')
   /*     .scripts([
            'jquery/dist/jquery.js',
            'bootstrap/dist/js/bootstrap.js',
        ], 'public/js/app.js', 'vendor/bower_components')*/
	.setPublicPath('./');
