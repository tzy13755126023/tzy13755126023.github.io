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

workbox.precaching.precacheAndRoute([{"revision":"710de6ff66f447a2053f93917a4756be","url":"./2020/12/15/hello-world/index.html"},{"revision":"6492e929cfd633fc9055fa2360626acf","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"4f5d26886e6bd66937c00a747f497150","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"add1bcf0ec6f8fdc424ff8b1b2492a30","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"8d9e18273cca2bd2f9e6a0658bcef45c","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"fea680cb410d18edb4d0fd078f3f362d","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"4c4f78ac1edebf026ac1337cdb4bd5b8","url":"./404.html"},{"revision":"b87a19e7cb85fd3eabe7eac91a81d9c8","url":"./about/index.html"},{"revision":"f4e2664715e9e7d61355fddb636b6ae5","url":"./archives/2020/12/index.html"},{"revision":"c948b036164dbfdc72aee24f3a97e179","url":"./archives/2020/index.html"},{"revision":"7985f94a9602aa6b35c81c97a8135a57","url":"./archives/2021/01/index.html"},{"revision":"71549bcaa04f10cd83e3ca8864f8b324","url":"./archives/2021/index.html"},{"revision":"5b3874ed73075a3b791abef3a81ab64f","url":"./archives/index.html"},{"revision":"7ffe1b191156d29057a265a0c34a987c","url":"./bangumis/index.html"},{"revision":"8bfe4f5fb877e5432af9858d1fc759a8","url":"./books/index.html"},{"revision":"56ad2055d7f1b14e205a5c9eeb7e8e2b","url":"./categories/🐬Node/index.html"},{"revision":"8eb829b624a78b8c9d90988b9ebde66f","url":"./categories/👻Markdown/index.html"},{"revision":"89058ebc2ff1c1e44c6a625b2931bb28","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"1e7770265a794464cda4ef818ec83a9b","url":"./categories/🦋Butterfly/index.html"},{"revision":"7df9f56f07c53c5560d848a087431f4a","url":"./categories/index.html"},{"revision":"97358f4c8ad9e3d191d36e06c5270220","url":"./comments/index.html"},{"revision":"2aa9454375eba909fe396992fece5415","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"218d315052f4841954a20d81e0532dad","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"c4f01df55a89dc53c657e51126e118a6","url":"./gallery/acg/index.html"},{"revision":"ffe9f439c5104c19fae5e0a93d2b8fd6","url":"./gallery/index.html"},{"revision":"b334b789182f97a8ddaa1aa1e9901181","url":"./gallery/ohmygirl/index.html"},{"revision":"89f56e19c22ffd8531eee4276ecfa4bc","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"03fa7aa565cbd53767ac9c572b18b098","url":"./img/siteicon/README.html"},{"revision":"7886bae3f10b5c890fb5a0562c9af777","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"d0fffe1bc16e75700325da0f72902280","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"f8e5d95667d79e492b103ab58eab102d","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"b0badcc38aee21111be676803f5b7a92","url":"./movies/index.html"},{"revision":"ffa3554ea85598ea46bea71fe162ffed","url":"./tags/📁Hexo/index.html"},{"revision":"6564557fb1932a8c035ef68a990d3f6a","url":"./tags/🦋Butterfly/index.html"},{"revision":"21fcfd79f21f06ce8bb6f6aa5ed7def9","url":"./tags/Emoji表情/index.html"},{"revision":"571f1574b0e1cfabc20cfa6e0596457e","url":"./tags/index.html"},{"revision":"f9551778edf2ddff62add95bf2abc73f","url":"./tags/Markdown/index.html"},{"revision":"6301216943c6b562dc9d1cf16b365219","url":"./tags/Node/index.html"},{"revision":"2bbd0d10519a13ff1da64943e584bbe3","url":"./tags/npm/index.html"},{"revision":"de752545d175d8419b4913ef99569fcf","url":"./tags/nrm/index.html"},{"revision":"5bb8d4c608aa91da4d56130d1f3bbc62","url":"./tags/nvm/index.html"},{"revision":"766129fecb6dbe8bfe99e2d8f6a8c62d","url":"./tags/Vue/index.html"},{"revision":"8a25d835a8e2c7f3a551908bbb210362","url":"./tags/后台管理/index.html"}], {
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