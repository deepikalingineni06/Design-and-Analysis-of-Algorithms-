//The generateRanNum generates random numbers array and returns.
function generateRanNum(LengthofArray) {
    var ArrayOfRandomNumbers = [];
    for (var i = 0; i < LengthofArray; i++) {
        ArrayOfRandomNumbers.push(Math.floor(Math.random() * LengthofArray + 1));
    }
    return ArrayOfRandomNumbers;
}

// Selection sort algorithm
function selectSort(aray) {
    var SortStarted = performance.now();
    var Size = aray.length;

    for (var i = 0; i < Size; i++) {
        var min = i;
        for (var j = i + 1; j < Size; j++) {
            if (aray[j] < aray[min]) {
                min = j;
            }
        }
        if (min != i) {

            var temp = aray[i];
            aray[i] = aray[min];
            aray[min] = temp;
        }
    }
    var SortEnded = performance.now();
    var execution_time = SortEnded - SortStarted;

    return [aray, execution_time]

}

//Medians quick sort

//function call
function definedfuction(aray, m, n) {
    var p = aray[Math.floor((m + n) / 2)],
        i = m,
        j = n;
    while (i <= j) {
        while (aray[i] < p) {
            i++;
        }
        while (aray[j] > p) {
            j--;
        }
        if (i <= j) {
            var temp = aray[i];
            aray[i] = aray[j];
            aray[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

// Main function in Median Quick Sort
function quickSortMed(aray, a, b) {
    var SortStarted = performance.now();
    var index;
    if (aray.length > 1) {
        index = definedfuction(aray, a, b);
        if (a < index - 1) {
            quickSortMed(aray, a, index - 1);
        }
        if (index < b) {
            quickSortMed(aray, index, b);
        }
    }
    var SortEnded = performance.now();
    var time = SortEnded - SortStarted;
    return [aray, time];
}

//Regular quick sort with first element as pivot
function quickSortReg(aray, m, n) {

    if (aray.length < 2) {
        return aray;
    }

    var pvt = aray[0];
    var m = [];
    var n = [];

    for (var i = 1; i < aray.length; i++) {
        if (aray[i] > pvt) {
            n.push(aray[i]);
        } else {
            m.push(aray[i]);
        }
    }

    return quickSortReg(m).concat(pvt, quickSortReg(n));

}

//Bubble sort
function bubblesort(aray, LengthofArray) {

    for (var i = 0; i < LengthofArray; i++) {
        for (var j = 0; j < (LengthofArray - i - 1); j++) {
            if (aray[j] > aray[j + 1]) {
                var temp = aray[j];
                aray[j] = aray[j + 1];
                aray[j + 1] = temp;
            }
        }
    }
    return aray;
}

//Insertion sort
function insertionSort(aray, lengthofthearray) {
    var i, j, temp;
    for (i = 1; i < lengthofthearray; i++) {

        temp = aray[i]
        j = i - 1
        while (j >= 0 && aray[j] > temp) {

            aray[j + 1] = aray[j]
            j--
        }
        aray[j + 1] = temp
    }
    return aray
}

//Heap Sort
function heapSort(aray) {
    var a = aray.length;
    for (var i = Math.floor(a / 2) - 1; i >= 0; i--) {
        heap_max(aray, i, a);
    }
    for (var i = a - 1; i >= 0; i--) {
        swap(aray, 0, i);
        heap_max(aray, 0, i);
    }
    return aray;
}
// function call from heap sort(heap_max)
function heap_max(arr, a, b) {
    var x = 2 * a;
    var y = 2 * a + 1;
    var maxi;
    if (y < b) {
        if (arr[x] >= arr[y]) {
            maxi = x;
        }
        else {
            maxi = y;
        }
    }
    else if (x < b) {
        maxi = x;
    }
    else return;
    if (arr[a] < arr[maxi]) {
        swap(arr, a, maxi);
        heap_max(arr, maxi, b);
    }
    return;
}
// function call from heap sort
function swap(a, i, j) {

    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

//Merge sort
function merge(aray1, aray2) {
    var results = [];
    var a = 0;
    var b = 0;
    while (a < aray1.length && b < aray2.length) {
        if (aray1[a] <= aray2[b]) {
            results.push(aray1[a]);
            a++;
        } else {
            results.push(aray2[b]);
            b++;
        }
    }
    while (a < aray1.length) {
        results.push(aray1[a]);
        a++;
    }
    while (b < aray2.length) {
        results.push(aray2[b]);
        b++;
    }
    return results;
}
function mergeSort(aray) {
    if (aray.length <= 1) {
        return aray;
    } else {
        var mid = Math.floor(aray.length / 2);
        var x = mergeSort(aray.slice(0, mid));
        var y = mergeSort(aray.slice(mid));
        return merge(x, y);
    }
}



//function calls for various sortings for part one structure. 
function sort_calls_1() {
    var SortingArray1 = document.getElementById("SortingupFirstSelectedSort");

    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Selection Sort') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var [select_sorted_arr, time] = selectSort(InputOfTheArray);
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${select_sorted_arr}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Quick Sort Medians') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var [quick_sorted_arr_Med, time] = quickSortMed(InputOfTheArray, 0, InputOfTheArray.length - 1);
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${quick_sorted_arr_Med}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Quick Sort Regular') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var quick_sorted_arr_Reg = quickSortReg(InputOfTheArray, 0, InputOfTheArray.length - 1);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${quick_sorted_arr_Reg}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Bubble Sort') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var bubble_sorted_arr = bubblesort(InputOfTheArray, aray_length);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${bubble_sorted_arr}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Insertion Sort') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var insert_sorted_arr = insertionSort(InputOfTheArray, aray_length);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${insert_sorted_arr}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Heap Sort') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var heap_sorted_arr = heapSort(InputOfTheArray);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${heap_sorted_arr}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
    if (SortingArray1.options[SortingArray1.selectedIndex].text == 'Merge Sort') {
        var aray_length = document.getElementById("AraySize1").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray1').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var merge_sorted_arr = mergeSort(InputOfTheArray);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray1').innerHTML = `Sorted array: ${merge_sorted_arr}`;
        document.getElementById('TimeTakenForExecution1').innerHTML = `Execution Time: ${time}`;
    }
}


//function calls for various sortings for part two structure. 
function sort_calls_2() {
    var sorts_list2 = document.getElementById("sort_up2");

    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Selection Sort') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var [select_sorted_arr, time] = selectSort(InputOfTheArray);
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${select_sorted_arr}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Quick Sort Medians') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var [quick_sorted_arr_Med, time] = quickSortMed(InputOfTheArray, 0, InputOfTheArray.length - 1);
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${quick_sorted_arr_Med}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Quick Sort Regular') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var quick_sorted_arr_Reg = quickSortReg(InputOfTheArray, 0, InputOfTheArray.length - 1);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${quick_sorted_arr_Reg}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Bubble Sort') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var bubble_sorted_arr = bubblesort(InputOfTheArray, aray_length);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${bubble_sorted_arr}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Insertion Sort') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var insert_sorted_arr = insertionSort(InputOfTheArray, aray_length);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${insert_sorted_arr}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Heap Sort') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var heap_sorted_arr = heapSort(InputOfTheArray);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${heap_sorted_arr}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
    if (sorts_list2.options[sorts_list2.selectedIndex].text == 'Merge Sort') {
        var aray_length = document.getElementById("AraySize2").value;
        var InputOfTheArray = generateRanNum(aray_length);
        document.getElementById('InputAray2').innerHTML = `Unsorted array: ${InputOfTheArray}`;
        var SortStarted = performance.now();
        var merge_sorted_arr = mergeSort(InputOfTheArray);
        var SortEnded = performance.now();
        var time = SortEnded - SortStarted;
        document.getElementById('OutputAray2').innerHTML = `Sorted array: ${merge_sorted_arr}`;
        document.getElementById('TimeTakenForExecution2').innerHTML = `Execution Time: ${time}`;
    }
}