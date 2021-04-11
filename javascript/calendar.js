// Get the day, the month and the weekday

var d = new Date();

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var m = month[d.getDay()];

var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var w = weekday[d.getDay()]

console.log("Day: " + d.getDate());
console.log("Month: " + m);
console.log("Weekday: " + w);