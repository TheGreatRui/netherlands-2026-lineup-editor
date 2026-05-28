"use strict";

const DATA_RETRIEVED = "2026-05-28";

const players = [
  { id: "bart-verbruggen", name: "Bart Verbruggen", position: "Goalkeeper", group: "GK", age: 23, club: "Brighton & Hove Albion", valueText: "€40.00m", value: 40 },
  { id: "robin-roefs", name: "Robin Roefs", position: "Goalkeeper", group: "GK", age: 23, club: "Sunderland AFC", valueText: "€25.00m", value: 25 },
  { id: "mark-flekken", name: "Mark Flekken", position: "Goalkeeper", group: "GK", age: 32, club: "Bayer 04 Leverkusen", valueText: "€6.00m", value: 6 },
  { id: "micky-van-de-ven", name: "Micky van de Ven", position: "Centre-Back", group: "DEF", age: 25, club: "Tottenham Hotspur", valueText: "€65.00m", value: 65 },
  { id: "jan-paul-van-hecke", name: "Jan Paul van Hecke", position: "Centre-Back", group: "DEF", age: 25, club: "Brighton & Hove Albion", valueText: "€35.00m", value: 35 },
  { id: "virgil-van-dijk", name: "Virgil van Dijk", position: "Centre-Back", group: "DEF", age: 34, club: "Liverpool FC", valueText: "€18.00m", value: 18 },
  { id: "nathan-ake", name: "Nathan Ake", position: "Centre-Back", group: "DEF", age: 31, club: "Manchester City", valueText: "€15.00m", value: 15 },
  { id: "jorrel-hato", name: "Jorrel Hato", position: "Left-Back", group: "DEF", age: 20, club: "Chelsea FC", valueText: "€35.00m", value: 35 },
  { id: "jurrien-timber", name: "Jurrien Timber", position: "Right-Back", group: "DEF", age: 24, club: "Arsenal FC", valueText: "€70.00m", value: 70 },
  { id: "denzel-dumfries", name: "Denzel Dumfries", position: "Right-Back", group: "DEF", age: 30, club: "Inter Milan", valueText: "€25.00m", value: 25 },
  { id: "mats-wieffer", name: "Mats Wieffer", position: "Right-Back", group: "DEF", age: 26, club: "Brighton & Hove Albion", valueText: "€25.00m", value: 25 },
  { id: "ryan-gravenberch", name: "Ryan Gravenberch", position: "Defensive Midfield", group: "MID", age: 24, club: "Liverpool FC", valueText: "€90.00m", value: 90 },
  { id: "teun-koopmeiners", name: "Teun Koopmeiners", position: "Defensive Midfield", group: "MID", age: 28, club: "Juventus FC", valueText: "€20.00m", value: 20 },
  { id: "marten-de-roon", name: "Marten de Roon", position: "Defensive Midfield", group: "MID", age: 35, club: "Atalanta BC", valueText: "€3.50m", value: 3.5 },
  { id: "tijjani-reijnders", name: "Tijjani Reijnders", position: "Central Midfield", group: "MID", age: 27, club: "Manchester City", valueText: "€60.00m", value: 60 },
  { id: "frenkie-de-jong", name: "Frenkie de Jong", position: "Central Midfield", group: "MID", age: 29, club: "FC Barcelona", valueText: "€45.00m", value: 45 },
  { id: "quinten-timber", name: "Quinten Timber", position: "Central Midfield", group: "MID", age: 24, club: "Olympique Marseille", valueText: "€25.00m", value: 25 },
  { id: "justin-kluivert", name: "Justin Kluivert", position: "Attacking Midfield", group: "MID", age: 27, club: "AFC Bournemouth", valueText: "€30.00m", value: 30 },
  { id: "guus-til", name: "Guus Til", position: "Attacking Midfield", group: "MID", age: 28, club: "PSV Eindhoven", valueText: "€15.00m", value: 15 },
  { id: "cody-gakpo", name: "Cody Gakpo", position: "Left Winger", group: "ATT", age: 27, club: "Liverpool FC", valueText: "€65.00m", value: 65 },
  { id: "crysencio-summerville", name: "Crysencio Summerville", position: "Left Winger", group: "ATT", age: 24, club: "West Ham United", valueText: "€30.00m", value: 30 },
  { id: "noa-lang", name: "Noa Lang", position: "Left Winger", group: "ATT", age: 26, club: "Galatasaray", valueText: "€22.00m", value: 22 },
  { id: "memphis-depay", name: "Memphis Depay", position: "Second Striker", group: "ATT", age: 32, club: "Sport Club Corinthians Paulista", valueText: "€7.00m", value: 7 },
  { id: "donyell-malen", name: "Donyell Malen", position: "Centre-Forward", group: "ATT", age: 27, club: "AS Roma", valueText: "€35.00m", value: 35 },
  { id: "brian-brobbey", name: "Brian Brobbey", position: "Centre-Forward", group: "ATT", age: 24, club: "Sunderland AFC", valueText: "€25.00m", value: 25 },
  { id: "wout-weghorst", name: "Wout Weghorst", position: "Centre-Forward", group: "ATT", age: 33, club: "Ajax Amsterdam", valueText: "€2.50m", value: 2.5 }
];

