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

workbox.precaching.precacheAndRoute([{"revision":"4593c879e3e6a43fe1c5ee6831747208","url":"./2020/12/15/hello-world/index.html"},{"revision":"50e8b663e83ecaf74795d0e553398b88","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"3646ac246097fa9c18665d6be785cf19","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"5aad39fd2500d3c8a115f50d66558984","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"ca7d1f8b805a0f72b0dbc918880dce22","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"2204a72731ce56d8c4fecd80ed59ca24","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"b08461a87276f9b105d029df5073057f","url":"./404.html"},{"revision":"2c8528a80688ccc4a2a432b454a043ed","url":"./about/index.html"},{"revision":"6a3134b2e26b08e3912bea5a32034f7a","url":"./archives/2020/12/index.html"},{"revision":"18c6e5d62ccda392ec781130956ad61a","url":"./archives/2020/index.html"},{"revision":"332a0a6ebf768193c0700957b1d6df82","url":"./archives/2021/01/index.html"},{"revision":"47da93c65eb572fddcfdb2a6d43c1f33","url":"./archives/2021/index.html"},{"revision":"8d4b33ea42c2c6086c22860686315181","url":"./archives/index.html"},{"revision":"3d78bbfe358edf684318478832ac68af","url":"./bangumis/index.html"},{"revision":"879011271cdb9257d3969fbf9b5957bc","url":"./books/index.html"},{"revision":"99b18eb790b0705d9bf2a035c0e4c676","url":"./categories/🐬Node/index.html"},{"revision":"135a97fac0b4aa61dc2909de08fc7e09","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"152f95c4ff33b6a72415d6db2f7ccee6","url":"./categories/index.html"},{"revision":"2624887662959908b4c5b4c230ca7fd8","url":"./categories/Markdown/index.html"},{"revision":"0f0a66f924f5e825858ec476de8fe8ad","url":"./comments/index.html"},{"revision":"222afcaa5ae620251645e3688f5a531a","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"98f390e55b5b124320f895383f0cbb35","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"8cff225ef6f4661d707311ff275e8e76","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"ef2514261b613eeb737b2bba8d83a08d","url":"./img/siteicon/README.html"},{"revision":"de36bccddea296420dac9673625b4d1f","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"381410b00c492f6f91d1ee8fd56310e6","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"320da783ac49ab90441afe83b5cae2af","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"25787158fa716fb5de263769ebf5ec26","url":"./movies/index.html"},{"revision":"e4db17ae346774075019aedeb589ae26","url":"./tags/📁Hexo/index.html"},{"revision":"2b3bd1e0e60575658409d1f4620a593c","url":"./tags/🦋Butterfly/index.html"},{"revision":"5c557e2ca116d6ac55859b8b55230ba1","url":"./tags/Emoji表情/index.html"},{"revision":"51670cc56ed5cf033500e0275e0b1483","url":"./tags/index.html"},{"revision":"4ff441cb2910f7373d3468bd17e0919d","url":"./tags/Markdown/index.html"},{"revision":"786ea0e6d149eaeb58c5f0f641d06a49","url":"./tags/Node/index.html"},{"revision":"a45f8729fc4e9f563a6b683d961b19cc","url":"./tags/npm/index.html"},{"revision":"6e418bbd6e41da2518345a80029f4195","url":"./tags/nrm/index.html"},{"revision":"27e70af99a213c1847334c7cfc248c1e","url":"./tags/nvm/index.html"},{"revision":"55289b73de21b4b076109804d10a7202","url":"./tags/Vue/index.html"},{"revision":"d6f02bf97d48124c4dbdaf13c016d4f8","url":"./tags/后台管理/index.html"}], {
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