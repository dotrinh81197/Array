mycolor = ["Red", "Green", "White", "Black"];
document.getElementById("color").innerHTML = mycolor.toString();
// document.getElementById("color").innerHTML = mycolor.join();
// document.getElementById("color").innerHTML = mycolor.join("-");
const num = window.prompt();
const str = num.toString();
const result = [str[0]];
for (let i = 1; i < str.length; i++) {
    if (str[i] % 2 === 0) {
        result.push("-", str[i]);
    } else result.push(str[i]);
}
document.getElementById("demo").innerHTML = result.join();

// var string = "a";
// var UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var LOWER = "abcdefghijklmnopqrstuvwxyz";
// var swap = [];

// for (var x = 0; x < string.length; x++) {
//     if (UPPER.indexOf(string[x]) !== -1) {
//         swap.push(string[x].toLowerCase());
//     } else if (LOWER.indexOf(string[x]) !== -1) {
//         swap.push(string[x].toUpperCase());
//     } else {
//         swap.push(string[x]);
//     }
// }
// console.log(swap.join);
let string = prompt("Nhập vào chuyển muốn chuyển đổi");
let result2 = [];

for (j = 0; j < string.length; j++) {
    if (string[j].toUpperCase() == string[j]) {
        result2.push(string[j].toLowerCase());
    } else {
        result2.push(string[j].toUpperCase());
    }
}
document.write(result2.join(""));