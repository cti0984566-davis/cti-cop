fetch("../data/latest.json")
  .then(response => response.json())
  .then(data => {

    document.getElementById("date").innerText =
      "最終更新: " + data.date;

    const tableBody = document.getElementById("table-body");

    data.actors.forEach(actor => {

      let importanceClass = "";

      if (actor["日本にとっての重要性"] === "High") {
        importanceClass = "high";
      } else if (actor["日本にとっての重要性"] === "Medium") {
        importanceClass = "medium";
      } else {
        importanceClass = "low";
      }

      const row = `
        <tr>
          <td>${actor["属性"]}</td>
          <td>${actor["アクター"]}</td>
          <td>${actor["カテゴリ"]}</td>
          <td>${actor["戦略意図"]}</td>
          <td class="${importanceClass}">
            ${actor["日本にとっての重要性"]}
          </td>
          <td>${actor["最新の主要活動"]}</td>
          <td>${actor["情報源"].join(", ")}</td>
        </tr>
      `;

      tableBody.innerHTML += row;
    });
  });
