let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
  header.classList.toggle('shadow',window.scrollY > 0)
}
)



 


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


