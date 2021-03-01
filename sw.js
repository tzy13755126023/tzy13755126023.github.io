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

workbox.precaching.precacheAndRoute([{"revision":"f399f9f41ea80b28c3b21186a3046f0f","url":"./404.html"},{"revision":"e3b1facb6c272edd902f021b862a834f","url":"./about/index.html"},{"revision":"9d6bb12acf8ad91bae08debbbef1bf9b","url":"./archives/2020/12/index.html"},{"revision":"dda3ee339dbee57609e3ba8759b89ee5","url":"./archives/2020/index.html"},{"revision":"cd0f4d85621b1b2e9ba591f713130bdc","url":"./archives/2021/01/index.html"},{"revision":"d98f9fe1b83214b97ad2fcf0062ec887","url":"./archives/2021/02/index.html"},{"revision":"224847bd1d129926fab322582e530657","url":"./archives/2021/index.html"},{"revision":"92f7927fa4aed0a29f2276d596225574","url":"./archives/index.html"},{"revision":"12afd11d3ef8a77fea942a22b1d7a33f","url":"./articles/0xiipgum/index.html"},{"revision":"85d307ddd1cec7e9951ff129fadb24cf","url":"./articles/9r95s1wt/index.html"},{"revision":"2fc41e632ad16a6b40a6ab01203b68ff","url":"./articles/e13t14zy/index.html"},{"revision":"81f5433727808e97a5c52b47a5eafba6","url":"./articles/hyeccjmu/index.html"},{"revision":"b6e1fe0defcb553a4e32344cb419a4e8","url":"./articles/ic67xik4/index.html"},{"revision":"74f5ef670760122126b9a3dae23ce339","url":"./articles/kfwr2gpa/index.html"},{"revision":"fa8fa35fb84382be81aeaef56618b936","url":"./articles/p520xyz8/index.html"},{"revision":"3bc31cf999570ff435481f2cd52ada89","url":"./articles/uni235xy/index.html"},{"revision":"a61dcf58eefefa8ced2d69e73bdaa112","url":"./articles/xi2mpxmd/index.html"},{"revision":"f17f13baea96e06d03f8dd694babbbb2","url":"./bangumis/index.html"},{"revision":"fab203b5caa0d38faf4157a35de74bc9","url":"./books/index.html"},{"revision":"2a91b04a197a88cbb632aeba868ac3f7","url":"./categories/🐬Node/index.html"},{"revision":"2d9cee8f9b4a3423794c84ed7575d333","url":"./categories/👻Markdown/index.html"},{"revision":"4283ae80197753425b2fb2e3adc2a10d","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"726ea3f6295524e2d77b5cf47628a5dc","url":"./categories/📑工作手册/index.html"},{"revision":"cd53784defff423a172943b563a2d649","url":"./categories/🤡-Vue/index.html"},{"revision":"6bef63571fd02b23c18e497b1c89efd4","url":"./categories/🦋Butterfly/index.html"},{"revision":"c0a0bcb92209e700406ff42ac55c9c63","url":"./categories/index.html"},{"revision":"a08e9dbee0e4bd6491dcc8ff168db922","url":"./categories/uni-app/index.html"},{"revision":"2921ab8c413b5662dfb13713fa9e3390","url":"./categories/骨架屏/index.html"},{"revision":"21666b37709021d216beecad7526c95a","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"e9449a22999225ec6a27bbde3ed27425","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"135589530c14e50656260a444e189e27","url":"./gallery/ACG/index.html"},{"revision":"631d0fde1ad6cc0838d28530de16b147","url":"./gallery/index.html"},{"revision":"f31553889a7ca58f9de90cf0f504acf1","url":"./gallery/OHMYGIRL/index.html"},{"revision":"12f316742844dbc9383a8fe8a4d67487","url":"./games/index.html"},{"revision":"4545f55a4a6ed4eb695968e388b7bc70","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"7b5c897ca60142f531f2e29b37f23852","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"12392d5100f5920f25de1f3eb0e0967f","url":"./movies/index.html"},{"revision":"fef420c41fb9b1ac34c8ef000242c44a","url":"./tags/📁Hexo/index.html"},{"revision":"4da17d33e518de339ad36e7d0caa2fd5","url":"./tags/🦋Butterfly/index.html"},{"revision":"197e74e1b10fe48a3e262001985ae398","url":"./tags/Emoji表情/index.html"},{"revision":"2300e41faeaa81a5f11290337db65b5c","url":"./tags/index.html"},{"revision":"3bd001866f90f60f3663dabc80ffe3ce","url":"./tags/Markdown/index.html"},{"revision":"1c158a9a82dab8be2edb07ae90a1b69e","url":"./tags/Node/index.html"},{"revision":"b1fbf0ef8dc61358699d3882d0f567a8","url":"./tags/npm/index.html"},{"revision":"e57f29b47f6876ba9d50fb6f8f727488","url":"./tags/nrm/index.html"},{"revision":"011adca041e379f7899c32cf680e6524","url":"./tags/nvm/index.html"},{"revision":"85a992779cac3bc7ebae598bc44c4433","url":"./tags/Skeleton-Screen/index.html"},{"revision":"47a70606b2fcf176ef877f06eec119ad","url":"./tags/uni-app/index.html"},{"revision":"73bf5328b90f46c1b336915fbb3c7795","url":"./tags/Vue/index.html"},{"revision":"7e14da15c5d6baa5fcd4cab57aaff2ed","url":"./tags/workbook/index.html"},{"revision":"d85b9319609401e60be9d1c0462a20fc","url":"./tags/后台管理/index.html"},{"revision":"a64d6f98d81b0b4b15a0954ff5615325","url":"./tags/骨架屏/index.html"}], {
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