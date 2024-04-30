// find avg and your grade
let total_marks = 850;
let obtained_marks = 850;
let avg = (obtained_marks / total_marks) * 100;
console.log("your percentage is ", avg.toFixed(2));
//in above toFixede is drop other decimal number just show starting 2 number i  can also use "Math.floor or Math.round"
if (avg >= 90 && avg <= 100) {
    console.log("your grade is A");
}
else if (avg >= 80 && avg < 90) {
    console.log("your grade is B");
}
else if (avg >= 70 && avg < 80) {
    console.log("your grade is C");
}
else if (avg >= 60 && avg < 70) {
    console.log("your gradde is D");
}
else if (avg >= 50 && avg < 60) {
    console.log("your grade is E");
}
else if (avg > 100) {
    console.log("invalid percentage");
}
else {
    console.log("you are failed");
}
export {};
