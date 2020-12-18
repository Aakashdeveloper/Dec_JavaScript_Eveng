function human(name){
    this.name = name;
    this.city="London"
}

function robot(name){
    this.name = name;
    this.legs=2
    this.color="Red"
}


var John = new human('John')


var pepper = new robot('Pepper')

human.prototype = new robot()
var alvin = new human('Alvin')

alvin.color
"Red"
alvin.legs
2


robot.prototype = new human()


function power(base){
    return function(exp){
        return (base**exp);
    };
}
    var var1=power(2);
    var var2=power(3);
    
    var1(4)
    var2(3)