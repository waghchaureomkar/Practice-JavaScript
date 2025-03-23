
let arr = [3, 2, 4, 5, 2, 6, 72, 35, 7, 43, 24, 33];
let newarr = bubbleSort(arr);
newarr.forEach(a => console.log(a));

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i + 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}