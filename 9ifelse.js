if(condition){
    //do something
}else{
    //do something
}

var a = 878979
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

Number 878979 is odd


var name = "Kavya"
if(name== "John"){
    console.log("You are admin")
}else if(name=="Kavya"){
    console.log("You are super admin")
}else if(name=="Aakash"){
    console.log("You are user")
}else{
    console.log("I dont know")
}


var role = "Admin"
var name = "John"

if(role=="Admin"){
    if(name=="John"){
        console.log("You are system admin")
    }else if(name=="Jamie"){
        console.log("You are Product admin")
    }else{
        console.log("You are admin")
    }
}else if(role == "user"){
    if(name=="Anthony"){
        console.log("You are system user")
    }else if(name=="Darren"){
        console.log("You are Product user")
    }else{
        console.log("You are user")
    }
}else{
    console.log("I dont know")
}
////////

var a = -1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}

"Hi"

var a = 0
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}

"Bie"

var a = 1
if(a){
    console.log("Hii")
}else{
    console.log("Bie")
}

"Hi"

//////
truthy  > any number -ve or +ve excpet 0 is truthy value, true and string
falsy   > 0, false, null , undefined

///////////
ternary(single line if else condition)
////////

var a =10

a>10?"Hiii":"Biee"
"Biee"
a == 10 ?"Hii":"Bie"
"Hii"
a == 10 ?a+1:a-1
11
a>10 ?a+1:a-1
9


a>(10*2)>a+1:a-1

//////wrong//////
var a =10
a == 10 ?a+1:a-1?"hii":"Bie"
11
var a =10
a>10 ?a+1:a-1?"hii":"Bie"
"hii"