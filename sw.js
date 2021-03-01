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

workbox.precaching.precacheAndRoute([{"revision":"741686d80c45b13a504c4d885fb7143e","url":"./404.html"},{"revision":"b2164cb327b4ce1da756a647768b5b2a","url":"./about/index.html"},{"revision":"6d784b46544e9952f74b77764342084d","url":"./archives/2020/12/index.html"},{"revision":"b1e1ca7d0fb94020c84ebd7a7788512f","url":"./archives/2020/index.html"},{"revision":"683e5d281eb1a00c3cc99abec818f02d","url":"./archives/2021/01/index.html"},{"revision":"a717aae5cb52d80388bfff8d793db294","url":"./archives/2021/02/index.html"},{"revision":"283ec4e1a0eece84c0ecdde3634814f6","url":"./archives/2021/index.html"},{"revision":"8706687c8cca91a7bdfca76fb61bdf13","url":"./archives/index.html"},{"revision":"12afd11d3ef8a77fea942a22b1d7a33f","url":"./articles/0xiipgum/index.html"},{"revision":"85d307ddd1cec7e9951ff129fadb24cf","url":"./articles/9r95s1wt/index.html"},{"revision":"2fc41e632ad16a6b40a6ab01203b68ff","url":"./articles/e13t14zy/index.html"},{"revision":"81f5433727808e97a5c52b47a5eafba6","url":"./articles/hyeccjmu/index.html"},{"revision":"b6e1fe0defcb553a4e32344cb419a4e8","url":"./articles/ic67xik4/index.html"},{"revision":"74f5ef670760122126b9a3dae23ce339","url":"./articles/kfwr2gpa/index.html"},{"revision":"fa8fa35fb84382be81aeaef56618b936","url":"./articles/p520xyz8/index.html"},{"revision":"3bc31cf999570ff435481f2cd52ada89","url":"./articles/uni235xy/index.html"},{"revision":"a61dcf58eefefa8ced2d69e73bdaa112","url":"./articles/xi2mpxmd/index.html"},{"revision":"cc3669030b424df8d47af34774583739","url":"./bangumis/index.html"},{"revision":"0ea8559d34f28669a0520e8c60d5f097","url":"./books/index.html"},{"revision":"566a8be51c2f72adc4c86ab8f4fafe51","url":"./categories/🐬Node/index.html"},{"revision":"582a1f73fa054042a2e625c84931490d","url":"./categories/👻Markdown/index.html"},{"revision":"8a08da7901f44a7b8c4a10912bdf4447","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"3b1f510a34df0feb9e58b433f6b4f806","url":"./categories/📑工作手册/index.html"},{"revision":"53aa527d5f9e4d6cb565efb5ed6f2813","url":"./categories/🤡-Vue/index.html"},{"revision":"16766f22d3cab1e67f48386f0c40274b","url":"./categories/🦋Butterfly/index.html"},{"revision":"3f54adfe3c581ad7a064929ef1b1d371","url":"./categories/index.html"},{"revision":"adfb0845fcd13e02f525b4278a6a260e","url":"./categories/uni-app/index.html"},{"revision":"d2474df4753088b82f9dbfe37a7d2eab","url":"./categories/骨架屏/index.html"},{"revision":"a670092f27f5bb1501fc34285a3d0f01","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"e9449a22999225ec6a27bbde3ed27425","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"6646b71fb81f2bb15803fb233ca21cd2","url":"./gallery/ACG/index.html"},{"revision":"c2036f325995c217d2ee6f7876b3c36f","url":"./gallery/index.html"},{"revision":"ecba05d7198ea582faf43126f676e9fd","url":"./gallery/OHMYGIRL/index.html"},{"revision":"6eade662796b506857e42e648025ffd0","url":"./games/index.html"},{"revision":"19b7f7fe66cb5e17681279ed879387a7","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"0397783d6391cbfe12d0fa0b739eb700","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"05103bd3c048ab6a62934729d0ba4a8a","url":"./movies/index.html"},{"revision":"4ed88e3be14480f33c30ed1604cad31f","url":"./tags/📁Hexo/index.html"},{"revision":"a416c48b2729295f944e8243651b3e0c","url":"./tags/🦋Butterfly/index.html"},{"revision":"23b517fcd329a64369de4c52882e69e2","url":"./tags/Emoji表情/index.html"},{"revision":"0e6b982b2b0b376b96e1bc6607048087","url":"./tags/index.html"},{"revision":"3ab153bd64bdeadffd3076a2fcb36be7","url":"./tags/Markdown/index.html"},{"revision":"213187eb4852382639064c9124c3b0dd","url":"./tags/Node/index.html"},{"revision":"c68d51a27ec0bd7da43f9ac27071386f","url":"./tags/npm/index.html"},{"revision":"987e41c4d1177fefc4d4686fa9110b06","url":"./tags/nrm/index.html"},{"revision":"76308ef2afc006ff07e7745ea076cac8","url":"./tags/nvm/index.html"},{"revision":"31c2f7974e225d0cc2323dbbaccfd81a","url":"./tags/Skeleton-Screen/index.html"},{"revision":"9de46a3487f27b249ee475fcbac1a349","url":"./tags/uni-app/index.html"},{"revision":"a9fb2f7338d9da2f449ececb4661c9ec","url":"./tags/Vue/index.html"},{"revision":"4f62eea6fd254778b5b74e1fa65505a7","url":"./tags/workbook/index.html"},{"revision":"1f234a0f3be63b04a3e67916de529be2","url":"./tags/后台管理/index.html"},{"revision":"8c6a581d42b39fad7ad59a1dcfe2b44a","url":"./tags/骨架屏/index.html"}], {
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