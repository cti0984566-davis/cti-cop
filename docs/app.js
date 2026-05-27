const DATA_URL = "./data/latest.json";

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function importanceClass(value) {
  if (value === "High") return "importance-high";
  if (value === "Medium") return "importance-medium";
  if (value === "Low") return "importance-low";
  return "";
}

fetch(DATA_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`JSON読み込み失敗: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById("last-updated").textContent =
      `最終更新日: ${data.date}`;

    const tbody = document.getElementById("actor-table-body");
    tbody.innerHTML = "";

    data.actors.forEach((actor) => {
      const sources = Array.isArray(actor["情報源"])
        ? actor["情報源"].join(" / ")
        : "";

      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${escapeHtml(actor["属性"])}</td>
        <td class="actor-name">${escapeHtml(actor["アクター"])}</td>
        <td>${escapeHtml(actor["カテゴリ"])}</td>
        <td>${escapeHtml(actor["戦略意図"])}</td>
        <td class="${importanceClass(actor["日本にとっての重要性"])}">
          ${escapeHtml(actor["日本にとっての重要性"])}
        </td>
        <td>${escapeHtml(actor["最新の主要活動"])}</td>
        <td>${escapeHtml(actor["ステータス"])}</td>
        <td>${escapeHtml(sources)}</td>
      `;

      tbody.appendChild(tr);
    });
  })
  .catch((error) => {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<p class="error">エラー: ${escapeHtml(error.message)}</p>`
    );
  });
