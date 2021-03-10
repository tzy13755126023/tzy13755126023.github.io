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

workbox.precaching.precacheAndRoute([{"revision":"6f9ea46288c11bf0bd214839f118cdb0","url":"./404.html"},{"revision":"a166d21286b3537827d532b33fcca0b6","url":"./about/index.html"},{"revision":"30d8a715b9738acd79023fa93da51284","url":"./archives/2020/12/index.html"},{"revision":"c48c26b1c58e877a35cfefcbc834b7e8","url":"./archives/2020/index.html"},{"revision":"07470ed098414db231c27159332a74d8","url":"./archives/2021/01/index.html"},{"revision":"25eca5210a71030ef44f16867af77754","url":"./archives/2021/02/index.html"},{"revision":"a658b62e89ee1f1795a802b829c97510","url":"./archives/2021/03/index.html"},{"revision":"19dbeb973a21bf61f1eaeda03348cedb","url":"./archives/2021/index.html"},{"revision":"e758c17db8405b26fe2b0d9f3cdf4b58","url":"./archives/index.html"},{"revision":"f833a2b8a9c8b16be4e88d2381fecc76","url":"./articles/0xiipgum/index.html"},{"revision":"65f3a0488e9708d12d9ed9fe1cd23214","url":"./articles/9r95s1wt/index.html"},{"revision":"473ce054e93ef1083a68010dd6c2f6b6","url":"./articles/e13t14zy/index.html"},{"revision":"02c6b2e2976b20dd3b82f565335764d6","url":"./articles/hexo541u/index.html"},{"revision":"2ad4baf4066ec7500fd56c94ded9efbc","url":"./articles/hyeccjmu/index.html"},{"revision":"fe91566d891d73d4624f077d121712b8","url":"./articles/ic67xik4/index.html"},{"revision":"a30e6509d4d9b730e066e296209012b4","url":"./articles/kfwr2gpa/index.html"},{"revision":"ef128a116b5b63a1c439cd31e864b6b1","url":"./articles/p520xyz8/index.html"},{"revision":"c8e09a651f6e8b2a61b0acb49a1d6935","url":"./articles/uni235xy/index.html"},{"revision":"3fbee4782305788661931f129d721e8b","url":"./articles/xi2mpxmd/index.html"},{"revision":"78ef51d8cb4bde49ce334724ad63d3be","url":"./bangumis/index.html"},{"revision":"3413c3b12438a7f9077b16362c5fa23e","url":"./books/index.html"},{"revision":"21fb5b9d52005d0b787687888aef48f2","url":"./categories/🐬Node/index.html"},{"revision":"c39c8528a49233a0797972b389ac61c5","url":"./categories/👻Markdown/index.html"},{"revision":"334c7df5b514d64321f2c3e1a410a544","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"c12ca5c61edf8104ad9038c788eea32a","url":"./categories/📑工作手册/index.html"},{"revision":"acb55f2fb845591825cf8fd421c11fb0","url":"./categories/🤡-Vue/index.html"},{"revision":"76171bf3b4ee9e02343a0b93480e4ec0","url":"./categories/🦋Butterfly/index.html"},{"revision":"91ae01bd892013f48be5eca611ad86ec","url":"./categories/index.html"},{"revision":"05a82e207cb0a3909e231b2de48f80ec","url":"./categories/uni-app/index.html"},{"revision":"ea9d9fb6352dd295c9f68d4d4836079a","url":"./categories/骨架屏/index.html"},{"revision":"698ae5d9b13a9011d59690ba7e745281","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"544647fdb80f33460ba93c29ad677df1","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"153d55a7d7579c43303c3f9e8689cd78","url":"./gallery/ACG/index.html"},{"revision":"e7e3b7055633ebef4d7ed53938f516dd","url":"./gallery/index.html"},{"revision":"bf38b6d30395e0613b33789a7fcf438a","url":"./gallery/OHMYGIRL/index.html"},{"revision":"c611044bc44d01001b168866fd8787cf","url":"./games/index.html"},{"revision":"1e07112b309b7574de2d0d6e7b6e6927","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"652ede8bfd95aa51e9b24c442e1ed752","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"685223b6497137dc143e3a7326614cc9","url":"./movies/index.html"},{"revision":"fd677d378a23b0b774117a234837c7c4","url":"./tags/📁Hexo/index.html"},{"revision":"9a07f552ce9b4a75192bc7cd79bd0413","url":"./tags/🦋Butterfly/index.html"},{"revision":"355153d496e2934479d19c9aff785a8c","url":"./tags/Emoji表情/index.html"},{"revision":"9fa6f964c46a801f81d0847048eac41c","url":"./tags/index.html"},{"revision":"5f22a2cae2c72e8d0f5a5f7e6bfd4812","url":"./tags/Markdown/index.html"},{"revision":"fdec827a20c759b09ce443653225c2e5","url":"./tags/Node/index.html"},{"revision":"22555224fc0d8266c546ad4e08d04981","url":"./tags/npm/index.html"},{"revision":"1fe60fa2b4a612d2a1ba5a8094187234","url":"./tags/nrm/index.html"},{"revision":"a9d89c118deb1432e9dffd07a1d2adbe","url":"./tags/nvm/index.html"},{"revision":"14ef20d0071b40d6cb687e814d713120","url":"./tags/Skeleton-Screen/index.html"},{"revision":"a81e9b3f71430d894fa9ea7e2e8a00de","url":"./tags/uni-app/index.html"},{"revision":"b5c16956e0fe0f2e21035f8451e19490","url":"./tags/Vue/index.html"},{"revision":"b050b47e912c67563c90c06ccfda0812","url":"./tags/workbook/index.html"},{"revision":"d84d67f8696020822b2dd189b60e6ce4","url":"./tags/后台管理/index.html"},{"revision":"51ed531dd7ee23b770fa67ec1962aac7","url":"./tags/骨架屏/index.html"}], {
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