import categories from "./categories";

const channels = {
  MTV: {
    name: "Mtv",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/MTV_HD_Plus_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  AAJ_TAK: {
    name: "Aaj Tak",
    m3u8: "https://aajtaklive-amd.akamaized.net/hls/live/2014416/aajtak/aajtaklive/live_404p/chunks.m3u8",
    category: categories.NEWS,
  },
  INDIA_NEWS: {
    name: "India News",
    m3u8: "https://livetv.newsx.com/itv/itvnetwork5/playlist.m3u8",
    category: categories.NEWS,
  },
  INDIA_TODAY: {
    name: "India Today",
    m3u8: "https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8",
    category: categories.NEWS,
  },
  NINE_XM: {
    name: "9 xm",
    m3u8: "https://d2q8p4pe5spbak.cloudfront.net/bpk-tv/9XM/9XM.isml/index.m3u8",
    category: categories.MUSIC,
  },
  ABP_NEWS: {
    name: "ABP News",
    m3u8: "https://abplivetv.akamaized.net/hls/live/2043010/hindi/master.m3u8",
    category: categories.NEWS,
  },
  COLORS: {
    name: "Colors",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Colors_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  COLORS_INFINITY: {
    name: "Colors Infinity",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Colors_Infinity_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  COMEDY_CENTRAL_INDIA: {
    name: "Comedy Central India",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Comedy_Central_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  MTV_BEATS: {
    name: "Mtv Beats",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/MTV_Beats_HD_voot_MOB/Fallback/index.m3u8",
    category: categories.ENTERTAINMENT,
  },
  SONIC: {
    name: "Sonic",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Sonic_Nickelodeon_voot_MOB/Fallback/index.m3u8",
    category: categories.KIDS,
  },
  NICK_JUNIOR: {
    name: "Nick Junior",
    m3u8: "https://prod-sports-north-gm.jiocinema.com/bpk-tv/Nick_Junior_voot_MOB/Fallback/index.m3u8",
    category: categories.KIDS,
  },
};

export default channels;
