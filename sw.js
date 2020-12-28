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

workbox.precaching.precacheAndRoute([{"revision":"49310d366d3dcf479915b9efcc29f161","url":"./2020/12/15/hello-world/index.html"},{"revision":"e6e42023a49f6900c931207dffbc2445","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"e8bcdd309f16027e41ec620c65db9ce5","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"106646ae1395ae2006fe169a7ee4411b","url":"./404.html"},{"revision":"cb465819204ea8db7050736c1b30547b","url":"./about/index.html"},{"revision":"442d634dcb794be683262fbad2aaaf1f","url":"./archives/2020/12/index.html"},{"revision":"ffed687f17f7a84239674f45bf5ae52a","url":"./archives/2020/index.html"},{"revision":"0966dbfa54b0751be22cd2025208e89c","url":"./archives/index.html"},{"revision":"baac3669e185b372fefbc8a8d16179e5","url":"./bangumis/index.html"},{"revision":"138abb34721bb009c5f0714db29aae0d","url":"./books/index.html"},{"revision":"5ad36413b2a5b36b4177906ca39a748e","url":"./categories/index.html"},{"revision":"ba02df2d6f834e1b94a3cb19dd9b4dc6","url":"./categories/Markdown/index.html"},{"revision":"2405915d9f2cc63d785a30a9e049b8c3","url":"./categories/Vue后台管理系统/index.html"},{"revision":"d446f0ce2e1e60a5f7953cdb7fa08dc7","url":"./comments/index.html"},{"revision":"22fff7e42714121ea0909db48498a426","url":"./css/ethan.css"},{"revision":"71bc88912e132ea1ebe6344fc2588766","url":"./css/gitcalendar.css"},{"revision":"1dfba3703ac503d1af1b26be355102ab","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5c71a7c8829e11de9bbc58d68d8f9d4a","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"54e24fd116add909bbd6d26c922c06c4","url":"./img/siteicon/README.html"},{"revision":"1af0dfdc6622a6e15e2b9a3ee621ffa1","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"02796e5da73075cfc9b1a4495f3cac67","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"ae0923c39376a1df89b17d2abb2d1139","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"d13a029020be20b3837d6f55a5b97232","url":"./movies/index.html"},{"revision":"7f857c47744769078323c25481dc3a96","url":"./tags/Emoji表情/index.html"},{"revision":"12aed45f967455c9b134e743f9a432a1","url":"./tags/index.html"},{"revision":"049f29329df5cd49ba01a133ec22345a","url":"./tags/Markdown/index.html"},{"revision":"fc47d394a40de5d62221f0313f6b9e23","url":"./tags/Vue/index.html"},{"revision":"ec199e88d7fc24c66de75fd8f29d4a3d","url":"./tags/后台管理/index.html"}], {
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