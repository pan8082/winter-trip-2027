// ---------------------------------------------------------------------------
// DATA — edit everything below this line as the trip gets planned.
// Rendering logic further down never needs to change for content updates.
// ---------------------------------------------------------------------------

const trip = {
  startDate: "2026-12-26",
  endDate: "2027-01-09",
};

const FUKUSHIMA_HORSE_MEAT_NOTE = { type: "note", text: "新潟朋友推薦：福島生馬肉也很有名" };

// 新潟市區晚間彈性備案 — 套用在每一個「當晚住宿在新潟」的日子（除了day-3，那天已經是市區觀光正式行程）
function niigataEveningBackup() {
  return [
    {
      type: "activity",
      name: "新潟市區觀光（備案，景點待排）",
      backups: [
        { name: "萬代橋（散步看橋景）", url: "https://maps.google.com/?q=萬代橋" },
        { name: "朱鷺メッセ展望室（免費，電梯直達，360度view，最省力）", url: "https://maps.google.com/?q=朱鷺メッセ展望室" },
        { name: "古町（老街＋週末免費導覽）", url: "https://maps.google.com/?q=古町 新潟" },
        { name: "沼垂テラス商店街（玻璃工藝體驗）", url: "https://maps.google.com/?q=沼垂テラス商店街" },
      ],
    },
    {
      type: "activity",
      name: "ぽんしゅ館 新潟驛店",
      backups: [
        { name: "唎酒番所（500円5杯試飲）", url: "https://maps.google.com/?q=唎酒番所 新潟駅" },
        { name: "ぽんしゅ館コンプレックス角打ち（坐下小酌配菜）", url: "https://maps.google.com/?q=ぽんしゅ館コンプレックス" },
      ],
    },
    { type: "note", text: "彈性備案：寺泊魚市場（海景＋海鮮，行程有空檔時可排入）" },
  ];
}

