// Practice Problem-2:

// Getting out of school in a hurry, but when crossing the road, the traffic signal is red. In this case, if you try to cross the road, it can be dangerous. If it is yellow then you should stop. And if the traffic signal is green then you should cross the road. So write a code. Where we have a variable called signal. Its value can be green, yellow or red. Different work will be done accordingly. So, write that code quickly.

// ACCORDING TO CHANGE THE VALUE OF VARIABLES

var signal = "green";
if (signal == "green") {
  console.log("you should cross the road.");
}
signal = "red";

if (signal == "red") {
  console.log("it can be dangerous.");
}
signal = "yellow";
if (signal == "yellow") {
  console.log("you should stop.");
}

// WITH ARRAY SYNOPSIS

var signal = ["red", "yellow", "green"];

if (signal[1] == "yellow") {
  console.log("The Signal Is Yellow you should stop.");
}
if (signal[0] == "red") {
  console.log("The signal is Red it can be dangerous.");
}

if (signal[2] == "green") {
  console.log("The signal Is Green you should cross the road.");
}
