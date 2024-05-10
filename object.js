const mysym = Symbol("mykey")
const JsUser = {
  name:"biswajit",
  [mysym] : "mykey",
  age: 23,
  location: "kolkata",
  email : "biswajitgoogle.com",
  isLoggedin: false,
  LastLogindays: ["sunday","tuesday"]
}
//console.log(JsUser["email"])
//console.log(JsUser[mysym])


const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="biswajit"
tinderuser.isLoggedin= false

//console.log(tinderuser);
const regularuser ={
    email:"biswajitgoogle.com",
    fullname:{
        userfullname:{
            firstname: "biswajit",
            lastname:"mahato"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);
const object1 = {1:"a", 2:"b"}
const object2 = {3:"a", 4:"b"}

//const object3 =Object.assign({},object1, object2) ... {} = target component
//console.log(object3);
 const object3 = {...object1,...object2}
 //console.log(object3);


const users =[
    {
        id : 1,
        email: "biswajit.com",
    },
    {
        id : 1,
        email: "biswajit.com",
    },
    {
        id : 1,
        email: "biswajit.com",
    }
]
users[1].email

console.log(tinderuser);
console.log (Object.keys(tinderuser));
console.log (Object.values(tinderuser));
console.log (Object.entries(tinderuser));


