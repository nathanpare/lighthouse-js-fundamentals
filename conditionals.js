const temperature = -10;

if (temperature < 0) {
  console.log("Make sure you pick out a warm jacket!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
//New Example
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
//New Example
if (!raining) {
  console.log("Leave your umbrella at home!");
}