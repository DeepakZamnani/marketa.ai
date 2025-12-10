'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5a63e93fea2d21f37b0034d1c19d049f",
"version.json": "e6a97d66495ba8ed97aed4b6f1a838ba",
"index.html": "538aa47a69142c66df1051731dd4ed99",
"/": "538aa47a69142c66df1051731dd4ed99",
"main.dart.js": "40931529ef2f61ca743c3107e95a8f1e",
"marketa.png": "b52679cecaa659ec48059bf3a9ff503e",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f4b1624caedb0891b66afc8d872ef801",
".git/config": "d8474294125e44a28fccfc2b44fb6f17",
".git/objects/0c/6423d28d83d97c4a86aeac379f6432f0a667de": "045551f65ce65f265c29900e4dd99f2c",
".git/objects/66/d76682084d66fb1d478e0c02035f2719e4f98d": "05402ff6e4d4eba531278e6abce7f522",
".git/objects/3e/3a9376fbb7da73caaadde80d0b74fd8966eec3": "8ac3d53e6166a209f53fb9facc20898f",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "7a2beaf557655dfe4d49f90a155f8001",
".git/objects/6f/cce80845b625b8d184ab52dfe054ae909fea23": "c51f9300b43a14996c8a6964e3f56458",
".git/objects/03/3948a9da19749382caa3b4d1983fb667e17cc2": "f4ed602265f457264de61a768374702c",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "1cc6403c603e76bcc26b0586008b247e",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "7fef652fbe034911f76c4da9e817e225",
".git/objects/9e/4d5d51e7a100d29f8f88d6d8bce8ae87268ab2": "f89a6f7a47336fdc3c9988cdba3ee741",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "5f22e4867814a2022aa2a916bbf3efef",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "ecdf16b6e236ddf82afbc5360f5ce6bb",
".git/objects/35/887789b57e2d52c79916b74d010c54b19c791d": "52772e96ce719eb9111cb95d700abc54",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "ae6313e3307bc7af1c2f844c6e0fc2c5",
".git/objects/51/d551b570db923c767d75d6d6cb9e268d451eba": "0b9643baee6de94ba1985c8d75735cc4",
".git/objects/3d/e460fe9a513d1428fc1bdfdab4cee938b882fc": "67995fe22d57ed3bddea16b1478077fd",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "c507d69554096e8cf8f581a9e3e2421e",
".git/objects/33/e8e9cfc15e65a9e711bf075128f05026d49918": "97bbae8cb871832beb3e64cb1c0b2fa0",
".git/objects/33/7ae1e349cf24573b3733f9528f72cc2e5441b7": "36bda10959870c01f45d6596cdadc313",
".git/objects/9d/886a53897297db1e8477753aefc29f832cb3d1": "90213778592df1516ba790a731bad172",
".git/objects/02/b713ae270b91db7716e87fdbbe2e2aa2c947b6": "007bb3741678a8a370134b86183ccd3c",
".git/objects/a4/4f96403f6b5a63eb4988e94cba1b1cf93071a0": "01891a42b9ebb69d644f89eea0559859",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "819a1bee2d98b54140582e489dcbb8ba",
".git/objects/ac/6e17906f864a640fc9777424a3b64ed029aaa2": "393b826373b76c055351a5ebe4f8ee9d",
".git/objects/ad/6f121a142f29357183d82730d8eef45220b3af": "ea5903ef29969b6e66f2c69aa10f4f09",
".git/objects/ad/2e458e4d9f86f0614691c87abd832e17079143": "cc827cbd3cbfe68f0c35d3a0873fdec6",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "1a4ee0c85a695a5f8ce1f75dac7efc0c",
".git/objects/b3/d81d1643d876f62432c740370c09a5c73b9739": "9ce1d64731484299c5fe24b64a61c46e",
".git/objects/da/ac84777ce5147c4d300064f2718795affbb0a0": "db5e6a05629efccef84c54f0328701ca",
".git/objects/b4/8c7adb2fe527a23d97f670bcf50d6f2fd45b87": "f800f2bcb730f83e9a98a35d1f7072b8",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "5bea32f46d8e9e33e1e2bbb5c1523ffa",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "70bc1d07824e0d0a16b4211b42792fef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/bc/6f85c0aff22352a332d208056092d33342aaaa": "87f326642c2ece21e9b13f6eb98d3a8b",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "c887a57ff0eafa2df6b6f3fb5d630526",
".git/objects/e5/e38b2e8f530ef450d09e3e447116447957ab07": "93df7a6b7c5bfdb94577d96c5ca6e092",
".git/objects/e2/bd2115ab12fbc72483a76c70dd1251d379b7e0": "3d89f38700b650ba9e8b880a17e0a80a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "28153710279c4ac512d78eab4ff360c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c7/12bad909e376db87aa0fe59c09c2f8da18cbfa": "8915c563a605289ac43a4eb070fac1f8",
".git/objects/c9/730b2218ebe9428368e6bbafe055748d02b211": "cde5dbfcf1f120ba4e6a278e0ac30c46",
".git/objects/fc/2993774587769b9481aa801f7490c330b78b26": "6dcaa0228c4b0abfa7750dde945843ab",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "fb2ee964a7fc17b8cba79171cb799fa3",
".git/objects/e3/c37be2b8cf46f41b88e84b75040db3f97005a7": "ebd4ff3e9f4ff045d6afd15cab189452",
".git/objects/e3/5a189ce9b1067c331de92f04ec05ef251740eb": "6b535e92527763d53ae308b95d12110b",
".git/objects/cf/8d915db7fb24b6b4d226e3da428e490d58f77a": "2a64e5f64c89416eb096d85005d66c73",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "b8a36c8cfabd566efa7afcbb37489693",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8758ec0601c68cfa14e5aa0bd1db956b",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "9c41d2761da53894e11f717877b1707a",
".git/objects/c6/a8b1aa19b7bb333890b0d35f96d22c3c132183": "bb0fc8aa9608c804be9bcea0005dad23",
".git/objects/c6/d7c997fc1da8e2ea7e8d9d438f901b2c9433db": "b1288e894a2ec8f1885cf1b98686469b",
".git/objects/20/42ee4698e5be04a6ae351414f0b0ef85743c4e": "d23eba03e4ec6b8602e70d977da5d051",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "1eaf6fbe076294c3f0daf90d55e4254a",
".git/objects/29/b3f86bd923856aa0492cb0dd27ed4d53d8ab00": "29dd4f4434e3fa14dad4e7c0f0f0c269",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "fea60a4487346b57a5566c176c3edf3d",
".git/objects/7c/a884a06e162b7d6e4812a25ed427ead62f4340": "6ba6ed66fb11b5ec3b605a0ee419347b",
".git/objects/16/12356328931ea33645d31c192eb4fa74d5d0a7": "ba2c0ca1741ca5b4cfedb8f3ebab6e66",
".git/objects/42/6c36efd080f04322a22602a9d2236447443818": "bd7037cf7fc931f94cc91c1505a1347b",
".git/objects/89/ed30338e2dc5e99f5f614cebc881402b13789e": "42318a569a3b2caa1d6fc54997d30e76",
".git/objects/80/b9159a62f0fe851c6c400a9da00625cdaac079": "853cc98b0c89b7d078da6a0ce4618598",
".git/objects/1a/571fa61e34d7fe9839006ba7076d31ff612e7d": "2c98f48842fbdcd3e101822a8b227c52",
".git/objects/28/5c4824d163470eb0514d698ac06362c536d8af": "972c832f175acc83d2f433560c6f831b",
".git/objects/7b/8ad811b17184e5efc5262d6159db608e8005eb": "e9b0d820d515ee4fe696651a7d2f8293",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "0e7fbd1f8845cbeb2cdbf944a84ebaee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/19/82122c6e9cd31571c4628875fd74e367949d4d": "c36dd75161b36bb462f665d5ad074155",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "889bc03fb6a15e508732478b9100196e",
".git/objects/44/33b56ad4a0b095bb0f719167637da1f3038f00": "9c7067a27994b77e0c7a4de8e8de47e9",
".git/objects/2a/73763fb8e0e72f0cc89f34edb365242eea917b": "333ac464742bde13c7ae2cb0265ed951",
".git/objects/43/72d70d313dcd7d7d232d68407a7252f4280dce": "99e68b9fc87a955fa4394ec3877f2337",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/6b/ee4df9c71f8c05d436f0b326c528afb43285f1": "2c384335c8c564e8e3bc1c0190d53c48",
".git/objects/6b/0a5c5898e04413b8d4b5394d5f38714143c016": "00d532e017ecf23598ff998153d4eaa5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "9524d053d0586a5f9416552b0602a196",
".git/objects/6e/33a5e61455efa84dbd90d343b2e0a633e255d8": "401ca9fc16014c1237c2e2ec7823bf05",
".git/objects/9a/2daf071b6822e9c7dc7d140f1300a57ec9a48b": "ff4cea2e014f2a42ff4ddbaaf07c6f58",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "bff9d14adbb36657694ef0fc6d5e6f7f",
".git/objects/91/10c0a880c41b9b9f4195d47d723f24d762ad76": "17bb617e326927b6a899d7312322e275",
".git/objects/96/6b01ec8b7ab3ae7679174f798ea5848fc04486": "23b24afe85164230f34ab03b9d1ad7da",
".git/objects/54/35f161f93e63742eff77b6be4a5aba0be7fea0": "30c5e6ce2c2f2c01d58793079cce16db",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "673571ee0bcce7e10d7ca6c90f04f5d6",
".git/objects/5e/fcf8114a8f26d3d31f5c1e100ce6bb4e94c229": "ffe76773b7a616cb33a69e7613255b88",
".git/objects/5e/664b3bb8fbe9d9f871a91e8b62720cde89f76e": "97e160bcd21208f516f6c04d09163fba",
".git/objects/08/9a7dba0324495262c19dfc966c9e143f8fe47b": "08694257394b231ae3989724a8056357",
".git/objects/01/4e27210d18cb826446cd0f5eac20edf10d0be1": "75ccded3c2ed4a396e5914d41fcedfa3",
".git/objects/06/850e76c8eeee5f4b851560a67c8379a4c96760": "2692321480f2662427436de6c539493e",
".git/objects/6c/0ce1f2fa4ac1bf8a9fecdc6b15437905d57d25": "55b11bc310733be234353e74645f4966",
".git/objects/99/7ac44fa429631a3b0b64748eccb7ef3ef860ce": "cf50bc1b654532ac2319e7ffac585469",
".git/objects/0a/5bb37eb065f1f744425c3f602123392a761719": "eab3bdefddbba7e179319c642957195f",
".git/objects/64/c5eaac2a615c2eb8e12a1dece286ba1f1fe091": "a4821a17b61bf0c51c435e3a9717085e",
".git/objects/64/11d63cdb17f9359d7000eab79e40cba0db6cae": "411555c4bbd50d980e135eb36cf6a472",
".git/objects/d3/5e4090cacf5a6b3db7d2f47b9a25dcb9fe32dd": "3de15dac373d3b60c74f526990589212",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d4/f0717dfaf83dfe7375453e8bfc1c41fd6f6c41": "5cf19574b28cd33500da1976ea2433a4",
".git/objects/b8/161237d39cfb5819d2552b9d088b65890ff5ab": "807d377508bcb9915bfe917d23f056cc",
".git/objects/b1/18422802096d60c4e1d1f339fa456f531136cb": "3cf205a78e5063c9a45dc6d0834c777f",
".git/objects/dd/9ccc4aca1ff4f1ceeec718c9c74e01b4d46396": "fb1b144a428243fb6362d7c817c3aeda",
".git/objects/dd/3611b3c23896f0c5727e0f65399bd183fda363": "267631cff758ec63ae2a0b41174408cf",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "70211b0a8348423a1f37454c4b604839",
".git/objects/dc/ae34b39d70d3f10953da679f853bc550c35f2a": "101df566183eb8afd3e94f0aec367677",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b11768e6a8ca60bad07211a36372d59f",
".git/objects/a9/e930b9f91e7597619587a61ed6996edd26d1b2": "d863a945c590ff33bab449c3a8ddec5b",
".git/objects/d5/1ae52d2936dc3e33cf56a968020fc52ed6171c": "71a35256a8f66f9450d954b0ec694e58",
".git/objects/af/d1b743cbbecb305e23e22fc8d8b8ac93f00bbe": "d6227e113f5b87f0353bd7cc0260e808",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/a8/655e8191acbc07b20bc454bd0f73ac83f86759": "07a5f739bde9f80eed1a745360ef5591",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "936bdc921e2d2af84e1b88a53c8fc956",
".git/objects/b0/167f6452145c3ef649fb0c130f611e07eb755c": "30cce3729ff576f2abe8d9aa5462f87e",
".git/objects/a6/41dc5fee920f2baebd4343a0abbd3917233ea3": "1f12d7c08ffda3ea527e7fafa646a676",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/b9/a97b1f8744f6777d7f7e5a6cf85632c31668b1": "2b905d99ebb6ea2a816db9717a1b737a",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "06319d1126433915a2b82321cb327d7f",
".git/objects/ef/08c01626d1bef65e60a9940239aa2b7ab809f1": "02d47583b47856d6ee65a83b33521a55",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "34d9bb262a1db8360a1db06f4cea5edc",
".git/objects/ea/de437a1fb48abfb7631b287d91c4207d63eb05": "7949bf26470dfa7030b7588d2ca998aa",
".git/objects/cd/6c9ecdfddbb92f93e707a4457e30be272f9376": "fd8e16910e84027b498e78b9bfcbe4aa",
".git/objects/e6/2a87ae38c5776f7bb933cd3a7313f37e53ff07": "86fcd19aebffff58102658d3db26f4bf",
".git/objects/e6/66fd6dcc925ab559c52c859a9c17d2ae46ae50": "8557d187465297e655ab10ce8809908e",
".git/objects/e6/92723fa265b26952a9d4ef9e1e95097a26140c": "1f081bd1accf60b8baefab95cb5fa92d",
".git/objects/e6/dc201a97473ea0163f29bfc1581124bccf0779": "356d73a21f8df616a46e0085ba131501",
".git/objects/f0/7e00724405c7754b9dd669df98c4a32415396e": "ea245b255eaadd28ced93f729a210cdc",
".git/objects/f0/0052074452e84f91b733a158e76d806f46ccc9": "699343c96bddcbcb14a2bff712a9723e",
".git/objects/e8/2688a4c6a505ad96dd067c0fb7f9c85b491ec2": "9cab5c31754833543509f8cb4950bfee",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "c3694958e54483a81b3e32ab9f84ece2",
".git/objects/f8/827fd89a24e25ddfee0e74aab1e6699fbe6368": "67ed22de545c37462a42176d3064ea52",
".git/objects/e0/5fcce177342b0bea8634d59dd980fe829017b6": "c4da9f9ceb228f232bfc5728b20cf951",
".git/objects/46/6de060c614f6b075da5f002bc166d2cda4ebc8": "817f62aaca27d04d48403c3af2658a78",
".git/objects/79/75b089383d4e8a4dfe058fd9fc98e54f5fcb89": "2e17931deac6aed44fa068c191f88383",
".git/objects/24/13cdf900ffbd3e4512bf4e589933c8f65a6bcb": "6b760c7727cd251f07107d02358ca624",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "bdc2f4ba1c16b2f697d776261713037a",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "cfcbae98ed59ea0e225d141b40bcf512",
".git/objects/4f/ab98c198862ddc3b96d75e503a406a2a8c0c61": "400cf4a9dd05ea630c1162ac47a4ba27",
".git/objects/15/77c06e7744237ea5ca9403494322b390d3dc2e": "ee8f4ac81b7f39a0d3e7664efa91b1c4",
".git/objects/15/4647b72b1dc04b432e9d0d6b4d6046166a4741": "a2fcaf0673d4f7f2bbb0356d22d7c72d",
".git/objects/12/ed2d33fee2070868d0d24cf4f7406997cea9fa": "0b17f5897cc601747a48715d9b74b2d5",
".git/objects/12/548ab05d4a73bda87e91794c21e440382d95ee": "aa654d703195a843646c48e2661f14c4",
".git/objects/85/6e0d17fa81990e119ec983089a4c0b3eb5d942": "531167b56e9f29b0d2d5b5f6266710da",
".git/objects/1d/68605b2c5c52b4372991982c09e7d1a31be5b6": "ccb827ca607857c975c9312992bc478e",
".git/objects/1d/fea947aa0fe14e34a26fa53fa49f739af62a7e": "97e6107cd637b2a9ac52fda3d42a41cb",
".git/objects/1d/91cbcbbeeffcc494a669b2d78e2b126c8b70e8": "a3a373b1f6e447212921af4144265b78",
".git/objects/71/3ae1b7cde718d84648af8dc3d5e279960872af": "963876fb22bb7d152a4f568d212cabde",
".git/objects/76/7d19294f888342fbb1b285a217aac0521ac70f": "35b9020ca0799d458ce92cd921cdc175",
".git/objects/49/8844a2b7b812f17c7b4873d9bc5ae4f4581ed4": "626d1dd4df6bec9ab97a5fb4089bdd3b",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "3ac7af462afd2c09154fc9d4fe3ca9ec",
".git/objects/2b/e91ccf6efdfec9f06ed05e0bf35aa292cf64eb": "59057dacd7756bedcef13ee961899f0f",
".git/objects/7f/48d8d18b976e23f59dd075ef9a8e287a62d722": "9a70e5d6f30075e2214c133a1ee22ff8",
".git/objects/7f/eae6441c59d6145d904bb1cff6056d4d2fccd3": "b71e242aa481c8b8e00b8a63df6fe13d",
".git/objects/7a/94dc496d6c5ac663fa0af3bf990289c29f7dcb": "22a00f498446f725cae3bde28a1e95cd",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "2e52b2703dcf92f5b2f87b4661347cc3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f599c32969be114513cc771249d452c1",
".git/logs/refs/heads/main": "79d748e943ef91172171134e83fdbce3",
".git/logs/refs/remotes/origin/main": "d95d0918b7b9a6b1e7be41cad98149cc",
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
".git/refs/heads/main": "256c14d0fb986f01d58b9721f00a2f74",
".git/refs/remotes/origin/main": "256c14d0fb986f01d58b9721f00a2f74",
".git/index": "70d3070b1b3e06561f263f3aa46d5751",
".git/COMMIT_EDITMSG": "b7c81951d322cd9f461ef988322389a0",
"assets/AssetManifest.json": "95862361667a50922afff0adffecc654",
"assets/NOTICES": "822d907d30314c172d605a659ea81d53",
"assets/FontManifest.json": "23d41126e269accf6b936260854d3429",
"assets/AssetManifest.bin.json": "9ef1c2d973ae48d94069200f55cfac36",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6615741d766be51ec8f0fd58b5be3b24",
"assets/fonts/MaterialIcons-Regular.otf": "f6f3652bd936aec3a6097190e9a00549",
"assets/assets/fonts/ubounded.ttf": "54711a5918ed6de678623359ea2bfd74",
"assets/assets/fonts/CCC.ttf": "ad82c6836779a62c089b3be3dfac19d1",
"assets/assets/fonts/ranade.ttf": "ce65c6f9f9ea8c031182864e024e7e4a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
