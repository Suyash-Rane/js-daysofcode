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
    var b = n.toString(2).split("");
    var k = 0;
    var max = 0;
    for(var i = 0; i<b.length; i++)
    {
        k = 0;
        if(b[i] == '1')
        {
            k = 1;
            for(var j = i+1; j<b.length; j++)
            {
                if(b[j] == '1')
                {
                    k++;
                }
                else
                    break;
            }
        }
        if(k>max)
            max = k;
    }
    console.log(max);
}
