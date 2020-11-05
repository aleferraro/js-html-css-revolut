$(document).ready(function(){

  //hover function
  $('.nav-right > ul > li').mouseenter(function(){
    $(this).children('.my_dropdown').toggle();
  })
  $('.nav-right > ul > li').mouseleave(function(){
    $(this).children('.my_dropdown').toggle();
  })

  // click function
  $('.nav-right > ul > li').click(function(){
    $(this).children('.my_dropdown').toggleClass('active');
  })
})
