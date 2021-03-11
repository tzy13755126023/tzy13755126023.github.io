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

workbox.precaching.precacheAndRoute([{"revision":"d0ed2e282fcf37a036693f751695c3c7","url":"./404.html"},{"revision":"664f24c369152057a0ca2639087adac4","url":"./about/index.html"},{"revision":"7e2c52bc3a61130ef8bdbf3c83ec2eea","url":"./archives/2020/12/index.html"},{"revision":"fd1a176f549124346b37ac8724ada660","url":"./archives/2020/index.html"},{"revision":"4a82005e80a4fc348267825c2eff6a6a","url":"./archives/2021/01/index.html"},{"revision":"59b27ce68044ab3bbe441a85616f512e","url":"./archives/2021/02/index.html"},{"revision":"d83fee43a3378afc38ae5d43bba1c000","url":"./archives/2021/03/index.html"},{"revision":"c283fa0fa5ddce0b6d2ac4b7ffb34d28","url":"./archives/2021/index.html"},{"revision":"1270d2298d62bfffd177c646eb0c60c2","url":"./archives/index.html"},{"revision":"f833a2b8a9c8b16be4e88d2381fecc76","url":"./articles/0xiipgum/index.html"},{"revision":"65f3a0488e9708d12d9ed9fe1cd23214","url":"./articles/9r95s1wt/index.html"},{"revision":"473ce054e93ef1083a68010dd6c2f6b6","url":"./articles/e13t14zy/index.html"},{"revision":"02c6b2e2976b20dd3b82f565335764d6","url":"./articles/hexo541u/index.html"},{"revision":"2ad4baf4066ec7500fd56c94ded9efbc","url":"./articles/hyeccjmu/index.html"},{"revision":"fe91566d891d73d4624f077d121712b8","url":"./articles/ic67xik4/index.html"},{"revision":"a30e6509d4d9b730e066e296209012b4","url":"./articles/kfwr2gpa/index.html"},{"revision":"ef128a116b5b63a1c439cd31e864b6b1","url":"./articles/p520xyz8/index.html"},{"revision":"c8e09a651f6e8b2a61b0acb49a1d6935","url":"./articles/uni235xy/index.html"},{"revision":"3fbee4782305788661931f129d721e8b","url":"./articles/xi2mpxmd/index.html"},{"revision":"825914020c0384a57e47590a98426d30","url":"./bangumis/index.html"},{"revision":"0f6d113cfc70bca5344c14999296e568","url":"./books/index.html"},{"revision":"e91d91d351f71618e63e095ac0806669","url":"./categories/🐬Node/index.html"},{"revision":"938509be3a606b7228cd9bbb8465f388","url":"./categories/👻Markdown/index.html"},{"revision":"c8ab9d0a829d2438fa68c8f67f529825","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"3a71d74755a8ddf558ada34b1fac6322","url":"./categories/📑工作手册/index.html"},{"revision":"501963390b2233b2e1fc7595004c186f","url":"./categories/🤡-Vue/index.html"},{"revision":"1953e2ffd5ace3d5494315f8f769e249","url":"./categories/🦋Butterfly/index.html"},{"revision":"f044f49fd24e183f4c9c2f72aa433d30","url":"./categories/index.html"},{"revision":"2cc9d4b01bd881e67b21ef85045e0419","url":"./categories/uni-app/index.html"},{"revision":"d9340a1cb981c5b2c46f4bd65751c585","url":"./categories/骨架屏/index.html"},{"revision":"53eacd2b7a5a5e5dce1e4db2fbfb8fe9","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"d2ceee345d464770b0664a5914f04bdf","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"544647fdb80f33460ba93c29ad677df1","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"408f8d2ff22d4cefd84382766a78c0e5","url":"./gallery/ACG/index.html"},{"revision":"f61f5bde676ed25834b9dd83792203b8","url":"./gallery/index.html"},{"revision":"a10eef324e1ea8e99347b9f51f801bc8","url":"./gallery/OHMYGIRL/index.html"},{"revision":"8ee8e6e9fcd0172fd4191146c4f27088","url":"./games/index.html"},{"revision":"24740718555d7a6ef62311c9641e61f9","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"9a8e5dc5c279bfa6295012246621bc09","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"5390211b86067caa3b6f153799a11cc0","url":"./movies/index.html"},{"revision":"128201b7229e6d978086e4cca3aa05b3","url":"./tags/📁Hexo/index.html"},{"revision":"3fe75609cb81181aa9e71961418dd8ba","url":"./tags/🦋Butterfly/index.html"},{"revision":"8778c8d656b79749df1f5a46e583c171","url":"./tags/Emoji表情/index.html"},{"revision":"377d106ffd838f4929b15f3f27e41242","url":"./tags/index.html"},{"revision":"b2cde930b96dc8f656ab385a019dc067","url":"./tags/Markdown/index.html"},{"revision":"48934656c426624d7e49e64d95640c68","url":"./tags/Node/index.html"},{"revision":"21fc7a164b997bb2477270828bb15ce9","url":"./tags/npm/index.html"},{"revision":"10be29aca75a5a975d52ed4fb451f54f","url":"./tags/nrm/index.html"},{"revision":"c4df63ca98ac5cfeaf5cd43bd21ea437","url":"./tags/nvm/index.html"},{"revision":"72d51378a0ec85cb41556634da936aeb","url":"./tags/Skeleton-Screen/index.html"},{"revision":"c5c8846c14d21e94d20f2ddf94a1e092","url":"./tags/uni-app/index.html"},{"revision":"9d6c40e7d46dc2d2b367c64a92f56aeb","url":"./tags/Vue/index.html"},{"revision":"d646deadc3deb2d2bcb9d6c44e36bf27","url":"./tags/workbook/index.html"},{"revision":"f347a0c078f38f2a5ceaea9e7f2aa555","url":"./tags/后台管理/index.html"},{"revision":"7de8414d76991d10fc972d187f89b57a","url":"./tags/骨架屏/index.html"}], {
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