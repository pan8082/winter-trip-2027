const days = [
  {
    date: "2027-XX-XX",
    title: "Day 1 — 出發",
    items: ["抵達機場", "入住飯店", "晚餐"],
  },
];

const container = document.getElementById("itinerary");

for (const day of days) {
  const card = document.createElement("div");
  card.className = "day-card";
  card.innerHTML = `
    <h2>${day.title}</h2>
    <div class="date">${day.date}</div>
    <ul>${day.items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
  container.appendChild(card);
}
