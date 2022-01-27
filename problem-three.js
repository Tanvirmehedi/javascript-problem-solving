// Practice Challenge-1

// What is your job every day

// 1) Unlock the module at 8 o'clock at night

// 2) Practice watching quick videos

// 3) Take notes while watching the video

// 4) When the module is finished, practice the whole module by yourself

// 5) If you don't understand something (think here but there is a condition), join the support session

// Now your job is to run a for loop 10 times and show the above things as output. The same thing again with the while loop showing 10 times.

// WHILE LOOP

var myJobEveryDay = 0;

while (myJobEveryDay <= 10) {
  console.log("1) Unlock the module at 8 o'clock at night");
  console.log("2) Practice watching quick videos");
  console.log("3) Take notes while watching the video");
  console.log(
    "4) When the module is finished, practice the whole module by yourself"
  );
  console.log(
    "5) If you don't understand something (think here but there is a condition), join the support session"
  );
  myJobEveryDay++;
}

// // FOR LOOP
console.log("What is your job every day");

for (var i = 0; i <= 10; i++) {
  console.log("1) Unlock the module at 8 o'clock at night");
  console.log("2) Practice watching quick videos");
  console.log("3) Take notes while watching the video");
  console.log(
    "4) When the module is finished, practice the whole module by yourself"
  );
  console.log(
    "5) If you don't understand something (think here but there is a condition), join the support session"
  );
}

// TO PLAY WITH ARRAY AND LOOP

var myEveryDay = [
  "1) Unlock the module at 8 o'clock at night",
  "2) Practice watching quick videos",
  "3) Take notes while watching the video",
  "4) When the module is finished, practice the whole module by yourself",
  "5) If you don't understand something (think here but there is a condition), join the support session",
];

for (var i = 0; i < myEveryDay.length; i++) {
  console.log(myEveryDay[i]);
}
