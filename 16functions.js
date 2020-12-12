function
method
arrow function
generator
IFFI
//////////////
var a = 10
var b = 20
a+b
30

function add(a,b){
    return a+b
}

add(1,2)
3
add(5,2)
7
add('a','b')
"ab"


function isEven(userInput){
    var out;
    if(userInput%2==0){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}
isEven(10)
"Number 10 is even"
isEven(9)
"Number 9 is odd"

//////
function myfunc(a,b){
    return a,b
}

myfunc(1,3)
3


function myfunc(a,b){
    var out  =[a,b]
    return out
}
myfunc(1,3)
1

/////
method
/////
var add  = function(a,b){
    return a+b
}

add(1,2)
3

//////
es>>> arrow function
/////

var add  = (a,b) =>{return a+b}
add(1,2)
3