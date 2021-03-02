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

workbox.precaching.precacheAndRoute([{"revision":"b1c5aea41c25b10170f13bf821815550","url":"./404.html"},{"revision":"fba3b8f34a945b144001ed262a760a7a","url":"./about/index.html"},{"revision":"0ee33d6e3f95773b8f41f47b26e29f8b","url":"./archives/2020/12/index.html"},{"revision":"18194cb65d971d8bc53c944245ce3e8c","url":"./archives/2020/index.html"},{"revision":"cb77b51be4fc371c4d72a57fe9cad943","url":"./archives/2021/01/index.html"},{"revision":"3153944b98179dc9a081e55f6a08a6a1","url":"./archives/2021/02/index.html"},{"revision":"f6c6df55433556ac46b60bf7d37e27e7","url":"./archives/2021/index.html"},{"revision":"19caf4ceb1ecc9fd36f8199393665737","url":"./archives/index.html"},{"revision":"12afd11d3ef8a77fea942a22b1d7a33f","url":"./articles/0xiipgum/index.html"},{"revision":"85d307ddd1cec7e9951ff129fadb24cf","url":"./articles/9r95s1wt/index.html"},{"revision":"2fc41e632ad16a6b40a6ab01203b68ff","url":"./articles/e13t14zy/index.html"},{"revision":"81f5433727808e97a5c52b47a5eafba6","url":"./articles/hyeccjmu/index.html"},{"revision":"b6e1fe0defcb553a4e32344cb419a4e8","url":"./articles/ic67xik4/index.html"},{"revision":"74f5ef670760122126b9a3dae23ce339","url":"./articles/kfwr2gpa/index.html"},{"revision":"fa8fa35fb84382be81aeaef56618b936","url":"./articles/p520xyz8/index.html"},{"revision":"3bc31cf999570ff435481f2cd52ada89","url":"./articles/uni235xy/index.html"},{"revision":"a61dcf58eefefa8ced2d69e73bdaa112","url":"./articles/xi2mpxmd/index.html"},{"revision":"ea0b870032e831d11671bd1874f4435c","url":"./bangumis/index.html"},{"revision":"05566dbf0afd42541d0522d6a37c758c","url":"./books/index.html"},{"revision":"2f7a0c05c29a9ef7f5ea387bf0133503","url":"./categories/🐬Node/index.html"},{"revision":"3de8661a1f415db94a0e6f569ae74006","url":"./categories/👻Markdown/index.html"},{"revision":"9948d361d6de69c7e2a7d18a38536058","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"c7632ea74494ae045872a32701f03436","url":"./categories/📑工作手册/index.html"},{"revision":"db75f92adc542bc91a6f2d80af476b80","url":"./categories/🤡-Vue/index.html"},{"revision":"bc1fe7a135a9064991b8db3d5758e424","url":"./categories/🦋Butterfly/index.html"},{"revision":"684aaab01958a5347a72efb99f87d685","url":"./categories/index.html"},{"revision":"5956ee308d4b3056cd057834b67899af","url":"./categories/uni-app/index.html"},{"revision":"41a4d7ab3dff33481c73419675616e40","url":"./categories/骨架屏/index.html"},{"revision":"3c0828cd0cc26b02e2b17e2ca31ac5fa","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"e9449a22999225ec6a27bbde3ed27425","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"573cd15dffb9b534c45a0ccc4b9db973","url":"./gallery/ACG/index.html"},{"revision":"9dae3ca58329b68287b39c2893600b2a","url":"./gallery/index.html"},{"revision":"ba4b378de64b0a3df84159aeafcdcefe","url":"./gallery/OHMYGIRL/index.html"},{"revision":"447fdd300c5807df91c5d5c08173653c","url":"./games/index.html"},{"revision":"0334374501d77fe2ab9b813b0f09743a","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"31a027ca1646090523fba71a7638a642","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"60198599b9ff2ac3115f536b630c0e71","url":"./movies/index.html"},{"revision":"4766f03af1e7c40db2b0f2454486f584","url":"./tags/📁Hexo/index.html"},{"revision":"06e5f4b177133de517092b3d215417ed","url":"./tags/🦋Butterfly/index.html"},{"revision":"0e501ef4f815b01c52da950be61b8edc","url":"./tags/Emoji表情/index.html"},{"revision":"ea77a7334c0a8bf23ae514c7ddcf2c82","url":"./tags/index.html"},{"revision":"46b71b190732303e6f4d56ef23bd522a","url":"./tags/Markdown/index.html"},{"revision":"968c7714c5385ba6687d01c693a33724","url":"./tags/Node/index.html"},{"revision":"1dfe451bb189509a365f59f615d9a39f","url":"./tags/npm/index.html"},{"revision":"aecb05956fc52d37fc180cfd1b519e25","url":"./tags/nrm/index.html"},{"revision":"6386ac96d17908f785f809ccb70dafef","url":"./tags/nvm/index.html"},{"revision":"abf9344f8a98f1ea12da79778fa43475","url":"./tags/Skeleton-Screen/index.html"},{"revision":"9a6b02e033d3e11990246f3ebbf9ec40","url":"./tags/uni-app/index.html"},{"revision":"85acac8d573e5713cb2071548378a8f2","url":"./tags/Vue/index.html"},{"revision":"7f6d013fb6c334626b6e0a12ae704bf6","url":"./tags/workbook/index.html"},{"revision":"fe29b9cf22b37401a35b02fd796ad6a7","url":"./tags/后台管理/index.html"},{"revision":"a23f6ee36d67ff9f3625d7c296f00182","url":"./tags/骨架屏/index.html"}], {
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