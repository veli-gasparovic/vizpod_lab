function generateRandomDataset(size) {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
    "Hannah",
    "Ivan",
    "Julia",
  ];
  const eyeColors = ["blue", "green", "brown", "hazel", "gray"];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomAge() {
    return Math.floor(Math.random() * 101); // Age between 0 and 100
  }

  function getRandomScore() {
    return Math.floor(Math.random() * 101); // Score between 0 and 100
  }

  return Array.from({ length: size }, () => ({
    name: getRandomElement(names),
    age: getRandomAge(),
    score: getRandomScore(), // New numeric property for X/Y scatter plot
    eyeColor: getRandomElement(eyeColors),
  }));
}

const dataset = generateRandomDataset(20);

console.log(dataset);

const svg1 = d3.select("#viz1");
const parent = svg1.node().parentNode.getBoundingClientRect();
const width = parent.width;
const height = parent.height;

console.log(width, height);

svg1.attr("width", width).attr("height", height);
