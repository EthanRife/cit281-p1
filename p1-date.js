/*
    CIT 281 Project 1
    Name: Ethan Rife
*/

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//The two lines 8 and 9 were learned from a fellow on Stackoverflow named "brk" https://stackoverflow.com/questions/44021499/how-to-split-the-date-in-javascript-and-remove-the-last-gmt0530-ist
let day = new Date().toString();
let string = day.split(' ').splice(0, 1).join(" ")
if (string == "Sun") {
   console.log(daysOfWeek[0])
} else if (string == "Mon") {
    console.log(daysOfWeek[1])
} else if (string == "Tue") {
    console.log(daysOfWeek[2])
} else if (string == "Wed") {
    console.log(daysOfWeek[3])
} else if (string == "Thu") {
    console.log(daysOfWeek[4])
} else if (string == "Fri") {
    console.log(daysOfWeek[5])
} else if (string == "Sat") {
    console.log(daysOfWeek[6])
};
//Not going to lie I'm uncertain if this is exactly what you were asking for in the assingment but I hope it is! I'm also unsure as to how to consolidate this I will ask during office hours
