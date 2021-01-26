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

workbox.precaching.precacheAndRoute([{"revision":"884cf56e040e4d07987c56bb585a98bd","url":"./404.html"},{"revision":"d8f840ca866dc6d30816e2b64bb7d9c4","url":"./about/index.html"},{"revision":"478770acbc5f25a8c349940dce0191b8","url":"./archives/2020/12/index.html"},{"revision":"4a3d7ada63d408ad8b8358028763f74a","url":"./archives/2020/index.html"},{"revision":"6fec20ced2e73bc12418e5a7a8cf0193","url":"./archives/2021/01/index.html"},{"revision":"811805a5c5cba2b5f05b9a2acb940bb4","url":"./archives/2021/index.html"},{"revision":"0f113450eb9182d59e10c64ee10ca581","url":"./archives/index.html"},{"revision":"6b6815b967f651e64238d22238b505ec","url":"./articles/0xiipgum/index.html"},{"revision":"e51a5c13316a721a54de1e8d0799f0d9","url":"./articles/9r95s1wt/index.html"},{"revision":"4470beed29b632dce7a4131628671718","url":"./articles/e13t14zy/index.html"},{"revision":"1c275df3ea5c5c7ad7c9be7202450fbf","url":"./articles/hyeccjmu/index.html"},{"revision":"eaaf3aca2c1edea0908c34930cad7af9","url":"./articles/ic67xik4/index.html"},{"revision":"79137fcfef49aa4bbbbd5df92c28f377","url":"./articles/kfwr2gpa/index.html"},{"revision":"d8193981cd7d10f686d25f2177a30f9f","url":"./articles/p520xyz8/index.html"},{"revision":"3e362dc4660ce4a2016a60288d2b4571","url":"./articles/xi2mpxmd/index.html"},{"revision":"83b921a741f686592d378b07cd166cfd","url":"./bangumis/index.html"},{"revision":"51fb50667b73f70051fa7f501d26c530","url":"./books/index.html"},{"revision":"3382900c3ab3e3e6a79de5e9a227c611","url":"./categories/🐬Node/index.html"},{"revision":"c0a7595c6ce8ad993b7ace6ba8cc4c1b","url":"./categories/👻Markdown/index.html"},{"revision":"f1cd28011861905de6e65e5ab8044789","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"e558e4a71f8af8ec4f26ab3f42c5e092","url":"./categories/📑工作手册/index.html"},{"revision":"56e315902171e7cb66a5f4a64b9b94cd","url":"./categories/🤡-Vue/index.html"},{"revision":"894c7aa6292f1533fc7703efc25ad163","url":"./categories/🦋Butterfly/index.html"},{"revision":"17147bd4d79b43f2ee80826451102219","url":"./categories/index.html"},{"revision":"69490f69ac72c12c60617bde4b6af471","url":"./categories/骨架屏/index.html"},{"revision":"c2c057d99558c8f08cbb32ca887004bf","url":"./comments/index.html"},{"revision":"070d6c6be48cc39f265fa209e220ba58","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"051f7e99922330fff246df8cbf9562c3","url":"./gallery/ACG/index.html"},{"revision":"740b6744fe3134bd034e09b0495619ff","url":"./gallery/index.html"},{"revision":"f16faa0883aa24b7cea4c0c0374f6ac2","url":"./gallery/OHMYGIRL/index.html"},{"revision":"470e13bae05bb1bddae30a3fef113cd7","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"637af4b87ed564d37af858690a460bfd","url":"./img/siteicon/README.html"},{"revision":"5287dbf94991ec2a0604de3f9065fab9","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"d53f3182049326607347520ee3bf64a1","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"57ec4349eefc54df8b048b5f4c3e7bb1","url":"./movies/index.html"},{"revision":"f022c20bf47ef9d0969ff7dd7491e0c6","url":"./tags/📁Hexo/index.html"},{"revision":"e8b5910b836ba2623e9e6941efeff6b0","url":"./tags/🦋Butterfly/index.html"},{"revision":"5f5a434217addea738d684459515792e","url":"./tags/Emoji表情/index.html"},{"revision":"8e6dcfd66f02530541ca4f4de4ba1220","url":"./tags/index.html"},{"revision":"57c376a0351794c8fb3356dbcc42a201","url":"./tags/Markdown/index.html"},{"revision":"03b7ccd358393835cca9b50760660e9a","url":"./tags/Node/index.html"},{"revision":"066ce89ef228c9b6d84515ec78d4282c","url":"./tags/npm/index.html"},{"revision":"139eefa9050040d1f58f3e0efef8dc90","url":"./tags/nrm/index.html"},{"revision":"a4ba8ae6b2beb7089da789fc16e44ecf","url":"./tags/nvm/index.html"},{"revision":"a70db8a6dc29c404c8d6ba477f623d6d","url":"./tags/Skeleton-Screen/index.html"},{"revision":"010e678dce51ec737dae13009babb489","url":"./tags/Vue/index.html"},{"revision":"d5630c4436e041e32ed04d1299621ae6","url":"./tags/workbook/index.html"},{"revision":"6387804852e73f1174593b24731f18c5","url":"./tags/后台管理/index.html"},{"revision":"b1c97955c40cb0adbdf984eb66c5ed72","url":"./tags/骨架屏/index.html"}], {
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