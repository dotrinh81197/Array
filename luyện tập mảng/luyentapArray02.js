//bai1
let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 24],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
];
for (let i in a) {
    console.log(`row ${i}`);
    for (let j in a[i]) {
        console.log(`${a[i][j]}`);
    }
}

function reverseArray() {
    let array2 = ["c", "s", "c", "2", "6", "1"];
    array2 = array2.reverse();
    document.getElementById("demo1").innerHTML = array2.join("");
}

function countCharacter() {
    let array3 = prompt("Nhập mảng kí tự:");

    array3 = array3.split("");
    let count = 0;
    for (i = 0; i < array3.length; i++) {
        if (!isNaN(array3[i])) {
            count++;
        }
    }

    document.getElementById("demo2").innerHTML = `Mảng có ${count} kí tự là số`;
}

function countWords() {
    let array4 = prompt("Nhập vào một mảng kí tự ");
    let count = 0;
    for (i = 0; i < array4.length; i++) {
        if (isNaN(array4[i])) {
            count++;
        }
    }
    document.getElementById("demo3").innerHTML = `Mảng có ${count} kí tự là chữ`;
}

function checkArray() {
    arr1 = document.getElementById("arr1").value;
    arr2 = document.getElementById("arr2").value;
    if (arr1 == arr2) {
        alert("Hai chuỗi giống nhau");
    } else alert("Hai chuỗi không giống nhau");
}

function changeArray() {
    array = document.getElementById("array6").value.split("");

    for (i = 0; i < array.length; i++) {
        if (array[i] == "-") {
            array[i] = "_";
        }
    }

    document.getElementById("newArray").innerHTML = array.join("");
}