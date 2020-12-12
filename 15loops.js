for
while
do while
for of
/////////
for in> object
Map
filter

/////////////////
for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ["London", "Paris", "Dubai", "Hongkong", "Mumbai", "Venice"];
for(i=0;i<city.length;i++){
    console.log(city[i])
}


var city = ["London", "Paris", "Dubai",["red","yellow","green"], "Hongkong", "Mumbai", "Venice"];
for(i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i])
    }
}


////////////////
while
///////////
var i=10;
while(i<5){
    console.log(i)
    i++
}


////////////////
Do while
///////////
var i =10;
do{
    console.log(i)
    i++
}
while(i<5)
////
for of
//////


var city = ["London", "Paris", "Dubai", "Hongkong", "Mumbai", "Venice"];

for(mycity of city){
    console.log(mycity)
}

var city = ["London", "Paris", "Dubai",["red","yellow","green"], "Hongkong", "Mumbai", "Venice"];
for(mycity of city){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }
    else{
        console.log(mycity)
    }
}
