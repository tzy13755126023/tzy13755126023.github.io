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

workbox.precaching.precacheAndRoute([{"revision":"db82069858eda8e5239f6c3926f875bd","url":"./404.html"},{"revision":"f813ae135ac19bfe9f04e13906b387d6","url":"./about/index.html"},{"revision":"740596411a8baabeb7ad9c34e10566df","url":"./archives/2020/12/index.html"},{"revision":"c02595e005ed05a2d7ce1fc7864a9962","url":"./archives/2020/index.html"},{"revision":"c302fa41490402330691c6dc24247759","url":"./archives/2021/01/index.html"},{"revision":"1089f8a4345b7b38993b706adccd5e90","url":"./archives/2021/02/index.html"},{"revision":"0b3b8ca53092e0d49570d45813fc250d","url":"./archives/2021/index.html"},{"revision":"e571c78d04656057c505d3cb289dd532","url":"./archives/index.html"},{"revision":"12afd11d3ef8a77fea942a22b1d7a33f","url":"./articles/0xiipgum/index.html"},{"revision":"85d307ddd1cec7e9951ff129fadb24cf","url":"./articles/9r95s1wt/index.html"},{"revision":"2fc41e632ad16a6b40a6ab01203b68ff","url":"./articles/e13t14zy/index.html"},{"revision":"81f5433727808e97a5c52b47a5eafba6","url":"./articles/hyeccjmu/index.html"},{"revision":"b6e1fe0defcb553a4e32344cb419a4e8","url":"./articles/ic67xik4/index.html"},{"revision":"74f5ef670760122126b9a3dae23ce339","url":"./articles/kfwr2gpa/index.html"},{"revision":"fa8fa35fb84382be81aeaef56618b936","url":"./articles/p520xyz8/index.html"},{"revision":"3bc31cf999570ff435481f2cd52ada89","url":"./articles/uni235xy/index.html"},{"revision":"a61dcf58eefefa8ced2d69e73bdaa112","url":"./articles/xi2mpxmd/index.html"},{"revision":"1709aa1cd61e294f9b7df5e81c238a8f","url":"./bangumis/index.html"},{"revision":"b29fae6b586193f39fd43b3613bf0990","url":"./books/index.html"},{"revision":"9010bb6abcfccf67a639109beab8b095","url":"./categories/🐬Node/index.html"},{"revision":"fe15a5a34b2abbe1c10048746f753a58","url":"./categories/👻Markdown/index.html"},{"revision":"96b3e6744b95cc9721b8b4902a3c3f08","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"5845baa19460921b2387d417d02d77a5","url":"./categories/📑工作手册/index.html"},{"revision":"47943620ffb7fc5fb9ad13e52f767069","url":"./categories/🤡-Vue/index.html"},{"revision":"54b22b22121450beae6ae6952389644a","url":"./categories/🦋Butterfly/index.html"},{"revision":"815e8491f2f3fab0cbd3e2390068304c","url":"./categories/index.html"},{"revision":"71df473569ffb25852b0368c03c2d660","url":"./categories/uni-app/index.html"},{"revision":"35b2f23e25a0a699ff8b573bf2a26bde","url":"./categories/骨架屏/index.html"},{"revision":"09220a5f50627495d6b9b13b7fbf81b2","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"e9449a22999225ec6a27bbde3ed27425","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"53426e09a126f4e465acdc81dc720a06","url":"./gallery/ACG/index.html"},{"revision":"91b823d37567877a28de1e939df251a0","url":"./gallery/index.html"},{"revision":"2aad9a574b2bd90d3bf4653a7eda9f26","url":"./gallery/OHMYGIRL/index.html"},{"revision":"bba354db0706b5bce91b199a02a7697d","url":"./games/index.html"},{"revision":"38e6b27300960364447ae6eaea5c0d53","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"52ee665a6f66f5dc822bc2ad847fbd47","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"08adb01c640b9c0a434abd7eb549d9e4","url":"./movies/index.html"},{"revision":"c9c8c412b2e6ebe42a4dfd31bf705843","url":"./tags/📁Hexo/index.html"},{"revision":"1d820f8c491a03b89ff67c31c11d635e","url":"./tags/🦋Butterfly/index.html"},{"revision":"56fd897fe3452da99c195908b21984e7","url":"./tags/Emoji表情/index.html"},{"revision":"9f68457d1c4acac7108a9b4fd2509fe8","url":"./tags/index.html"},{"revision":"2e73d08690c098604697b04840a4061b","url":"./tags/Markdown/index.html"},{"revision":"40478a3d4d60a9f0c907e7cf0fcd1841","url":"./tags/Node/index.html"},{"revision":"ebe75164cba7b158a1bc869bc5ec4638","url":"./tags/npm/index.html"},{"revision":"51206d535cb484d6e40a3a67c04c844f","url":"./tags/nrm/index.html"},{"revision":"2cef0d27f4bbe66322b751336e23676a","url":"./tags/nvm/index.html"},{"revision":"610bc18f832df9057dc1344bdb4eca07","url":"./tags/Skeleton-Screen/index.html"},{"revision":"24e9c17907c4f3b48d1532097339fd13","url":"./tags/uni-app/index.html"},{"revision":"4e2400310935f44284814464ed0d9021","url":"./tags/Vue/index.html"},{"revision":"1c53ffd0335c089b9caabc93081fa269","url":"./tags/workbook/index.html"},{"revision":"e4e7935268f216c641eb3b1714e86534","url":"./tags/后台管理/index.html"},{"revision":"dfa947bb95eb9d17b997650e70fd32f2","url":"./tags/骨架屏/index.html"}], {
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