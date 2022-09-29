let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

//bot token
var telegram_bot_id = "5455216267:AAEejK1m3cfz4Lnds-zKHmz5_CnqAfZNgoU";
//chat id
var chat_id = 2068687117;
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Name: " + u_name + "\nEmail: " + email + "\nMessage: " + message;
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};






window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY > 0)
}
)



 var swiper = new Swiper (".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
});


var swiper = new Swiper(".cooming-containe", {
 spaceBetween:20,
 loop:true,
 autoplay:{
  delay:50000,
  disableOnInteraction:false,
 },
 centeredSlides:true,
 breakpoints:{
 0:{slidesPerView:2,},
 568:{slidesPerView:2,},
 768:{slidesPerView:2,},
 968:{slidesPerView:2,},

 },
  
});

menu.onclick=function (){
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}
window.onscroll=function (){
  menu.classList.remove('bx-x')
  navbar.classList.remove('active')
}