const formations = {
  "4-3-3": [
    slot("gk", "GK", 50, 90),
    slot("lb", "LB", 18, 73),
    slot("lcb", "LCB", 38, 75),
    slot("rcb", "RCB", 62, 75),
    slot("rb", "RB", 82, 73),
    slot("dm", "DM", 50, 58),
    slot("lcm", "LCM", 33, 48),
    slot("rcm", "RCM", 67, 48),
    slot("lw", "LW", 20, 25),
    slot("st", "ST", 50, 18),
    slot("rw", "RW", 80, 25)
  ],
  "4-2-3-1": [
    slot("gk", "GK", 50, 90),
    slot("lb", "LB", 18, 73),
    slot("lcb", "LCB", 38, 75),
    slot("rcb", "RCB", 62, 75),
    slot("rb", "RB", 82, 73),
    slot("ldm", "LDM", 39, 58),
    slot("rdm", "RDM", 61, 58),
    slot("lam", "LAM", 22, 36),
    slot("cam", "CAM", 50, 35),
    slot("ram", "RAM", 78, 36),
    slot("st", "ST", 50, 18)
  ],
  "3-4-3": [
    slot("gk", "GK", 50, 90),
    slot("lcb", "LCB", 28, 74),
    slot("cb", "CB", 50, 77),
    slot("rcb", "RCB", 72, 74),
    slot("lm", "LM", 18, 52),
    slot("lcm", "LCM", 40, 53),
    slot("rcm", "RCM", 60, 53),
    slot("rm", "RM", 82, 52),
    slot("lw", "LW", 20, 25),
    slot("st", "ST", 50, 18),
    slot("rw", "RW", 80, 25)
  ],
  "3-5-2": [
    slot("gk", "GK", 50, 90),
    slot("lcb", "LCB", 28, 74),
    slot("cb", "CB", 50, 77),
    slot("rcb", "RCB", 72, 74),
    slot("lwb", "LWB", 16, 54),
    slot("lcm", "LCM", 35, 52),
    slot("dm", "DM", 50, 60),
    slot("rcm", "RCM", 65, 52),
    slot("rwb", "RWB", 84, 54),
    slot("ls", "LS", 39, 21),
    slot("rs", "RS", 61, 21)
  ],
  "4-4-2": [
    slot("gk", "GK", 50, 90),
    slot("lb", "LB", 18, 73),
    slot("lcb", "LCB", 38, 75),
    slot("rcb", "RCB", 62, 75),
    slot("rb", "RB", 82, 73),
    slot("lm", "LM", 18, 50),
    slot("lcm", "LCM", 40, 53),
    slot("rcm", "RCM", 60, 53),
    slot("rm", "RM", 82, 50),
    slot("ls", "LS", 39, 22),
    slot("rs", "RS", 61, 22)
  ],
  "5-3-2": [
    slot("gk", "GK", 50, 90),
    slot("lwb", "LWB", 14, 68),
    slot("lcb", "LCB", 31, 75),
    slot("cb", "CB", 50, 78),
    slot("rcb", "RCB", 69, 75),
    slot("rwb", "RWB", 86, 68),
    slot("lcm", "LCM", 35, 52),
    slot("cm", "CM", 50, 58),
    slot("rcm", "RCM", 65, 52),
    slot("ls", "LS", 39, 22),
    slot("rs", "RS", 61, 22)
  ]
};

