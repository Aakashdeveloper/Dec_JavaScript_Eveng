//multiple condition and multiple output use (if else)
//one condition and multiple output use(switch)
//one condition one output use(ternory)

var name = "Eva"

switch(name){
    case 'Aakash':
        console.log("You are user");
        break;
    case 'Eva':
        console.log("You are admin");
        break;
    default:
        console.log("I dont know")
}


switch(new Date().getDay()){
    case 0:
        console.log("Its Sunday")
        break;
    case 1:
        console.log("Its Monday")
        break;
    default:
        console.log("Wrong Input")
}
Its Monday

var out = new Date().getDay()
if(out == 0){
    console.log("Its Sunday")
}else if(out == 1){
    console.log("Its Sunday")
}