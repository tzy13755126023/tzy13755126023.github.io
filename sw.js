/*
 * @Descripttion: 
 * @version: 
 * @Author: tzy1997
 * @Date: 2020-12-22 15:50:23
 * @LastEditors: tzy1997
 * @LastEditTime: 2020-12-22 15:53:42
 */
const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Ethan"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"d63ba199755f2eec7a87742a5ef5a002","url":"./404.html"},{"revision":"22dfa69e862d31352bd563f8db4ad0a1","url":"./about/index.html"},{"revision":"91d18f2bd596c1687628d774cfc91c40","url":"./archives/2020/12/index.html"},{"revision":"d816e4ddd4b18bc3a889a41c255e2f21","url":"./archives/2020/index.html"},{"revision":"1103079b3786d89b5b0f9a80edcb59fa","url":"./archives/2021/01/index.html"},{"revision":"76802f376e86c8cbfff261f09f9ca117","url":"./archives/2021/index.html"},{"revision":"3332ca70202362d589b7d0606aeaf83f","url":"./archives/index.html"},{"revision":"d06aff70584e092b7bae30da3bbfe101","url":"./articles/ccFHW6Tx/index.html"},{"revision":"3c93641cf48f1172d89740f0dbc6090d","url":"./articles/MfTboREm/index.html"},{"revision":"80c0d8c3a6ecfe17d21ce06fd819bff8","url":"./articles/PpslDHoC/index.html"},{"revision":"775c2f80b686f64f87934a3980b52139","url":"./articles/Rgg7C4fn/index.html"},{"revision":"7086ab9de48b2205fa2ace8f2b27e7c7","url":"./articles/VbbBwpHg/index.html"},{"revision":"f8cd0f308f9df05671c35a6d5a2a49e9","url":"./articles/zYDcSJ8J/index.html"},{"revision":"2f6e0d1679d5be9d43004882ac363e53","url":"./bangumis/index.html"},{"revision":"903d110bf0ea39e4fe3ee4f4192c1b04","url":"./books/index.html"},{"revision":"fc0152ff4c67908f2deb733bdc11a888","url":"./categories/🐬Node/index.html"},{"revision":"b3fef4703e3b2fec32b99fc8c7da4e6f","url":"./categories/👻Markdown/index.html"},{"revision":"7410c2068214d3eedf7a2b7deec13926","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"f0f65bbd107b76c4ffce9a2a0ff7393c","url":"./categories/📑工作手册/index.html"},{"revision":"35207f0cab4911ee07e88bffb93e6bc1","url":"./categories/🦋Butterfly/index.html"},{"revision":"3a56467fc9fc8ab2cb716ceb3479ab2f","url":"./categories/index.html"},{"revision":"130cbea5de7672b770c05d861b096f76","url":"./comments/index.html"},{"revision":"9747af213060e6f6fdbccc6e0d02cfbd","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fd4e0ae90e6bb874225b1b668f5b0c93","url":"./gallery/ACG/index.html"},{"revision":"c165f95a7f9d2512fc109a60e4582598","url":"./gallery/index.html"},{"revision":"8e7221d0005ce4af8e331a7b9d42fc4b","url":"./gallery/OHMYGIRL/index.html"},{"revision":"61cf8bee930d5eee01bee40f53a99cc3","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"845755bb3d91973076f5e84c681d4099","url":"./img/siteicon/README.html"},{"revision":"b29c9c1c612331c5c8c1b76df7871ad9","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"d95186caa7262859260e9a997993ef24","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"6085490eff5ef1763a49716eaeb98671","url":"./movies/index.html"},{"revision":"054b08a9f2f5d3321ae25ae51d0ccf47","url":"./tags/📁Hexo/index.html"},{"revision":"9995952cc3b323721b8545fd9835146d","url":"./tags/🦋Butterfly/index.html"},{"revision":"012fd4c8001e7e8042ccee1b66df204f","url":"./tags/Emoji表情/index.html"},{"revision":"3514f39a0324b5d460f33598b8c6bf5d","url":"./tags/index.html"},{"revision":"610cc52bf154f688a52edfa3725baefd","url":"./tags/Markdown/index.html"},{"revision":"868f4b0c14c570841f6fff5581b896fb","url":"./tags/Node/index.html"},{"revision":"51f060fbd3cc632f80b890f6c303cf9d","url":"./tags/npm/index.html"},{"revision":"63bba0a31f0a61781e3f6532f291e032","url":"./tags/nrm/index.html"},{"revision":"97937fb0f4b32789fccb537e004b8d4a","url":"./tags/nvm/index.html"},{"revision":"4eaaa52345d4bf05be7dd9dee940bc14","url":"./tags/Vue/index.html"},{"revision":"850e8c33c428fa35c06c45e3c54b4ffd","url":"./tags/workbook/index.html"},{"revision":"d591d790656ffbc703ccf69ba40cc80f","url":"./tags/后台管理/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();