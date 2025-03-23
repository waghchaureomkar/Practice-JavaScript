
let arr = [3, 2, 4, 5, 2, 6, 72, 35, 7, 43, 24, 33];
let newarr = selectionSort(arr);
newarr.forEach(a => console.log(a));

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let low = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[low] > arr[j]) {
                low = j;
            }
        }
        [arr[i], arr[low]] = [arr[low], arr[i]];
    }
    return arr;
}
