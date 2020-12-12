array is a collection of homogenious or hetrogenious datatype
var a = [1,43,46,5,57,7]
var b = ['eew','dbds','4534rgfg']
var c = [true,true,false,true,false]

var a = [1,2,3,"ewe",54,"45","fhd",true, false,544];

var city = ["London","Paris","NewYork","Delhi"]
undefined
typeof(city)
"object"
city.length
4
city[0]
"London"
city[city.length-1]
"Delhi"
typeof(city[0])
"string"

var city = ["London","Paris","NewYork","Delhi"]
undefined
city.push("Venice")
5
city
(5) ["London", "Paris", "NewYork", "Delhi", "Venice"]
city+"aa"
"London,Paris,NewYork,Delhi,Veniceaa"
city+1
"London,Paris,NewYork,Delhi,Venice1"
city.push(2)
6
city
(6) ["London", "Paris", "NewYork", "Delhi", "Venice", 2]

var city = ["London","Paris","NewYork","Delhi"]
undefined
city.push("Venice")
5
city
(5) ["London", "Paris", "NewYork", "Delhi", "Venice"]
city+"aa"
"London,Paris,NewYork,Delhi,Veniceaa"
city+1
"London,Paris,NewYork,Delhi,Venice1"
city.push(2)
6
city
(6) ["London", "Paris", "NewYork", "Delhi", "Venice", 2]0: "London"1: "Paris"2: "NewYork"3: "Delhi"4: "Venice"5: 26: "4venice"length: 7__proto__: Array(0)
city.push(4+"venice")
7
city
var city =  ["London", "Paris", "NewYork", "Delhi", "Venice", 2, "4venice"]
undefined
city.pop()
"4venice"
city
(6) ["London", "Paris", "NewYork", "Delhi", "Venice", 2]

var city = ["London", "Paris", "NewYork", "Delhi", "Venice"]
undefined
city.pop(2)
"Venice"

var city = ["London", "Paris", "NewYork", "Delhi", "Venice"]
city.unshift('Dubai')
6
city.shift()
"Dubai"

push > add value in the end of array
pop > remove last value from array
shift > remove first value from array
unshift > add as first value to array


var city = ["London", "Paris", "NewYork", "Delhi", "Venice"]
undefined
city.slice(1,3)
(2) ["Paris", "NewYork"]

splice(indexnumber, delete count, values)

city.splice(2,0,'Dubai','Helsinki')
[]
city
(7) ["London", "Paris", "Dubai", "Helsinki", "NewYork", "Delhi", "Venice"]
city.splice(3,1)
["Helsinki"]
city
(6) ["London", "Paris", "Dubai", "NewYork", "Delhi", "Venice"]
city.splice(3,2,'Hongkong','Mumbai')
(2) ["NewYork", "Delhi"]
city
(6) ["London", "Paris", "Dubai", "Hongkong", "Mumbai", "Venice"]

var a = ['a','b','c']
var b = [1,2,3]

var a = ['a','b','c']
var b = [1,2,3]
undefined
a+b 
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var c = ['12','efve','efwe']
undefined
c.concat(a,b)
(9) ["12", "efve", "efwe", "a", "b", "c", 1, 2, 3]

var myarr = ["London", "Paris",[1,2,['audi','bmw','kia'],3,4], "Dubai", "Helsinki", "NewYork"]

myarr[2]
(5) [1, 2, Array(3), 3, 4]
myarr[2][1]
2
myarr[2][2]
(3) ["audi", "bmw", "kia"]
myarr[2][2][1]
"bmw"

var myaar1 = ["London", "Paris", 1, 2, "audi", "bmw", "kia", 3, 4, "Dubai", "Helsinki", "NewYork"]
undefin
myaar1.sort()

(12) [1, 2, 3, 4, "Dubai", "Helsinki", "London", "NewYork", "Paris", "audi", "bmw", "kia"]
var a =[ 1,2,true,false,3,'s','dvd',true]
undefined
a.sort()
(8) [1, 2, 3, "dvd", false, "s", true, true]
a.reverse()
(8) [true, true, "s", false, "dvd", 3, 2, 1]


var city = ["London", "Paris", "Dubai", "Hongkong", "Mumbai", "Venice"]

city.indexOf('Delhi')
-1
city.indexOf('Dubai')
2
city.indexOf('Venice')
5
city.indexOf('Nice')
-1

var city = ["London", "Paris", "Dubai", "Hongkong", "Mumbai", "Venice"]
undefined
city.includes('Mumabi')
false
city.includes('Mumbai')
true


var city = ["London", "Paris", "Dubai",["red","yellow","green"], "Hongkong", "Mumbai", "Venice"];
undefined
Array.isArray(city[0])
false
Array.isArray(city[1])
false
Array.isArray(city[2])
false
Array.isArray(city[3])
true