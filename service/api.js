import axios from "axios";

//Since the api was blocking the access on http, I copied the result here, but in production, it will use the actual api :)

const getTopSongs = () => {
    if (process.env.NODE_ENV === 'prod') {
        axios.get('https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json').then((response) => response)
    } 
    else return {
  "feed": {
    "title": "Top Albums",
    "id": "https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json",
    "author": {
      "name": "Apple",
      "url": "https://www.apple.com/"
    },
    "links": [
      {
        "self": "https://rss.applemarketingtools.com/api/v2/us/music/most-played/50/albums.json"
      }
    ],
    "copyright": "Copyright © 2022 Apple Inc. All rights reserved.",
    "country": "us",
    "icon": "https://www.apple.com/favicon.ico",
    "updated": "Fri, 11 Feb 2022 23:26:35 +0000",
    "results": [
      {
        "artistName": "Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow",
        "id": "1594677532",
        "name": "Encanto (Original Motion Picture Soundtrack)",
        "releaseDate": "2021-11-19",
        "kind": "albums",
        "artistId": "329027198",
        "artistUrl": "https://music.apple.com/us/artist/lin-manuel-miranda/329027198",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "16",
            "name": "Soundtrack",
            "url": "https://itunes.apple.com/us/genre/id16"
          }
        ],
        "url": "https://music.apple.com/us/album/encanto-original-motion-picture-soundtrack/1594677532"
      },
      {
        "artistName": "Gunna",
        "id": "1604944424",
        "name": "DRIP SEASON 4EVER",
        "releaseDate": "2022-01-07",
        "kind": "albums",
        "artistId": "1236267297",
        "artistUrl": "https://music.apple.com/us/artist/gunna/1236267297",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/e6/52/54/e6525474-f011-257e-04b7-12ecbae264e1/810043689519.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/drip-season-4ever/1604944424"
      },
      {
        "artistName": "Yo Gotti",
        "id": "1607595067",
        "name": "CM10: Free Game (Deluxe)",
        "releaseDate": "2022-02-04",
        "kind": "albums",
        "artistId": "62763238",
        "artistUrl": "https://music.apple.com/us/artist/yo-gotti/62763238",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/7f/13/fc/7f13fca5-e341-b416-ddd2-47eca9d15c72/886449863600.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/cm10-free-game-deluxe/1607595067"
      },
      {
        "artistName": "YoungBoy Never Broke Again",
        "id": "1607411220",
        "name": "Colors",
        "releaseDate": "2022-01-21",
        "kind": "albums",
        "artistId": "1168822104",
        "artistUrl": "https://music.apple.com/us/artist/youngboy-never-broke-again/1168822104",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/03/77/19/03771916-31b7-4ec4-6173-fdb4b4a4eae7/075679757272.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/colors/1607411220"
      },
      {
        "artistName": "Jazmine Sullivan",
        "id": "1609166290",
        "name": "Heaux Tales, Mo' Tales: The Deluxe",
        "releaseDate": "2021-01-08",
        "kind": "albums",
        "artistId": "27880734",
        "artistUrl": "https://music.apple.com/us/artist/jazmine-sullivan/27880734",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/84/61/d8/8461d84f-41f7-e724-e63d-0933bcefb87e/886449835133.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "15",
            "name": "R&B/Soul",
            "url": "https://itunes.apple.com/us/genre/id15"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/heaux-tales-mo-tales-the-deluxe/1609166290"
      },
      {
        "artistName": "The Weeknd",
        "id": "1603171516",
        "name": "Dawn FM",
        "releaseDate": "2022-01-07",
        "kind": "albums",
        "artistId": "479756766",
        "artistUrl": "https://music.apple.com/us/artist/the-weeknd/479756766",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/2f/22/a9/2f22a9a6-5af1-5846-a44e-ba016724ed69/21UM1IM58860.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "15",
            "name": "R&B/Soul",
            "url": "https://itunes.apple.com/us/genre/id15"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/dawn-fm/1603171516"
      },
      {
        "artistName": "Drake",
        "id": "1584281467",
        "name": "Certified Lover Boy",
        "releaseDate": "2021-09-03",
        "kind": "albums",
        "artistId": "271256",
        "artistUrl": "https://music.apple.com/us/artist/drake/271256",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/11/36/38/1136384a-eebc-697a-c005-d890e41c0854/21UM1IM07518.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/certified-lover-boy/1584281467"
      },
      {
        "artistName": "Junior H",
        "id": "1608886676",
        "name": "Mi Vida En Un Cigarro 2",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "1442059565",
        "artistUrl": "https://music.apple.com/us/artist/junior-h/1442059565",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/36/d7/fe/36d7fefa-82aa-96e6-a557-d7851048b42e/190296227486.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "12",
            "name": "Latin",
            "url": "https://itunes.apple.com/us/genre/id12"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/mi-vida-en-un-cigarro-2/1608886676"
      },
      {
        "artistName": "2 Chainz",
        "id": "1607400426",
        "name": "Dope Don't Sell Itself",
        "releaseDate": "2022-02-04",
        "kind": "albums",
        "artistId": "435300447",
        "artistUrl": "https://music.apple.com/us/artist/2-chainz/435300447",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/5d/50/4c/5d504c70-6f5a-660b-47c5-16fff7d95ccd/21UM1IM55126.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/dope-dont-sell-itself/1607400426"
      },
      {
        "artistName": "$NOT",
        "id": "1606961474",
        "name": "Ethereal",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "1209873032",
        "artistUrl": "https://music.apple.com/us/artist/%24not/1209873032",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/b7/86/93/b78693cd-192a-9632-349a-cd428d191c46/810043689724.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/ethereal/1606961474"
      },
      {
        "artistName": "Summer Walker",
        "id": "1590029262",
        "name": "Still Over It",
        "releaseDate": "2021-11-05",
        "kind": "albums",
        "artistId": "990402287",
        "artistUrl": "https://music.apple.com/us/artist/summer-walker/990402287",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/f0/8c/bf/f08cbffc-1101-f974-a2d3-38381d8ed506/21UM1IM23130.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "15",
            "name": "R&B/Soul",
            "url": "https://itunes.apple.com/us/genre/id15"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/still-over-it/1590029262"
      },
      {
        "artistName": "Snoop Dogg",
        "id": "1608450855",
        "name": "BODR",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "21769",
        "artistUrl": "https://music.apple.com/us/artist/snoop-dogg/21769",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/66/ed/12/66ed12fd-9ad2-736c-c9c0-4fb7d5981b47/cover.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/bodr/1608450855"
      },
      {
        "artistName": "Babyface Ray",
        "id": "1605881384",
        "name": "FACE",
        "releaseDate": "2022-01-28",
        "kind": "albums",
        "artistId": "689177365",
        "artistUrl": "https://music.apple.com/us/artist/babyface-ray/689177365",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/bd/54/07/bd54077a-9620-5b5a-3750-ca2cea8db782/194690736216_cover.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/face/1605881384"
      },
      {
        "artistName": "Mary J. Blige",
        "id": "1604654340",
        "name": "Good Morning Gorgeous",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "1392280",
        "artistUrl": "https://music.apple.com/us/artist/mary-j-blige/1392280",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/ff/7d/1e/ff7d1e81-a51b-09d8-a010-4350622cd9bb/810043687966.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "15",
            "name": "R&B/Soul",
            "url": "https://itunes.apple.com/us/genre/id15"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/good-morning-gorgeous/1604654340"
      },
      {
        "artistName": "Kim Petras",
        "id": "1608460352",
        "name": "Slut Pop",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "291697579",
        "artistUrl": "https://music.apple.com/us/artist/kim-petras/291697579",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/8f/a7/65/8fa765cb-6e5f-e6f5-5ddb-95b48bf6de9e/22UMGIM13152.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "14",
            "name": "Pop",
            "url": "https://itunes.apple.com/us/genre/id14"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/slut-pop/1608460352"
      },
      {
        "artistName": "Labrinth",
        "id": "1481092579",
        "name": "Euphoria (Original Score from the HBO Series)",
        "releaseDate": "2019-10-04",
        "kind": "albums",
        "artistId": "205732582",
        "artistUrl": "https://music.apple.com/us/artist/labrinth/205732582",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/6f/f4/05/6ff40578-72c8-e9ed-5413-96dc4874cc86/886447932223.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "16",
            "name": "Soundtrack",
            "url": "https://itunes.apple.com/us/genre/id16"
          }
        ],
        "url": "https://music.apple.com/us/album/euphoria-original-score-from-the-hbo-series/1481092579"
      },
      {
        "artistName": "Adele",
        "id": "1590035691",
        "name": "30",
        "releaseDate": "2021-11-19",
        "kind": "albums",
        "artistId": "262836961",
        "artistUrl": "https://music.apple.com/us/artist/adele/262836961",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/73/6d/7c/736d7cfb-c79d-c9a9-4170-5e71d008dea1/886449666430.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "14",
            "name": "Pop",
            "url": "https://itunes.apple.com/us/genre/id14"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/30/1590035691"
      },
      {
        "artistName": "Nardo Wick",
        "id": "1598017272",
        "name": "Who is Nardo Wick?",
        "releaseDate": "2021-12-03",
        "kind": "albums",
        "artistId": "1509337198",
        "artistUrl": "https://music.apple.com/us/artist/nardo-wick/1509337198",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/9e/08/a2/9e08a2ef-3b03-e69c-44cf-96f4d71f8bb3/886449517886.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/who-is-nardo-wick/1598017272"
      },
      {
        "artistName": "Birdman & YoungBoy Never Broke Again",
        "id": "1599656830",
        "name": "From The Bayou",
        "releaseDate": "2021-12-10",
        "kind": "albums",
        "artistId": "72812522",
        "artistUrl": "https://music.apple.com/us/artist/birdman/72812522",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/83/b2/2c/83b22c5a-e2ad-3ce6-66ae-4cc77fa041ca/190296329036.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/from-the-bayou/1599656830"
      },
      {
        "artistName": "Jay Wheeler",
        "id": "1608628767",
        "name": "El Amor y Yo",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "164376380",
        "artistUrl": "https://music.apple.com/us/artist/jay-wheeler/164376380",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/46/e6/15/46e61575-c943-54b9-b9af-b9f5d8e847df/194690754531_cover.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "12",
            "name": "Latin",
            "url": "https://itunes.apple.com/us/genre/id12"
          }
        ],
        "url": "https://music.apple.com/us/album/el-amor-y-yo/1608628767"
      },
      {
        "artistName": "Morgan Wallen",
        "id": "1540314609",
        "name": "Dangerous: The Double Album",
        "releaseDate": "2021-01-08",
        "kind": "albums",
        "artistId": "829142092",
        "artistUrl": "https://music.apple.com/us/artist/morgan-wallen/829142092",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/10/a2/39/10a239bc-0f25-69d2-52df-b1fe755dcf19/20UM1IM03632.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "6",
            "name": "Country",
            "url": "https://itunes.apple.com/us/genre/id6"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/dangerous-the-double-album/1540314609"
      },
      {
        "artistName": "Juicy J & Wiz Khalifa",
        "id": "1606471265",
        "name": "Stoner's Night",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "6392055",
        "artistUrl": "https://music.apple.com/us/artist/juicy-j/6392055",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/33/0e/c9/330ec9c9-cbca-0756-c255-8e42831e802d/193436280525_jjwzstonersnightpxrgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/stoners-night/1606471265"
      },
      {
        "artistName": "Rod Wave",
        "id": "1581531934",
        "name": "SoulFly (Deluxe Version)",
        "releaseDate": "2021-08-20",
        "kind": "albums",
        "artistId": "1140623439",
        "artistUrl": "https://music.apple.com/us/artist/rod-wave/1140623439",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/05/95/58/059558a0-b73a-56f8-74de-854786d9968e/886449496983.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/soulfly-deluxe-version/1581531934"
      },
      {
        "artistName": "Doja Cat",
        "id": "1574004234",
        "name": "Planet Her (Deluxe)",
        "releaseDate": "2021-06-27",
        "kind": "albums",
        "artistId": "830588310",
        "artistUrl": "https://music.apple.com/us/artist/doja-cat/830588310",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/b1/d0/4a/b1d04ab9-294d-a7c7-fd40-d545536e6654/886449410538.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "14",
            "name": "Pop",
            "url": "https://itunes.apple.com/us/genre/id14"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/planet-her-deluxe/1574004234"
      },
      {
        "artistName": "Olivia Rodrigo",
        "id": "1582274783",
        "name": "SOUR (Video Version)",
        "releaseDate": "2021-05-21",
        "kind": "albums",
        "artistId": "979458609",
        "artistUrl": "https://music.apple.com/us/artist/olivia-rodrigo/979458609",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/ce/63/06/ce6306bb-5830-af8f-8ebd-4eb7d3c14e1e/21UMGIM26092.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "14",
            "name": "Pop",
            "url": "https://itunes.apple.com/us/genre/id14"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/sour-video-version/1582274783"
      },
      {
        "artistName": "Kanye West",
        "id": "1595496182",
        "name": "Donda (Deluxe)",
        "releaseDate": "2021-11-14",
        "kind": "albums",
        "artistId": "2715720",
        "artistUrl": "https://music.apple.com/us/artist/kanye-west/2715720",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/cf/a7/f9/cfa7f9be-2d62-89a4-19bf-26276ab39f16/21UMGIM64738.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/donda-deluxe/1595496182"
      },
      {
        "artistName": "NLE Choppa",
        "id": "1593435771",
        "name": "Me vs. Me",
        "releaseDate": "2022-01-28",
        "kind": "albums",
        "artistId": "1449052753",
        "artistUrl": "https://music.apple.com/us/artist/nle-choppa/1449052753",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/d2/fc/02/d2fc0236-9547-5de3-26e2-d1e05feaafb7/093624877394.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/me-vs-me/1593435771"
      },
      {
        "artistName": "Chase Matthew",
        "id": "1606447986",
        "name": "Born for This",
        "releaseDate": "2022-02-11",
        "kind": "albums",
        "artistId": "1454254169",
        "artistUrl": "https://music.apple.com/us/artist/chase-matthew/1454254169",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/e7/cb/e5/e7cbe5de-42b6-c497-9629-28b0eea50886/0.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "6",
            "name": "Country",
            "url": "https://itunes.apple.com/us/genre/id6"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "10",
            "name": "Singer/Songwriter",
            "url": "https://itunes.apple.com/us/genre/id10"
          }
        ],
        "url": "https://music.apple.com/us/album/born-for-this/1606447986"
      },
      {
        "artistName": "YoungBoy Never Broke Again",
        "id": "1589050995",
        "name": "Sincerely, Kentrell",
        "releaseDate": "2021-09-24",
        "kind": "albums",
        "artistId": "1168822104",
        "artistUrl": "https://music.apple.com/us/artist/youngboy-never-broke-again/1168822104",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/18/5d/1b/185d1b16-0799-4b26-4c3f-678ccfe58753/075679766922.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/sincerely-kentrell/1589050995"
      },
      {
        "artistName": "Polo G",
        "id": "1593949629",
        "name": "Hall of Fame 2.0",
        "releaseDate": "2021-12-03",
        "kind": "albums",
        "artistId": "1159371412",
        "artistUrl": "https://music.apple.com/us/artist/polo-g/1159371412",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/55/c9/f0/55c9f0eb-2ef8-8738-743f-effa1d6d6ff4/886449384075.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/hall-of-fame-2-0/1593949629"
      },
      {
        "artistName": "Lil Baby & Lil Durk",
        "id": "1569712089",
        "name": "The Voice of the Heroes",
        "releaseDate": "2021-06-04",
        "kind": "albums",
        "artistId": "1276656483",
        "artistUrl": "https://music.apple.com/us/artist/lil-baby/1276656483",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/9a/51/3f/9a513f0d-452a-a4de-aa54-3d629a94d2c3/21UMGIM47174.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/the-voice-of-the-heroes/1569712089"
      },
      {
        "artistName": "A Boogie wit da Hoodie",
        "id": "1599321200",
        "name": "B4 AVA",
        "releaseDate": "2021-12-10",
        "kind": "albums",
        "artistId": "1068300376",
        "artistUrl": "https://music.apple.com/us/artist/a-boogie-wit-da-hoodie/1068300376",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/c4/64/56/c4645672-9c46-6dc5-fa3d-73a79fa6286c/075679761453.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/b4-ava/1599321200"
      },
      {
        "artistName": "Yeat",
        "id": "1583678146",
        "name": "Up 2 Më",
        "releaseDate": "2021-09-10",
        "kind": "albums",
        "artistId": "1318094493",
        "artistUrl": "https://music.apple.com/us/artist/yeat/1318094493",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/21/9a/b2/219ab295-469c-f0f9-1369-60c9af11c6f2/21008.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/up-2-m%C3%AB/1583678146"
      },
      {
        "artistName": "EST Gee",
        "id": "1600623933",
        "name": "Bigger Than Life Or Death (Deluxe)",
        "releaseDate": "2021-12-17",
        "kind": "albums",
        "artistId": "1387365020",
        "artistUrl": "https://music.apple.com/us/artist/est-gee/1387365020",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/49/77/aa/4977aa68-bfd3-71df-2fd6-364b17183223/21UM1IM53370.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/bigger-than-life-or-death-deluxe/1600623933"
      },
      {
        "artistName": "Bad Bunny",
        "id": "1542102907",
        "name": "EL ÚLTIMO TOUR DEL MUNDO",
        "releaseDate": "2020-11-27",
        "kind": "albums",
        "artistId": "1126808565",
        "artistUrl": "https://music.apple.com/us/artist/bad-bunny/1126808565",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/64/70/1c/64701cff-71ed-912f-ce62-71d409f5e6ad/195497640560.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "12",
            "name": "Latin",
            "url": "https://itunes.apple.com/us/genre/id12"
          }
        ],
        "url": "https://music.apple.com/us/album/el-%C3%BAltimo-tour-del-mundo/1542102907"
      },
      {
        "artistName": "Juice WRLD",
        "id": "1600580338",
        "name": "Fighting Demons (Lyric Video Version)",
        "releaseDate": "2021-12-10",
        "kind": "albums",
        "artistId": "1368733420",
        "artistUrl": "https://music.apple.com/us/artist/juice-wrld/1368733420",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music116/v4/f1/64/f3/f164f3d0-2835-afc2-e2bc-e13cde8fd76b/21UM1IM54282.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/fighting-demons-lyric-video-version/1600580338"
      },
      {
        "artistName": "Baby Lullaby Academy",
        "id": "1065946325",
        "name": "Baby Lullaby: Relaxing Piano Lullabies and Natural Sleep Aid for Baby Sleep Music",
        "releaseDate": "2015-11-24",
        "kind": "albums",
        "artistId": "940778269",
        "artistUrl": "https://music.apple.com/us/artist/baby-lullaby-academy/940778269",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/ab/cb/17/abcb1725-a2e0-c4bc-8666-136f5782635a/859714545211_cover.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "4",
            "name": "Children's Music",
            "url": "https://itunes.apple.com/us/genre/id4"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/baby-lullaby-relaxing-piano-lullabies-and-natural/1065946325"
      },
      {
        "artistName": "J. Cole",
        "id": "1567421945",
        "name": "The Off-Season",
        "releaseDate": "2021-05-14",
        "kind": "albums",
        "artistId": "73705833",
        "artistUrl": "https://music.apple.com/us/artist/j-cole/73705833",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/1d/b9/2e/1db92e33-8544-01d6-ab14-94997cacb1ef/21UMGIM41232.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/the-off-season/1567421945"
      },
      {
        "artistName": "Upchurch",
        "id": "1606577807",
        "name": "People's Champ",
        "releaseDate": "2022-02-04",
        "kind": "albums",
        "artistId": "275700314",
        "artistUrl": "https://music.apple.com/us/artist/upchurch/275700314",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/4e/33/d1/4e33d11b-f567-9906-fb78-83ead533979e/25572.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/peoples-champ/1606577807"
      },
      {
        "artistName": "Roddy Ricch",
        "id": "1598011282",
        "name": "LIVE LIFE FAST",
        "releaseDate": "2021-12-17",
        "kind": "albums",
        "artistId": "1212442072",
        "artistUrl": "https://music.apple.com/us/artist/roddy-ricch/1212442072",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/3a/bf/02/3abf028a-7bd2-8d42-c10a-d0ca1d9f85d7/075679762580.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/live-life-fast/1598011282"
      },
      {
        "artistName": "Doe Boy",
        "id": "1606462451",
        "name": "OH REALLY",
        "releaseDate": "2022-01-26",
        "kind": "albums",
        "artistId": "1212585733",
        "artistUrl": "https://music.apple.com/us/artist/doe-boy/1212585733",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/0c/d6/ce/0cd6ce1c-9382-d72d-9191-3101c1071992/886449859443.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/oh-really/1606462451"
      },
      {
        "artistName": "Various Artists",
        "id": "1592745677",
        "name": "Sing 2 (Original Motion Picture Soundtrack)",
        "releaseDate": "2021-12-17",
        "kind": "albums",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/c2/d2/6d/c2d26dcf-7e1b-ed4c-f598-f8dcb42b0f75/21UM1IM35664.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "16",
            "name": "Soundtrack",
            "url": "https://itunes.apple.com/us/genre/id16"
          }
        ],
        "url": "https://music.apple.com/us/album/sing-2-original-motion-picture-soundtrack/1592745677"
      },
      {
        "artistName": "Bad Bunny",
        "id": "1500776322",
        "name": "YHLQMDLG",
        "releaseDate": "2020-02-29",
        "kind": "albums",
        "artistId": "1126808565",
        "artistUrl": "https://music.apple.com/us/artist/bad-bunny/1126808565",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/8c/0f/81/8c0f81f2-9f10-5e3d-b9de-5961a73e8e52/195081078724.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          },
          {
            "genreId": "12",
            "name": "Latin",
            "url": "https://itunes.apple.com/us/genre/id12"
          }
        ],
        "url": "https://music.apple.com/us/album/yhlqmdlg/1500776322"
      },
      {
        "artistName": "Kodak Black",
        "id": "1608934589",
        "name": "Back For Everything",
        "releaseDate": "2022-02-25",
        "kind": "albums",
        "artistId": "953921140",
        "artistUrl": "https://music.apple.com/us/artist/kodak-black/953921140",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e7/34/6e/e7346ef5-fe41-042c-a5b8-ee82d68f074d/075679758057.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/back-for-everything/1608934589"
      },
      {
        "artistName": "Muni Long",
        "id": "1592385694",
        "name": "Public Displays of Affection",
        "releaseDate": "2021-11-19",
        "kind": "albums",
        "artistId": "1531512544",
        "artistUrl": "https://music.apple.com/us/artist/muni-long/1531512544",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/bd/1c/a1/bd1ca183-18fa-d168-5d07-803c127579ee/11.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "15",
            "name": "R&B/Soul",
            "url": "https://itunes.apple.com/us/genre/id15"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/public-displays-of-affection/1592385694"
      },
      {
        "artistName": "Tory Lanez",
        "id": "1599009985",
        "name": "Alone At Prom",
        "releaseDate": "2021-12-10",
        "kind": "albums",
        "artistId": "440458549",
        "artistUrl": "https://music.apple.com/us/artist/tory-lanez/440458549",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/16/c8/eb/16c8eb6d-fe23-fa03-5e43-9827972763d3/cover.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "15",
            "name": "R&B/Soul",
            "url": "https://itunes.apple.com/us/genre/id15"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/alone-at-prom/1599009985"
      },
      {
        "artistName": "Lil Baby",
        "id": "1534816297",
        "name": "My Turn (Deluxe)",
        "releaseDate": "2020-02-28",
        "kind": "albums",
        "artistId": "1276656483",
        "artistUrl": "https://music.apple.com/us/artist/lil-baby/1276656483",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/70/97/3a/70973a36-b897-e20e-4698-c05d4f5ee24f/20UMGIM30253.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/my-turn-deluxe/1534816297"
      },
      {
        "artistName": "Moneybagg Yo",
        "id": "1591543719",
        "name": "A Gangsta’s Pain: Reloaded",
        "releaseDate": "2021-04-23",
        "kind": "albums",
        "artistId": "991187319",
        "artistUrl": "https://music.apple.com/us/artist/moneybagg-yo/991187319",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/40/5d/c0/405dc07b-84f5-8d50-206d-58705add1a22/21UM1IM06986.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/a-gangstas-pain-reloaded/1591543719"
      },
      {
        "artistName": "Meek Mill",
        "id": "1585883836",
        "name": "Expensive Pain",
        "releaseDate": "2021-10-01",
        "kind": "albums",
        "artistId": "313865761",
        "artistUrl": "https://music.apple.com/us/artist/meek-mill/313865761",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/3a/4d/ee/3a4deeb4-9555-4bef-3836-185a913b0b20/075679769602.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "18",
            "name": "Hip-Hop/Rap",
            "url": "https://itunes.apple.com/us/genre/id18"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/expensive-pain/1585883836"
      },
      {
        "artistName": "Billie Eilish",
        "id": "1564530719",
        "name": "Happier Than Ever",
        "releaseDate": "2021-07-30",
        "kind": "albums",
        "artistId": "1065981054",
        "artistUrl": "https://music.apple.com/us/artist/billie-eilish/1065981054",
        "contentAdvisoryRating": "Explict",
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/2d/f3/c9/2df3c9fd-e0eb-257c-c035-b04f05a66580/21UMGIM36691.rgb.jpg/100x100bb.jpg",
        "genres": [
          {
            "genreId": "20",
            "name": "Alternative",
            "url": "https://itunes.apple.com/us/genre/id20"
          },
          {
            "genreId": "34",
            "name": "Music",
            "url": "https://itunes.apple.com/us/genre/id34"
          }
        ],
        "url": "https://music.apple.com/us/album/happier-than-ever/1564530719"
      }
    ]
  }
}
};

export {
    getTopSongs
}