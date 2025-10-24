'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cb0841ebc4d0428e5fc15eeb44e1220e",
"version.json": "e6a97d66495ba8ed97aed4b6f1a838ba",
"index.html": "538aa47a69142c66df1051731dd4ed99",
"/": "538aa47a69142c66df1051731dd4ed99",
"main.dart.js": "1c73b8b45b1621c2e0bde2171efad662",
"marketa.png": "b52679cecaa659ec48059bf3a9ff503e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4b1624caedb0891b66afc8d872ef801",
".git/config": "d8474294125e44a28fccfc2b44fb6f17",
".git/objects/3e/3a9376fbb7da73caaadde80d0b74fd8966eec3": "8ac3d53e6166a209f53fb9facc20898f",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/6f/cce80845b625b8d184ab52dfe054ae909fea23": "c51f9300b43a14996c8a6964e3f56458",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/35/887789b57e2d52c79916b74d010c54b19c791d": "52772e96ce719eb9111cb95d700abc54",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "ae6313e3307bc7af1c2f844c6e0fc2c5",
".git/objects/51/d551b570db923c767d75d6d6cb9e268d451eba": "0b9643baee6de94ba1985c8d75735cc4",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/33/e8e9cfc15e65a9e711bf075128f05026d49918": "97bbae8cb871832beb3e64cb1c0b2fa0",
".git/objects/a4/4f96403f6b5a63eb4988e94cba1b1cf93071a0": "01891a42b9ebb69d644f89eea0559859",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/ad/2e458e4d9f86f0614691c87abd832e17079143": "cc827cbd3cbfe68f0c35d3a0873fdec6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/12bad909e376db87aa0fe59c09c2f8da18cbfa": "8915c563a605289ac43a4eb070fac1f8",
".git/objects/c9/730b2218ebe9428368e6bbafe055748d02b211": "cde5dbfcf1f120ba4e6a278e0ac30c46",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e3/c37be2b8cf46f41b88e84b75040db3f97005a7": "ebd4ff3e9f4ff045d6afd15cab189452",
".git/objects/16/12356328931ea33645d31c192eb4fa74d5d0a7": "ba2c0ca1741ca5b4cfedb8f3ebab6e66",
".git/objects/42/6c36efd080f04322a22602a9d2236447443818": "bd7037cf7fc931f94cc91c1505a1347b",
".git/objects/28/5c4824d163470eb0514d698ac06362c536d8af": "972c832f175acc83d2f433560c6f831b",
".git/objects/7b/8ad811b17184e5efc5262d6159db608e8005eb": "e9b0d820d515ee4fe696651a7d2f8293",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/44/33b56ad4a0b095bb0f719167637da1f3038f00": "9c7067a27994b77e0c7a4de8e8de47e9",
".git/objects/43/72d70d313dcd7d7d232d68407a7252f4280dce": "99e68b9fc87a955fa4394ec3877f2337",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/9a/2daf071b6822e9c7dc7d140f1300a57ec9a48b": "ff4cea2e014f2a42ff4ddbaaf07c6f58",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/96/6b01ec8b7ab3ae7679174f798ea5848fc04486": "23b24afe85164230f34ab03b9d1ad7da",
".git/objects/01/4e27210d18cb826446cd0f5eac20edf10d0be1": "75ccded3c2ed4a396e5914d41fcedfa3",
".git/objects/6c/0ce1f2fa4ac1bf8a9fecdc6b15437905d57d25": "55b11bc310733be234353e74645f4966",
".git/objects/64/11d63cdb17f9359d7000eab79e40cba0db6cae": "411555c4bbd50d980e135eb36cf6a472",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/f0717dfaf83dfe7375453e8bfc1c41fd6f6c41": "5cf19574b28cd33500da1976ea2433a4",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/d5/1ae52d2936dc3e33cf56a968020fc52ed6171c": "71a35256a8f66f9450d954b0ec694e58",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/b0/167f6452145c3ef649fb0c130f611e07eb755c": "30cce3729ff576f2abe8d9aa5462f87e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/e6/dc201a97473ea0163f29bfc1581124bccf0779": "356d73a21f8df616a46e0085ba131501",
".git/objects/e8/2688a4c6a505ad96dd067c0fb7f9c85b491ec2": "9cab5c31754833543509f8cb4950bfee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/46/6de060c614f6b075da5f002bc166d2cda4ebc8": "817f62aaca27d04d48403c3af2658a78",
".git/objects/24/13cdf900ffbd3e4512bf4e589933c8f65a6bcb": "6b760c7727cd251f07107d02358ca624",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/15/77c06e7744237ea5ca9403494322b390d3dc2e": "ee8f4ac81b7f39a0d3e7664efa91b1c4",
".git/objects/15/4647b72b1dc04b432e9d0d6b4d6046166a4741": "a2fcaf0673d4f7f2bbb0356d22d7c72d",
".git/objects/12/ed2d33fee2070868d0d24cf4f7406997cea9fa": "0b17f5897cc601747a48715d9b74b2d5",
".git/objects/1d/68605b2c5c52b4372991982c09e7d1a31be5b6": "ccb827ca607857c975c9312992bc478e",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/2b/e91ccf6efdfec9f06ed05e0bf35aa292cf64eb": "59057dacd7756bedcef13ee961899f0f",
".git/objects/7a/94dc496d6c5ac663fa0af3bf990289c29f7dcb": "22a00f498446f725cae3bde28a1e95cd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4e808c768647bc6d4439e12dc437b0c9",
".git/logs/refs/heads/main": "cc48ede78b83cbb8cf46bd0b0d885d07",
".git/logs/refs/remotes/origin/main": "397f52486b1d94d35729ec320be2ccf2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "680ccfc0edb1a436e305bba7946760b9",
".git/refs/remotes/origin/main": "680ccfc0edb1a436e305bba7946760b9",
".git/index": "5b338f93b963bbf6d5c7f170bd2ba5ec",
".git/COMMIT_EDITMSG": "da9652cc42a6e01a4c6f5f19847a7041",
"assets/AssetManifest.json": "95862361667a50922afff0adffecc654",
"assets/NOTICES": "ff1ca69f7d2629df67e0d9c56c6cdc43",
"assets/FontManifest.json": "23d41126e269accf6b936260854d3429",
"assets/AssetManifest.bin.json": "9ef1c2d973ae48d94069200f55cfac36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6615741d766be51ec8f0fd58b5be3b24",
"assets/fonts/MaterialIcons-Regular.otf": "165bbd110427c99415d382f1cda728f6",
"assets/assets/fonts/ubounded.ttf": "54711a5918ed6de678623359ea2bfd74",
"assets/assets/fonts/CCC.ttf": "ad82c6836779a62c089b3be3dfac19d1",
"assets/assets/fonts/ranade.ttf": "ce65c6f9f9ea8c031182864e024e7e4a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
