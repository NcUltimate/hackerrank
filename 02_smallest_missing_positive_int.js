/**
 * https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/find-smallest-missing-positive-integer/problem
 */
function findSmallestMissingPositive(orderNumbers) {
    // First, put all numbers into their correct positions using a radix sort
    let k=0;
    while (k < orderNumbers.length) {
        // If the number is negative, continue
        if (orderNumbers[k] < 0) {
            k ++;
            continue;
        }
        
        // If we encounter an element like 1.5Bn, don't try to radix
        // sort it to avoid a memory overflow.
        if (orderNumbers[k] >= orderNumbers.length) {
            k ++;
            continue;
        }
        
        // If the number is already in the right position, continue
        if (orderNumbers[k] === k + 1) {
            k ++;
            continue;
        }
        
        // If we are swapping with the same number, it exists in the
        // array multiple times and we can skip it.
        const temp = orderNumbers[orderNumbers[k] - 1];
        if (orderNumbers[k] === temp) {
            k ++;
            continue;
        }
        
        // Otherwise, swap this number into its correct position
        orderNumbers[orderNumbers[k] - 1] = orderNumbers[k];
        orderNumbers[k] = temp;
    }
    
    // Then, scan the array for the missing number
    for (let k=0; k < orderNumbers.length; k++) {
        if (orderNumbers[k] !== k + 1) {
            return k + 1;
        }
    }
    
    // All numbers are present. Return the next largest number
    return orderNumbers.length + 1;
}
