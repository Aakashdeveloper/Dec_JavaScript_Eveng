var moviename = "Avengers";
var movierating = 4.5;
var movielang = "Eng";

var moviename1 = "Jab We Met";
var movierating1 = 4;
var movielang1 = "Hindi";

//literal notation////
var movies = {
    name:'Death Race',
    rating:4.5,
    lang:'Eng'
}
undefined
movies
{name: "Death Race", rating: 4.5, lang: "Eng"}
movies.name
"Death Race"
movies.rating
4.5
movies.lang
"Eng"
movies['name']
"Death Race"
movies['rating']
4.5
movies.ind="Hollywood"
"Hollywood"
movies
{name: "Death Race", rating: 4.5, lang: "Eng", ind: "Hollywood"}
movies.rating=4.3
4.3
movies
{name: "Death Race", rating: 4.3, lang: "Eng", ind: "Hollywood"}
delete movies.lang
true
movies
{name: "Death Race", rating: 4.3, ind: "Hollywood"}

//////////////
var calc={
    sum:function(a,b){return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sub(5,2)
3
calc.sum(5,2)
7


var dbQuery = {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city values (${data.name}, ${data.city})`}
}

dbQuery.find('student')
"Select * from student"
dbQuery.insert('Emp',{name:'John',city:'Delhi'})
"Insert into Emp name,city values (John, Delhi)"