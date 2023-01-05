'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let max = nums[0];
    const n = nums.length;
    for(let i = 0; i<=n; i++)
    {
        if(nums[i]>max)
        {
            max = nums[i];
        }
    }
    let smax = null;
    for(var i = 0; i<=n; i++)
    {
        if(nums[i] == max)
            continue;
        else
        {
            if(nums[i]>smax)
            smax = nums[i];
        }
    }
    if(smax == null)
        return max;
    else
        return smax;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}