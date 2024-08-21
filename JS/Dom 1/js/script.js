//// DOM ==> document object model

// console.log(document.getElementById('text-h1'))

// var h1 = document.getElementById('text-h1')

// h1.innerText = "Javascript"

// console.log(document.getElementsByTagName('h1'))

// var h1_tags = document.getElementsByTagName('h1')


// h1_tags.forEach(element => {
//     element.innerText = "Javascript"
// });


// for(var i = 0 ; i < h1_tags.length ; i++){
//     h1_tags[i].innerText = 'javascript'
// }

// h1_tags[1].id = "h1_element"

// var classElements = document.getElementsByClassName('style_class')

// console.log(classElements)

// var h1_selector = document.querySelector('#text-h1 .link')

// var classElement  =  document.querySelector('.style_class')
// var classElement  =  document.querySelectorAll('.style_class')
// console.log(classElement)


// var div = document.querySelector('#div_style')

// console.log(div.className)

// div.className = "alert alert-danger"

// div.classList.add('w-50')
// // div.classList.remove('alert-primary')

// div.classList.toggle('border-success')

// var h1 = document.querySelector('#div_style h1')
// console.log(h1)

// h1.style.color = 'red'
// h1.style.backgroundColor = 'green'


// var img = document.getElementById('img')

// img.width = "200"

// // https://www.w3schools.com/jsref/dom_obj_event.asp

// var btn = document.getElementsByClassName('btn')
// console.log(btn)

function changeImage(){
    var img = document.getElementById('img')
    if(img.src.endsWith('2.jpg'))  img.src= 'images/1.jfif'
    else img.src = "images/2.jpg"
}

function handleChangeColor(){
    var li = document.getElementById('li_id')
    li.style.color = "red"
}

function handleRemoveColor(){
      var li = document.getElementById('li_id')
    li.style.color = "black"
}

function handleColor(type , element ){
    console.log(element)
    console.log(type)
    // var li = document.getElementById('li_id');
    (type == 'mouseenter') ?
     element.style.color = "red" : 
      element.style.color = "black" ;

}


// var inp = document.getElementById('input_id')
// var inp2 = document.getElementById('input_id2')

// inp.addEventListener('input' , function(e){
//     // console.log('input ...............')
//     // console.log(inp.value)
//     console.log(e.target.value)
// })

// inp2.addEventListener('input' , function(e){
//     console.log(e.target.value)
// })

var form = document.getElementById('register_form')

form.addEventListener('input' , function(e){
    // console.log(e.target.value)
})
var users = []

form.addEventListener('submit' , function(e){
    e.preventDefault()
    // console.log(e)
    // console.log(e.target.elements.userName.value)
    var user ={
        name : e.target.elements.userName.value , 
        address : e.target.elements.userAddress.value
    }
    users.push(user)
    console.log(users)
    
    showUser()
})
var table = document.getElementById('table_id')

function showUser(){
    table.innerText = ""

    users.forEach((element , i , arr)=>{
        var tr = document.createElement('tr')
        var tdName = document.createElement('td')
        var tdAddress = document.createElement('td')
        var tdActions = document.createElement('td')
        var removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'
        tdActions.appendChild(removeBtn)
        tdName.innerText = element.name
        tdAddress.innerText = element.address
        
        console.log(tdName)
        console.log(tdAddress)
        
        
        tr.appendChild(tdName)
        tr.appendChild(tdAddress)
        tr.appendChild(tdActions)
        console.log(tr)
        removeBtn.addEventListener('click' , function(e){
            // console.log(i)
            removeUser(i)
          
        })
        
        
        
        table.appendChild(tr)
    })
  
    
}

function removeUser(i){
    users.splice(i , 1)
    console.log(users)
    showUser()
}