const defaultStarters = [
  "bart-verbruggen",
  "jorrel-hato",
  "micky-van-de-ven",
  "virgil-van-dijk",
  "jurrien-timber",
  "ryan-gravenberch",
  "frenkie-de-jong",
  "tijjani-reijnders",
  "cody-gakpo",
  "memphis-depay",
  "donyell-malen"
];

const playerById = new Map(players.map((player) => [player.id, player]));

const state = {
  formation: "4-3-3",
  teamName: "荷兰国家队 2026",
  lineup: {},
  captain: "virgil-van-dijk",
  filter: "ALL",
  search: "",
  selectedPlayer: null
};

const dom = {};
let toastTimer = null;

document.addEventListener("DOMContentLoaded", () => {
  cacheDom();
  bindEvents();
  seedDefaultLineup();
  loadStateFromHash();
  render();
});

function slot(id, label, x, y) {
  return { id, label, x, y };
}

function cacheDom() {
  dom.squadList = document.querySelector("#squadList");
  dom.pitch = document.querySelector("#pitch");
  dom.formationSelect = document.querySelector("#formationSelect");
  dom.teamName = document.querySelector("#teamName");
  dom.playerSearch = document.querySelector("#playerSearch");
  dom.filterButtons = [...document.querySelectorAll(".filter-button")];
  dom.autoFill = document.querySelector("#autoFill");
  dom.copyLink = document.querySelector("#copyLink");
  dom.copyText = document.querySelector("#copyText");
  dom.clearLineup = document.querySelector("#clearLineup");
  dom.starterCount = document.querySelector("#starterCount");
  dom.totalValue = document.querySelector("#totalValue");
  dom.pitchTeamName = document.querySelector("#pitchTeamName");
  dom.pitchFormation = document.querySelector("#pitchFormation");
  dom.averageAge = document.querySelector("#averageAge");
  dom.lineupValue = document.querySelector("#lineupValue");
  dom.captainName = document.querySelector("#captainName");
  dom.captainBadge = document.querySelector("#captainBadge");
  dom.lineupList = document.querySelector("#lineupList");
  dom.benchList = document.querySelector("#benchList");
  dom.benchCount = document.querySelector("#benchCount");
  dom.toast = document.querySelector("#toast");
}

