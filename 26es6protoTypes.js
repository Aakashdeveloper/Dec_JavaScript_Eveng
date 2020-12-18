class geo{
    constructor(){
        this.lat=43.22,
        this.long=70.11,
        this.direction='NE'
    }
}


class person1 extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name = name;
        this.country = country;
    }

    greet=() => {
        return `Hi ${name} welcome to ${country}`
    }
}