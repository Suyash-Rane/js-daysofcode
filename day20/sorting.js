'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    var numSwaps = 0;
    
    for(var i = 0; i < n; i++)
    {
        var numOfSwaps = 0;
        for(var j = 0; j < n-1; j++)
        {
            if(a[j] > a[j+1]){
                var c = a[j];
                a[j] = a[j+1];
                a[j+1] = c;
                numOfSwaps++;
                numSwaps++;
            }
        }
        if(numOfSwaps == 0)
            break;
    }
    console.log("Array is sorted in " + numSwaps + " swaps.");
    console.log("First Element: " + a[0]);
    console.log("Last Element: " + a[n-1]);
}
