const definitions = [
  { text: "도처에 존재한다.", color: "#7B68EE" },
  { text: "쓸모 없다.", color: "#ff5733" },
  { text: "냄새난다.", color: "#800000" },
  { text: "더럽다.", color: "#007bff" },
  { text: "위험하다.", color: "#28a745" },
  { text: "자원이다.", color: "#CD5C5C" },
];

const problems = [
  { text: "불결해서,", color: "#e74c3c" },
  { text: "너무 많아서,", color: "#8e44ad" },
  { text: "환경을 오염시켜서,", color: "#3498db" },
]

const solutions = [
  { text: "무결하게 하는", color: "#e74c3c" },
  { text: "양을 줄일 수 있는", color: "#8e44ad" },
  { text: "환경을 오염시키지 않을 수 있는", color: "#3498db" },
]

let definitionIndex = 0;
let problemIndex = 0;
let solutionIndex = 0;

const definitionElement = document.getElementById("trash-definition");
const problemElement = document.getElementById("trash-problem");
const solutionElement = document.getElementById("trash-solution");

function changeDefinition() {
  definitionIndex = (definitionIndex + 1) % definitions.length;
  definitionElement.textContent = definitions[definitionIndex].text;
  definitionElement.style.color = definitions[definitionIndex].color;
}

function changeProblem() {
  problemIndex = (problemIndex + 1) % problems.length;
  problemElement.textContent = problems[problemIndex].text;
  problemElement.style.color = problems[problemIndex].color;
}

function changeSolution() {
  solutionIndex = (solutionIndex + 1) % solutions.length;
  solutionElement.textContent = solutions[solutionIndex].text;
  solutionElement.style.color = solutions[solutionIndex].color;
}

setInterval(changeDefinition, 1500); // 2.5초마다 변경
setInterval(changeProblem, 1500);
setInterval(changeSolution, 1500);

