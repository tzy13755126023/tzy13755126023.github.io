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

workbox.precaching.precacheAndRoute([{"revision":"72d1a0a6f428a367bd30f906c38e3fc2","url":"./2020/12/15/hello-world/index.html"},{"revision":"8b0f09c30a6f2735262f9521fabfad68","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"54100fb7634159dce9e1dae8dee954ca","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"fe313d2abc32964f3235730d8e2acc3b","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"02b07f1c7cb50370e236a6c09639a1c6","url":"./404.html"},{"revision":"5e36436820848c0ec5683b297007ab81","url":"./about/index.html"},{"revision":"801bf5a268c9113877b434d521462ac5","url":"./archives/2020/12/index.html"},{"revision":"d71b32da7a2379040f3df085f057e4b4","url":"./archives/2020/index.html"},{"revision":"a5f7f0eee71d11564ceb872a22b9b6bf","url":"./archives/index.html"},{"revision":"08d9600d1b413c38b2267a9187c2a259","url":"./bangumis/index.html"},{"revision":"f00046618556f137230691abc4f7d704","url":"./books/index.html"},{"revision":"3f76646a89a35231073903b2285a0e4d","url":"./categories/index.html"},{"revision":"bc86cf9f9fa71aa7f3c5a32e12a2436d","url":"./categories/Markdown/index.html"},{"revision":"beca1d010a61fab5c445b7f3801e1157","url":"./categories/Node/index.html"},{"revision":"37045adbb7859afd24130799e07ee117","url":"./categories/Vue后台管理系统/index.html"},{"revision":"18af6ee5e7b2f9dba658d35b30462d27","url":"./comments/index.html"},{"revision":"0bb8d2340c4438f2a5fd2311ab2f0334","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"1dfba3703ac503d1af1b26be355102ab","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"056fa9e289600ce078f406572634d542","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"18e7bc6e5a519b07914d17cda927a00f","url":"./img/siteicon/README.html"},{"revision":"f79065d79f79c0da41f969cf9b52c26f","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"f70755d41763c338ec7534199d1f6637","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"b73c1bdce2e340aea4dc4ea3a197144f","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"5184ab57afc2606c8cb139c7f2576c3c","url":"./movies/index.html"},{"revision":"aaff42373cec832a86021c69d19d9d19","url":"./tags/Emoji表情/index.html"},{"revision":"c76f9d51efe95697fbeccaa3d552e3f3","url":"./tags/index.html"},{"revision":"cb268a171919535d90697fe7cb71036f","url":"./tags/Markdown/index.html"},{"revision":"0ca4e6497c4e7a20474456dca5ff4d0d","url":"./tags/Node/index.html"},{"revision":"00fb7cf46654acec575427a01f5546c4","url":"./tags/npm/index.html"},{"revision":"f58c00b8b1ebc3cc7855e3485fa31104","url":"./tags/nrm/index.html"},{"revision":"48d3a22f8656f9a083d405927f91c90c","url":"./tags/nvm/index.html"},{"revision":"fb5f0a8476a86bf8c40535d82d80f30c","url":"./tags/Vue/index.html"},{"revision":"148e92f7edcecc33ddbc8e169b4a03cc","url":"./tags/后台管理/index.html"}], {
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