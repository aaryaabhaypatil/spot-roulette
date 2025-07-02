const locations = [
  {
    name: "Sydney Opera House",
    description: "An architectural icon on the harbour, perfect for a cultural or scenic outing.",
    image: "/images/opera-house.webp",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.460415343113!2d151.2131083152184!3d-33.85678428066117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3bc1d6763d%3A0x75e81eeb43f8b098!2sSydney%20Opera%20House!5e0!3m2!1sen!2sau!4v1698864973389!5m2!1sen!2sau"
  },
  {
    name: "Bondi Beach",
    description: "Australia’s most famous surf beach, with a vibrant boardwalk and lots of sunshine.",
    image: "/images/bondi-beach.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.791534617972!2d151.27429201521777!3d-33.89084268059544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12cafe84aefa21%3A0x805c0fdf474bca2c!2sBondi%20Beach!5e0!3m2!1sen!2sau!4v1698865032301!5m2!1sen!2sau"
  },
  {
    name: "Taronga Zoo",
    description: "A scenic zoo overlooking the harbour, home to native and exotic animals.",
    image: "/images/taronga-zoo.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.004875268682!2d151.23969381521792!3d-33.8439114806248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b15e5988be7b%3A0x3c8f1a049bf9f937!2sTaronga%20Zoo!5e0!3m2!1sen!2sau!4v1698865068515!5m2!1sen!2sau"
  },
  {
    name: "Royal Botanic Garden",
    description: "Beautiful gardens in the heart of the city with views of the Opera House and Harbour.",
    image: "/images/royal-botanic-garden.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.710892664722!2d151.21631221521803!3d-33.86402818064552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2f2070206f%3A0x3ecab9ca9a6ce78f!2sRoyal%20Botanic%20Garden%20Sydney!5e0!3m2!1sen!2sau!4v1698865102623!5m2!1sen!2sau"
  },
  {
    name: "The Rocks",
    description: "Historic cobbled streets, markets, street performers and harbour views.",
    image: "/images/the-rocks.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5253267480973!2d151.2078974152182!3d-33.85521508066038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae444944b84d%3A0x7b95e9bc31231756!2sThe%20Rocks%2C%20Sydney!5e0!3m2!1sen!2sau!4v1698865128940!5m2!1sen!2sau"
  },
  {
    name: "Darling Harbour",
    description: "A buzzing precinct with waterfront restaurants, museums, and night lights.",
    image: "/images/darling-harbour.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.671782738334!2d151.198953415218!3d-33.86304938064685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae372f7de9ad%3A0x56be5223064c77b8!2sDarling%20Harbour!5e0!3m2!1sen!2sau!4v1698865155913!5m2!1sen!2sau"
  },
  {
    name: "Eagle Rock, Royal National Park",
    description: "Cliffside rock shaped like an eagle overlooking the ocean.",
    image: "images/eagle-rock.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423991.4469508489!2d150.80933097609233!3d-33.878495975579284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12c5038aa75991%3A0x5b4fbed6d62a147a!2sEagle%20Rock!5e0!3m2!1sen!2sau!4v1751456952437!5m2!1sen!2sau"
  },
  {
    name: "Figure 8 Pools",
    description: "Famous natural rock pools shaped like the number 8.",
    image: "images/figure-8.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.1154112248837!2d151.0336788887651!3d-34.19452750375389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12dc98f9d42405%3A0x359d0712fc75e9bc!2sFigure%20Eight%20Pools!5e0!3m2!1sen!2sau!4v1751457049558!5m2!1sen!2sau"
  },
  {
    name: "Kamay Botany Bay National Park",
    description: "Dramatic cliffs and rich cultural history.",
    image: "images/kamay.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.341785645248!2d151.22496037643447!3d-34.009436773173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b665cfff0ac9%3A0xf017d68f9f24890!2sKamay%20Botany%20Bay%20National%20Park!5e0!3m2!1sen!2sau!4v1751457109701!5m2!1sen!2sau"
  },
  {
    name: "Kangaroo Valley",
    description: "Lush countryside with rivers, wildlife and old bridges.",
    image: "images/kangaroo-valley.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104927.64189716121!2d150.40740658258656!3d-34.730676456936514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b138339cc25c2f5%3A0x40609b49043d700!2sKangaroo%20Valley%20NSW%202577!5e0!3m2!1sen!2sau!4v1751457137609!5m2!1sen!2sau"
  },
  {
    name: "Bare Island",
    description: "Historic fort on a rocky island off La Perouse.",
    image: "images/bare-island.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0199209132034!2d151.22870432643384!3d-33.992022073179726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b6a0cd5121d1%3A0xf017d68f9f0a260!2sBare%20Island!5e0!3m2!1sen!2sau!4v1751457169396!5m2!1sen!2sau"
  },
  {
    name: "Hornby Lighthouse",
    description: "Red-and-white striped lighthouse at South Head.",
    image: "images/hornby-lighthouse.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.177587615392!2d151.27840797642833!3d-33.833530573240054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac879ca09f97%3A0x67d8c28b6de8bdba!2sHornby%20Lighthouse!5e0!3m2!1sen!2sau!4v1751457197038!5m2!1sen!2sau"
  },
  {
    name: "Sea Cliff Bridge",
    description: "Scenic coastal drive with sweeping ocean views.",
    image: "images/sea-cliff-bridge.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1648.8524089009684!2d150.97142108894707!3d-34.25607504327027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12de145aea11a9%3A0xf0cb503e032d50b3!2sSea%20Cliff%20Bridge!5e0!3m2!1sen!2sau!4v1751457226119!5m2!1sen!2sau"
  },
  {
    name: "Nielsen Park",
    description: "Harbour beach with shaded lawns and family-friendly swimming.",
    image: "images/nielsen-park.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4206286837166!2d151.26484817642907!3d-33.853049073232654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac454f4799c7%3A0x1779e62ae43e5f18!2sNielsen%20Park!5e0!3m2!1sen!2sau!4v1751457269287!5m2!1sen!2sau"
  },
  {
    name: "Kiama",
    description: "Coastal town with a famous blowhole and scenic walks.",
    image: "images/kiama.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26250.775691356986!2d150.82602324989662!3d-34.67119171750524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b136dd1a133b0df%3A0x5017d681632e3d0!2sKiama%20NSW%202533!5e0!3m2!1sen!2sau!4v1751457294741!5m2!1sen!2sau"
  },
  {
    name: "Whale Rock",
    description: "Unique rock formation resembling a whale.",
    image: "images/whale-rock.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53016.23715174351!2d151.18866194863284!3d-33.85062080000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad32adf4fe11%3A0x63601b072216554c!2sWhale%20Rock!5e0!3m2!1sen!2sau!4v1751457347507!5m2!1sen!2sau"
  },
  {
    name: "Wisteria Gardens",
    description: "Charming seasonal blooms in lavender and white.",
    image: "images/wisteria-gardens.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.3358037324215!2d150.99492057642726!3d-33.80364627325158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a2fcd85a1a99%3A0x187c1ce9478b9652!2sWisteria%20Gardens!5e0!3m2!1sen!2sau!4v1751457376035!5m2!1sen!2sau"
  },
  {
    name: "Clovelly Beach",
    description: "Calm, narrow beach perfect for snorkelling.",
    image: "images/clovelly.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0741284306655!2d151.26368687643108!3d-33.91349167320962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b2702f9a67db%3A0x45fc0a6b05ca5943!2sClovelly%20Beach!5e0!3m2!1sen!2sau!4v1751457402787!5m2!1sen!2sau"
  },
  {
    name: "Bronte Beach",
    description: "Chill surf beach with ocean pools and a park.",
    image: "images/bronte.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0741284306655!2d151.26368687643108!3d-33.91349167320962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ad88079530e3%3A0xbac8c39d0d92a897!2sBronte%20Beach!5e0!3m2!1sen!2sau!4v1751457439184!5m2!1sen!2sau"
  },
  {
    name: "Milk Beach",
    description: "Hidden harbour beach with stunning city views.",
    image: "images/milk-beach.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.284252991524!2d151.26459177642923!3d-33.856564523231235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac4e380cb163%3A0xda2cf0b9f38fbd01!2sMilk%20Beach!5e0!3m2!1sen!2sau!4v1751457464943!5m2!1sen!2sau"
  },
  {
    name: "Carrington Falls",
    description: "Impressive waterfall in a rainforest setting.",
    image: "images/carrington-falls.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.1852734168297!2d150.65222987645566!3d-34.62475802294677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b137414520a4e6b%3A0x2f711e38582f934d!2sCarrington%20Falls!5e0!3m2!1sen!2sau!4v1751457492583!5m2!1sen!2sau"
  },
  {
    name: "Grand Canyon Walking Track",
    description: "Rainforest hike through cliffs and creeks in the Blue Mountains.",
    image: "images/grand-canyon.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.300457849161!2d150.31654498863878!3d-33.64937590449662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1271e4b53a9b5d%3A0xee78324e498362e!2sGrand%20Canyon%20Walking%20Track!5e0!3m2!1sen!2sau!4v1751457528385!5m2!1sen!2sau"
  },
  {
    name: "Hermitage Foreshore Walk",
    description: "Scenic harbour-side walk with historic landmarks.",
    image: "images/hermitage.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.267503150544!2d151.2652887764293!3d-33.85699627323108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac4e0c82778f%3A0x43c684015bc14cac!2sHermitage%20Foreshore%20Walk%2C%20Vaucluse%20NSW%202030!5e0!3m2!1sen!2sau!4v1751457558255!5m2!1sen!2sau"
  },
  {
    name: "Curl Curl Boardwalk",
    description: "Peaceful coastal boardwalk with ocean breeze.",
    image: "images/curl-curl.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.2914913782897!2d151.2914096764265!3d-33.77897007326111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aae452bd6d3b%3A0x3f6a25e2dfc5a36c!2sCurl%20Curl%20Boardwalk!5e0!3m2!1sen!2sau!4v1751457583552!5m2!1sen!2sau"
  },
  {
    name: "Ballast Point Park",
    description: "Harbour-side park with industrial history and public art.",
    image: "images/ballast-point.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4828527740606!2d151.18407747642894!3d-33.8514449732335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae528c359ba9%3A0xf017d68f9f22040!2sBallast%20Point%20Park!5e0!3m2!1sen!2sau!4v1751457611468!5m2!1sen!2sau"
  },
  {
    name: "La Perouse",
    description: "Historic coastal suburb with rocky beaches and forts.",
    image: "images/la-perouse.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13232.186535796363!2d151.2209346183131!3d-33.99133591438932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b41b6a343be5%3A0x5017d681632bd60!2sLa%20Perouse%20NSW%202036!5e0!3m2!1sen!2sau!4v1751457634684!5m2!1sen!2sau"
  },
  {
    name: "Blues Point Reserve",
    description: "Perfect spot for sunset views of the Sydney skyline.",
    image: "images/blues-point.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.544089045948!2d151.20128817642893!3d-33.84986627323404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aef3bb6db3a3%3A0x703687612847f69!2sBlues%20Point%20Reserve!5e0!3m2!1sen!2sau!4v1751457665031!5m2!1sen!2sau"
  },
  {
    name: "Bradleys Head",
    description: "Historic military site with panoramic harbour views.",
    image: "images/bradleys-head.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13253.68198740569!2d151.23600717071363!3d-33.85305247171963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac302dfc290f%3A0x6cb722953e0cc54!2sBradleys%20Head!5e0!3m2!1sen!2sau!4v1751457689366!5m2!1sen!2sau"
  },
  {
    name: "Rose Bay",
    description: "Harbour beach with kayak rentals and coastal walks.",
    image: "images/rose-bay.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13250.40680162901!2d151.25538382072523!3d-33.87415432159042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac30c23d2dfb%3A0x5017d681632c8f0!2sRose%20Bay%20NSW%202029!5e0!3m2!1sen!2sau!4v1751457711364!5m2!1sen!2sau"
  },
  {
    name: "Watsons Bay",
    description: "Seaside village with fresh seafood and beaches.",
    image: "images/watsons-bay.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.841298842367!2d151.2766394970229!3d-33.84015694294997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac899335bc45%3A0x5017d681632cee0!2sWatsons%20Bay%20NSW%202030!5e0!3m2!1sen!2sau!4v1751457736197!5m2!1sen!2sau"
  },
  {
    name: "The Gap",
    description: "Dramatic ocean cliffs and panoramic views.",
    image: "images/the-gap.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.841315447272!2d151.2766394965306!3d-33.84015672885033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac8bbf676ed7%3A0x7c0dc0c6aeda86ff!2sThe%20Gap!5e0!3m2!1sen!2sau!4v1751457760513!5m2!1sen!2sau"
  },
  {
    name: "Cremorne Point",
    description: "Scenic foreshore walk with skyline views.",
    image: "images/cremorne.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6627.658227903943!2d151.2232386970234!3d-33.84251734294669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae834b49b57d%3A0x5017d681632b340!2sCremorne%20Point%20NSW%202090!5e0!3m2!1sen!2sau!4v1751457789266!5m2!1sen!2sau"
  },
  {
    name: "Blue Mountains",
    description: "Misty mountains, eucalyptus forests and endless lookouts.",
    image: "images/blue-mountains.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852866.2596762592!2d149.82715398328884!3d-33.383887008307276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12750cf28ca111%3A0x459d55ceda733f5e!2sBlue%20Mountains!5e0!3m2!1sen!2sau!4v1751457819549!5m2!1sen!2sau"
  },
  {
    name: "Three Sisters",
    description: "Iconic sandstone rock formation in the Blue Mountains.",
    image: "images/three-sisters.jpeg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.9804094124584!2d150.3099700886586!3d-33.73532270437727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b126e9b18072287%3A0x46c4113cc389ea6!2sThree%20Sisters!5e0!3m2!1sen!2sau!4v1751457849356!5m2!1sen!2sau"
  },
  {
    name: "Barrenjoey Lighthouse",
    description: "Coastal lighthouse walk with epic headland views.",
    image: "images/barrenjoey.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.966722344844!2d151.32727817641978!3d-33.580213273338444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0d4d54eb0b7abd%3A0x54b3d78529eb9048!2sBarrenjoey%20Lighthouse!5e0!3m2!1sen!2sau!4v1751457875747!5m2!1sen!2sau"
  },
  {
    name: "Don't Jump Rock",
    description: "Popular cliff-jumping spot near Wattamolla.",
    image: "images/dont-jump.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.7876205127386!2d151.29955147642616!3d-33.76615357326615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12abe2286acd8b%3A0xba02e13f17442c3a!2sDon%E2%80%99t%20Jump%20Rock!5e0!3m2!1sen!2sau!4v1751457899913!5m2!1sen!2sau"
  },
  {
    name: "Manly Wormhole",
    description: "Hidden tunnel between Queenscliff and Freshwater Beach.",
    image: "images/manly-wormhole.jpg",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6632.015533421469!2d151.28541288867032!3d-33.786297604306846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12aafd444899d3%3A0x8aea07c86d32fbf1!2sManly%20Wormhole!5e0!3m2!1sen!2sau!4v1751457924713!5m2!1sen!2sau"
  }
];

const btn = document.getElementById("randomBtn");
const locationContainer = document.getElementById("locationContainer");
const locationName = document.getElementById("locationName");
const locationDescription = document.getElementById("locationDescription");
const locationImage = document.getElementById("locationImage");
const locationMap = document.getElementById("locationMap");

btn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * locations.length);
  const loc = locations[randomIndex];

  locationName.textContent = loc.name;
  locationDescription.textContent = loc.description;
  locationImage.src = loc.image;
  locationImage.alt = `${loc.name} image`;
  locationMap.src = loc.mapEmbed;

  locationContainer.style.display = "block";
});
