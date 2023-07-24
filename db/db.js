const users = [
  {
    id: 'ec3d0e4d-4f45-464c-b024-05c0e3aab56b',
    email: 'test@test.com',
    password: 'test'
  }
];

const news = [
  {
    title: 'The subtle ways that discrimination works',
    source: 'The Economist',
    id: '5cb9ce86a343c00a04088931',
    text: 'In the workplace, it’s still a man’s world',
    imageUrl:
      'https://cdn.static-economist.com/sites/default/files/images/print-edition/20190420_WBD001_1.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: "CWC 2019: Where Markram turns 'Kallis' on us?",
    source: 'News24',
    id: '5cc193ceb8c44c45575a59ef',
    text: 'Rob Houwing has a hunch Aiden Markram will turn the corner in white-ball international cricket on the extremely fitting stage of the World Cup.',
    imageUrl: 'http://cdn.24.co.za/files/Cms/General/d/3534/f3897c55ef6a494c878bc2bb5fcbee05.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title:
      "The Owner Of A Popular College Frat Instagram Faces 20 Years In Prison For Plotting To Steal A Man's Domain At Gunpoint",
    source: 'Buzzfeed',
    id: '5cc2044f6899f74ccc8a72c2',
    text: '"Do It For State" creator Rossi Lorathio Adams II wanted the similar domain to find news places to promote partying, drinking, and women-objectifying content.',
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-04/25/14/enhanced/buzzfeed-prod-web-03/original-28019-1556216697-2.png?crop=2162:1132;0,2',
    trending: true,
    comments: [],
    likes: []
  },
  {
    title: 'Bankers must prove their pay caps harm the rest of us',
    source: 'The Irish Times',
    id: '5cc274cf81a2355400133ed0',
    text: 'Restrictions on managers’ salaries an example of when populism can be benign',
    imageUrl: 'https://www.irishtimes.com/image-creator/?id=1.3871561&origw=1440',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: "The Hill's Morning Report - Trump tells House investigators 'no'",
    source: 'The Hill',
    id: '5cc193ceb8c44c45575a59fa',
    text: "The Hill's Morning Report - Trump tells House investigators 'no'",
    imageUrl: 'https://thehill.com/sites/default/files/newsletter-cms_042519getty.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Uncertain times: On India’s oil imports',
    source: 'The Hindu',
    id: '5cc2044f6899f74ccc8a72cc',
    text: 'India needs to diversify its oil supplier base and increase domestic sources of energy',
    imageUrl: 'https://www.thehindu.com/static/theme/default/base/img/og-image.jpg',
    trending: true,
    comments: [],
    likes: []
  },
  {
    title: '<i>Slacker</i> and the Failed Promises of the Internet',
    source: 'The American Conservative',
    id: '5cc274cf81a2355400133eda',
    text: "The movie is an artifact, hearkening back to a time when people were weird and algorithms weren't in control.",
    imageUrl: 'https://www.theamericanconservative.com/wp-content/uploads/2019/04/slacker.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Openings | EquipmentShare',
    source: 'Hacker News',
    id: '5cc2044f6899f74ccc8a72c1',
    text: 'We’re a company of visionaries, groundbreakers and innovators set on revolutionizing the construction industry. But to do that we need passionate and capable people. People like you. Are you ready to join us on the journey?',
    imageUrl:
      'https://assets.website-files.com/5968dc4356f3df097d78049f/5c7425775d98ad3c0748929c_blake-connally-373084-unsplash.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'John Havlicek, Boston Celtics great, dies at 79',
    source: 'Associated Press',
    id: '5cc274cf81a2355400133ed1',
    text: "BOSTON (AP) — John Havlicek, the Boston Celtics great whose steal of Hal Greer's inbounds pass in the final seconds of the 1965 Eastern Conference final against the Philadelphia 76ers remains one...",
    imageUrl:
      'https://storage.googleapis.com/afs-prod/media/media:6a7325fa13f1461d876ce7a95b333e23/3000.jpeg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Trouble in the Bihar Mahagathbandhan | Political Speech Tracker Podcast',
    source: 'The Hindu',
    id: '5cc193ceb8c44c45575a59f9',
    text: 'In this episode of The Hindu&#39;s political speeches podcast, Sobhana K Nair speaks to Jayant Sriram about simmering tensions in the Congress&#39; alliance with the RJD and other parties in Bihar and',
    imageUrl:
      'https://www.thehindu.com/todays-paper/tp-national/tp-otherstates/m1piiw/article26916896.ece/ALTERNATES/LANDSCAPE_615/NorthIndia1EaG2F5OQDCT3jpgjpg',
    trending: true,
    comments: [],
    likes: []
  },
  {
    title: "Who's still standing in NHL playoffs after wacky first round of stunning upsets",
    source: 'USA Today',
    id: '5cc2044f6899f74ccc8a72ca',
    text: "After a first round of crazy upsets, the NHL playoff field has no division champs in the second round for first time. Here's latest power ranking.",
    imageUrl:
      'https://www.gannett-cdn.com/presto/2019/04/25/USAT/48e5747d-7b99-4844-97d2-bffb9d5edef2-USP_NHL__Stanley_Cup_Playoffs-Toronto_Maple_Leafs.JPG?crop=3557,2001,x0,y89&width=3200&height=1680&fit=bounds',
    trending: true,
    comments: [],
    likes: []
  },
  {
    title:
      "Lok Sabha Election 2019 LIVE updates: Narendra Modi tweets 'heading to beloved Kashi' ahead of mega roadshow in Varanasi",
    source: 'Google News (India)',
    id: '5cc193ceb8c44c45575a59fb',
    text: 'Lok Sabha Election 2019 LIVE updates:',
    imageUrl: 'https://images.firstpost.com/wp-content/uploads/2019/04/modi2.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'DeMar DeRozan, LaMarcus Aldridge Power Spurs to Crucial Game 6 Win over Nuggets',
    source: 'Bleacher Report',
    id: '5cc274cf81a2355400133ed8',
    text: 'LaMarcus Aldridge  posted 26 points, 10 rebounds and five assists, and DeMar DeRozan added 25 points, seven assists and seven boards as the seventh-seeded San Antonio Spurs beat the No...',
    imageUrl:
      'https://img.bleacherreport.net/img/images/photos/003/805/037/hi-res-a9009aa13c6664e395cb5adb0767e91e_crop_exact.jpg?w=1200&h=1200&q=75',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Tennessee Titans select Jeffery Simmons at No. 19',
    source: 'NFL News',
    id: '5cc274cf81a2355400133ecf',
    text: 'The Tennessee Titans used the No. 19 pick in the 2019 NFL Draft to pad their evolving defensive front with Jeffery Simmons.',
    imageUrl:
      'http://static.nfl.com/static/content/public/photo/2019/04/25/0ap3000001028110_thumbnail_200_150.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Glencore under investigation by US commodities regulator',
    source: 'Financial Times',
    id: '5cc2044f6899f74ccc8a72c0',
    text: 'CFTC probing whether company and its subsidiaries engaged in ‘corrupt practices’',
    imageUrl:
      'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2Ff293a2e8-465d-11e9-b83b-0c525dad548f?source=next-opengraph&fit=scale-down&width=900',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Why we’re hoping for a big body count in Game of Thrones and Avengers: Endgame',
    source: 'The Verge',
    id: '5cc2044f6899f74ccc8a72c3',
    text: 'It’s going to be a rough weekend for hero deaths, as Avengers: Endgame and Game of Thrones, the biggest fandom franchises in the world, promise major heroes are about to die. Speculation is rampant whether characters like Endgame’s Iron Man, Captain America, …',
    imageUrl:
      'https://cdn.vox-cdn.com/thumbor/T_cw0PekMuEl6Urb91z3sH4NvD8=/0x4:2049x1077/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/16191599/AvengersEndgame5cb8bb7424276.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Taylor Swift Unveiled A New Song And Music Video After Teasing Fans For Weeks',
    source: 'Buzzfeed',
    id: '5cc274cf81a2355400133ece',
    text: '"\'Me!\' is a song about embracing your individuality and really celebrating it and owning it," she said.',
    imageUrl:
      'https://img.buzzfeed.com/buzzfeed-static/static/2019-04/25/22/campaign_images/buzzfeed-prod-web-03/taylor-swift-unveiled-a-new-song-and-music-video--2-4341-1556246878-1_dblbig.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Nintendo Has No Plan to Announce New Hardware at E3 - IGN',
    source: 'IGN',
    id: '5cc193ceb8c44c45575a59f2',
    text: 'Rumours of two new Nintendo Switch consoles will not be confirmed at E3 2019.',
    imageUrl:
      'https://assets1.ignimgs.com/2018/09/26/nintendoswitch-blogroll-1537989454357_1280w.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: 'Lord of the Rings star blasts MPs on Question Time over Brexit',
    source: 'Daily Mail',
    id: '5cc2e5504180aa5b5d8246dd',
    text: "In an extraordinary moment on the BBC's Question Time last night the actor, 74, was given an ovation by the audience as told MPs: 'You will damage Democracy if you don't deliver Brexit'.",
    imageUrl: 'https://i.dailymail.co.uk/1s/2019/04/26/08/12741612-0-image-a-8_1556263973293.jpg',
    trending: false,
    comments: [],
    likes: []
  },
  {
    title: "Marina's still shining (and bopping) without 'the Diamonds'",
    source: 'Entertainment Weekly',
    id: '5cc2044f6899f74ccc8a72cd',
    text: "Welsh singer-songwriter Marina tells EW how her musical 'meltdown' led to 'harder,' bass-walloping beats that confront the scary parts of human existence.",
    imageUrl:
      'https://ewedit.files.wordpress.com/2019/04/marina.jpg?crop=0px%2C0px%2C2700px%2C1417.5px&resize=1200%2C630',
    trending: false,
    comments: [],
    likes: []
  }
];

module.exports = {
  users,
  news
};
