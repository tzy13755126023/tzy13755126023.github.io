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

workbox.precaching.precacheAndRoute([{"revision":"1cda3e91e33bf7d5717fa0ac540a313a","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"13ddd9c2d475bf6f3a0da3b823d84993","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"6bf4b00a4345ba905c788fd3b0420ef0","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"d5a3000c840136eec3ee6a65c66d7f68","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"af28cc46b4f2d83004f38c30f6f450e8","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"0fe29b9bb98551d4d34f15a643a556a7","url":"./2021/01/12/my-workbook/index.html"},{"revision":"d9a3666971ff9c1d46e63ca2de7f3d65","url":"./404.html"},{"revision":"7868c2d5eeaee8f4eae2dfd5ff6bac5a","url":"./about/index.html"},{"revision":"ca9d10c0c2cfe773b7dce407d6ca9e7a","url":"./archives/2020/12/index.html"},{"revision":"ab9e0cd2ace07462f243c4fda8721021","url":"./archives/2020/index.html"},{"revision":"f51ad63d10f255be42d43952395bfda2","url":"./archives/2021/01/index.html"},{"revision":"8be65f380d870eb739d656d971499a02","url":"./archives/2021/index.html"},{"revision":"8c03daad14416ab71ca1463b287c418b","url":"./archives/index.html"},{"revision":"59a488b984988dcdc615be7120b6ae66","url":"./bangumis/index.html"},{"revision":"953df496af6f620038daa7bce4c71f5d","url":"./books/index.html"},{"revision":"03e7724d7a6ffec85f08dedd43f72842","url":"./categories/🐬Node/index.html"},{"revision":"618dbf0593ad7b0f1d8fe8bf43356b26","url":"./categories/👻Markdown/index.html"},{"revision":"3d14d7526054425b3a1159edba156fd8","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"74c0ea6b3a016e400211999d00e4b713","url":"./categories/📑工作手册/index.html"},{"revision":"65c3ff6644b1f92ca0a4a540bdb7db60","url":"./categories/🦋Butterfly/index.html"},{"revision":"82a45b3c568fe889bfa9b60ec59d9c06","url":"./categories/index.html"},{"revision":"c6a08785de1554bb35f1c8d29a431eb6","url":"./comments/index.html"},{"revision":"a19ac76bfaab7a5a707d95726733f1a4","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"218d315052f4841954a20d81e0532dad","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c7a66cb73b19a7081a7d21ea9319d83c","url":"./gallery/ACG/index.html"},{"revision":"9b455acc16af4fe4fa8899d808b34969","url":"./gallery/index.html"},{"revision":"c9536bdbc54e5e1c07e27f235223b0f2","url":"./gallery/OHMYGIRL/index.html"},{"revision":"025c2fa9ce94644d38f15742dae991fd","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"1a57b2582261eb10aeb0b91b0b4e894e","url":"./img/siteicon/README.html"},{"revision":"d1b9deeec598b54f58174efca0548202","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"47f43191d24d3afeadb3bd24892ed2ac","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"5561a7e6b000879fd57e74e0f208f263","url":"./movies/index.html"},{"revision":"3dd64eb4f54f77050e75fdd100493e3b","url":"./tags/📁Hexo/index.html"},{"revision":"3bef23ec3d2f2bb3cbc4cf3d2d9f0bb8","url":"./tags/🦋Butterfly/index.html"},{"revision":"e33f7355b1853216355fe7a3347318c0","url":"./tags/Emoji表情/index.html"},{"revision":"f948b104841e034a9fa4abaed090ae87","url":"./tags/index.html"},{"revision":"f7cf2a29c9ebed2dd3913e1e36689259","url":"./tags/Markdown/index.html"},{"revision":"1016625bfe74402301f4832b10456b40","url":"./tags/Node/index.html"},{"revision":"a12fb54662bea5438257e1d32e8fca1e","url":"./tags/npm/index.html"},{"revision":"06cd0210db8af81511fc9f8146399350","url":"./tags/nrm/index.html"},{"revision":"89ab24033b0662133938d5b4d5dfae5b","url":"./tags/nvm/index.html"},{"revision":"eb9a8bc7be094e9e9ffc442fd19ea020","url":"./tags/Vue/index.html"},{"revision":"932aa826b0379904db81c818fa4cd3fe","url":"./tags/workbook/index.html"},{"revision":"5e475c1d204bca834f6b1aa65992617f","url":"./tags/后台管理/index.html"}], {
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