function bindEvents() {
  dom.formationSelect.addEventListener("change", () => {
    reshapeLineup(dom.formationSelect.value);
    render();
    showToast(`已切换为 ${state.formation}`);
  });

  dom.teamName.addEventListener("input", () => {
    state.teamName = dom.teamName.value.trim() || "荷兰国家队 2026";
    dom.pitchTeamName.textContent = state.teamName;
    updateHash();
  });

  dom.playerSearch.addEventListener("input", () => {
    state.search = dom.playerSearch.value.trim().toLowerCase();
    renderSquad();
  });

  dom.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderSquad();
      renderFilters();
    });
  });

  dom.squadList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-player-id]");
    if (!card) return;
    state.selectedPlayer = card.dataset.playerId;
    render();
  });

  dom.squadList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest("[data-player-id]");
    if (!card) return;
    event.preventDefault();
    state.selectedPlayer = card.dataset.playerId;
    render();
  });

  dom.squadList.addEventListener("dragstart", (event) => {
    const card = event.target.closest("[data-player-id]");
    if (!card) return;
    event.dataTransfer.setData("application/json", JSON.stringify({ type: "player", id: card.dataset.playerId }));
    event.dataTransfer.effectAllowed = "move";
  });

  dom.squadList.addEventListener("dragover", (event) => {
    if (dragPayload(event)) event.preventDefault();
  });

  dom.squadList.addEventListener("drop", (event) => {
    const payload = dragPayload(event);
    if (!payload || payload.type !== "slot") return;
    event.preventDefault();
    state.lineup[payload.slotId] = null;
    ensureCaptain();
    render();
    showToast("已移出首发");
  });

  dom.pitch.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-action]");
    if (actionButton) {
      event.stopPropagation();
      const slotElement = actionButton.closest("[data-slot-id]");
      const slotId = slotElement.dataset.slotId;
      const playerId = state.lineup[slotId];
      if (actionButton.dataset.action === "clear") {
        state.lineup[slotId] = null;
        ensureCaptain();
        render();
        return;
      }
      if (actionButton.dataset.action === "captain" && playerId) {
        state.captain = playerId;
        render();
        showToast(`${playerById.get(playerId).name} 已设为队长`);
      }
      return;
    }

    const slotElement = event.target.closest("[data-slot-id]");
    if (!slotElement) return;
    handleSlotPick(slotElement.dataset.slotId);
  });

  dom.pitch.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const slotElement = event.target.closest("[data-slot-id]");
    if (!slotElement) return;
    event.preventDefault();
    handleSlotPick(slotElement.dataset.slotId);
  });

  dom.pitch.addEventListener("dragstart", (event) => {
    const slotElement = event.target.closest("[data-slot-id]");
    if (!slotElement) return;
    const playerId = state.lineup[slotElement.dataset.slotId];
    if (!playerId) return;
    event.dataTransfer.setData("application/json", JSON.stringify({ type: "slot", slotId: slotElement.dataset.slotId, id: playerId }));
    event.dataTransfer.effectAllowed = "move";
  });

  dom.pitch.addEventListener("dragover", (event) => {
    const slotElement = event.target.closest("[data-slot-id]");
    if (!slotElement || !dragPayload(event)) return;
    event.preventDefault();
    slotElement.classList.add("is-target");
  });

  dom.pitch.addEventListener("dragleave", (event) => {
    const slotElement = event.target.closest("[data-slot-id]");
    if (slotElement) slotElement.classList.remove("is-target");
  });

  dom.pitch.addEventListener("drop", (event) => {
    const slotElement = event.target.closest("[data-slot-id]");
    const payload = dragPayload(event);
    if (!slotElement || !payload) return;
    event.preventDefault();
    slotElement.classList.remove("is-target");
    dropOnSlot(payload, slotElement.dataset.slotId);
  });

  dom.autoFill.addEventListener("click", () => {
    fillCurrentFormation(defaultStarters);
    state.captain = "virgil-van-dijk";
    render();
    showToast("已载入默认首发");
  });

  dom.copyLink.addEventListener("click", async () => {
    updateHash();
    await writeClipboard(window.location.href);
    showToast("链接已复制");
  });

  dom.copyText.addEventListener("click", async () => {
    await writeClipboard(buildLineupText());
    showToast("名单已复制");
  });

  dom.clearLineup.addEventListener("click", () => {
    state.lineup = {};
    state.selectedPlayer = null;
    state.captain = null;
    render();
    showToast("首发已清空");
  });
}

function seedDefaultLineup() {
  fillCurrentFormation(defaultStarters);
}

function fillCurrentFormation(playerIds) {
  state.lineup = {};
  currentSlots().forEach((formationSlot, index) => {
    state.lineup[formationSlot.id] = playerIds[index] || null;
  });
  ensureCaptain();
}

function reshapeLineup(nextFormation) {
  const selected = currentSlots()
    .map((formationSlot) => state.lineup[formationSlot.id])
    .filter(Boolean);

  state.formation = nextFormation;
  state.lineup = {};
  currentSlots().forEach((formationSlot, index) => {
    state.lineup[formationSlot.id] = selected[index] || null;
  });
  ensureCaptain();
}

function currentSlots() {
  return formations[state.formation] || formations["4-3-3"];
}

function handleSlotPick(slotId) {
  if (state.selectedPlayer) {
    assignPlayerToSlot(state.selectedPlayer, slotId);
    state.selectedPlayer = null;
    render();
    return;
  }

  const playerId = state.lineup[slotId];
  if (playerId) {
    state.selectedPlayer = playerId;
    render();
  }
}

function dropOnSlot(payload, targetSlotId) {
  if (payload.type === "player") {
    assignPlayerToSlot(payload.id, targetSlotId);
  }

  if (payload.type === "slot") {
    const sourceSlotId = payload.slotId;
    if (sourceSlotId === targetSlotId) return;
    const sourcePlayer = state.lineup[sourceSlotId];
    const targetPlayer = state.lineup[targetSlotId];
    state.lineup[targetSlotId] = sourcePlayer || null;
    state.lineup[sourceSlotId] = targetPlayer || null;
  }

  ensureCaptain();
  render();
}

function assignPlayerToSlot(playerId, slotId) {
  Object.keys(state.lineup).forEach((key) => {
    if (state.lineup[key] === playerId) state.lineup[key] = null;
  });
  state.lineup[slotId] = playerId;
  if (!state.captain) state.captain = playerId;
}

