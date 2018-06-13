
#!/usr/bin/env node

function findPermutations(coins, n) {

    var buffer = new Array(n + 1);
    for (var i = 0; i <= n; ++i)
        buffer[i] = new Array(coins.length + 1);

 
    for (var j = 1; j <= coins.length; ++j)
        buffer[0][j] = 1;

      for (i = 1; i <= n; ++i) {
             buffer[i][0] = 0;

               for (j = 1; j <= coins.length; ++j) {

         
            var value = buffer[i][j - 1];

            if (coins[j - 1] <= i)
                value += buffer[i - coins[j - 1]][j];

         
            buffer[i][j] = value;
        }
    }


    return buffer[n][coins.length];
}


function processData(input) {
    var lines = input.split('\n');
    var coins = lines[0].split(',').map(function (s) {return +s;});
    var n = +lines[1];
    var res = findPermutations(coins, n);
    console.log(res);
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