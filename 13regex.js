RegExp
Regular Expression 
^$

var a = "hi"

^([a-z])$

var a = "hi"
a.match("^([a-z])$")
null

//exact 2
var a = "hi"
a.match("^([a-z]{2})$")
(2) ["hi", "hi", index: 0, input: "hi", groups: undefined]

//range 2 to 5
a.match("^([a-z]{2,5})$")

//anylength +
var a = "Amsterdam"
a.match("^([a-z]+)$")

var a = "Amsterdam"
a.match("^([a-z]+)$")
null
var a = "amsterdam"
a.match("^([a-z]+)$")
(2) ["amsterdam", "amsterdam", index: 0, input: "amsterdam", groups: undefined]

var a = "Amsterdam"
a.match("^([A-Za-z]+)$").ignoreCase
a.match("^([A-Za-z]+)$")
(2) ["Amsterdam", "Amsterdam", index: 0, input: "Amsterdam", groups: undefined]

var a = "Amsterdam"
a.match("^([A-Ha-c0-9$#@]+)$")
null

var phone = 8573457680
phone.match("^([0-9]{10})$")
Error

phone.toString().match("^([0-9]{10})$")
(2) ["8573457680", "8573457680", index: 0, input: "8573457680", groups: undefined]


var email = "a@a.com"

email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
"^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$"