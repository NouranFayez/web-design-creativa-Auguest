var card = document.getElementById('card')


card.addEventListener('scroll', function (e) {
    console.log(e.target.scrollTop);

    (e.target.scrollTop > 300) ?
        card.style.background = "lightblue" :
        card.style.background = "white"
})


// BOM ==> browser object model
// console.log(window)

// window.prompt()
// window.document.getElementById()
document
window.addEventListener('scroll', function () {
    console.log('scrolling')
    var uparrow = this.document.querySelector('.uparrow');

    (this.document.documentElement.scrollTop > 300) ?
        uparrow.style.display = "block" :
        uparrow.style.display = "none"
})


setTimeout(() => {
    console.log('javascript')
}, 3000)

setTimeout(() => {
    console.log('Html ')

}, 1000)


var counter = document.getElementById('counter')
var i = 0
counter.innerText = i




var set = setInterval(() => {
    counter.innerText = i
    if (i == 200) clearInterval(set)
    i += 10
    console.log('set interval')
}, 100)


// document.getElementById('counter')

// $('#counter')


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
       
        margin: 20,
        nav: true,
        navText: ["<i class='fa-solid fa-left-long bg-primary rounded-start-pill text-white'></i>", '<i class="fa-solid fa-right-long"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
              items : 1
    },
            // breakpoint from 480 up
            480: {
              items:2
    },
            // breakpoint from 768 up
            768: {
               items: 2
    }
        }
    });
});