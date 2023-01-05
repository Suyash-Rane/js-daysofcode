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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    var r;
    try
    {
        var x = s.split("");
        var y = x.reverse();
        r = y.join("");
    }
    catch(e)
    {
        console.log(e.message);
        r = s;
    }
    finally
    {
        console.log(r);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}