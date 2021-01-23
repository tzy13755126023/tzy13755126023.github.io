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

workbox.precaching.precacheAndRoute([{"revision":"63a486133bf5f81b7b81ebb0d6e3d719","url":"./404.html"},{"revision":"ed481ee869015c1a60a9fc5219100cc8","url":"./about/index.html"},{"revision":"b2e9efb9672c212e3e15efc64b2c7761","url":"./archives/2020/12/index.html"},{"revision":"266f61ffbdc92466c51f7780c3c5e2f8","url":"./archives/2020/index.html"},{"revision":"1b8b66589986151a116f6a2a29b41599","url":"./archives/2021/01/index.html"},{"revision":"e28c0f18219dc200eb4427037a5c57ab","url":"./archives/2021/index.html"},{"revision":"d5886be7ab5cd9c9292933b335841923","url":"./archives/index.html"},{"revision":"ee570765cc250765206a93cecf2f867d","url":"./articles/0xiipgum/index.html"},{"revision":"929281729e8bc782df144267c9df7a11","url":"./articles/9r95s1wt/index.html"},{"revision":"22a16b096c1fe93a5417e2389362fea2","url":"./articles/hyeccjmu/index.html"},{"revision":"2c25758d8c983cfdb7a6661be39789f3","url":"./articles/ic67xik4/index.html"},{"revision":"3b0a0de385750e2bfcd6a16d055edb83","url":"./articles/kfwr2gpa/index.html"},{"revision":"a15d88152357943f0b7fafe439a45108","url":"./articles/p520xyz8/index.html"},{"revision":"fbea23e4449efc2798d76f3e0bda5db2","url":"./articles/xi2mpxmd/index.html"},{"revision":"8caf59aaca43e11cda920c0ed79c2790","url":"./bangumis/index.html"},{"revision":"0f824a2344ca2341419d2fb5e62a5217","url":"./books/index.html"},{"revision":"9a65fcefd17c2fcb95b4a57764c3c09a","url":"./categories/🐬Node/index.html"},{"revision":"0f7dec25963dfab7ad142e1e4fc1965d","url":"./categories/👻Markdown/index.html"},{"revision":"133ca8715669b8a2df266540eae745c1","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"bd0e3e333ae6d47fc7252fb2924aff31","url":"./categories/📑工作手册/index.html"},{"revision":"4a82123e570542bbe39e9bf7b0df65bf","url":"./categories/🤡-Vue/index.html"},{"revision":"adaa7260b0c581dde6b4c32987879209","url":"./categories/🦋Butterfly/index.html"},{"revision":"8e10a9813ccbeda199c34aabb53781c2","url":"./categories/index.html"},{"revision":"96e22aea21997856c0a3cb0cd0590b9d","url":"./comments/index.html"},{"revision":"070d6c6be48cc39f265fa209e220ba58","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"640a9323f9acd757c96e043c661b7843","url":"./gallery/ACG/index.html"},{"revision":"2029f591b0ffd001397f1aed96f2be40","url":"./gallery/index.html"},{"revision":"d77db95e0ba7a9f0cee42d04f4540469","url":"./gallery/OHMYGIRL/index.html"},{"revision":"a2e3749e175013ed8838e95f59844003","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"4eeacf58c1a401b6796e7d360f448c09","url":"./img/siteicon/README.html"},{"revision":"86633a1f1915e8101960593d4256e35f","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"7f1a78f4bcbbcda9bacce0bb2f6abf52","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"78b788f46eaa7dbf5984c582edd7bf31","url":"./movies/index.html"},{"revision":"b10ed5c34d32e98584d0db7a813864ff","url":"./tags/📁Hexo/index.html"},{"revision":"2dee544d90182d9b64886e02a864a7f2","url":"./tags/🦋Butterfly/index.html"},{"revision":"acc4fdcc38cb638b5c9b2f4287402457","url":"./tags/Emoji表情/index.html"},{"revision":"1b53d2a2b51a07efa18502e790528ae5","url":"./tags/index.html"},{"revision":"8f0e34aa83399fe86366a519732b16cd","url":"./tags/Markdown/index.html"},{"revision":"4ea1be66ccf7ddfe698656c9c1d2637c","url":"./tags/Node/index.html"},{"revision":"86d59f58bdba8aa09e11cf2804f928f2","url":"./tags/npm/index.html"},{"revision":"666181036ff88f2d9c3e5991a5e47421","url":"./tags/nrm/index.html"},{"revision":"cf6fac3f91e9a5bd2f2391f10cd97e46","url":"./tags/nvm/index.html"},{"revision":"6a10fde9523edfd86623e83ab2d46182","url":"./tags/Vue/index.html"},{"revision":"37200489990cc2548d4bfed4c20af82b","url":"./tags/workbook/index.html"},{"revision":"a2b5a5b4a56b4e2b5992b4b3551c9037","url":"./tags/后台管理/index.html"}], {
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