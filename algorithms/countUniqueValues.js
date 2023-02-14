/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
 */

/**
 * 
 * @param Array values 
 * @returns Integer
 */
function countUniqueValues(values) {
    let i = 0;
    let j = 1;

    while (j < values.length) {
        if (values[i] !== values[j]) {
            i++;
            if (i !== j) {
                const temp = values[j];
                values[j] = values[i];
                values[i] = temp;
            }
        }

        j++;
    }

    return i>0 ? i+1 : i;
}

function test(fn) {
    return (values, expected) => {
        const result = fn(values);

        if (result === expected) {
            console.log('Passed!');
        } else {
            console.log(`Failed: expected ${expected}, got ${result}`);
        }
    }
}


const testUniqueValues = test(countUniqueValues);

testUniqueValues([1,1,1,1,1,2], 2);
testUniqueValues([1,2,3,4,4,4,7,7,12,12,13], 7);
testUniqueValues([], 0);
testUniqueValues([-2,-1,-1,0,1], 4);