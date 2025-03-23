function toMergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = parseInt((low + high) / 2)
    toMergeSort(arr, low, mid);
    toMergeSort(arr, mid + 1, high);
    toMerge(arr, low, mid, high)
}

function toMerge(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++;
        } else {
            temp.push(arr[right])
            right++
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (let index = low; index <= high; index++) {
        arr[index] = temp[index - low];
    }

}

let arr = [3, 2, 4, 5, 2, 6, 72, 35, 7, 43, 24, 33];
toMergeSort(arr, 0, arr.length - 1);
arr.forEach(a => console.log(a));
