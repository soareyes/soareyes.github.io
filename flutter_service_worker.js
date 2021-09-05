'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "65007e0b636221357b6ac4df6279ec17",
".git/config": "e81935179c76a15b4c80bf6468f7df03",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "09cf44447b56ba47fd3e1b1fcdbabc0c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a69cd2bb42d7f3a98b8c2cab66bc374f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b09fb789cbe20d65b4874f02f8aace6",
".git/logs/refs/heads/main": "b592637292a77289c3321b657fb8a906",
".git/logs/refs/remotes/origin/main": "c169f37fb5941328991f4ab808efdf66",
".git/objects/00/6c52d29028238936a6d0fc9ee5cecd9aafc71e": "d014637e660b7ae69c6ac678675c0317",
".git/objects/01/0389b30f35dbc67b7a3ce5f77caccebeea72f7": "82806e8fa0b5f6149b839cc6c7e85459",
".git/objects/01/212c4f0": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/01/73d05ceb": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/01/860b980": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/01/a80a782f7314e823d7dc9530ed03a45e82cd22": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/01/b6cc1690": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/01/ba17c2a1": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/01/d68345a5": "bf82d7e0765bee07a769e7ee8542454c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/75588cc9e9a114d5ee5674c773310936e887df": "f68157d15b5c8494708cbe502dc543e5",
".git/objects/0f/a72748ddfd539de32ac992a6a10dfff55bc746": "4c536d04b47eea12db35c3890e45c440",
".git/objects/10/d3220bbc152baa7a5e37fe5b12a755953f6acc": "86965a3060ac1d577a00e1f07d4a98f8",
".git/objects/19/8fe825cc765a9b906d0251a3b88eb3c706b810": "c7cd75d7faeefc6a0ce618524f99c30a",
".git/objects/1d/64591ba1b977d25143c4479e47caa86be95a4c": "69858398733bfc5f88fecd3040ad6af6",
".git/objects/20/c92dffe3939c0fda82fad0cea3857e010f2cee": "5999218fced21be1250653a4e5f5cd75",
".git/objects/22/f4f7e00228400e3f88ceb9928912601578012a": "ac2576702164305e0785c72dc5ca4889",
".git/objects/27/f07738a42b444813b069604f7c9dd4e71e2f3e": "eaeb1164da2e0e7f13ae482a02b47843",
".git/objects/28/f1f1973f67864b244cfca1c0b8e9c739e7da25": "8fae07e56b44d4c04f87c498287ccac3",
".git/objects/2b/219bcc6e": "b09dce5e55930326e63127fa04948042",
".git/objects/2b/3b377b92c981d1fa78c8625135f1a6453698f4": "b09dce5e55930326e63127fa04948042",
".git/objects/2b/69a695fc": "b09dce5e55930326e63127fa04948042",
".git/objects/2b/6b2423a9": "b09dce5e55930326e63127fa04948042",
".git/objects/2f/6de0768a8456c9868c11ce91131b2bf061a2c8": "09354a8944df000012c7bcc9866308ea",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/16ec7bd72ba9f6918a51f7a6923936b81c1e2b": "8f5e25ca5818dd3c2a962a3eac5b3bac",
".git/objects/36/6fcb8a8185595fca1e56aea7dd47dd0b42dff3": "0d7204ff1075b2b21ff46ce7338aa891",
".git/objects/36/cd585ebdfdc820a909d2598e193456ba3f8807": "6d266f15e6e006202256391f0af84660",
".git/objects/38/3da671d17a70ad53fa40aed432c1ba46fd900d": "8a29afc4d879d0be8b5f5a3800f00e11",
".git/objects/3b/c16874e810440116b68fffde66975025772a4a": "502caf0847c96b749fabe8435d137586",
".git/objects/3c/611329a837ec2543e025f9a2454fcac30208e6": "ea7adc3c8f7cdc39b8ac85b8a178545b",
".git/objects/40/ad57dca764f8091d1db9980d0bc64de73ede98": "707f4a1b6a900cccf11a9b78fdb424af",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/bebb807c6b3c92cf43f629afc54efc62e97a27": "8def2376e48b9bb711a89f15cc14c1b6",
".git/objects/4b/22d7ce18f4830f78c44b79f12466181b78e208": "6779764f5a6e31c56a91240c7fbd3c2c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/587ad64a9409b92995904d5ddf54584c4bd38a": "626a497051274f2a08740509cda34ad1",
".git/objects/50/30eb20f54d109a8673a23f852747e249715094": "3b73402b6af520e10372ff257243e3ae",
".git/objects/52/aa31724f0447df3b9e176af3d6bb0eb6466e29": "874046fe10f763c42a57f236ff977ebb",
".git/objects/53/85788939741932469becef9a797ff2be83c460": "2e905ac6bbf39c24c9b4a556867dca88",
".git/objects/57/541954ae2f8e60ca39b7284f9fb0e03806399a": "15e14e0f47fd19e35b8ed4a43f4b6fa7",
".git/objects/5f/00c47e5e96f2d130701e0fa39edbac8d9fcfae": "a3669782f4ce26a2d32ad3070a055ecc",
".git/objects/5f/0c9e173bb6b77eb2e7c19dfc3628f30999c47d": "ca4c48794431870dd7a8d2b90666969e",
".git/objects/63/9b2b95bda0466c66d575e9c552569bcaf20039": "9644d2b16e1a54f39a0252f416f8303b",
".git/objects/64/e928c05a10061b2f43047078696a7b7a3afda3": "1cf8ec76bd733e50d0217568358f249e",
".git/objects/65/5871eb35b20cc1194f2ca5dfdc7ebbf64c13e7": "3d07b84ce731d774508d21f749a18e5c",
".git/objects/6d/de3b75e6f4a2430b0d84f49d8095bba63c181d": "c04bd2b25155454a55f7a1c57913beca",
".git/objects/6e/938edb4094963babf7822cbdabc9637abe759c": "3441568dc0ffd8882091bb9280784256",
".git/objects/76/397df3ecc57a3281d8652d34cc4b8dcfb3cd9d": "6a181c4aeb4ce33057cae6fcfcc7db0a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/63abf31b2edf6c45270d62a5d5a8995ac52498": "78f87077cedb6051c0d54d72492ca014",
".git/objects/84/777fce42fb414c059e9bed984290be3db04999": "49bab3a11830722bb97909b072785afd",
".git/objects/87/3c22a8538d2fad62fcdcd2678956135b2df55d": "141baf89cb87d64e4db9e72ce2835389",
".git/objects/88/0bbf43f4df39c0fef8f7ae96bf650c776fefa2": "ac58bfafbbfba0669eced465f67b25e7",
".git/objects/88/9e20662d": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/35f88ab2f2e9c232472f8348f96f2ab1fe2479": "be37b034fae265778ac7cd800bdb1acc",
".git/objects/9a/fe22fd208f282e5499d71c5de6d50715eda7ea": "24b7198d684715a29199971fcb1e5eee",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/a24b384c87aaff328136703fe12c26ce57f115": "306173208e46ca022239f0b4c7b7a0e3",
".git/objects/af/3d46c44d418c5c26c731ba8897afb095e5f822": "7bd9d79b90cecb0a7f69524a690d488e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/20cc4c4b85f2be0790d06e8744de4082f928a5": "5dd878eba0d94d43436fa3bab47c896f",
".git/objects/bb/4140b93bdb49b1d569087cdd72c88a4da712bb": "941990a7caf358b120e0918603992d43",
".git/objects/c1/017d2b2480a80fa3e42dd2439b5c3cbf121842": "e835851d8bf1ed73241b9da91d68de90",
".git/objects/c3/10bcc88337d650cfd20516a1a0977529a9a716": "08d60d01c8bafbf0c8822e2e826cf6da",
".git/objects/c6/cfa460de7003c058a6364df2f484c6bebaebc4": "42811e797aac9552f8f578e114549b10",
".git/objects/ce/c2021167caa536e20c751d5e465840ea6fc077": "a09a84954b9b734229081d9efe48e67a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ac4cdafe5964cb83a36628cd21969dfbb53026": "f532a37da27788156b82bf5b8b74373a",
".git/objects/d7/e4e33d8e8299b22e72af936d9a5c14b9c516e6": "f50c96ff0035b934ef54526177551baf",
".git/objects/e2/504afb0b628bf25840c5dc28de34ca64204f0f": "4ac605870cea3e94d032d70264b848c4",
".git/objects/e5/07ad0e19757fc79d360b59d659d18bfca350e5": "7232294fc06041d7574831b65ceb3b00",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/03420eea4c9dd0fea7bd9fee30357a1f024ca5": "772dda991577ac2b9ac181a4f91575e8",
".git/objects/f6/a960f0ea344e1d672fba8ae3b9cce17238bdcb": "6debc9acc715325bc54fbbd2dc433237",
".git/objects/f6/feb78ad19ab6079dd28742b070f23c514cbffe": "488577203249424a341249b7161f5778",
".git/objects/f8/2c89cf3ec9273a3d7050ba5ec9ac64e3b7ed7b": "3cf5a27138d28c7a5bccffce7ff25e2f",
".git/objects/f8/46ff7f2cb91e3e4baab6468c74bb30dc51ffe2": "5e738f50a99e59cffdc93797be69db55",
".git/objects/ff/e275c979beb6f78fe8d26edc8924d469ae2ec9": "0575c388a3fde81a452027a7d73f8e51",
".git/ORIG_HEAD": "f33fe300ad1f50431e042b4cedb8c33a",
".git/refs/heads/main": "8e655a92478927f6bac8bdb7f4a8781d",
".git/refs/remotes/origin/main": "8e655a92478927f6bac8bdb7f4a8781d",
"assets/AssetManifest.json": "4b7d26b002855a6261bfc5e4e7b44d53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/screen_title.jpg": "2b21b15832f0c9bce69f4d925b6dd808",
"assets/NOTICES": "c4c2d7caae54ca31244a83d903d99192",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5387c8cdd9302337ff46b336edec3dff",
"/": "5387c8cdd9302337ff46b336edec3dff",
"main.dart.js": "1a0b1a05f135859f3d03ee6a4ad27412",
"manifest.json": "54c6beebada85aa66a8923be419cde88",
"version.json": "add32c635e764a31cbf11ff0063e0580"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
