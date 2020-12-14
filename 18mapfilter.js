var a = [4,5,3,8,9,34,56,78];
a.map((data) => {console.log(data)})

a.map((data) => {return data*2})
[8, 10, 6, 16, 18, 68, 112, 156]

>map is use to iterate over the array 
> it always return same length of output array as your input array
> it is use to apply the logics (sum,mul), bind with html

a.map((data) => {return `<p>${data}</p>`})
["<p>4</p>", "<p>5</p>", "<p>3</p>", "<p>8</p>", "<p>9</p>", "<p>34</p>", "<p>56</p>", "<p>78</p>"]


var b = [20,35,34,26,67,21,19,32]
b.filter((data) => {return data>25})
[35, 34, 26, 67, 32]

> filter is use tot filter out the value
> it may or may not return the same length of output 
> it only return those value for which output/condition is true;


b.map((data) => {return data>25})
[false, true, true, true, true, false, false, true]


var a = [0,1,2,3]

a.map((data) => {return data*2})
[0,2,4,6]

a.filter((data) => {return data*2})
[1,2,3]