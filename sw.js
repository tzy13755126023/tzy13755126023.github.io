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

workbox.precaching.precacheAndRoute([{"revision":"5ec287036ba823a1f661d938f9fa711c","url":"./404.html"},{"revision":"8968ddc5fb10c0903ddcf2071b443071","url":"./about/index.html"},{"revision":"918a681f4d86df39338c6e9edc59806e","url":"./archives/2020/12/index.html"},{"revision":"98454a58426b9888e0061721963fdcfb","url":"./archives/2020/index.html"},{"revision":"94263b9cb679ef18f1f1ae0c5d372466","url":"./archives/2021/01/index.html"},{"revision":"1c8ec0de5ce5842ce7ecd4650b4358d8","url":"./archives/2021/02/index.html"},{"revision":"934d2f08e49f9250921b6fb2f4473bd7","url":"./archives/2021/03/index.html"},{"revision":"3df0408c21f89d5dff1649e328a7cfb3","url":"./archives/2021/index.html"},{"revision":"5a89bbd47365d0d5a7eeafa800b2ecdc","url":"./archives/index.html"},{"revision":"f833a2b8a9c8b16be4e88d2381fecc76","url":"./articles/0xiipgum/index.html"},{"revision":"65f3a0488e9708d12d9ed9fe1cd23214","url":"./articles/9r95s1wt/index.html"},{"revision":"473ce054e93ef1083a68010dd6c2f6b6","url":"./articles/e13t14zy/index.html"},{"revision":"02c6b2e2976b20dd3b82f565335764d6","url":"./articles/hexo541u/index.html"},{"revision":"2ad4baf4066ec7500fd56c94ded9efbc","url":"./articles/hyeccjmu/index.html"},{"revision":"fe91566d891d73d4624f077d121712b8","url":"./articles/ic67xik4/index.html"},{"revision":"a30e6509d4d9b730e066e296209012b4","url":"./articles/kfwr2gpa/index.html"},{"revision":"ef128a116b5b63a1c439cd31e864b6b1","url":"./articles/p520xyz8/index.html"},{"revision":"c8e09a651f6e8b2a61b0acb49a1d6935","url":"./articles/uni235xy/index.html"},{"revision":"64b8332b865cac15057c10d2d3ec5393","url":"./articles/xi2mpxmd/index.html"},{"revision":"922b3d491d4bdd4a62744d0e93b8419b","url":"./bangumis/index.html"},{"revision":"dab0f7a589f5a0aa678a209ab9a8b5dc","url":"./books/index.html"},{"revision":"724eaee62592915ad4393b0ae50c0887","url":"./categories/🐬Node/index.html"},{"revision":"a28c90db8b10d23ccc64ae6699f0a27f","url":"./categories/👻Markdown/index.html"},{"revision":"2af5620085f560a85754abf11722cbf6","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"a2100fba957c61d516c706274269ee64","url":"./categories/📑工作手册/index.html"},{"revision":"c54986b56f40195be2091bcfbb371af3","url":"./categories/🤡-Vue/index.html"},{"revision":"1e3f9d517f0059d64187ca778e9ff0e1","url":"./categories/🦋Butterfly/index.html"},{"revision":"eb6fd2c7325eb7a561c8d4fe8d581218","url":"./categories/index.html"},{"revision":"38e5f7d8691f6a8d0980912c263420fb","url":"./categories/uni-app/index.html"},{"revision":"650c6832d4814a9899b7ec80be2cbf8d","url":"./categories/骨架屏/index.html"},{"revision":"53aac6f256d4870b64328987ec56cc7c","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"544647fdb80f33460ba93c29ad677df1","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b4b433bb1800a127beaa014d9704ffab","url":"./gallery/ACG/index.html"},{"revision":"e4eb6b38e1b8bdf78c8999296554e5ec","url":"./gallery/index.html"},{"revision":"a7151740e4cbaaa3ce34c2e36160672d","url":"./gallery/OHMYGIRL/index.html"},{"revision":"6b64643a83af97cab79c3bcd60b2ea38","url":"./games/index.html"},{"revision":"34f1c0a1db18fb9f46f59acf2b968903","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"99e9b272647793cef817be968a8de43a","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"f29b3db85496279073c2989646274cfe","url":"./movies/index.html"},{"revision":"c4e96858bbe8304b180f2c93f7387777","url":"./tags/📁Hexo/index.html"},{"revision":"0ba9b6fcc4af757f9500f6f7dd8ef730","url":"./tags/🦋Butterfly/index.html"},{"revision":"3cda823b3e3a654c1e8561c22e61157f","url":"./tags/Emoji表情/index.html"},{"revision":"1c2a71a2afbe7af9282b169339900c78","url":"./tags/index.html"},{"revision":"b10ea27c076c3f76c74675794ab9b17e","url":"./tags/Markdown/index.html"},{"revision":"eeb927450a1e5acaaf19b54d6f76c1b3","url":"./tags/Node/index.html"},{"revision":"5c03d2c7f7a36ae282f37f6714490292","url":"./tags/npm/index.html"},{"revision":"a5ddfdfa8730d4342844fcaea13890ec","url":"./tags/nrm/index.html"},{"revision":"0250e83141b019b3344c6dfb0a81825a","url":"./tags/nvm/index.html"},{"revision":"03721ec5e3bf73a6818dcedcfc3a3953","url":"./tags/Skeleton-Screen/index.html"},{"revision":"ce21da60365dbf36d85b1e5c31645ee4","url":"./tags/uni-app/index.html"},{"revision":"d3de98f01198b5c6aa2fa4fe071ef640","url":"./tags/Vue/index.html"},{"revision":"38f5946c0d000552f6329a320724f698","url":"./tags/workbook/index.html"},{"revision":"f594b10b5782c97fc23beef6d2e3f228","url":"./tags/后台管理/index.html"},{"revision":"f49e1f1a85ca118be520102ae55bcce8","url":"./tags/骨架屏/index.html"}], {
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