const days = [
  {
    id: "day-1",
    date: "2026-12-26",
    weekday: "六",
    title: "集合日（新潟）",
    timeline: [
      { type: "note", text: "新潟集合，部分人可能提早到。入境城市假設為東京（待確認），12/26當天各自從東京銜接新潟的交通方式尚未定案。" },
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿（3候選尚未訂房，詳見住宿清單）" },
      ...niigataEveningBackup(),
    ],
  },
  {
    id: "day-2",
    date: "2026-12-27",
    weekday: "日",
    title: "燕三条職人工坊",
    timeline: [
      { type: "activity", order: 1, name: "諏訪田製作所", map: { name: "諏訪田製作所", url: "https://maps.google.com/?q=諏訪田製作所" } },
      { type: "activity", order: 2, name: "玉川堂", map: { name: "玉川堂", url: "https://maps.google.com/?q=玉川堂" } },
      ...niigataEveningBackup(),
    ],
  },
  {
    id: "day-3",
    date: "2026-12-28",
    weekday: "一",
    title: "新潟市區觀光・與爸爸妹妹會合",
    timeline: [
      {
        type: "activity",
        order: 1,
        name: "爸爸、妹妹抵達新潟，會合",
        cost: "虎航 IT228・桃園約13:45–13:55起飛・18:00抵達新潟",
      },
      {
        type: "activity",
        order: 2,
        name: "新潟市區觀光（景點待排）",
        backups: [
          { name: "萬代橋（散步看橋景）", url: "https://maps.google.com/?q=萬代橋" },
          { name: "朱鷺メッセ展望室（免費，電梯直達，360度view，最省力）", url: "https://maps.google.com/?q=朱鷺メッセ展望室" },
          { name: "古町（老街＋週末免費導覽）", url: "https://maps.google.com/?q=古町 新潟" },
          { name: "沼垂テラス商店街（玻璃工藝體驗）", url: "https://maps.google.com/?q=沼垂テラス商店街" },
        ],
      },
      {
        type: "activity",
        order: 3,
        name: "ぽんしゅ館 新潟驛店",
        backups: [
          { name: "唎酒番所（500円5杯試飲）", url: "https://maps.google.com/?q=唎酒番所 新潟駅" },
          { name: "ぽんしゅ館コンプレックス角打ち（坐下小酌配菜）", url: "https://maps.google.com/?q=ぽんしゅ館コンプレックス" },
        ],
      },
      { type: "note", text: "彈性備案：寺泊魚市場（海景＋海鮮，行程有空檔時可排入）" },
      { type: "note", text: "爸爸妹妹18:00才抵達，市區觀光順序可視情況調整（例如白天先逛，晚上再一起會合）" },
    ],
  },
  {
    id: "day-4",
    date: "2026-12-29",
    weekday: "二",
    title: "新潟取車 → 南魚沼・入住坂戸城",
    timeline: [
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿", checkOut: null },
      {
        type: "activity",
        order: 1,
        name: "取車：ニッポンレンタカー新潟新幹線口店",
        cost: "2026/12/29 09:00・TEL 050-1712-2869・ミニバン（スタッドレス・禁煙車）",
        map: { name: "新潟新幹線口店", url: "https://store.nipponrentacar.co.jp/b/nrs/info/650089" },
      },
      { type: "transport", summary: "新潟 → 南魚沼" },
      { type: "accommodation", id: "acc-rokkamachi", name: "坂戸城", checkIn: "14:00（官網限定方案可提早入住）" },
    ],
  },
  {
    id: "day-5",
    date: "2026-12-30",
    weekday: "三",
    title: "南魚沼 → 新潟（移動日）",
    timeline: [
      { type: "accommodation", id: "acc-rokkamachi", name: "坂戸城", checkOut: "09:00" },
      { type: "transport", summary: "南魚沼 → 新潟", duration: "約2–2.5小時" },
      { type: "activity", order: 1, name: "魚沼之里", map: { name: "魚沼之里", url: "https://maps.google.com/?q=魚沼之里" } },
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿（尚未訂房，詳見住宿清單）" },
      { type: "note", text: "此日移動量較大，行程宜精簡（尚未定案事項）" },
      ...niigataEveningBackup(),
    ],
  },
  {
    id: "day-6",
    date: "2026-12-31",
    weekday: "四",
    title: "彌彥山・彌彥神社",
    timeline: [
      {
        type: "activity",
        order: 1,
        name: "彌彥山纜車＋彌彥神社",
        openHours: "冬季9:00–16:00，每週二公休（12/31不受影響）",
        map: { name: "彌彥山纜車", url: "https://maps.google.com/?q=彌彥山纜車" },
      },
      { type: "note", text: "山頂到彌彥神社御神廟走路約15分鐘，媽媽體力不夠可留在山頂即可" },
      ...niigataEveningBackup(),
    ],
  },
  {
    id: "day-7",
    date: "2027-01-01",
    weekday: "五",
    title: "白山神社・白山公園（初詣）",
    timeline: [
      { type: "activity", order: 1, name: "白山神社（初詣）", map: { name: "白山神社", url: "https://maps.google.com/?q=白山神社 新潟" } },
      { type: "activity", order: 2, name: "白山公園", map: { name: "白山公園", url: "https://maps.google.com/?q=白山公園 新潟" } },
      ...niigataEveningBackup(),
    ],
  },
  {
    id: "day-8",
    date: "2027-01-02",
    weekday: "六",
    title: "只見線景觀 → 會津若松（移動日）",
    timeline: [
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿", checkOut: null },
      { type: "note", text: "備案：離開新潟前，可在新潟駅ぽんしゅ館做最後採購（新潟地酒/伴手禮，之後就進福島縣了）" },
      { type: "transport", summary: "新潟 → 只見線沿線 → 會津若松" },
      {
        type: "activity",
        order: 1,
        name: "第一只見川橋梁（会津桧原–会津西方間）",
        map: { name: "第一只見川橋梁", url: "https://maps.google.com/?q=第一只見川橋梁" },
      },
      {
        type: "activity",
        order: 2,
        name: "宮下アーチ三兄弟（会津宮下駅步行3分）",
        map: { name: "宮下アーチ三兄弟", url: "https://maps.google.com/?q=宮下アーチ三兄弟" },
      },
      {
        type: "activity",
        order: 3,
        name: "第二只見川橋梁（会津西方駅附近）",
        map: { name: "第二只見川橋梁", url: "https://maps.google.com/?q=第二只見川橋梁" },
      },
      { type: "note", text: "三點車程都不遠，自駕串連" },
      { type: "note", text: "當晚住宿地點：會津若松地區，目前尚未選定飯店（無候選資料）" },
      { type: "note", text: "此日移動量較大，行程宜抓寬鬆（尚未定案事項）" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-9",
    date: "2027-01-03",
    weekday: "日",
    title: "飯盛山・会津さざえ堂",
    timeline: [
      {
        type: "activity",
        order: 1,
        name: "会津さざえ堂（円通三匝堂）",
        openHours: "冬季9:00–日落",
        cost: "門票400円",
        map: { name: "会津さざえ堂", url: "https://maps.google.com/?q=会津さざえ堂" },
      },
      { type: "note", text: "山下有スロープコンベア電動步道代替爬階梯（冬季11/21–3/20，9:00–16:00，降雪時可能停駛）；山下觀光案內所12–3月休館" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-10",
    date: "2027-01-04",
    weekday: "一",
    title: "五色沼（雪鞋）",
    timeline: [
      { type: "activity", order: 1, name: "五色沼", map: { name: "五色沼", url: "https://maps.google.com/?q=五色沼" } },
      { type: "note", text: "冬季要雪鞋才能走完整段，視媽媽體力調整強度，體力吃緊可考慮開車路過拍照即可" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-11",
    date: "2027-01-05",
    weekday: "二",
    title: "會津若松 → 入住猪苗代 ヴィラ イナワシロ",
    timeline: [
      { type: "note", text: "當日退房：會津若松地區飯店（尚未選定，見day-8備註）" },
      {
        type: "activity",
        order: 1,
        name: "還車：ニッポンレンタカー會津若松店",
        cost: "2027/01/05 14:00 前還車・TEL 050-1712-2894",
        map: { name: "會津若松店", url: "https://store.nipponrentacar.co.jp/b/nrs/info/710022" },
      },
      { type: "transport", summary: "會津若松 → 猪苗代", duration: "約19.6km" },
      { type: "note", text: "還車後轉搭以下方式前往猪苗代，交通方式待定，三個選項：①計程車，起跳700円+每260m加100円，粗估整趟約7,000–8,000円（需電話問車行確認）；②電車，磐越西線約25–30分鐘，510円，冬季班次不密集；③可詢問滑雪度假村是否提供會津若松/郡山駅接駁" },
      { type: "accommodation", id: "acc-inawashiro", name: "ヴィラ イナワシロ" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-12",
    date: "2027-01-06",
    weekday: "三",
    title: "滑雪 Day 1",
    timeline: [
      { type: "activity", order: 1, name: "滑雪" },
      { type: "note", text: "不滑雪的人可在猪苗代湖、磐梯猪苗代溫泉、野口英世記念館周邊悠閒" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-13",
    date: "2027-01-07",
    weekday: "四",
    title: "滑雪 Day 2",
    timeline: [
      { type: "activity", order: 1, name: "滑雪" },
      { type: "note", text: "不滑雪的人可在猪苗代湖、磐梯猪苗代溫泉、野口英世記念館周邊悠閒" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-14",
    date: "2027-01-08",
    weekday: "五",
    title: "滑雪 Day 3",
    timeline: [
      { type: "activity", order: 1, name: "滑雪" },
      { type: "note", text: "不滑雪的人可在猪苗代湖、磐梯猪苗代溫泉、野口英世記念館周邊悠閒" },
      FUKUSHIMA_HORSE_MEAT_NOTE,
    ],
  },
  {
    id: "day-15",
    date: "2027-01-09",
    weekday: "六",
    title: "賦歸",
    timeline: [
      { type: "accommodation", id: "acc-inawashiro", name: "ヴィラ イナワシロ", checkOut: "~10:00" },
      { type: "note", text: "checkout，賦歸" },
    ],
  },
];

const accommodations = [
  {
    id: "acc-niigata-1",
    region: "新潟駅前（3候選，尚未訂房）",
    name: "ホテルメッツ新潟",
    mapUrl: "https://maps.google.com/?q=ホテルメッツ新潟",
    voucher: "JR新潟駅萬代口直結，最低參考價1晚4,988円/房（跨年夜實際會更高，非即時報價）",
  },
  {
    id: "acc-niigata-1-alt2",
    region: "新潟駅前（3候選，尚未訂房）",
    name: "新潟駅前ホテル",
    mapUrl: "https://maps.google.com/?q=新潟駅前ホテル",
    voucher: "2025/4整修，南口徒步1分，內有天然溫泉大浴場",
  },
  {
    id: "acc-niigata-1-alt3",
    region: "新潟駅前（3候選，尚未訂房）",
    name: "アパホテル〈新潟古町〉",
    mapUrl: "https://maps.google.com/?q=アパホテル 新潟古町",
    voucher: "有人工温泉大浴場「玄要の湯」，早餐吃到飽",
  },
  {
    id: "acc-rokkamachi",
    region: "六日町温泉（南魚沼）",
    name: "坂戸城",
    address: "〒949-6611 新潟県南魚沼市阪戸292-4",
    mapUrl: "https://maps.google.com/?q=坂戸城 南魚沼",
    websiteUrl: "https://sakadojo.com/",
    phone: "025-773-3333（訂房專線 0120-373-372）",
    voucher:
      "訂房確認：旬彩の庄 坂戸城，2026/12/29 入住 – 12/30 退房，東館和室（禁煙），5名1晚，官網限定「南魚沼の和食会席」方案，2食付（大人¥19,320 × 5名），合計¥86,940（已折抵¥9,660）。信用卡付款。取消政策：前日起100%取消費，需自行注意退款相關手續費規定。備註：當日將自駕前往，已告知飯店需使用停車場。\n\n（予約番號見訂房確認信，此處不公開顯示）",
  },
  {
    id: "acc-inawashiro",
    region: "猪苗代",
    name: "ヴィラ イナワシロ",
    address: "〒969-3102 福島県耶麻郡猪苗代町字葉山7105",
    mapUrl: "https://maps.google.com/?q=ヴィラ イナワシロ 猪苗代",
    websiteUrl: "http://www.villa.co.jp/",
    phone: "0242-62-4111",
    voucher:
      "訂房確認：ヴィラ イナワシロ（会津・裏磐梯・猪苗代湖畔），分兩筆預訂共接續4晚：2027/01/05–01/08（3連泊）+ 2027/01/08–01/09（1晚），皆為東館和室【禁煙】、觀光拠点に最適プラン、朝夕食付，退房約10:00。房型分配：1號房2人（男1/女1），2號房3人（女3）。金額：3連泊小計198,000円+入湯税2,250円＝200,250円；1晚小計66,000円+入湯税750円＝66,750円，合計267,000円。信用卡付款（帳單顯示「タイムデザイン（旅行予約）」）。交通方式：自駕。取消政策：當日100%、前日50%、2–3日前30%。\n\n（予約番號見訂房確認信，此處不公開顯示）",
  },
];

// 交通總覽 — 租車/巴士/新幹線等已預訂的交通服務明細（非每日移動時間，那部分在行程本身呈現）
const transportServices = [
  {
    id: "rental-car",
    name: "ニッポンレンタカー",
    category: "租車",
    detail:
      "取車：新潟新幹線口店（TEL 050-1712-2869），2026/12/29 09:00\n還車：會津若松店（TEL 050-1712-2894），2027/01/05 14:00 前\n車型：ミニバン（スタッドレス・禁煙車）\n總額 ¥185,570，取車當日才會扣款",
    links: [
      { label: "取車店資訊", url: "https://store.nipponrentacar.co.jp/b/nrs/info/650089" },
      { label: "還車店資訊", url: "https://store.nipponrentacar.co.jp/b/nrs/info/710022" },
    ],
  },
];

// paid: null (未定) | "prepaid" (已先付) | "onsite" (現場付)
// paidBy: 只在 paid === "prepaid" 時才有意義
const budget = {
  items: [
    {
      name: "交通・租車（ニッポンレンタカー）",
      total: 185570,
      perPerson: 37114,
      perPersonNote: "取車當日（12/29）才會扣款，尚未收費",
      paid: "onsite",
      paidBy: null,
    },
    { name: "交通（其他：電車／計程車等）", total: null, perPerson: null, paid: null, paidBy: null },
    { name: "住宿・坂戸城", total: 86940, perPerson: 19320, perPersonNote: "拔麻的是多贊助", paid: "prepaid", paidBy: "多" },
    { name: "住宿・猪苗代 ヴィラ イナワシロ", total: 267000, perPerson: 53400, paid: "prepaid", paidBy: "多" },
    { name: "住宿（新潟／會津若松，尚未訂房）", total: null, perPerson: null, paid: null, paidBy: null },
    { name: "活動", total: null, perPerson: null, paid: null, paidBy: null },
    { name: "餐飲", total: null, perPerson: null, paid: null, paidBy: null },
  ],
};

const packing = {
  general: ["護照", "駕照（國際駕照）", "現金 / 交通卡", "行動電源", "常備藥品"],
  ski: ["雪褲雪衣", "手套", "護目鏡", "防水登山鞋", "暖暖包"],
};

const todos = [
  {
    name: "多",
    items: ["訂年末年始期間住宿", "訂機票（可以跟三阿姨講我日本時間）", "訂新幹線", "訂剩下的住宿"],
  },
  {
    name: "待確認事項",
    items: [
      "出發/入境城市確切安排（假設東京，需與家人確認）",
      "新潟兩段住宿實際訂房",
      "會津若松住宿完全空缺，需另找候選",
      "12/30、1/2兩個移動量大的日子行程細節要抓寬鬆",
      "查tabelog名店",
      "查輪箱飯",
    ],
  },
  {
    name: "彈性備案景點（未排入行程）",
    items: ["岩室温泉（彌彦/燕三条附近，日歸入浴大人880円，平日17點後660円）", "寺泊魚市場（海景＋海鮮）"],
  },
];

// ---------------------------------------------------------------------------
// RENDER
// ---------------------------------------------------------------------------

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function groupKey(type) {
  return type === "transport" || type === "activity" ? "steps" : type;
}

function groupConsecutive(timeline) {
  const groups = [];
  timeline.forEach((item) => {
    const key = groupKey(item.type);
    const last = groups[groups.length - 1];
    if (last && last.key === key) {
      last.items.push(item);
    } else {
      groups.push({ key, items: [item] });
    }
  });
  return groups;
}

function renderMapPins(map, backups) {
  if (!map && !(backups && backups.length)) return "";
  const pin = (p, isBackup) =>
    `<li class="map-pin${isBackup ? " map-pin--backup" : ""}"><a href="${p.url}" target="_blank" rel="noopener">📍 ${p.name}</a>${
      isBackup ? '<span class="map-pin__badge">備選</span>' : ""
    }</li>`;
  const items = [map ? pin(map, false) : "", ...(backups || []).map((b) => pin(b, true))].join("");
  return `<ul class="map-pins map-pins--inline">${items}</ul>`;
}

function transportIcon(summary) {
  if (/自駕|開車|租車/.test(summary)) return "🚗";
  if (/新幹線/.test(summary)) return "🚄";
  if (/計程車/.test(summary)) return "🚕";
  if (/取車|還車/.test(summary)) return "🔑";
  return "🚃";
}

function renderTransportStep(t) {
  const tags = [
    t.duration ? `<span class="tag tag--cost">${t.duration}</span>` : "",
    t.cost ? `<span class="tag tag--cost">${t.cost}</span>` : "",
  ].join("");
  const tagsRow = tags ? `<div class="activity__meta">${tags}</div>` : "";
  const stations = t.boarding ? `<div class="activity__meta schedules">上車：${t.boarding} ・ 下車：${t.alighting}</div>` : "";
  const schedules = t.schedules ? `<div class="activity__meta schedules">${t.schedules.join(" · ")}</div>` : "";
  return `
    <div class="activity__name">${transportIcon(t.summary)} ${t.summary}</div>
    ${tagsRow}
    ${stations}
    ${schedules}
    ${renderMapPins(t.map, t.backups)}
  `;
}

function renderActivityStep(a) {
  const tags = [
    a.reservation ? `<span class="tag tag--reserve">需預約 ${a.fixedTime || ""}</span>` : "",
    a.cost ? `<span class="tag tag--cost">${a.cost}</span>` : "",
  ].join("");
  const openHours = a.openHours ? `<div class="activity__meta">營業時間 ${a.openHours}</div>` : "";
  const tagsRow = tags ? `<div class="activity__meta">${tags}</div>` : "";
  return `
    <div class="activity__name">${a.name}</div>
    ${openHours}
    ${tagsRow}
    ${renderMapPins(a.map, a.backups)}
  `;
}

function renderStepsGroup(items) {
  const rows = items
    .map((item, index) => {
      const inner = item.type === "transport" ? renderTransportStep(item) : renderActivityStep(item);
      return `<li class="activity">
        <div class="activity__order">${index + 1}</div>
        <div>${inner}</div>
      </li>`;
    })
    .join("");
  return `<div class="day-block"><div class="day-block__heading">行程</div><ul class="activity-list">${rows}</ul></div>`;
}

function renderParkingGroup(items) {
  const rows = items.map((p) => `<div class="transport-row">${p.detail}</div>`).join("");
  return `<div class="day-block"><div class="day-block__heading">停車資訊</div>${rows}</div>`;
}

function renderAccommodationGroup(items) {
  const rows = items
    .map((a) => {
      const checkIn = a.checkIn ? `<span class="time-tag">入住 ${a.checkIn}</span>` : "";
      const checkOut = a.checkOut ? `<span class="time-tag">退房 ${a.checkOut}</span>` : "";
      return `<div class="accommodation-inline">${checkIn}${checkOut}<a href="#${a.id}">${a.name} →</a></div>`;
    })
    .join("");
  return `<div class="day-block"><div class="day-block__heading">住宿</div>${rows}</div>`;
}

function renderNoteGroup(items) {
  const rows = items.map((n) => `<div class="day-block__notes">📝 ${n.text}</div>`).join("");
  return `<div class="day-block">${rows}</div>`;
}

const GROUP_RENDERERS = {
  steps: renderStepsGroup,
  parking: renderParkingGroup,
  accommodation: renderAccommodationGroup,
  note: renderNoteGroup,
};

function renderDayTimeline(timeline) {
  return groupConsecutive(timeline)
    .map((group) => GROUP_RENDERERS[group.key](group.items))
    .join("");
}

function renderItinerary() {
  const container = document.getElementById("itinerary-list");
  const todayStr = getTodayStr();
  days.forEach((day, index) => {
    const isToday = day.date === todayStr;
    const card = el(
      "article",
      `day-card${isToday ? " day-card--today" : ""}`,
      `
      <div class="day-card__meta">DAY ${String(index + 1).padStart(2, "0")} · ${day.date}（${day.weekday}）</div>
      <h3 class="day-card__title">${day.title}</h3>
      ${renderDayTimeline(day.timeline)}
    `
    );
    card.id = day.id;
    container.appendChild(card);
  });
  return days.find((d) => d.date === todayStr) || null;
}

function renderAccommodationSection() {
  const container = document.getElementById("accommodation-list");
  let lastRegion = null;
  accommodations.forEach((acc) => {
    if (acc.region !== lastRegion) {
      container.appendChild(el("div", "accommodation-region", acc.region));
      lastRegion = acc.region;
    }
    const card = el(
      "article",
      "accommodation-card",
      `
      <div class="accommodation-card__name">${acc.name}</div>
      ${acc.address ? `<div class="accommodation-card__address">${acc.address}</div>` : ""}
      <div class="accommodation-card__links">
        ${acc.mapUrl ? `<a class="accommodation-card__link" href="${acc.mapUrl}" target="_blank" rel="noopener">在 Google Maps 開啟 →</a>` : ""}
        ${acc.websiteUrl ? `<a class="accommodation-card__link" href="${acc.websiteUrl}" target="_blank" rel="noopener">官方網站 →</a>` : ""}
      </div>
      ${acc.phone ? `<div class="accommodation-card__address">電話：${acc.phone}</div>` : ""}
      ${acc.voucher ? `<div class="accommodation-card__voucher">${acc.voucher}</div>` : ""}
    `
    );
    card.id = acc.id;
    container.appendChild(card);
  });
}

function renderTransportSection() {
  const container = document.getElementById("transport-list");
  transportServices.forEach((service) => {
    const links = (service.links || [])
      .map((l) => `<a class="accommodation-card__link" href="${l.url}" target="_blank" rel="noopener">${l.label} →</a>`)
      .join("");
    container.appendChild(
      el(
        "article",
        "accommodation-card",
        `
        <div class="accommodation-card__name">${service.category}・${service.name}</div>
        ${links ? `<div class="accommodation-card__links">${links}</div>` : ""}
        ${service.detail ? `<div class="accommodation-card__voucher">${service.detail}</div>` : ""}
      `
      )
    );
  });
}

function formatMoney(n) {
  return typeof n === "number" ? `¥${n.toLocaleString()}` : null;
}

function renderBudgetSection() {
  const container = document.getElementById("budget-list");
  const paidLabels = { prepaid: "已先付", onsite: "現場付" };

  const rows = budget.items
    .map((item) => {
      const total = formatMoney(item.total);
      const perPerson = formatMoney(item.perPerson);
      const perPersonNote = item.perPersonNote ? `<div class="budget-table__note">${item.perPersonNote}</div>` : "";
      const paidLabel = paidLabels[item.paid] || "待定";
      const paidByLabel = item.paid === "prepaid" && item.paidBy ? item.paidBy : "—";
      return `<tr>
        <td>${item.name}</td>
        <td class="${total ? "" : "cell--missing"}">${total || "待補"}</td>
        <td class="${perPerson ? "" : "cell--missing"}">${perPerson || "待補"}${perPersonNote}</td>
        <td>${paidLabel}</td>
        <td>${paidByLabel}</td>
      </tr>`;
    })
    .join("");

  const knownTotal = budget.items.reduce((sum, i) => sum + (typeof i.total === "number" ? i.total : 0), 0);
  const knownPerPerson = budget.items.reduce((sum, i) => sum + (typeof i.perPerson === "number" ? i.perPerson : 0), 0);
  const hasMissing = budget.items.some((i) => typeof i.total !== "number");

  const wrapper = el(
    "div",
    "budget-table-wrap",
    `<table class="budget-table">
      <thead>
        <tr><th>項目</th><th>總額</th><th>每人</th><th>付款</th><th>先付人</th></tr>
      </thead>
      <tbody>
        ${rows}
        <tr class="budget-table__total">
          <td>合計${hasMissing ? "（不含待補）" : ""}</td>
          <td>¥${knownTotal.toLocaleString()}</td>
          <td>¥${knownPerPerson.toLocaleString()}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>`
  );
  container.appendChild(wrapper);
}

function checklistKey(group, item) {
  return `winter-trip-2027:${group}:${item}`;
}

function renderChecklistGroup(container, title, items, groupKey) {
  const group = el("div", "checklist-group");
  group.appendChild(el("div", "checklist-group__title", title));
  const list = el("ul", "checklist");
  items.forEach((item) => {
    const key = checklistKey(groupKey, item);
    const checked = localStorage.getItem(key) === "1";
    const li = el("li");
    const label = el("label", checked ? "checked" : "", `<input type="checkbox" ${checked ? "checked" : ""}/> ${item}`);
    label.querySelector("input").addEventListener("change", (e) => {
      localStorage.setItem(key, e.target.checked ? "1" : "0");
      label.classList.toggle("checked", e.target.checked);
    });
    li.appendChild(label);
    list.appendChild(li);
  });
  group.appendChild(list);
  container.appendChild(group);
}

function renderPackingSection() {
  const container = document.getElementById("packing-list");
  renderChecklistGroup(container, "一般清單", packing.general, "packing-general");
  renderChecklistGroup(container, "雪具清單", packing.ski, "packing-ski");
}

function renderTodosSection() {
  const container = document.getElementById("todos-list");
  todos.forEach((person) => {
    renderChecklistGroup(container, person.name, person.items, `todo-${person.name}`);
  });
}

function getTodayStr() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function setupTodayPill(todayDay) {
  const pill = document.getElementById("today-pill");
  if (!todayDay) return;
  pill.href = `#${todayDay.id}`;
  pill.hidden = false;
  document.getElementById(todayDay.id).scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupStickyShadow() {
  const sentinel = document.getElementById("nav-sentinel");
  const nav = document.getElementById("jump-nav");
  const update = () => {
    nav.classList.toggle("is-stuck", sentinel.getBoundingClientRect().top < 0);
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

renderAccommodationSection();
const todayDay = renderItinerary();
renderTransportSection();
renderBudgetSection();
renderPackingSection();
renderTodosSection();
setupTodayPill(todayDay);
setupStickyShadow();
