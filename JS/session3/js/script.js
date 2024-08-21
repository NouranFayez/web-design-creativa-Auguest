

var numbs = [10 , 4 , 30 ]

console.log(numbs.toString())
console.log(numbs)


console.log(numbs.join('-'))

var arr = ['box' , 20 , 'apple' , 10]

// console.log(arr.sort())
// console.log(arr)
// console.log(arr.reverse())



var user = ['userName ' , 30 , ['nasr city' , 'october']]

console.log(user[2][1])

// var firstName = 'Nouran'
// var middleName = "Ahmed" 
// var lastName = "Fayez"
// var address = "Nasr city"
// var age = 30


var firstName = "Zain"
var middleName = "Zain"
var lastName = "Zain"

var userData = {
    firstName : 'Nouran' , 
    middleName : "Ahmed" ,
    lastName : "Fayez" ,
    address : "Nasr city" ,
    age : 30 ,
    fullName : function (){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}


// console.log(userData.address) // property value
userData.address = "october" // update value
// console.log(userData)

// var userName = userData.fullName()





// function getUserData(x){
//     console.log(x)
// }
// getUserData(userData)



function getObject(){
    return userData
}

// console.log(getObject().fullName())
// console.log(getObject().firstName)


var userData2 = {
    firstName : 'tamer' , 
    middleName : "Ahmed" ,
    lastName : "Fayez" ,
    address : "Nasr city" ,
    age : 30 ,
    fullName : function (){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}
var userDat3 = {
    firstName : 'zain' , 
    middleName : "Ahmed" ,
    lastName : "Fayez" ,
    address : "maadi" ,
    age : 35 ,
    fullName : function (){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}
var userDat4 = {
    firstName : 'Nouran' , 
    middleName : "Ahmed" ,
    lastName : "Fayez" ,
    address : "october" ,
    age : 10 ,
    fullName : function (){
        return `${this.firstName} ${this.middleName} ${this.lastName}`
    }
}


var users = [
    {
        firstName : 'Nouran' , 
        middleName : "Ahmed" ,
        lastName : "Fayez" ,
        address : "Nasr city" ,
        age : 30 ,
        fullName : function (){
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        }
    } , 
    {
        firstName : 'zain' , 
        middleName : "Ahmed" ,
        lastName : "Fayez" ,
        address : "maadi" ,
        age : 35 ,
        fullName : function (){
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        }
    } , 
    {
        firstName : 'tamer' , 
        middleName : "Ahmed" ,
        lastName : "Fayez" ,
        address : "Nasr city" ,
        age : 10 ,
        fullName : function (){
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        }
    }

]

users.forEach((ele)=>{
    // console.log(ele)
})

var index = users.findIndex(item => item.age == 10)
var index2 = users.findIndex(item => item.age == 30)
// console.log(index)

users.splice(index , 1)

users[index2].age =  200

// console.table(users)



///////////////////////////////////////


// user ==> name , id , balance
// var users = []


// addUser()

// editUserBalanceById() ==> id , newBalance

// deleteUserById()  ==> id 





////// string Methods

var str = "javascript , html , css , html"

// console.log(str[0])
// console.log(str.length)


// console.log(str.startsWith('huhuhu'))
// console.log(str.endsWith('css'))

// console.log(str.replace('html' , 'bootstrap'))
// console.log(str.replaceAll('html' , 'bootstrap'))

// str = str.replace('css' , 'angular')

// console.log(str)

// console.log(str.slice(0 , 10))


// var str2 = "         css           " 
// console.log(str2.trim())



/// number methods
// var p = +prompt('number')


// console.log(parseInt(p))
// console.log(parseFloat(p))
// console.log(p)

// var r = true // boolean
// var l = 30 // number 
// var s = "true" // string

// console.log(isNaN(l))

// console.log(p+30)


var d = -4

var f = 3.6

// console.log(Math.abs(d))
// console.log(Math.round(f)) // 4
// console.log(Math.ceil(f)) // 4
// console.log(Math.floor(f)) // 3

// console.log(Math.floor(Math.random()*1000))


var d = new Date()

console.log(d)
console.log(d.getMonth()+1) // 0 - 11


var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(mL[d.getMonth()])

console.log(d.getFullYear())
console.log(d.getDay()) // 2 ==> 0 - 6
console.log(d.getDate()) // 20 
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getSeconds())



