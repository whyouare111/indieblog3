/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/05/Gh20210535cde4c4641f73e02c21fa2a9ba96610/index.html","8a923108f5b1e5e7c33ac4ce8ebe7e45"],["/2021/05/Gh20210550500ba30d6226d6522402fba2d67799/index.html","5e3ebfc73a4017ecb4315a54f812ee5b"],["/2021/05/Gh2021058ef1ed929daaba945102dbe5e310fb25/index.html","009f4385bdb4dad78b952f84765326a5"],["/2021/05/Gh2021059ce79dd7c25446b568068eacd0dd34b5/index.html","fb87a6950db24437e0910bc8a488a498"],["/about/index.html","20b1d6ccb12a5ca37bdbe5b6b0ff2492"],["/archives/2021/05/index.html","9e54c39a356dd93eb86879b1044f6f56"],["/archives/2021/index.html","7b8a57300a24d45f613036c179926e46"],["/archives/index.html","321fd0ad637e4df3af63655cefa82873"],["/cactus-cn-readme/index.html","2b3dd861b88a3cb3721521c93caf8814"],["/css/rtl.css","371213dab93de3d1fc0ca1949afcb10f"],["/css/style.css","4a80f2e7c4856ca1d05b92998f892671"],["/images/android-chrome-192x192.png","4ea94ecba62e21d7b5100ba2017f6ce1"],["/images/android-chrome-512x512.png","8a6f8d5cf98338e49b7e0e4992cff19c"],["/images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["/images/apple-touch-icon2.png","7ec656d4383919cc14717a90cfe1b8fc"],["/images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["/images/favicon2-16x16.png","a68d1b2b9f1dba63a99b94790c214696"],["/images/favicon2-192x192.png","4ea94ecba62e21d7b5100ba2017f6ce1"],["/images/favicon2-32x32.png","f9c3046e5d8456978d6de2fd1a2c09fb"],["/images/logo.png","3a523a218d45942792b375bee59382ca"],["/images/logo2.png","8a6f8d5cf98338e49b7e0e4992cff19c"],["/images/mstile-150x150.png","48fa067e6af6d29e3b4af7c8956c5523"],["/images/safari-pinned-tab.svg","bf0e7986b625979d45cffa7745382917"],["/index.html","fb8492d309979037971e43fb23538b86"],["/js/main.js","45cfb0ce3d16a8b6d6775c61d347022f"],["/js/search.js","4e1a28c572dd9464786da7f7e8a8981e"],["/lib/clipboard/clipboard.min.js","9de9f70b0468760fb7ea4f2d670fdbfe"],["/lib/font-awesome/css/all.min.css","6a1b5933f8692e60c8337c0d68255ec1"],["/lib/font-awesome/webfonts/fa-brands-400.eot","088a34f78f530102fd9661173b4a4f26"],["/lib/font-awesome/webfonts/fa-brands-400.svg","d72293118cda50ec50c39957d9d836d0"],["/lib/font-awesome/webfonts/fa-brands-400.ttf","273dc9bf9778fd37fa61357645d46a28"],["/lib/font-awesome/webfonts/fa-brands-400.woff","f4920c94c0861c537f72ba36590f6362"],["/lib/font-awesome/webfonts/fa-regular-400.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["/lib/font-awesome/webfonts/fa-regular-400.svg","d2e53334c22a9a4937bc26e84b36e1e0"],["/lib/font-awesome/webfonts/fa-regular-400.ttf","ece54318791c51b52dfdc689efdb6271"],["/lib/font-awesome/webfonts/fa-regular-400.woff","a57bcf76c178aee452db7a57b75509b6"],["/lib/font-awesome/webfonts/fa-solid-900.eot","7fb1cdd9c3b889161216a13267b55fe2"],["/lib/font-awesome/webfonts/fa-solid-900.svg","7a5de9b08012e4da40504f2cf126a351"],["/lib/font-awesome/webfonts/fa-solid-900.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["/lib/font-awesome/webfonts/fa-solid-900.woff","93f284548b42ab76fe3fd03a9d3a2180"],["/lib/jquery/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/lib/justified-gallery/css/justifiedGallery.min.css","ceaa86fef1d6491660adf7244265affb"],["/lib/justified-gallery/js/jquery.justifiedGallery.min.js","b3c16bcda205ebe084ee04f4900b7dbc"],["/lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["/lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["/lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["/lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["/lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["/lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["/lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["/lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["/lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["/lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["/lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["/lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["/lib/source-han-sans-cn-regular/Source-Han-Sans-CN-Regular.css","eb005ac8b2ba55f2a326c017510d1a9f"],["/lib/vazir-font/Vazir-Black.eot","817f917ca1bd73fdafb73c8780633cdb"],["/lib/vazir-font/Vazir-Black.ttf","78fc370174609c35b98e3dcd38f53bfc"],["/lib/vazir-font/Vazir-Black.woff","65678ca9d6bca0505488538c49efa85f"],["/lib/vazir-font/Vazir-Bold.eot","6b4258266f6cc8ebe9c599e1a52591a1"],["/lib/vazir-font/Vazir-Bold.ttf","bff5dfbc9bea8d538bf7fb4579ec4f32"],["/lib/vazir-font/Vazir-Bold.woff","1dc06ca075e3e867a9a9253810983c69"],["/lib/vazir-font/Vazir-Light.eot","4ccde095698e572025b49813ce57bf23"],["/lib/vazir-font/Vazir-Light.ttf","f949c9c6e0a78ca311d4f3bcc53222bc"],["/lib/vazir-font/Vazir-Light.woff","5aa1dcde9af46e421829e908db25dd75"],["/lib/vazir-font/Vazir-Medium.eot","a8b87e489e09fd35814d4fe85d42e364"],["/lib/vazir-font/Vazir-Medium.ttf","f30326eff40bdab923a1de08cb394567"],["/lib/vazir-font/Vazir-Medium.woff","4308d08acc3cc132f457edfe36fb047c"],["/lib/vazir-font/Vazir-Thin.eot","7cb5ce0d4cbc438e3ef77535d84d4a0d"],["/lib/vazir-font/Vazir-Thin.ttf","a4b0ba433552c6442b0a312c4c42345f"],["/lib/vazir-font/Vazir-Thin.woff","47715ef73613e8f18aa5031b0a602539"],["/lib/vazir-font/Vazir.eot","1f15de7bca7ce47b0e6a99fdc3f98272"],["/lib/vazir-font/Vazir.ttf","29d3b94592bc65baaa0c368ea99fbecd"],["/lib/vazir-font/Vazir.woff","525eba78808492d95b2e7a16881ce663"],["/lib/vazir-font/font-face.css","830c89c12712a902ad9f8f007a6b64c6"],["/search/index.html","84d1ea9fe8dd6eefd3a7b345cff14b27"],["/非同步文章测试/index.html","cba0e9dda236d816b948e3c14b17c77b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
