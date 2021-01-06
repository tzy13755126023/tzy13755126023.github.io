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

workbox.precaching.precacheAndRoute([{"revision":"1a80cb238315ae30450df87e18c65796","url":"./2020/12/15/hello-world/index.html"},{"revision":"1563a0d893c6d2ae4af292567e53ca23","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"0983d52e5fd0a92547d12e71171e54ec","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"c84e751a46eb34d58591af84f41f6db9","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"4700e5f01e598826891451ab5924674a","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"75ff78612c6bce100bec88f266ce4a68","url":"./404.html"},{"revision":"763c5480315e94b7663afe20c7d07a37","url":"./about/index.html"},{"revision":"0f93ee7a9ab43a025190f89513fcd666","url":"./archives/2020/12/index.html"},{"revision":"e280d358125089aa8cab2f8fbdc33892","url":"./archives/2020/index.html"},{"revision":"1a04df179da1cd7c7a9bd8af242b05c8","url":"./archives/2021/01/index.html"},{"revision":"fce1345d62c689d448cbbeb8768756db","url":"./archives/2021/index.html"},{"revision":"919d6c60a4e350321671d40e2e8d1992","url":"./archives/index.html"},{"revision":"665353d2033f77c9b83de690bde88c69","url":"./bangumis/index.html"},{"revision":"403c8931e584f1f9ae6bcdac11d23926","url":"./books/index.html"},{"revision":"14f43ad99066afa36d82c0abe145e007","url":"./categories/index.html"},{"revision":"6de23fdb4530d8e5720bc22dbdbe7d2f","url":"./categories/Markdown/index.html"},{"revision":"89d6553d55443b59e13901260308b300","url":"./categories/Node/index.html"},{"revision":"ff5871260c8ddc86882b489a0ab27183","url":"./categories/Vue后台管理系统/index.html"},{"revision":"7d65e854e2e21e07e0b251d8677e5a56","url":"./comments/index.html"},{"revision":"d76d41b6442c40c1cee9d21936f0ec6c","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"98f390e55b5b124320f895383f0cbb35","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b0477e5dbb24d15d2e7bb27238b68eea","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"9a9b2d6a05251e2e8a0459622c01f734","url":"./img/siteicon/README.html"},{"revision":"512d58c69e4773c6d44c5fab366c86f8","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"381410b00c492f6f91d1ee8fd56310e6","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"6f2a5ecf8364cdf7a529c40254fe8c71","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"05ea738ad6a2dd131234a142726b6ed4","url":"./movies/index.html"},{"revision":"ff916b6a690cfed1d8fbab9a76d56881","url":"./tags/📁Hexo/index.html"},{"revision":"c95498b062bb1f0e9549c0b4428c787b","url":"./tags/🦋Butterfly/index.html"},{"revision":"9925cbf9062d58db30184536c88c7c6c","url":"./tags/Emoji表情/index.html"},{"revision":"5742df422d9e91dd2c93a704a643a107","url":"./tags/index.html"},{"revision":"1964a2d36cd3289073896f335182642d","url":"./tags/Markdown/index.html"},{"revision":"c33f7b20e4cf910df41806732286073e","url":"./tags/Node/index.html"},{"revision":"006d520b45ff1bbc43c9bb6df40023b7","url":"./tags/npm/index.html"},{"revision":"8bdb8d4a38c7f545dbe944471bf60015","url":"./tags/nrm/index.html"},{"revision":"9107bfb88a301378412a0c0567497561","url":"./tags/nvm/index.html"},{"revision":"2833dbfc1d267e806982469a9d28f857","url":"./tags/Vue/index.html"},{"revision":"a077fc49afdb035fbc5285a01eca2dd0","url":"./tags/后台管理/index.html"}], {
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