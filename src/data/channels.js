import categories from "./categories";

const channels = {
  MTV: {
    name: "mtv",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/MTV_HD_Plus_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  AAJ_TAK: {
    name: "aaj tak",
    m3u8: "https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/live_404p/chunks.m3u8",
    category: categories.NEWS,
  },
  INDIA_NEWS: {
    name: "india news",
    m3u8: "https://livetv.newsx.com/itv/itvnetwork5/playlist.m3u8",
    category: categories.NEWS,
  },
  INDIA_TODAY: {
    name: "india today",
    m3u8: "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8",
    category: categories.NEWS,
  },
  INDIA_TV: {
    name: "india tv",
    m3u8: "https://ythlsgo.onrender.com/channel/UCttspZesZIDEwwpVIgoZtWQ.m3u8",
    category: categories.NEWS,
  },
  NICK: {
    name: "nick",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Nick_Junior_voot_MOB/Fallback/index.m3u8",
    category: categories.KIDS,
  },
  NINE_XM: {
    name: "9 xm",
    m3u8: "https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8",
    category: categories.MUSIC,
  },
  ABP_NEWS: {
    name: "abp news",
    m3u8: "https://abplivetv.akamaized.net/hls/live/2043010/hindi/master.m3u8",
    category: categories.NEWS,
  },
  COLORS: {
    name: "colors",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Colors_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  COLORS_INFINITY: {
    name: "colors",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Colors_Infinity_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  COMEDY_CENTRAL_INDIA: {
    name: "comedy central india",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Comedy_Central_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  ET_NOW: {
    name: "et now",
    m3u8: "https://etnowweblive.akamaized.net/hls/live/2034678/ETNOWMSL4/chunklist_2.m3u8",
    category: categories.ENTERTAINMENT,
  },
  MTV_BEATS: {
    name: "mtv beats",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/MTV_Beats_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  SONIC: {
    name: "sonic",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Sonic_Nickelodeon_voot_MOB/Fallback/index.m3u8",
    category: categories.KIDS,
  },
  NICK_JUNIOR: {
    name: "nick junior",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Nick_Junior_voot_MOB/Fallback/index.m3u8",
    category: categories.KIDS,
  },
  REPUBLIC_TV: {
    name: "nick junior",
    m3u8: "https://weblive.republicworld.com/liveorigin/republictv/playlist.m3u8",
    category: categories.NEWS,
  },
  BBC_EARTH: {
    name: "bbc earth",
    m3u8: "http://103.81.104.118/hls/stream5.m3u8",
    category: categories.NEWS,
  },
  STAR_GOLD: {
    name: "star gold",
    m3u8: "http://103.81.104.118/hls/stream19.m3u8",
    category: categories.NEWS,
  },
  STAR_MOVIES: {
    name: "star movies",
    m3u8: "http://c0.cdn.trinity-tv.net/stream/nh9u54a7sfnc2hwzxr2zwykwkqm43bgyyzsm68ybbbnjei8kytwcgs3zm5gnw5c6efa5gr3fadzqe686w8gj2eaehrj89wvujvqza3kez78dtknwbbmnqf79yygmqqg7e9pnc3i3bpywjkiqrwke94yf.m3u8",
    category: categories.NEWS,
  },
  ZEE_NEWS: {
    name: "zee news",
    m3u8: "https://d233nwklwv8p4.cloudfront.net/out/v1/860cb318d23a4c64b58c9d625281170c/index_3.m3u8",
    category: categories.NEWS,
  },
};

export default channels;
