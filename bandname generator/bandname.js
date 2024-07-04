const adjectives = ["Electric", "Flying", "Furious", "Golden", "Loud", "Mellow", "Mystic", "Silent", "Thunderous", "Wild"];
const nouns = ["Dreamers", "Eagles", "Flames", "Giants", "Hurricanes", "Knights", "Lions", "Riders", "Wolves", "Wizards"];
document.getElementById('generate-button').addEventListener('click', generateBandName);
 function getRandomElement(arr) {
return arr[Math.floor(Math.random() * arr.length)];
  }
function generateBandName() {
const adjective = getRandomElement(adjectives);
const noun = getRandomElement(nouns);
const bandName = `${adjective} ${noun}`;
 document.getElementById('band-name').innerText = bandName;
  }