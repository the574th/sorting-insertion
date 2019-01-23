var testArray = [29, 16, 25, 28, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13, 12, 2, 23]

var testshortarray = [1,2,3,4,5]


function sortArray(array) {
    for (i=0; i<array.length; i++) {
        let secondElement  = array[i+1]
        if (secondElement > i) {

        }
    }
}

console.log(sortArray(testshortarray))



// var testArray = [29, 16, 25, 28, 5, 17, 7, 24, 18, 10, 15, 30, 26, 19, 20, 3, 9, 6, 8, 14, 4, 21, 5, 11, 1, 22, 27, 13, 12, 2, 23];

// for (let i = 1; i < testArray.length; ++i) {
//     console.log('Array loop Before: ' + i + ' === ' + testArray)
//     let placeholder = testArray[i];
//     testArray.splice(i, 1);
//     let counter = i;

//     while (placeholder < testArray[(counter-1)]) {
//         --counter;
//     }

//     testArray.splice((counter), 0, placeholder)
//     console.log('Array loop After: ' + i + ' === ' + testArray)
// }

// console.log('final array: ' + testArray);