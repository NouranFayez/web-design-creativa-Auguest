var form = document.getElementById('myForm')



function nameCheck(input){
    var inputValue = input.value.trim()

    if(inputValue.length < 3 ) {
        input.nextElementSibling.innerText = 'name must be at least 3 character'   
        console.log('name must be at least 3 character')
    
    }
    else {
        input.nextElementSibling.innerText = ''
    }
}

function emailCheck(input){
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var inputValue = input.value

    console.log(emailRegex.test(inputValue))
    if(emailRegex.test(inputValue)) input.nextElementSibling.innerText = ""
    else input.nextElementSibling.innerText = "enter a valid email"

}
// https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/



function passwordCheck(input){
    var regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var inputValue = input.value
    console.log(regExp.test(inputValue))

    if(regExp.test(inputValue)) input.nextElementSibling.innerText =""
    else input.nextElementSibling.innerText ="enter at least 1 lowercase , 1 uppercase letter , 1 number ............"

}
form.addEventListener('input' , function(e){
    // console.log(e)
    // console.log(e.target.value.length)
    // if(e.target.id == 'userName' || e.target.id == 'familyName') nameCheck()
    if(e.target.id == 'userName') nameCheck(e.target)
    else if(e.target.id == 'userEmail') emailCheck(e.target)
else if(e.target.id == 'userPassword') passwordCheck(e.target)


})


