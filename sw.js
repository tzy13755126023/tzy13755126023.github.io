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

workbox.precaching.precacheAndRoute([{"revision":"7fdf087c5b1f96113614aa15b8333949","url":"./404.html"},{"revision":"a4843f79967af9aaf2c5c5a6e5df6d96","url":"./about/index.html"},{"revision":"5601cdb815b46348272a4c11822142dc","url":"./archives/2020/12/index.html"},{"revision":"2101b249ff2dd32877f75e9297db356c","url":"./archives/2020/index.html"},{"revision":"ff99a558e9eb7efe396236643d7f7f5d","url":"./archives/2021/01/index.html"},{"revision":"46cd3cdf8bc3803aefe1a37034455399","url":"./archives/2021/index.html"},{"revision":"49dafe5b0375bf5e117c20e271f5fbe2","url":"./archives/index.html"},{"revision":"801fa28a6771ab05151bf492a65b5fd9","url":"./articles/0xiipgum/index.html"},{"revision":"89760818c5845e7da54d24142c72c99b","url":"./articles/9r95s1wt/index.html"},{"revision":"0800c9340aa218be5acb7e46d77f61e9","url":"./articles/hyeccjmu/index.html"},{"revision":"efb9894e4acf49fc73bc9ddf2edb9301","url":"./articles/ic67xik4/index.html"},{"revision":"1f2227342e8996bbb1fa409500a81f9b","url":"./articles/kfwr2gpa/index.html"},{"revision":"4f1ea89939048b79728d0459b37ae4dc","url":"./articles/xi2mpxmd/index.html"},{"revision":"72e9df92aa5446b87e7d4efdae16a0c3","url":"./bangumis/index.html"},{"revision":"766ac3a44ad139422e6524ce587ff8fd","url":"./books/index.html"},{"revision":"eb6acd70fe073019198784c0d588caa1","url":"./categories/🐬Node/index.html"},{"revision":"0d9b20384a7b7dbec77de10c6b590259","url":"./categories/👻Markdown/index.html"},{"revision":"f61c3c76d61d1a37e1577507ba823129","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"fc7a020db16c6d660d17c3d1f0b30cba","url":"./categories/📑工作手册/index.html"},{"revision":"20d521abc4b86ff2cd8167bf6bad75e3","url":"./categories/🦋Butterfly/index.html"},{"revision":"1073ce35583af74816300fe9a9a69a8c","url":"./categories/index.html"},{"revision":"b0058a77153932cf7ff8bb0161469a84","url":"./comments/index.html"},{"revision":"9747af213060e6f6fdbccc6e0d02cfbd","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d92519ef50473549d06b1ced5629cc7c","url":"./gallery/ACG/index.html"},{"revision":"e5c3f441040e55faf9c3e77dd4b6f3bd","url":"./gallery/index.html"},{"revision":"ed89ec1e83495eb5e4d23bc698317f1a","url":"./gallery/OHMYGIRL/index.html"},{"revision":"351b4ab373e6fe433ded90829832420f","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"310f79175c80d38748dc528372844ed5","url":"./img/siteicon/README.html"},{"revision":"f36a6b08e032aaab2018e107a46eb1dd","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"23449466b6c69348d88c6295be8ab3b6","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"56d16b742161589cf55debb5c4410933","url":"./movies/index.html"},{"revision":"b0497dc7ee8f26a7df638538136ffd21","url":"./tags/📁Hexo/index.html"},{"revision":"9b890f34f87065c70ee20ca0546f1be9","url":"./tags/🦋Butterfly/index.html"},{"revision":"e9610effcc70ef292ff316771b5eb8e1","url":"./tags/Emoji表情/index.html"},{"revision":"71ab04d787437f2617e0bd43eacc3ca2","url":"./tags/index.html"},{"revision":"b31cefbadbfb70bb7d6ff6952ebcc15e","url":"./tags/Markdown/index.html"},{"revision":"cccfd4ee1ed76fc58d0c098bc29665d3","url":"./tags/Node/index.html"},{"revision":"1e20d41c56de28e0d0a6e94568f276c5","url":"./tags/npm/index.html"},{"revision":"4bd6116e56d954effb82e2d6389e172f","url":"./tags/nrm/index.html"},{"revision":"39834950cf2cf209ad9a21091d016d5e","url":"./tags/nvm/index.html"},{"revision":"102d719685d940274fd8db22d47adb9e","url":"./tags/Vue/index.html"},{"revision":"95b6c19492f6bf1ec1dcc13a7c4556fb","url":"./tags/workbook/index.html"},{"revision":"4762dd8968405cf19b3aa03fed326ea2","url":"./tags/后台管理/index.html"}], {
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