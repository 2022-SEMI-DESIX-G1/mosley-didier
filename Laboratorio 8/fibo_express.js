const express = require('express')
const app = express()

let numb = 7;

function fibonacci(num){
    let n, number=0, nextNumber=1;
    let arr = [];
    for (let index = 1; index <=num; index++) {
        arr.push(number);
        console.log(arr);
        n = number + nextNumber;
        number = nextNumber;
        nextNumber = n;
    }
    return arr;
}



app.get('/', function (req, res) {
    res.send(fibonacci(numb))
})

app.post('/array', function (req, res){
    res.json({
        fibonacci: fibonacci(numb)
    })
})

app.listen(3000)
