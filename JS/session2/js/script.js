

var sum ; 
var firstName = "Nouran"
var numOutsideFunc ; // undefined

function getNumbers(num){
    sum = 30 + 40
    // var firstName = "ahmed"

    console.log(firstName) 
    numOutsideFunc = num
    return num
}

// getNumbers(100)

// console.log(numOutsideFunc)

// getNumbers(300)

// console.log(numOutsideFunc)
// getNumbers(400)

// console.log(numOutsideFunc)

// var num = getNumbers(10)

// console.log(num)
// console.log(sum)

// var numOfFunction = getNumbers(500)



// function statment
function getUserName(){
    var userName = prompt('enter your name')

    return "javascript"
}
// var userName = getUserName()

// function expression

var funcExp = function(){
    return true
}

// console.log(funcExp())

// arrow function 

var userInfo = ()=>{
    return 'arrow function'
}

// console.log(userInfo())


// looping(startNum , endNum , breakNum , contniueNum)

// looping(0 , 10 , 8 , 3)
// looping(10 , 20 , 11 , 3)
// looping(10 , 20 )

// for (var i = 0; i < 10; i++) {
//     // const element = array[i];
    
// }


// array 
// var firstName = "Nouran"
// var lastName = "Ahmed"
// var address = "nasr city"
// var isGraduated = true
// var age = 30

var user = [ "Nouran" ,"Ahmed"  , "nasr city" , true , 30]


user[3] = "fcgbvhv"

console.log(user[0])


user[5] = 45678909

// user[10] = 'october'
console.log(user.length)

user[user.length] = "jjbb7y686"

user.push(30 , true , 'vgfxdfsfdsf')

user.unshift("javascript")

user.pop()
user.pop()
user.pop()
user.pop()

user.shift()
user.shift()



// console.log(user)


var courses = ['html' , 'css' , 'bootstrap' , 'js']


// splice(index , deletedCount , item/item)

// courses.splice(2 , 1 ) // remove
// courses.splice(2 , 0 , 'node' , 'angular' , 'php' ) // add 
courses.splice(2 , 1 , 'node' , 'angular' , 'php' ) // add / remove
// console.log(courses)


// console.log(courses.includes('cdfghjkfghjk'))

if(courses.includes('cdfghjkfghjk') == false){
    courses.push('cdfghjkfghjk')
}
if(!courses.includes('cdfghjkfghjk')){
    courses.push('cdfghjkfghjk')
}

for(var i = 0 ; i < courses.length ; i++){
    // console.log(courses[i])
}


courses.forEach((element , index)=>{
    // if(element == 'html') console.log(element)
    if(index == 4) console.log(`index = ${index} and the element = ${element}`)
})

// (start , end , arr)=>{

// }


var numbers = [5 , 10 ,2 , 7 , 100]

// numbers.forEach((ele)=>{
//     if(ele > 5 )
//         {
//             console.log(ele);
//             break;
//         }
// })

// for(var i = 0 ; i < numbers.length ; i++){
//     if(numbers[i] > 5) {
//         console.log(numbers[i])
//         break
//     }
// }



var numbers = [5 , 10 ,2 , 7 , 100]

// numbers.find(getNumber)

function getNumber(ele){
    return ele > 5
}

(ele)=>{
    return ele > 5
} 

ele => ele > 5


// var item = numbers.find(ele=> ele > 5)
var item = numbers.find(ele=> ele > 300) // undefined

// var index = numbers.findIndex(ele => ele > 10)
var index = numbers.findIndex(ele => ele > 200) // -1

if(index == -1) numbers.push(300)

console.log(index)
// console.log(item)

// getNumber()

