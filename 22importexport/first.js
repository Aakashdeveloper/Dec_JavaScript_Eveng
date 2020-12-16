let dbObj = {}

dbObj.users = [
    {
        name:'Alvin',
        city:'Helsinki'
    },
    {
        name:'Sarah',
        city:'Amsterdam'
    }
]

dbObj.dbQuery= {
    find:(table) => {return `Select * from ${table}`},
    insert:(table,data) => {return `Insert into ${table} name,city values (${data.name}, ${data.city})`}
}

//es5
//module.exports = dbObj;

export default dbObj;