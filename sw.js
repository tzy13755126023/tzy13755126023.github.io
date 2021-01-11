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

workbox.precaching.precacheAndRoute([{"revision":"93103aa78cd7f8356b8732c297e6136e","url":"./2020/12/15/hello-world/index.html"},{"revision":"de7754886ec112650b984483b0055bb9","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"7014639d9a91aa0a3b4c1905fa2ac266","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"84fb960f025235dd0d1a9831e7a7279c","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"560e72468de4d7e00839d552ad030d36","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"53806c2dc743bcbde500eca0855f31f9","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"a120dfc29ceb8b1d1d485c6fb13cc3a1","url":"./404.html"},{"revision":"db8bcf2a878ba0b166316571e9ef9999","url":"./about/index.html"},{"revision":"09b5e9bd5e5fbae736e390a785e01866","url":"./archives/2020/12/index.html"},{"revision":"300e3302209f95dac372ab5e9332e75a","url":"./archives/2020/index.html"},{"revision":"3797e1f827f37f13542f29c27af4b3e9","url":"./archives/2021/01/index.html"},{"revision":"09894ca4de87c98cc0a1ae9af30c8c23","url":"./archives/2021/index.html"},{"revision":"9ae838421e8473d2d750ce3a919b72c9","url":"./archives/index.html"},{"revision":"4fdb09c5c54a288ca17e9c47e324a1a6","url":"./bangumis/index.html"},{"revision":"1e7ea0ebbd64d6cfe27928f8842b497e","url":"./books/index.html"},{"revision":"d22e7063689d7c80276450700782d420","url":"./categories/🐬Node/index.html"},{"revision":"4b6cf95b77296b199b171f2ffcea1216","url":"./categories/👻Markdown/index.html"},{"revision":"b9bc987691541bfaf93155dcf245af24","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"7503783f2d895bbcf60aa73485f4beca","url":"./categories/🦋Butterfly/index.html"},{"revision":"7cf1329eb7105f8477cd5dc0b861c3ed","url":"./categories/index.html"},{"revision":"060b5dc7a8b1f18628a75c57489077ee","url":"./comments/index.html"},{"revision":"2aa9454375eba909fe396992fece5415","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"218d315052f4841954a20d81e0532dad","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b9d03892dff5bd1a5b319be59c398312","url":"./gallery/acg/index.html"},{"revision":"46a9ad87eae9ef33a54a2c8f26cd4f91","url":"./gallery/index.html"},{"revision":"a8c0f24810a15dbb409d7fcf0dc75755","url":"./gallery/ohmygirl/index.html"},{"revision":"3383c87fac0383f850a400cfa7adbd6c","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"6abacdbae47d706c7ffc1ff7fde23e62","url":"./img/siteicon/README.html"},{"revision":"13f0d1f3561a6e8245b67d1c34fb74e5","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"d0fffe1bc16e75700325da0f72902280","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"93a2399911d1117205e2fe8cad215034","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"d0c90e7ede0baa9d7c627a534c165061","url":"./movies/index.html"},{"revision":"23463af7b6180a96e327cc813691e5d3","url":"./tags/📁Hexo/index.html"},{"revision":"0537b74ef2b8d9f7b1b5a6a7933671fb","url":"./tags/🦋Butterfly/index.html"},{"revision":"73ef7c58463baed0bef37be65bfe1351","url":"./tags/Emoji表情/index.html"},{"revision":"f1b599d86bad662ae714faf710491f09","url":"./tags/index.html"},{"revision":"c480957035d17dcec6d1d60145e598f7","url":"./tags/Markdown/index.html"},{"revision":"403d8d7631fd182386033a4f8001c487","url":"./tags/Node/index.html"},{"revision":"bdaa29997e33367cab6e8acaa437f493","url":"./tags/npm/index.html"},{"revision":"b91b71b9fa529a2533e6f7e11e6540ec","url":"./tags/nrm/index.html"},{"revision":"49f079a4023f50bc38f3013777b65c9c","url":"./tags/nvm/index.html"},{"revision":"d361b5cb614e194bde599688fe05c5a6","url":"./tags/Vue/index.html"},{"revision":"550e293b0751c919f83ee83668fc8286","url":"./tags/后台管理/index.html"}], {
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