function ensureCaptain() {
  const selectedIds = new Set(selectedPlayers().map((player) => player.id));
  if (state.captain && selectedIds.has(state.captain)) return;
  state.captain = selectedIds.has("virgil-van-dijk") ? "virgil-van-dijk" : [...selectedIds][0] || null;
}

function selectedPlayers() {
  return currentSlots()
    .map((formationSlot) => state.lineup[formationSlot.id])
    .filter(Boolean)
    .map((playerId) => playerById.get(playerId))
    .filter(Boolean);
}

function render() {
  renderStaticControls();
  renderFilters();
  renderPitch();
  renderSquad();
  renderDetails();
  updateHash();
}

function renderStaticControls() {
  dom.formationSelect.value = state.formation;
  dom.teamName.value = state.teamName;
  dom.pitchTeamName.textContent = state.teamName;
  dom.pitchFormation.textContent = state.formation;
}

function renderFilters() {
  dom.filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === state.filter);
  });
}

function renderPitch() {
  const slotsHtml = currentSlots()
    .map((formationSlot) => {
      const player = playerById.get(state.lineup[formationSlot.id]);
      const isCaptain = player && player.id === state.captain;
      const emptyClass = player ? "" : " is-empty";
      const edgeClass = formationSlot.x >= 78 ? " edge-right" : formationSlot.x <= 22 ? " edge-left" : "";
      const draggable = player ? "true" : "false";
      const content = player
        ? `
          <span class="slot-position">${formationSlot.label}</span>
          <span class="slot-name">
            <span class="slot-full">${escapeHtml(player.name)}${isCaptain ? " (C)" : ""}</span>
            <span class="slot-short">${escapeHtml(compactName(player))}${isCaptain ? " (C)" : ""}</span>
          </span>
          <span class="slot-club">${escapeHtml(player.club)}</span>
          <span class="slot-tools">
            <button class="slot-tool ${isCaptain ? "is-captain" : ""}" type="button" data-action="captain" aria-label="设为队长">C</button>
            <button class="slot-tool" type="button" data-action="clear" aria-label="移出首发">×</button>
          </span>
        `
        : `
          <span class="slot-position">${formationSlot.label}</span>
          <span class="slot-name">空位</span>
        `;

      return `
        <div class="slot${emptyClass}${edgeClass}" style="--x:${formationSlot.x};--y:${formationSlot.y}" role="button" tabindex="0" draggable="${draggable}" data-slot-id="${formationSlot.id}" aria-label="${formationSlot.label} ${player ? escapeHtml(player.name) : "空位"}">
          ${content}
        </div>
      `;
    })
    .join("");

  dom.pitch.innerHTML = `
    <div class="box-line top" aria-hidden="true"></div>
    <div class="box-line bottom" aria-hidden="true"></div>
    ${slotsHtml}
  `;
}

function renderSquad() {
  const selectedIds = new Set(selectedPlayers().map((player) => player.id));
  const search = state.search;
  const filtered = players.filter((player) => {
    const matchesFilter = state.filter === "ALL" || player.group === state.filter;
    const haystack = `${player.name} ${player.position} ${player.club}`.toLowerCase();
    return matchesFilter && (!search || haystack.includes(search));
  });

  dom.squadList.innerHTML = filtered
    .map((player) => {
      const inLineup = selectedIds.has(player.id);
      const active = state.selectedPlayer === player.id;
      const classes = [
        "player-card",
        inLineup ? "is-in-lineup" : "",
        active ? "is-selected" : ""
      ].filter(Boolean).join(" ");

      return `
        <article class="${classes}" tabindex="0" draggable="true" data-player-id="${player.id}" aria-label="${escapeHtml(player.name)} ${inLineup ? "已在首发" : ""}">
          <span class="shirt ${player.group === "GK" ? "gk" : ""}" aria-hidden="true">${initials(player.name)}</span>
          <span class="player-main">
            <span class="player-name">${escapeHtml(player.name)}</span>
            <span class="player-meta">${escapeHtml(player.position)} · ${player.age}</span>
            <span class="player-submeta">${escapeHtml(player.club)}</span>
          </span>
          <span class="value-pill">${player.valueText}</span>
        </article>
      `;
    })
    .join("");
}

