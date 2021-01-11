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

workbox.precaching.precacheAndRoute([{"revision":"03e10aa1de57d8c8f3c5a68873b8af05","url":"./2020/12/15/hello-world/index.html"},{"revision":"a46b0e7d6dd70ad9b352b3a99b19abc5","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"d9c647e3924e50d9dc35ddf6d78ac823","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"1a1fbcaf889fc63c9c77383b7298f50a","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"8dd1dfaa51fb7d753ea0077ea1b285d2","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"0a2f73da05bfd34efa3c94fe41f8a49e","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"5bb4ad00ccca150a36dcdd102fe35aaf","url":"./404.html"},{"revision":"2e101b1261cca18e7d9809db467f1521","url":"./about/index.html"},{"revision":"5c2e738eb433e5c9eedd44ebd3c5ace7","url":"./archives/2020/12/index.html"},{"revision":"0258bf60a852c569fc21a9c0b1457bd6","url":"./archives/2020/index.html"},{"revision":"4715705f03a15a52a716860c630a4989","url":"./archives/2021/01/index.html"},{"revision":"6e030c9bdbb1692c12c4c2d6d9869f95","url":"./archives/2021/index.html"},{"revision":"f5e753efb68f8c9daaf8c68630b396cc","url":"./archives/index.html"},{"revision":"0ecd4ee862a713cd78d23ae428de7150","url":"./bangumis/index.html"},{"revision":"5a1caff4d205414244292a60734c16aa","url":"./books/index.html"},{"revision":"fcbc8771d869544fdbd7cc2e660a1e1a","url":"./categories/🐬Node/index.html"},{"revision":"b56917dc6be85da5983c5e877fe7d4ac","url":"./categories/👻Markdown/index.html"},{"revision":"3e090f56f7f728f78466c159d0ff2399","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"f80cc1aece22e657845e460ec63ff8e0","url":"./categories/🦋Butterfly/index.html"},{"revision":"60245882e58176a7a5f9a76fe8b78e06","url":"./categories/index.html"},{"revision":"7c7d8bac1204255bc91afcbeab4c365b","url":"./comments/index.html"},{"revision":"1639b5d6fc0c9a65fb1a6903f4718cbe","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"218d315052f4841954a20d81e0532dad","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d9b037752232eccfec4875680b24d25c","url":"./gallery/acg/index.html"},{"revision":"0c453e87b614931dbdb10983ebaf9b1d","url":"./gallery/index.html"},{"revision":"3ad62985bb0be2c9eed796b679306a64","url":"./gallery/ohmygirl/index.html"},{"revision":"f1e098600a3a2897509ab9d83073d648","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"e8e10931d3f8e8b041e1876b3ecd2474","url":"./img/siteicon/README.html"},{"revision":"99d413b08a8eb992bd8ec754e09eeda2","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"d0fffe1bc16e75700325da0f72902280","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"bd22f34e87ecf14b6e5b48f9140ca327","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"5cab32a760267501fcd09a84bff6ae47","url":"./movies/index.html"},{"revision":"31e73d3482b310757966aed2aa51ae25","url":"./tags/📁Hexo/index.html"},{"revision":"fc6d9a21720bb322060738c5ac52cb88","url":"./tags/🦋Butterfly/index.html"},{"revision":"107cbe4403ce92f528c6a49d034c7666","url":"./tags/Emoji表情/index.html"},{"revision":"542c8d00a5842c51e5d68fe80d34d58f","url":"./tags/index.html"},{"revision":"d95a195639cf0b8f4f9965de27e1de59","url":"./tags/Markdown/index.html"},{"revision":"02c8455d4b8074214cd5b07e28a3655b","url":"./tags/Node/index.html"},{"revision":"9fefa765cdf4ef1ac12c32759d68cf16","url":"./tags/npm/index.html"},{"revision":"fff60b95af09cdb13118c6ff2494fb1e","url":"./tags/nrm/index.html"},{"revision":"483fd6117a846b9914ca8958fe769e53","url":"./tags/nvm/index.html"},{"revision":"31e47ab38e47b6b204c955e35dacbbfd","url":"./tags/Vue/index.html"},{"revision":"ca088da175fb426a906a6ac5dcc17ce2","url":"./tags/后台管理/index.html"}], {
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