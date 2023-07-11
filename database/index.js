const server = require("./src/server");

const { Planet } = require("./src/database")

/*Planet.list()
    .then((res)=> console.log(res))*/
/*Character.insert({
    _id: '200',
    name: 'Mauro Moyano',
    height: '182',
    mass: '77',
    hair_color: 'blonds',
    skin_color: 'fair',
    eye_color: 'brown',
    birth_year:"1989"

})*/

server.listen(8004, ()=>{
    console.log("Database service on PORT 8004")
})