const definitions = [
  { text: "더럽다.", color: "#ff5733" },
  { text: "자원이다.", color: "#28a745" },
  { text: "냄새난다.", color: "#007bff" },
  { text: "만든 사람이 책임져야 한다.", color: "#ffc107" }
];

let index = 0;
const textElement = document.getElementById("trash-definition");

function changeDefinition() {
  index = (index + 1) % definitions.length;
  textElement.textContent = definitions[index].text;
  textElement.style.color = definitions[index].color;
}

setInterval(changeDefinition, 1500); // 2.5초마다 변경
