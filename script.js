// ---------------------------------------------------------------------------
// DATA — edit everything below this line as the trip gets planned.
// Rendering logic further down never needs to change for content updates.
// ---------------------------------------------------------------------------

const trip = {
  startDate: "2026-12-26",
  endDate: "2027-01-09",
};

const days = [
  {
    id: "day-1",
    date: "2026-12-26",
    weekday: "六",
    title: "集合日（新潟）",
    timeline: [
      { type: "note", text: "新潟集合，部分人可能提早到。入境城市假設為東京（待確認），12/26當天各自從東京銜接新潟的交通方式尚未定案。" },
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿（3候選尚未訂房，詳見住宿清單）" },
    ],
  },
  {
    id: "day-2",
    date: "2026-12-27",
    weekday: "日",
    title: "彌彥山・彌彥神社",
    timeline: [
      {
        type: "activity",
        order: 1,
        name: "彌彥山纜車＋彌彥神社",
        openHours: "冬季9:00–16:00，每週二公休（12/27為週日不受影響）",
        map: { name: "彌彥山纜車", url: "https://maps.google.com/?q=彌彥山纜車" },
      },
      { type: "note", text: "山頂到彌彥神社御神廟走路約15分鐘，媽媽體力不夠可留在山頂即可" },
    ],
  },
  {
    id: "day-3",
    date: "2026-12-28",
    weekday: "一",
    title: "燕三条職人工坊",
    timeline: [
      { type: "activity", order: 1, name: "諏訪田製作所", map: { name: "諏訪田製作所", url: "https://maps.google.com/?q=諏訪田製作所" } },
      { type: "activity", order: 2, name: "玉川堂", map: { name: "玉川堂", url: "https://maps.google.com/?q=玉川堂" } },
    ],
  },
  {
    id: "day-4",
    date: "2026-12-29",
    weekday: "二",
    title: "南魚沼・龍氣日歸溫泉",
    timeline: [
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿", checkOut: null },
      { type: "transport", summary: "新潟 → 南魚沼" },
      {
        type: "activity",
        order: 1,
        name: "龍氣日歸溫泉",
        openHours: "10:00–17:00（大人1,000円）／17:00–21:00（大人800円）",
        cost: "藥石風呂加購550円",
        map: { name: "龍氣日歸溫泉", url: "https://maps.google.com/?q=龍氣日歸溫泉" },
      },
      { type: "accommodation", id: "acc-rokkamachi", name: "ビジネスホテルライフ", checkIn: "15:00" },
    ],
  },
  {
    id: "day-5",
    date: "2026-12-30",
    weekday: "三",
    title: "南魚沼 → 新潟（移動日）",
    timeline: [
      { type: "accommodation", id: "acc-rokkamachi", name: "ビジネスホテルライフ", checkOut: "09:00" },
      { type: "transport", summary: "南魚沼 → 新潟", duration: "約2–2.5小時" },
      { type: "activity", order: 1, name: "魚沼之里", map: { name: "魚沼之里", url: "https://maps.google.com/?q=魚沼之里" } },
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿（尚未訂房，詳見住宿清單）" },
      { type: "note", text: "此日移動量較大，行程宜精簡（尚未定案事項）" },
    ],
  },
  {
    id: "day-6",
    date: "2026-12-31",
    weekday: "四",
    title: "新潟市區（跨年夜）",
    timeline: [
      {
        type: "activity",
        order: 1,
        name: "新潟市區觀光（跨年夜，景點待排）",
        backups: [
          { name: "萬代橋（散步看橋景）", url: "https://maps.google.com/?q=萬代橋" },
          { name: "朱鷺メッセ展望室（免費，電梯直達，360度view，最省力）", url: "https://maps.google.com/?q=朱鷺メッセ展望室" },
          { name: "古町（老街＋週末免費導覽）", url: "https://maps.google.com/?q=古町 新潟" },
          { name: "沼垂テラス商店街（玻璃工藝體驗）", url: "https://maps.google.com/?q=沼垂テラス商店街" },
        ],
      },
      { type: "note", text: "彈性備案：寺泊魚市場（海景＋海鮮，行程有空檔時可排入）" },
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
    ],
  },
  {
    id: "day-8",
    date: "2027-01-02",
    weekday: "六",
    title: "只見線景觀 → 會津若松（移動日）",
    timeline: [
      { type: "accommodation", id: "acc-niigata-1", name: "新潟駅前住宿", checkOut: null },
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
    ],
  },
  {
    id: "day-11",
    date: "2027-01-05",
    weekday: "二",
    title: "會津若松 → 入住豬苗代絕景滑雪度假村",
    timeline: [
      { type: "note", text: "當日退房：會津若松地區飯店（尚未選定，見day-8備註）" },
      { type: "transport", summary: "會津若松 → 猪苗代", duration: "約19.6km" },
      { type: "note", text: "交通方式待定，三個選項：①計程車，起跳700円+每260m加100円，粗估整趟約7,000–8,000円（需電話問車行確認）；②電車，磐越西線約25–30分鐘，510円，冬季班次不密集；③可詢問滑雪度假村是否提供會津若松/郡山駅接駁" },
      { type: "note", text: "租車異地還車：新潟取車 → 會津若松還車（猪苗代當地無可還車門市）。異地還車費參考約8,800円（豐田租車新潟空港店→會津若松駅店，2026–2027年是否有免費活動需另外確認）" },
      { type: "accommodation", id: "acc-inawashiro", name: "豬苗代絕景滑雪度假村" },
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
    ],
  },
  {
    id: "day-15",
    date: "2027-01-09",
    weekday: "六",
    title: "賦歸",
    timeline: [
      { type: "accommodation", id: "acc-inawashiro", name: "豬苗代絕景滑雪度假村", checkOut: null },
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
    region: "六日町（南魚沼）",
    name: "ビジネスホテルライフ",
    mapUrl: "https://maps.google.com/?q=ビジネスホテルライフ 六日町",
    voucher: "JR六日町駅前，含鹽化鈉溫泉大浴場，check-in 15:00 / check-out 9:00，確切價格需上訂房網站查",
  },
  {
    id: "acc-inawashiro",
    region: "猪苗代",
    name: "豬苗代絕景滑雪度假村",
    mapUrl: "https://maps.google.com/?q=豬苗代絕景滑雪度假村",
  },
];

const budget = {
  categories: [
    { name: "交通", amount: null },
    { name: "住宿", amount: null },
    { name: "活動", amount: null },
    { name: "餐飲", amount: null },
  ],
};

const packing = {
  general: ["護照", "駕照（國際駕照）", "現金 / 交通卡", "行動電源", "常備藥品"],
  ski: ["雪褲雪衣", "手套", "護目鏡", "防水登山鞋", "暖暖包"],
};

const todos = [
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

function groupConsecutive(timeline) {
  const groups = [];
  timeline.forEach((item) => {
    const last = groups[groups.length - 1];
    if (last && last.type === item.type) {
      last.items.push(item);
    } else {
      groups.push({ type: item.type, items: [item] });
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

function renderTransportGroup(items) {
  const rows = items
    .map((t) => {
      const duration = t.duration ? `（${t.duration}）` : "";
      const schedules = t.schedules ? `<div class="schedules">${t.schedules.join(" · ")}</div>` : "";
      const stations = t.boarding ? `<div class="schedules">上車：${t.boarding} ・ 下車：${t.alighting}</div>` : "";
      return `<div class="transport-row">${t.summary}${duration}${stations}${schedules}</div>`;
    })
    .join("");
  return `<div class="day-block"><div class="day-block__heading">交通</div>${rows}</div>`;
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

function renderActivityGroup(items) {
  const rows = items
    .map((a) => {
      const tags = [
        a.reservation ? `<span class="tag tag--reserve">需預約 ${a.fixedTime || ""}</span>` : "",
        a.cost ? `<span class="tag tag--cost">${a.cost}</span>` : "",
      ].join("");
      const openHours = a.openHours ? `<div class="activity__meta">營業時間 ${a.openHours}</div>` : "";
      const tagsRow = tags ? `<div class="activity__meta">${tags}</div>` : "";
      return `<li class="activity">
        <div class="activity__order">${a.order}</div>
        <div>
          <div class="activity__name">${a.name}</div>
          ${openHours}
          ${tagsRow}
          ${renderMapPins(a.map, a.backups)}
        </div>
      </li>`;
    })
    .join("");
  return `<div class="day-block"><div class="day-block__heading">活動（建議順序）</div><ul class="activity-list">${rows}</ul></div>`;
}

function renderNoteGroup(items) {
  const rows = items.map((n) => `<div class="day-block__notes">📝 ${n.text}</div>`).join("");
  return `<div class="day-block">${rows}</div>`;
}

const GROUP_RENDERERS = {
  transport: renderTransportGroup,
  parking: renderParkingGroup,
  accommodation: renderAccommodationGroup,
  activity: renderActivityGroup,
  note: renderNoteGroup,
};

function renderDayTimeline(timeline) {
  return groupConsecutive(timeline)
    .map((group) => GROUP_RENDERERS[group.type](group.items))
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
      ${acc.mapUrl ? `<a class="accommodation-card__link" href="${acc.mapUrl}" target="_blank" rel="noopener">在 Google Maps 開啟 →</a>` : ""}
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
  days.forEach((day, index) => {
    const transportItems = day.timeline.filter((item) => item.type === "transport");
    transportItems.forEach((t) => {
      const duration = t.duration ? `（${t.duration}）` : "";
      const schedules = t.schedules ? `<div class="schedules">${t.schedules.join(" · ")}</div>` : "";
      container.appendChild(
        el(
          "div",
          "transport-card",
          `<div class="transport-card__day">DAY ${String(index + 1).padStart(2, "0")} · ${day.date}</div>
           <div class="transport-row">${t.summary}${duration}${schedules}</div>`
        )
      );
    });
  });
}

function renderBudgetSection() {
  const container = document.getElementById("budget-list");
  const card = el("div", "budget-card");
  let total = 0;
  let hasMissing = false;
  budget.categories.forEach((c) => {
    if (typeof c.amount === "number") {
      total += c.amount;
      card.appendChild(el("div", "budget-row", `<span>${c.name}</span><span>¥${c.amount.toLocaleString()}</span>`));
    } else {
      hasMissing = true;
      card.appendChild(el("div", "budget-row", `<span>${c.name}</span><span class="budget-row__amount--missing">待補</span>`));
    }
  });
  card.appendChild(
    el(
      "div",
      "budget-row budget-row--total",
      `<span>合計${hasMissing ? "（不含待補項目）" : ""}</span><span>¥${total.toLocaleString()}</span>`
    )
  );
  container.appendChild(card);
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
