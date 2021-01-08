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

workbox.precaching.precacheAndRoute([{"revision":"a1bc4ad9087b86c9fc6c8f1ede3c2d60","url":"./2020/12/15/hello-world/index.html"},{"revision":"c8b5cafc1d7ea941384070ad3c4ffd4d","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"c6f4e9002b44b99faaccba77e8c85569","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"e46291b072f0fda2b38531cd93013b55","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"30414b3741146ecfc9a5f9e9c3748cc4","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"b45024c735c164d3142796a3a4b3514b","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"daa00f5b499f118f1843305df907f8dd","url":"./404.html"},{"revision":"116b52517f9ad8b231ff2ba75b6c765a","url":"./about/index.html"},{"revision":"9aef8a99b9318da0dfc5049df4eea709","url":"./archives/2020/12/index.html"},{"revision":"b192c5a292ba04c645e11ba0bab52456","url":"./archives/2020/index.html"},{"revision":"719a5862d37d50c60685b1bd03e05753","url":"./archives/2021/01/index.html"},{"revision":"bf64fd4bff126f6cb4a6a2dff4935d6a","url":"./archives/2021/index.html"},{"revision":"56fbef4951c07f600577fb7546007c5f","url":"./archives/index.html"},{"revision":"bc0e86586edcd5a609ef10c37ce6ad7e","url":"./bangumis/index.html"},{"revision":"58ee3791cd0d0b39bafba39ed273b035","url":"./books/index.html"},{"revision":"d30d2ddc5b8d375f9ed91976080d7b4d","url":"./categories/🐬Node/index.html"},{"revision":"3518efaeb72374e163606da27cfeb54a","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"4cd8b2a5dff650093d29024228ec4837","url":"./categories/index.html"},{"revision":"3fab06a995a68d29d599a6a5f16411d7","url":"./categories/Markdown/index.html"},{"revision":"63bb3157bf0de764c63e2dc78d0b5e28","url":"./comments/index.html"},{"revision":"222afcaa5ae620251645e3688f5a531a","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"98f390e55b5b124320f895383f0cbb35","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"242feaa1b33439cbfaa192ba994cc14b","url":"./gallery/ACG/index.html"},{"revision":"589644e5b0637bf3c531e2783a3a59b3","url":"./gallery/index.html"},{"revision":"3f86bfec4d75280e7439f37ed39d9beb","url":"./gallery/OHMYGIRL/index.html"},{"revision":"47400865f520e1ed4e9299f0dec9f482","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"fd4a0127a1e780b980d879ac319b6e3a","url":"./img/siteicon/README.html"},{"revision":"577594e31305130a87eb4e6cc81ec2da","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"381410b00c492f6f91d1ee8fd56310e6","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"7b2dc41c24bd118a8d7f0901da0703e5","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"869808f477031c4911779819df01c606","url":"./movies/index.html"},{"revision":"990776dfbec52ee6af7404bac058686d","url":"./tags/📁Hexo/index.html"},{"revision":"4a0449b7990d84072b7d1efa5efd99a6","url":"./tags/🦋Butterfly/index.html"},{"revision":"9aaffb2e2a7f01310e2d1da99525a4ce","url":"./tags/Emoji表情/index.html"},{"revision":"0722904d74005adee648ee10436598d8","url":"./tags/index.html"},{"revision":"4410d19fb1ecdb326581a178cb18559b","url":"./tags/Markdown/index.html"},{"revision":"825fcbbd4812c947a0072865281e328a","url":"./tags/Node/index.html"},{"revision":"cdbf5db89891ff5851f0d5653f5761c6","url":"./tags/npm/index.html"},{"revision":"8ca1c45deb7fb6a60c1379c6349ae402","url":"./tags/nrm/index.html"},{"revision":"64fa0e173f7c1facc0f4e739993672f8","url":"./tags/nvm/index.html"},{"revision":"a6f7b3c07e4b77de24168344a3d4e4aa","url":"./tags/Vue/index.html"},{"revision":"80f84d380ed7c133197daf89eba771ad","url":"./tags/后台管理/index.html"}], {
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