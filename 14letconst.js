var > we are able to redeclare and reassign
let > we cannot redeclare but can reassign
const > we cannot redeclare nor reassign

var a = 10;

var a; declare
a = 10 assignment

> var a =10
undefined
> a
10
> var a = 20
undefined
> a
20
> a=30
30
> a
30
>


> let b = 20
undefined
> b
20
> let b = 21
Uncaught SyntaxError: Identifier 'b' has already been declared
> b=22
22

> const c = 20
undefined
> c
20
> const c = 21
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =21
Uncaught TypeError: Assignment to constant variable.
> 
