const mix = require('laravel-mix');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const imagemin = require('imagemin');

const imageminPlugins = [
    require('imagemin-mozjpeg')({ }),
    require('imagemin-pngquant')({ }),
    require('imagemin-svgo')({
        plugins: [
            { removeViewBox: false },
        ],
    }),
];

const publicPath = 'public';

mix
    .sass('./resources/assets/styles/app.scss', 'public/assets/app.css', {
        implementation: require('node-sass')
    })
    .js('./resources/assets/scripts/index.js', 'public/assets/js/app.js')

    // See https://github.com/JeffreyWay/laravel-mix/blob/b5c019f8/docs/extract.md
    //
    .extract([
        'babel-polyfill',
        'jquery',
        'bootstrap'
    ], 'public/assets/js/bundle.js')

    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    })

    // Font awesome structure
    .setPublicPath('public')
    .setResourceRoot('../')
    .copy('node_modules/@fortawesome/fontawesome-free-webfonts/webfonts', 'public/assets/fonts')
    .copy('node_modules/lightgallery.js/src/fonts', 'public/assets/fonts')

    .options({
        postCss: require('./postcss.config.js').plugins,
        processCssUrls: false
    });

    mix.webpackConfig({
        plugins: [
            // We cannot use the mix.copy() function as it does not allow for transformations/asset optimizations.
            new CopyWebpackPlugin([{
                context: path.resolve(__dirname, 'resources/assets/images/'),
                from: '**/*.{png,jpg,svg}',
                to: path.resolve(__dirname, publicPath, 'assets/images/'),
                force: true,
                transform: (content) => {
                    return imagemin.buffer(content, {
                        plugins: imageminPlugins,
                    });
                },
            }])
        ],
    });


if (mix.inProduction()) {
    mix.version();
} else {
    // mix.sourceMaps();
}
