// ---------------------------------------------------------------------------
// DATA — edit everything below this line as the trip gets planned.
// Rendering logic further down never needs to change for content updates.
// ---------------------------------------------------------------------------

const trip = {
  startDate: "2027-01-25",
  endDate: "2027-01-30",
};

const days = [
  {
    id: "day-1",
    date: "2027-01-25",
    weekday: "一",
    title: "抵達松山",
    hasCar: false,
    transport: [
      {
        summary: "松山 → 高松",
        duration: "約 2.5 小時",
        boarding: "大街道 Lawson 旁 / 松山市 B3・B4 月台",
        alighting: "県庁通り",
        schedules: ["大街道 16:36–19:06", "松山市 17:18–19:31", "大街道 18:26–20:56"],
      },
    ],
    parking: null,
    accommodation: { id: "acc-sample-1", name: "範例飯店 A", checkIn: "15:00", checkOut: null },
    activities: [
      {
        order: 1,
        name: "道後溫泉本館",
        openHours: "06:00–23:00",
        reservation: false,
        cost: "¥460",
      },
      {
        order: 2,
        name: "範例餐廳（需預約）",
        openHours: "11:30–14:00, 17:30–21:00",
        reservation: true,
        fixedTime: "19:00",
        cost: "約 ¥5,000 / 人",
      },
    ],
    map: {
      primary: [{ name: "道後溫泉本館", url: "https://maps.google.com/?q=道後溫泉本館" }],
      backup: [
        { name: "備選午餐 A", url: "https://maps.google.com/?q=備選午餐A" },
        { name: "備選午餐 B", url: "https://maps.google.com/?q=備選午餐B" },
      ],
    },
    notes: "",
  },
  {
    id: "day-2",
    date: "2027-01-26",
    weekday: "二",
    title: "自駕滑雪日",
    hasCar: true,
    transport: [
      {
        summary: "飯店 → 滑雪場",
        duration: "約 40 分鐘（自駕）",
      },
    ],
    parking: "滑雪場第 2 停車場，建議 08:30 前抵達（旺季易滿）",
    accommodation: { id: "acc-sample-1", name: "範例飯店 A", checkIn: null, checkOut: null },
    activities: [
      { order: 1, name: "滑雪場（一日券）", openHours: "08:30–16:30", reservation: false, cost: "¥6,000 / 人" },
    ],
    map: {
      primary: [{ name: "滑雪場", url: "https://maps.google.com/?q=滑雪場" }],
      backup: [],
    },
    notes: "記得帶護目鏡跟手套",
  },
];

const accommodations = [
  {
    id: "acc-sample-1",
    region: "松山",
    name: "範例飯店 A",
    address: "〒000-0000 愛媛県松山市範例1-2-3",
    mapUrl: "https://maps.google.com/?q=範例飯店A",
    phone: "000-000-0000",
    voucher: "訂房確認：2027/01/25 入住，2 晚，2 房 4 人，含早餐。",
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
  { name: "Lynn", items: ["訂機票", "確認雪具租借"] },
  { name: "旅伴 B", items: ["申請國際駕照"] },
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

function renderTransportBlock(transport) {
  if (!transport || !transport.length) return "";
  const rows = transport
    .map((t) => {
      const schedules = t.schedules
        ? `<div class="schedules">${t.schedules.join(" · ")}</div>`
        : "";
      const stations = t.boarding
        ? `<div class="schedules">上車：${t.boarding} ・ 下車：${t.alighting}</div>`
        : "";
      return `<div class="transport-row">${t.summary}（${t.duration}）${stations}${schedules}</div>`;
    })
    .join("");
  return `<div class="day-block"><div class="day-block__heading">交通</div>${rows}</div>`;
}

function renderParkingBlock(parking) {
  if (!parking) return "";
  return `<div class="day-block"><div class="day-block__heading">停車資訊</div><div class="transport-row">${parking}</div></div>`;
}

function renderAccommodationInline(accommodation) {
  if (!accommodation) return "";
  const checkIn = accommodation.checkIn ? `<span class="time-tag">入住 ${accommodation.checkIn}</span>` : "";
  const checkOut = accommodation.checkOut ? `<span class="time-tag">退房 ${accommodation.checkOut}</span>` : "";
  return `<div class="day-block accommodation-inline">
    <div class="day-block__heading">住宿</div>
    ${checkIn}${checkOut}<a href="#${accommodation.id}">${accommodation.name} →</a>
  </div>`;
}

function renderActivitiesBlock(activities) {
  if (!activities || !activities.length) return "";
  const items = activities
    .map((a) => {
      const tags = [
        a.reservation ? `<span class="tag tag--reserve">需預約 ${a.fixedTime || ""}</span>` : "",
        a.cost ? `<span class="tag tag--cost">${a.cost}</span>` : "",
      ].join("");
      return `<li class="activity">
        <div class="activity__order">${a.order}</div>
        <div>
          <div class="activity__name">${a.name}</div>
          <div class="activity__meta">營業時間 ${a.openHours}</div>
          <div class="activity__meta">${tags}</div>
        </div>
      </li>`;
    })
    .join("");
  return `<div class="day-block"><div class="day-block__heading">活動（建議順序）</div><ul class="activity-list">${items}</ul></div>`;
}

function renderMapBlock(map) {
  if (!map || (!map.primary.length && !map.backup.length)) return "";
  const pin = (p, backup) =>
    `<li class="map-pin${backup ? " map-pin--backup" : ""}"><a href="${p.url}" target="_blank" rel="noopener">📍 ${p.name}</a>${
      backup ? '<span class="map-pin__badge">備選</span>' : ""
    }</li>`;
  const items = [...map.primary.map((p) => pin(p, false)), ...map.backup.map((p) => pin(p, true))].join("");
  return `<div class="day-block"><div class="day-block__heading">地圖</div><ul class="map-pins">${items}</ul></div>`;
}

function renderNotesBlock(notes) {
  if (!notes) return "";
  return `<div class="day-block"><div class="day-block__notes">📝 ${notes}</div></div>`;
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
      <div class="day-card__label">DAY ${String(index + 1).padStart(2, "0")}</div>
      <div class="day-card__date">${day.date}（${day.weekday}）</div>
      <h3 class="day-card__title">${day.title}</h3>
      ${renderTransportBlock(day.transport)}
      ${renderParkingBlock(day.parking)}
      ${renderAccommodationInline(day.accommodation)}
      ${renderActivitiesBlock(day.activities)}
      ${renderMapBlock(day.map)}
      ${renderNotesBlock(day.notes)}
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
      <div class="accommodation-card__address">${acc.address}</div>
      <a class="accommodation-card__link" href="${acc.mapUrl}" target="_blank" rel="noopener">在 Google Maps 開啟 →</a>
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
    if (!day.transport || !day.transport.length) return;
    day.transport.forEach((t) => {
      const schedules = t.schedules ? `<div class="schedules">${t.schedules.join(" · ")}</div>` : "";
      container.appendChild(
        el(
          "div",
          "transport-card",
          `<div class="transport-card__day">DAY ${String(index + 1).padStart(2, "0")} · ${day.date}</div>
           <div class="transport-row">${t.summary}（${t.duration}）${schedules}</div>`
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
