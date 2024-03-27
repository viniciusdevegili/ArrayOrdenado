// Função de QuickSort
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)]; 
    const left = []; 
    const right = []; 

    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < pivot) {               
            left.push(arr[i]);              
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
// Função de MergeSort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Função de BubbleSort
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Lista Desordenada:", unsortedArray);

const quickSorted = quickSort([...unsortedArray]);
console.log("QuickSort:", quickSorted);

const mergeSorted = mergeSort([...unsortedArray]);
console.log("MergeSort:", mergeSorted);

const bubbleSorted = bubbleSort([...unsortedArray]);
console.log("BubbleSort:", bubbleSorted);