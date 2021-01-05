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

workbox.precaching.precacheAndRoute([{"revision":"57290e7e01ff4269d0d039ebd657159e","url":"./2020/12/15/hello-world/index.html"},{"revision":"3e8561513949de86d4188bd2015b59b2","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"29e24a104f9703d08fed799ad2c0880f","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"b48ace2a726f363ddeeca0505bbd194c","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"443cfe46bc98916be00472b8ad05d618","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"fa50473cdf663b585bc4c54d69c69b86","url":"./404.html"},{"revision":"32364288ead1a883974d603b436ce826","url":"./about/index.html"},{"revision":"8d58853a16c4d54b89e9c5300a64bfc9","url":"./archives/2020/12/index.html"},{"revision":"b2a3c8d9b63b96690f0341408f1a51d2","url":"./archives/2020/index.html"},{"revision":"ddc86b8ad7a71b865569504bef0e4716","url":"./archives/2021/01/index.html"},{"revision":"51b464627ba5fea23382c275b28d12b2","url":"./archives/2021/index.html"},{"revision":"e5b1e91a5a7043cecdbe758c1e3ff3ee","url":"./archives/index.html"},{"revision":"29ee6d9aeeb6cc024f1baadf2bde5706","url":"./bangumis/index.html"},{"revision":"2d0766bb69e5df0c066de4582b8eae46","url":"./books/index.html"},{"revision":"a8a86c01c987652eda60e9740f34c5b6","url":"./categories/index.html"},{"revision":"dc9a1b7699fde5c520ad1ffb12038088","url":"./categories/Markdown/index.html"},{"revision":"34d321da250ddda7fee455999e6f95d1","url":"./categories/Node/index.html"},{"revision":"9b9225f7b94c8424c5cce86f6171592d","url":"./categories/Vue后台管理系统/index.html"},{"revision":"3aa50555f232c2839b86407ce6840eb2","url":"./comments/index.html"},{"revision":"c935c4a079ea87e8fed44e70e5a4fb1a","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"98f390e55b5b124320f895383f0cbb35","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4dca2df1e32be4e7b9f27cc2601aca3b","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"d21980affc27e0d46f550d183b8eacfc","url":"./img/siteicon/README.html"},{"revision":"03656fb93b678c6409327a4d42083847","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"f70755d41763c338ec7534199d1f6637","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"74e6f733cd621c8e0cb6d91921f7bfbd","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"2e4e6f8f8622f0a1b80f625c39541a58","url":"./movies/index.html"},{"revision":"d6010c07510282f66389083051c5be61","url":"./tags/📁Hexo/index.html"},{"revision":"d2ee0b19d14cb34969b01902935c66a0","url":"./tags/🦋Butterfly/index.html"},{"revision":"741831b9c97443cc9e8333037591540f","url":"./tags/Emoji表情/index.html"},{"revision":"88b51bfc05ed161eaa2c7fa5bbdb463c","url":"./tags/index.html"},{"revision":"3e4dfa2ce92d02fbd7b69e7b70c7b83d","url":"./tags/Markdown/index.html"},{"revision":"09bc52d29cbbe17c851783fec8fd2d3d","url":"./tags/Node/index.html"},{"revision":"4d998fe50390dbb1530e2cbae1364200","url":"./tags/npm/index.html"},{"revision":"3324587d6e1b27a4235dca2e26dfadaa","url":"./tags/nrm/index.html"},{"revision":"60b14d4ea34314e28262e75e3680a43d","url":"./tags/nvm/index.html"},{"revision":"de20b4586a6277990d42e7534cd8c3c8","url":"./tags/Vue/index.html"},{"revision":"226f1fb95f7e7ae57560d15902017e18","url":"./tags/后台管理/index.html"}], {
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