function renderDetails() {
  const lineup = currentSlots()
    .map((formationSlot) => ({ slot: formationSlot, player: playerById.get(state.lineup[formationSlot.id]) }))
    .filter((item) => item.player);

  const selected = lineup.map((item) => item.player);
  const selectedIds = new Set(selected.map((player) => player.id));
  const totalValue = selected.reduce((sum, player) => sum + player.value, 0);
  const averageAge = selected.length
    ? (selected.reduce((sum, player) => sum + player.age, 0) / selected.length).toFixed(1)
    : "-";
  const captain = state.captain ? playerById.get(state.captain) : null;
  const bench = players.filter((player) => !selectedIds.has(player.id));

  dom.starterCount.textContent = `${selected.length}/11 首发`;
  dom.totalValue.textContent = formatValue(totalValue);
  dom.averageAge.textContent = averageAge;
  dom.lineupValue.textContent = formatValue(totalValue);
  dom.captainName.textContent = captain ? captain.name : "未设置";
  dom.captainBadge.style.opacity = captain ? "1" : "0.35";
  dom.benchCount.textContent = String(bench.length);

  dom.lineupList.innerHTML = currentSlots()
    .map((formationSlot) => {
      const player = playerById.get(state.lineup[formationSlot.id]);
      return `
        <li class="lineup-row">
          <span class="lineup-pos">${formationSlot.label}</span>
          <span class="lineup-player">${player ? escapeHtml(player.name) : "空位"}</span>
          <span class="lineup-tag">${player && player.id === state.captain ? "C" : player ? player.valueText : "-"}</span>
        </li>
      `;
    })
    .join("");

  dom.benchList.innerHTML = bench
    .map((player) => `<span class="bench-chip">${escapeHtml(player.name)}</span>`)
    .join("");
}

function buildLineupText() {
  const rows = currentSlots()
    .map((formationSlot) => {
      const player = playerById.get(state.lineup[formationSlot.id]);
      const captainMark = player && player.id === state.captain ? " (C)" : "";
      return `${formationSlot.label}: ${player ? `${player.name}${captainMark} - ${player.club}` : "空位"}`;
    })
    .join("\n");

  const bench = players
    .filter((player) => !selectedPlayers().some((selected) => selected.id === player.id))
    .map((player) => player.name)
    .join(", ");

  return `${state.teamName}\n阵型：${state.formation}\n数据日期：${DATA_RETRIEVED}\n\n${rows}\n\n未入选：${bench}`;
}

function updateHash() {
  const payload = {
    f: state.formation,
    n: state.teamName,
    l: state.lineup,
    c: state.captain
  };
  const hash = encodeBase64Url(JSON.stringify(payload));
  window.history.replaceState(null, "", `#${hash}`);
}

function loadStateFromHash() {
  if (!window.location.hash || window.location.hash.length < 2) return;
  try {
    const payload = JSON.parse(decodeBase64Url(window.location.hash.slice(1)));
    if (payload.f && formations[payload.f]) state.formation = payload.f;
    if (typeof payload.n === "string") state.teamName = payload.n.slice(0, 80) || state.teamName;
    if (payload.l && typeof payload.l === "object") {
      state.lineup = {};
      currentSlots().forEach((formationSlot) => {
        const playerId = payload.l[formationSlot.id];
        state.lineup[formationSlot.id] = playerById.has(playerId) ? playerId : null;
      });
    }
    state.captain = playerById.has(payload.c) ? payload.c : state.captain;
    ensureCaptain();
  } catch (error) {
    console.warn("Could not load lineup hash", error);
  }
}

function encodeBase64Url(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeBase64Url(value) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(normalized + padding);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function dragPayload(event) {
  try {
    const raw = event.dataTransfer.getData("application/json");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

async function writeClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showToast(message) {
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    dom.toast.classList.remove("is-visible");
  }, 1800);
}

function formatValue(value) {
  if (!value) return "€0m";
  return `€${Number(value.toFixed(1)).toLocaleString("en-US")}m`;
}

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function compactName(player) {
  const names = {
    "bart-verbruggen": "Verbruggen",
    "micky-van-de-ven": "Van de Ven",
    "virgil-van-dijk": "Van Dijk",
    "jurrien-timber": "Timber",
    "ryan-gravenberch": "Gravenberch",
    "frenkie-de-jong": "De Jong",
    "tijjani-reijnders": "Reijnders",
    "cody-gakpo": "Gakpo",
    "memphis-depay": "Depay",
    "donyell-malen": "Malen"
  };
  return names[player.id] || player.name.split(/\s+/).slice(-1)[0];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
