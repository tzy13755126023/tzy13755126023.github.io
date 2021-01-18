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

workbox.precaching.precacheAndRoute([{"revision":"3caa3b227aa3ad21a0af12d7db1a87e6","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"0296ee133964b7a1a55383b2415f0893","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"32223922870b9dda8c8b3da2b27200a2","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"d4b6cd4eb8ac8d1da639da6a0b522f18","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"ed96fb8c3de218665f4e5337f17bbc39","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"1f17ca8596311e16d78a61ef2c678b50","url":"./2021/01/12/my-workbook/index.html"},{"revision":"9fb89e74cd57674f8c710af9204f5719","url":"./404.html"},{"revision":"cef618d7aa35ea907a3d1885759d4f6c","url":"./about/index.html"},{"revision":"f005aa7ccbf3195c17325134a9e45dd2","url":"./archives/2020/12/index.html"},{"revision":"5a9b768ae18d26dbb35b663c7a5653ef","url":"./archives/2020/index.html"},{"revision":"8b0a482e434e8b9de620dfa4d8f118a7","url":"./archives/2021/01/index.html"},{"revision":"edfe10457445f6c53e2e8b23243cbe86","url":"./archives/2021/index.html"},{"revision":"136be3accf72ea82696fb032ee5c1403","url":"./archives/index.html"},{"revision":"baf961136f9e7dbb0cedf9aa97cd913e","url":"./bangumis/index.html"},{"revision":"47917394da5e46d88c66b89494762658","url":"./books/index.html"},{"revision":"fc6576f9d8336d198e7211908849d030","url":"./categories/🐬Node/index.html"},{"revision":"1e3f3abe419277aef23f1e191973df07","url":"./categories/👻Markdown/index.html"},{"revision":"280d5b3644215027f0bfda82a56d3b45","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"0948b44525f445e980833535e6a5f0ab","url":"./categories/📑工作手册/index.html"},{"revision":"7287906722ef576fedce63df9c760dea","url":"./categories/🦋Butterfly/index.html"},{"revision":"f4c1fc213ee5ab115d9b28f84a9de7a7","url":"./categories/index.html"},{"revision":"616ba3e436f97b5dab6924c7d10a633b","url":"./comments/index.html"},{"revision":"9747af213060e6f6fdbccc6e0d02cfbd","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"8c05947cb35cbba0b6e5e6377d9961f6","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"4e8e31486d222918b9ae9d5da5d343f5","url":"./gallery/ACG/index.html"},{"revision":"142b50bbdaadcfde23a9aa8e501b4b5b","url":"./gallery/index.html"},{"revision":"c26facff685555bb194745c6ad64a00e","url":"./gallery/OHMYGIRL/index.html"},{"revision":"f4e08033c5b446b22b4f3aefe2d465b1","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"318115391c4017578d3b815439917fd9","url":"./img/siteicon/README.html"},{"revision":"825b9be8eb318f77453c720eb8e904e6","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"d71972324a4814b71cb6b10a86712f83","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"56c93bf455bbf7aa728d11d1e643d3ae","url":"./movies/index.html"},{"revision":"6953f931ce6833cf869e789b2e0c4447","url":"./tags/📁Hexo/index.html"},{"revision":"c36e62230fe97788a261ae9cdd43565f","url":"./tags/🦋Butterfly/index.html"},{"revision":"90aa83ce343bdcd64e9411ba16394a02","url":"./tags/Emoji表情/index.html"},{"revision":"450b0620af3e764056b298433c60de67","url":"./tags/index.html"},{"revision":"aff9229921a7401aeb3cde0dfddc8d70","url":"./tags/Markdown/index.html"},{"revision":"35bc64b5179592c3fa4de59b43779378","url":"./tags/Node/index.html"},{"revision":"f167f2175acecdb74e58e75c935ee220","url":"./tags/npm/index.html"},{"revision":"f8ba96b3a145171bf94bcd8f0437e915","url":"./tags/nrm/index.html"},{"revision":"ce520de47f4730d1be1759883d164250","url":"./tags/nvm/index.html"},{"revision":"5f690373170339d75ecb6e1e37836131","url":"./tags/Vue/index.html"},{"revision":"2dc40ce4a5fd8df150ceba4800983b2a","url":"./tags/workbook/index.html"},{"revision":"95866cf261bd3e4f794755038a650438","url":"./tags/后台管理/index.html"}], {
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