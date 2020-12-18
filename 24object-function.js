//es5
function person(name,country){
    this.name =name;
    this.country = country;
    this.greet = function(){
        return `Hi ${name} welcome to ${country}`
    }
}

var John = new person('John','India')

John
person {name: "John", country: "India", greet: ƒ}
John.greet()
"Hi John welcome to India"

///es6
class person1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet=() => {
        return `Hi ${name} welcome to ${country}`
    }
}

var Ankit = new person1('Ankit','Netherlands')