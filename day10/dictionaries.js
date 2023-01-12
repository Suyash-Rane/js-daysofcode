function processData(input) {
    const lines = input.split('\n');
    var dict = {};
    for(var i = 1; i<=Number(lines[0]); i++)
    {
        var l = lines[i].split(" ");
        dict[l[0]] = l[1].trim();
    }
    for(; i<lines.length; i++)
    {
        var x = lines[i];
        if(x in dict)
        {
            var value = dict[x];
            console.log(x + "=" + value);
        }
        else
            console.log("Not found");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});