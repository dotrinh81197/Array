let array = [];

function getInteger(numbers) {
    for (let i = 1, count = 0; count <= numbers; i++) {
        let number = Math.floor(Math.random() * 20);
        array.push(number);
        count++;
    }
    return array;
}

function displayArray() {
    getInteger(10);

    document.getElementById("demo").innerHTML = array.toString();
    return array;
}
document.getElementById("demo2").innerHTML = array;

function max_Of_value() {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            return max;
        }
    }
    alert("Giá trị lớn nhất là:" + max);
}