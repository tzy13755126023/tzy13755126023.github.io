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

workbox.precaching.precacheAndRoute([{"revision":"23686b0b368cb77ccbb25826a7abfb01","url":"./404.html"},{"revision":"33c0af3a4c7ddf4558b6be01296a5f67","url":"./about/index.html"},{"revision":"2565b7be1f79b2d59d77204868cd828f","url":"./archives/2020/12/index.html"},{"revision":"576c1bc7ced0f96a0d883c6ae69a7ff4","url":"./archives/2020/index.html"},{"revision":"945aad42936ca5a94b42ec8653ae9627","url":"./archives/2021/01/index.html"},{"revision":"40a653baf7a3c6d25c8b876164e5f992","url":"./archives/2021/02/index.html"},{"revision":"343e5d227999f59468f784ab103b91a0","url":"./archives/2021/03/index.html"},{"revision":"938a190036d4347daf2dfb2050afde68","url":"./archives/2021/index.html"},{"revision":"2213d76ed74bfb2747ffdba1ec4ee862","url":"./archives/index.html"},{"revision":"e36457a9df7986f5b6b37303e97bf50a","url":"./articles/0xiipgum/index.html"},{"revision":"80398cec73b8a32996f53c6302a30368","url":"./articles/9r95s1wt/index.html"},{"revision":"e4050d4080549bb18daedd0c88e4caae","url":"./articles/e13t14zy/index.html"},{"revision":"55fd60caf256bd2ea650ac5e6964be2d","url":"./articles/hexo541u/index.html"},{"revision":"9cc34b9700cf3df9a788fda792fda46f","url":"./articles/hyeccjmu/index.html"},{"revision":"7bad21cc34cddc71f52a6165a3aab353","url":"./articles/ic67xik4/index.html"},{"revision":"a30e6509d4d9b730e066e296209012b4","url":"./articles/kfwr2gpa/index.html"},{"revision":"d0f256dbec98712eb42b276e1099002e","url":"./articles/p520xyz8/index.html"},{"revision":"d195335a0a1729d4a95ef662a5e6a1b7","url":"./articles/uni235xy/index.html"},{"revision":"5d719f3254f21cfb78e1479c1fffcbcd","url":"./articles/xi2mpxmd/index.html"},{"revision":"ce99cbf8a7996cbba4cf6c7bc302668e","url":"./bangumis/index.html"},{"revision":"0b001d90a6082d5d22132f12112a305e","url":"./books/index.html"},{"revision":"ce7aef2bc4505db253b9edd141100409","url":"./categories/🐬Node/index.html"},{"revision":"bd2dd6cf766cfcb95a634642e1095fec","url":"./categories/👻Markdown/index.html"},{"revision":"f5fd0989884e615e5a654d5a33e8fd02","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"c42093bdc1f9be0f7eaf5cbe0a7ce1d9","url":"./categories/📑工作手册/index.html"},{"revision":"a946730d7d39cda5f7fa30dea04fe8d1","url":"./categories/🤡-Vue/index.html"},{"revision":"751386ae3ee23d2c78584620605ca53c","url":"./categories/🦋Butterfly/index.html"},{"revision":"60ecdeeef4a43db7b4142f0f79407109","url":"./categories/index.html"},{"revision":"e2bb5f1c0a0f2c7a9e1bf4bd8d4b73eb","url":"./categories/uni-app/index.html"},{"revision":"1911f9d1c73f7b51d4ddf6ab108715b3","url":"./categories/骨架屏/index.html"},{"revision":"4163798c51ecdd572dd3c8da43f1361c","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"544647fdb80f33460ba93c29ad677df1","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0b0ca1c69c34b29dbe02f20806f66ae9","url":"./gallery/ACG/index.html"},{"revision":"722e2a69cb8b213ecc5c438d5b3937b5","url":"./gallery/index.html"},{"revision":"110ec18548d2ce5033864bd03a951226","url":"./gallery/OHMYGIRL/index.html"},{"revision":"471efdc973ac3fb68e37f5490371eb9d","url":"./games/index.html"},{"revision":"156c6ffc4a2373ac21d4ad1e42a05841","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"deb61810104ac69e1c9318f939aa21f0","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"7aee60733da04242c67a8c9fdc00e827","url":"./movies/index.html"},{"revision":"11003f971bd4edfbe91fa9fea389b28e","url":"./tags/📁Hexo/index.html"},{"revision":"844aee93d8d79f1958cfdc175fb0b67c","url":"./tags/🦋Butterfly/index.html"},{"revision":"d87eca8816da2415006bfb711c23e7b9","url":"./tags/Emoji表情/index.html"},{"revision":"07544958daddbf6cc2a2d58f0a4f0770","url":"./tags/index.html"},{"revision":"b93bca1dd0bf6caa1c8a3656efafa6b9","url":"./tags/Markdown/index.html"},{"revision":"be6eb1b260b0a83cf852cf46cc208169","url":"./tags/Node/index.html"},{"revision":"2af3e83acec88fb85da39d95d0148f57","url":"./tags/npm/index.html"},{"revision":"92bcf132898705bcc2ead148bc3246f5","url":"./tags/nrm/index.html"},{"revision":"6c02b19cb4318431cce905c3d83eec17","url":"./tags/nvm/index.html"},{"revision":"03a6216a42a5b97a1167b41bbf109e0a","url":"./tags/Skeleton-Screen/index.html"},{"revision":"96a98864e9813a2c3e6ab4ea5d071180","url":"./tags/uni-app/index.html"},{"revision":"601141d129390c7e11f406c51d26bf2c","url":"./tags/Vue/index.html"},{"revision":"0d5c0b451cf2815734d4d92e09c045c7","url":"./tags/workbook/index.html"},{"revision":"763fdb1cd398b4173a31ddf2bfee97b6","url":"./tags/后台管理/index.html"},{"revision":"7bc82eae1c40e0429d9f3c57e41199e0","url":"./tags/骨架屏/index.html"}], {
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