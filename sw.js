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

workbox.precaching.precacheAndRoute([{"revision":"cf9ef77d7faf99fcc0889a839f0ffe47","url":"./404.html"},{"revision":"5f9d919d801beab5594362d53050263b","url":"./about/index.html"},{"revision":"19944b5217398ec856043daa4f69aaf7","url":"./archives/2020/12/index.html"},{"revision":"47e0bab01469c6428b9ce9cf9b7e3018","url":"./archives/2020/index.html"},{"revision":"1a353ff0f53609c7e411bceb528da885","url":"./archives/2021/01/index.html"},{"revision":"e4bbf8bd2a9b7f0b9fd2876bdd8b6642","url":"./archives/2021/index.html"},{"revision":"c1159f5493e95b52831f885badaa0339","url":"./archives/index.html"},{"revision":"2d5c8bf375ab9d7bd965f55c05955064","url":"./articles/ccFHW6Tx/index.html"},{"revision":"200c38f4ed235a3a25273c51a0077f4c","url":"./articles/MfTboREm/index.html"},{"revision":"0a1d36cb4562adc4f45e34f02e83e917","url":"./articles/PpslDHoC/index.html"},{"revision":"16f150a0bd4e845b4a5577cc98abcf52","url":"./articles/Rgg7C4fn/index.html"},{"revision":"50cb05786f4a8993fac1deaff007b162","url":"./articles/VbbBwpHg/index.html"},{"revision":"2b2c9790ea2de5bc6224988b956f4846","url":"./articles/zYDcSJ8J/index.html"},{"revision":"70a22ae1762f72312c90c48b1c7c8703","url":"./bangumis/index.html"},{"revision":"6e2503d7d0dcc972a383611784f620aa","url":"./books/index.html"},{"revision":"e6955cd8ee82c3a2230da42adc2921a6","url":"./categories/🐬Node/index.html"},{"revision":"d8e8ad27fbbf78f8fde09a48ff545fa7","url":"./categories/👻Markdown/index.html"},{"revision":"684bb8c504898de182e44da5a5f9b1df","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"1c211e6a8afc394e2e5c550ac6e02d0b","url":"./categories/📑工作手册/index.html"},{"revision":"05291c1bc8e3080bab50d47ac7b7a20f","url":"./categories/🦋Butterfly/index.html"},{"revision":"24f63fb3e7b3873d88a024c3abf5b104","url":"./categories/index.html"},{"revision":"69e4a4a4b0d30cfbe9eb8f32406855cf","url":"./comments/index.html"},{"revision":"9747af213060e6f6fdbccc6e0d02cfbd","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"018b1dd2ae38fde5a9044b796f048902","url":"./gallery/ACG/index.html"},{"revision":"3017fe8e6016e3ff4fc02a55171ae5c7","url":"./gallery/index.html"},{"revision":"0ba2b4e7c0d5dc01a19841d1486dac58","url":"./gallery/OHMYGIRL/index.html"},{"revision":"6a943605fd0c171bc0600d72e745795a","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"6235759e88c0a92e738e3bccbc1e3e90","url":"./img/siteicon/README.html"},{"revision":"9864018166594a9870581a6b75993e85","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"9bbe404803db36867f4fb792b31c8f8f","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"574ed5ae3da6b04816f978b3a40e96bb","url":"./movies/index.html"},{"revision":"32bce693b9b8a5cdaa754aea7e21aa15","url":"./tags/📁Hexo/index.html"},{"revision":"cb7aff8bb10f906c78b2627eebc10a88","url":"./tags/🦋Butterfly/index.html"},{"revision":"df3ff408890c0668855f910e564d2072","url":"./tags/Emoji表情/index.html"},{"revision":"c1ef4df07b5f5a742bbec1f52352c422","url":"./tags/index.html"},{"revision":"1a004198a7c9fe961ea83b9470f89195","url":"./tags/Markdown/index.html"},{"revision":"5b660862df60a7e1b217ec1e4fedbd56","url":"./tags/Node/index.html"},{"revision":"cee4fb6f5da38724e0972137382a2b38","url":"./tags/npm/index.html"},{"revision":"e8464ddf93209053b060bbc1a0072bed","url":"./tags/nrm/index.html"},{"revision":"7db4c2d692489972d4186d8de53fd98f","url":"./tags/nvm/index.html"},{"revision":"7656590070198e8f2602e8bf102a8493","url":"./tags/Vue/index.html"},{"revision":"466da7446d719d7d999ae6c3f28d84b4","url":"./tags/workbook/index.html"},{"revision":"aa06cf460b32f3b4062e10b842139dd6","url":"./tags/后台管理/index.html"}], {
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