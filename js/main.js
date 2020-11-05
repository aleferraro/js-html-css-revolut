$(document).ready(function(){
  $('.nav-right > ul > li').mouseenter(function(){
    $(this).children('.my_dropdown').toggle();
  })
  $('.nav-right > ul > li').mouseleave(function(){
    $(this).children('.my_dropdown').toggle();
  })
})
