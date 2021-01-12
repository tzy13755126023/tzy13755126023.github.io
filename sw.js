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

workbox.precaching.precacheAndRoute([{"revision":"d52fdff221c050db0c4ee7905e47e00b","url":"./2020/12/15/hello-world/index.html"},{"revision":"7b6d7e9824d1b1c9bba49ed7e4aac789","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"248fa3a5d79f219e9b1ab47a62c02fd9","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"d821b2720b2b8959e8f5df557ea0194a","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"72cfaceb139077153e6e53815ffa9321","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"52733d73945e5f3939a05746603dc531","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"e5ba0af9b1d55791838d00c79e273e5a","url":"./2021/01/12/my-workbook/index.html"},{"revision":"13e765c157ebb325c07442d16e2ef82a","url":"./404.html"},{"revision":"e98b4bc717af73484f3d3a7266436b87","url":"./about/index.html"},{"revision":"676d1fc9286735da72bd985710becbb4","url":"./archives/2020/12/index.html"},{"revision":"e40c96dc58e4e904e5376aca01e32276","url":"./archives/2020/index.html"},{"revision":"fa4e00264b159458e89351b2ec101fbe","url":"./archives/2021/01/index.html"},{"revision":"4c0666407ef628532a7fc3f1493b1793","url":"./archives/2021/index.html"},{"revision":"2071bdeb804d9cd828f441edc40c6334","url":"./archives/index.html"},{"revision":"1696b141fceafea2f1bc294c7ff4178f","url":"./bangumis/index.html"},{"revision":"804a2007dd7ff3883bb566e34ac7d8a9","url":"./books/index.html"},{"revision":"b67c4521133d9eb7e45e4e70b9b5435b","url":"./categories/🐬Node/index.html"},{"revision":"afb35ef1c7449a62da47754229bd4d87","url":"./categories/👻Markdown/index.html"},{"revision":"94cb6adf59f81d096f91582b96545a57","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"1e87baac220b45bdb3d59841d8912aac","url":"./categories/🦋Butterfly/index.html"},{"revision":"653a1c299bb4417d1a923bd74b6dbd66","url":"./categories/index.html"},{"revision":"778ec82eadbda7f768195bf22f28701a","url":"./comments/index.html"},{"revision":"a19ac76bfaab7a5a707d95726733f1a4","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"218d315052f4841954a20d81e0532dad","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1ecc33ed26c78d4a2cf8b6c5e5e1a952","url":"./gallery/ACG/index.html"},{"revision":"4912772ef13e49b10fa38cc95bdcfac1","url":"./gallery/index.html"},{"revision":"194636c5d8fb7158f98ce6002cf84575","url":"./gallery/OHMYGIRL/index.html"},{"revision":"174339a6b81ec8a5c67d3471a0d181f9","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"998492481a8f88c5e2da5992523a4761","url":"./img/siteicon/README.html"},{"revision":"aeb317b7079371b98af1647ce0dbabc0","url":"./index.html"},{"revision":"f3d0cfdd4fd6aa9b4be271dde7711aa6","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"76b01bec83dba1ec8ccdf551b6ec8ab0","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"45007db771be0be8bd55b7b13e68db95","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"a302357a49d087d7962c1736fc74d0aa","url":"./movies/index.html"},{"revision":"1914832eb9c0edbdda67a6c32cb17491","url":"./tags/📁Hexo/index.html"},{"revision":"4ed9b4115c12dd6a8aea2e09d6faaf40","url":"./tags/🦋Butterfly/index.html"},{"revision":"cdf2ee0571576eb23a32d426c2d3b197","url":"./tags/Emoji表情/index.html"},{"revision":"fc3b2999034c3ac73398dd739d229d12","url":"./tags/index.html"},{"revision":"6f20ce6c91b2752832b8298f04a0fb74","url":"./tags/Markdown/index.html"},{"revision":"70008242ab9f6cbbf26b6eadae1b29b8","url":"./tags/Node/index.html"},{"revision":"6b3cdcd118285fed3cc2382b47c50882","url":"./tags/npm/index.html"},{"revision":"51f1b5f3af8c1b4749fb503c4c25b932","url":"./tags/nrm/index.html"},{"revision":"ab35112c4e6809044b2ea5c61ae82f99","url":"./tags/nvm/index.html"},{"revision":"d2c8b6830f90b969f4540f1e4c8840e7","url":"./tags/Vue/index.html"},{"revision":"c800fffb00b2eca5336e613e285b9a55","url":"./tags/后台管理/index.html"}], {
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