const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = "";
    
    for(let i = 0; i < str.length; i++){
        let current = str[i];
        if(current === current.toUpperCase()){
            result += current.toLowerCase();
        }else{
            result += current.toUpperCase();
        }
    }
    console.log(result);
});