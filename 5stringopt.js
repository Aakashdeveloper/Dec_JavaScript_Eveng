var city = "London";
city.toUpperCase()


var city = "London";
city.toUpperCase()
"LONDON"
var city = "LONDON"
undefined
city.toLowerCase()
"london"
city
"LONDON"
city.length
6
var city = "  Amsterdam "
undefined
city.length
12

//JavaScript is case sensitive
var color="Red"
undefined
var color1="red"
undefined
color==color1
false
color===color1
false

color.toLowerCase() == color1.toLowerCase()
true

var city = "pARis";
"Paris";

var city = "London";
undefined
city[0]    
"L"
city[1]    
"o"
city.charAt(0)
"L"
city.charAt(1)
"o"



var city = "London";
undefined
city.slice(1)
"ondon"
city.slice(2)
"ndon"
city.slice(3)
"don"
city.slice(1,3)
"on"
city.slice(2,4)
"nd"
var city = "pARis";
undefined
city.charAt(0).toUpperCase()
"P"
city.slice(1).toLowerCase()
"aris"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Paris"


slice(start,end?)
substring(start,end?)
substr(start,length)

var city = "Amsterdam"
city.slice(1)
"msterdam"
city.substring(1)
"msterdam"
city.substr(1)
"msterdam"

city.slice(2,5)
"ste"
city.substring(2,5)
"ste"
city.substr(2,5)
"sterd"


var city = "Amsterdam"

city.slice(-1)
"m"
city.slice(-2)
"am"

city.substring(-2)
"Amsterdam"
city.substring(-1)
"Amsterdam"

city.slice(1,-2)
"msterd"
city.slice(-2,2)
""
city.slice(-2,-2)
""

city.substring(1,-2)
"A"
city.substring(1,-3)
"A"
city.substring(2,-3)
"Am"
city.substring(-2,-3)
""
city.substring(-2,2)
"Am"

var a  = "i am learning javascript"
a.replace('javascript','JS')
"i am learning JS"
var a  = "javascript i am learning javascript"
a.replace('javascript','JS')
"JS i am learning javascript"

var a  = "javascript i am learning javascript"
a.replace(/javascript/g,'JS')

var city = "  Amsterdam . "
undefined
city.replace(/ /g,'')
"Amsterdam."
var name ="John Kerry"
undefined
name.replace(/ /g,'-')
"John-Kerry"


var a = "Hi"
var b = "javaScript"
a.concat(b)
"HijavaScript"

var c = "nodejs"
a.concat(b,c)
"HijavaScriptnodejs"
c.concat(a,b)
"nodejsHijavaScript"