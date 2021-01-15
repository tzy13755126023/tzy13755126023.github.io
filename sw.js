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

workbox.precaching.precacheAndRoute([{"revision":"415e050708fda6d2c33b8241b224a689","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"61f7b81cde7be0337de5727249c211cf","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"0e89756f7cf547f7a87d204b76e5239e","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"f1993f9e1cd74bf5b586aca2dbdca262","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"453eeff7a9cd5426d08635cb1e92c8a4","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"eb6ede03d508b80f7d8ef07c4be1f53f","url":"./2021/01/12/my-workbook/index.html"},{"revision":"70d18605da74d9a400d67cf96812502e","url":"./404.html"},{"revision":"9e90ba4c9fc2ec15a264bced67211292","url":"./about/index.html"},{"revision":"d5b57d83ef4a16b06accad58889bf9eb","url":"./archives/2020/12/index.html"},{"revision":"47acd1adfeaeb8804fee1cd9216260bc","url":"./archives/2020/index.html"},{"revision":"16a3cc89d73d0cc289314c1c0d949466","url":"./archives/2021/01/index.html"},{"revision":"acbb059d50fa9acf35eecce9b2aa802b","url":"./archives/2021/index.html"},{"revision":"ad45d3eb0f172f0e252b71ca7b870df0","url":"./archives/index.html"},{"revision":"244948b52996d9aebb215ba301bee54a","url":"./bangumis/index.html"},{"revision":"e7c05a437caaa4c58d97d824fed98c5d","url":"./books/index.html"},{"revision":"c7153686f6ac0709ef7169c78e709c09","url":"./categories/🐬Node/index.html"},{"revision":"879ec4e606ab12cc683bf3ab4088c3cb","url":"./categories/👻Markdown/index.html"},{"revision":"b7e425dbf655e7ad3d9eb7011bf3bf0a","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"8474bc23e1dc9ccbcb48e0634a7db327","url":"./categories/📑工作手册/index.html"},{"revision":"8e30c9656f4e27832d914326be072d0f","url":"./categories/🦋Butterfly/index.html"},{"revision":"3131270c1f63adb92d71f9dbe6111122","url":"./categories/index.html"},{"revision":"97643dc5ee3e6a700a3be59a794b3aad","url":"./comments/index.html"},{"revision":"9747af213060e6f6fdbccc6e0d02cfbd","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"fde4c9d4efc94def0bc990c66b946288","url":"./gallery/ACG/index.html"},{"revision":"b7173e76d6417932ed7e15a805225016","url":"./gallery/index.html"},{"revision":"b48ac63bddb0932bb46a07d7d873e0e0","url":"./gallery/OHMYGIRL/index.html"},{"revision":"3c1d91fe091496a1248251f08569b4db","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"be567b5adc68a17fa1bd588b0a6f5f4a","url":"./img/siteicon/README.html"},{"revision":"b5fef43c7bc9e545e022f6157912c3fc","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"156042742271170c386d3cb08b31ad30","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"c42174e154e5bda59ea54a8b117064dd","url":"./movies/index.html"},{"revision":"a974c24ef1d116a250c683123592c6aa","url":"./tags/📁Hexo/index.html"},{"revision":"87aa804898f57ada44c9d08fc3a7fcb6","url":"./tags/🦋Butterfly/index.html"},{"revision":"bdd7e0db41b80767ad683aed126ad797","url":"./tags/Emoji表情/index.html"},{"revision":"4443ebc3d9c127cd7adc0f4dcac6ff23","url":"./tags/index.html"},{"revision":"9cf505989a21970d5e32e08cda9be538","url":"./tags/Markdown/index.html"},{"revision":"836990010289dd80ef0f5e1058546622","url":"./tags/Node/index.html"},{"revision":"dae325f0e007b27629dce677590965a0","url":"./tags/npm/index.html"},{"revision":"bc9968e26f55dd0f98850fb4e43a37d0","url":"./tags/nrm/index.html"},{"revision":"1d80f35e9dab6231a2e5f7904cdc44a2","url":"./tags/nvm/index.html"},{"revision":"52060d5b4c85e048e22d89a5ca0542b3","url":"./tags/Vue/index.html"},{"revision":"99f00aea9c44f3f61b4bcd17df5697b1","url":"./tags/workbook/index.html"},{"revision":"e0496c2559c0c6a0a78cae110b9bd09b","url":"./tags/后台管理/index.html"}], {
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