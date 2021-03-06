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

workbox.precaching.precacheAndRoute([{"revision":"0322372d5fbed029ffc12a89f7bf913d","url":"./404.html"},{"revision":"700ff524236ae176a1d59db8705106fe","url":"./about/index.html"},{"revision":"907ffa49e81404bed3de3926fb15a026","url":"./archives/2020/12/index.html"},{"revision":"7b4101e353749a3151385997df81d196","url":"./archives/2020/index.html"},{"revision":"0be945f0798aec69da900aecd9b177a7","url":"./archives/2021/01/index.html"},{"revision":"5da0b559ef013380068f22205aab5600","url":"./archives/2021/02/index.html"},{"revision":"e2e1751129620ea889808b6c22a82466","url":"./archives/2021/03/index.html"},{"revision":"20f9e0c747b6846858fefd38453f72c5","url":"./archives/2021/index.html"},{"revision":"8febaaefb63cbb217a349cd7ed298b40","url":"./archives/index.html"},{"revision":"393353af9469db30238402cf4b973a3b","url":"./articles/0xiipgum/index.html"},{"revision":"80398cec73b8a32996f53c6302a30368","url":"./articles/9r95s1wt/index.html"},{"revision":"e4050d4080549bb18daedd0c88e4caae","url":"./articles/e13t14zy/index.html"},{"revision":"ddce1977cba564e3f12b161db9db743d","url":"./articles/hexo541u/index.html"},{"revision":"9cc34b9700cf3df9a788fda792fda46f","url":"./articles/hyeccjmu/index.html"},{"revision":"7bad21cc34cddc71f52a6165a3aab353","url":"./articles/ic67xik4/index.html"},{"revision":"a30e6509d4d9b730e066e296209012b4","url":"./articles/kfwr2gpa/index.html"},{"revision":"d0f256dbec98712eb42b276e1099002e","url":"./articles/p520xyz8/index.html"},{"revision":"d195335a0a1729d4a95ef662a5e6a1b7","url":"./articles/uni235xy/index.html"},{"revision":"5d719f3254f21cfb78e1479c1fffcbcd","url":"./articles/xi2mpxmd/index.html"},{"revision":"73eee26f10a5952ce8347ddc77709f4b","url":"./bangumis/index.html"},{"revision":"0b001d90a6082d5d22132f12112a305e","url":"./books/index.html"},{"revision":"24d9cc10e3a11848495fec88eb288f68","url":"./categories/🐬Node/index.html"},{"revision":"26c3be0e22bb4d9106632a7faedb5599","url":"./categories/👻Markdown/index.html"},{"revision":"3b8b4f48e8c5d52bf7edaad2ba108ee1","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"8baa469c2bf2483307465801e9acafa7","url":"./categories/📑工作手册/index.html"},{"revision":"ad0fc6f0a8a919df288e3a5967e1b0f2","url":"./categories/🤡-Vue/index.html"},{"revision":"b00c6e00fc215f2cff9b7aa9d3b4985c","url":"./categories/🦋Butterfly/index.html"},{"revision":"a449de47964ed0929b08d50dcb9d9ecc","url":"./categories/index.html"},{"revision":"7296b5ff0062308228dd44ef855dbd9a","url":"./categories/uni-app/index.html"},{"revision":"4951e09774e81224b76d0cb8e80a0d13","url":"./categories/骨架屏/index.html"},{"revision":"6814bd1e67755f88fd54f7c1e5f4d39c","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"544647fdb80f33460ba93c29ad677df1","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"6ebf217b8d075bec51be9595e5f4d739","url":"./gallery/ACG/index.html"},{"revision":"b36b98b7f9c2f0185343ddb55b9a1ceb","url":"./gallery/index.html"},{"revision":"fb622d345927d6d4b7a55f9dbb92be9a","url":"./gallery/OHMYGIRL/index.html"},{"revision":"471efdc973ac3fb68e37f5490371eb9d","url":"./games/index.html"},{"revision":"abc7697433402e94409354651487a11c","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"f72ff386d41cdf3079dfc04945678e13","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"7aee60733da04242c67a8c9fdc00e827","url":"./movies/index.html"},{"revision":"71b5a870053f6eea8e6a9f6220d00330","url":"./tags/📁Hexo/index.html"},{"revision":"312e48c16c09735b8678d778735a802d","url":"./tags/🦋Butterfly/index.html"},{"revision":"9d6f1c6af6776979a7282b541738357a","url":"./tags/Emoji表情/index.html"},{"revision":"887f797fac24e28fa01b78e0a5eb8819","url":"./tags/index.html"},{"revision":"2b5dc3656cc60da5bd7f8fa266bf9779","url":"./tags/Markdown/index.html"},{"revision":"d34dd604aed542cf91c3624d18a07f4a","url":"./tags/Node/index.html"},{"revision":"585e5044b6f96ad08a33b022aae03718","url":"./tags/npm/index.html"},{"revision":"1b49a2821e194af7c7ccbff3e61a0d41","url":"./tags/nrm/index.html"},{"revision":"2c15eb05d1b89a6ff0acb4d9301a4efc","url":"./tags/nvm/index.html"},{"revision":"d32a92bc675558d7649318cad10bfd5b","url":"./tags/Skeleton-Screen/index.html"},{"revision":"bb42c0311a4f4472512e406e6ac5976f","url":"./tags/uni-app/index.html"},{"revision":"35ad5abd091e029dd83ae3b51f2f0074","url":"./tags/Vue/index.html"},{"revision":"0611337f8397b59f1c97755e3f11cf20","url":"./tags/workbook/index.html"},{"revision":"62c1340af05912db3e422371cf95dc9c","url":"./tags/后台管理/index.html"},{"revision":"02bcc49a7f896a5e00f664a5809cb04d","url":"./tags/骨架屏/index.html"}], {
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