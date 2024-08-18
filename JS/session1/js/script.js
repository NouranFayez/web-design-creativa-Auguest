// console.log('javascript')
// console.log(3)

var firstName = "nouran"
var lastName = "fayez"
// my name is : nouran fayez
//var fullName = "my name is : " + firstName + " " + lastName

// template string
var fullName = `my name is : ${firstName} ${lastName}`
var num = 10
var numb = "40"
var isGraduated = true

var x

// console.log(lastName)

// console.log(fullName)

console.log(x)

var h = null
//  console.log(h)

//////////// Mathematical Operators 

var n = 30
var n2 = 40
var n3 = 2
var str = "js"

var sum = n + n2
var sub = n2 - n
var div = str / n3

//  console.log(sum)
//  console.log(sub)
//  console.log(div)


var d = 30
// console.log(d++) // 30
// console.log(d) // 31
// console.log(++d) // 32

// // console.log(--d)
// console.log(d--)
// console.log(d)


var f = 10
// f = f+5

// console.log(f+=5)
// console.log(f-=10)

var k = "lorem"

// console.log(typeof(k))
// console.log(typeof(f))
// console.log(typeof isGraduated)

// comparison operators
var m = 30
var x = 40
var y = 30
var g = "30"

// console.log(m > x)
// console.log(y >= m)

// console.log(m == g) // value
// console.log(m === g) // value -- type

// console.log(x != y)
// console.log(m != y)

// console.log(m != g) // value
// console.log(m !== g) // value -- type


var r = "lorem"

// console.log(r == 'lorem' && typeof r == 'string' && g == "30" )
// console.log(r == 'lorem' || typeof r == 'boolean' || g == "ghfgd" )
// console.log(r == 'hvhjfgh' || typeof r == 'boolean' || g == "ghfgd" )

console.log(!r == 'lorem')


// ternary  (condition) ? true code : false code ;

var sum = 30
var result

// console.log(result) ;
(sum == 60) ? result = "true" : result = "false";

// console.log(result)


var b = "lorem"; // true
var b = ""; // false
var b = 0; // false
var b = 10; // true

// (b && sum === "30") ? console.log('correct') : console.log('wrong');



// if(b && sum === "30") console.log('corret')
// else console.log('wrong');


// if(b && sum === "30") {
//     var result = 'correct'
//     console.log(result)
//     var d = 40
//     console.log(d)
// }
// else {
//     console.log('wrong')
// }


// var job = "yfyhdfydyd"

// if (job == 'doctor') console.log('doctor')
// if (job == 'developer') console.log('developer')
// if (job == 'eng') console.log('engineer')

// if (job == 'doctor') console.log('doc')
// else if(job == 'eng') console.log('engineer')
// else if(job == 'dev') console.log('developer')
// else console.log('invalid job')




// var userName = prompt("enter your name")

// console.log(userName)

// ""  ==> console.log('empty name')
// null  ==> console.log('null variable')
// name  ==> console.log(name)


// if(userName == '') console.log('empty name')
// else if(userName == null) console.log('null variable')  
//     else console.log(userName)  

// degree 
// > 90 ==> A
// > 80 < 90 ==> B
// > 70 < 80 ==> C
// > 60 < 70 ==> D
// < 60 ==> F


// switch case 

// var job = 30


// strict equality (===)
// switch(job){
//     case 'doc' : 
//     case 'doctor' :
//     console.log('doc')
//     break
//     case 'eng' : 
//     console.log('engineer')
//     break
//     case 'dev' : 
//     console.log('developer')
//     break
//     case 30 : 
//     console.log('number = 30')
//     break
//     default : console.log('invalid Job')

// }


//// for looping 

// for(variable ; condition ; increment){

// }

for(var i = 1 ; i <= 10 ; i++){
   
//    if(i == 3) continue;
//    else if(i == 8) break;
//    else console.log(i)
}

//// while


// variable
// while(condition){
//     code ...


//     increment
// }

// var i = 1
// while( i <= 10){
//     console.log(i)
//     i++
// }







// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)




// function sumNumbers(num1, num2 = true){
//     // console.log(num2)
//     var n = num1
//     var n2 = num2
//     console.log(n + n2)
// }

// var l = 30
// var h = 40
// sumNumbers(10)
// sumNumbers(100)
// sumNumbers(500 , 400)
// sumNumbers(h , l)

// prompt()




function getFullName(username = 'nouran'){
    var firstName = prompt('Enter first Name')
    var lastName = prompt('enter Your last Name')
    var fullNameFunc = `${firstName} ${lastName}`

    console.log(fullNameFunc)
    return fullNameFunc
   
}

var f = getFullName()

// console.log(fullNameFunc)


