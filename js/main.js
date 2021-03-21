/*
Ciao ragazzi,
Esercizio di oggi: Revolut Dropdown
Cartella/Repo: js-html-css-revolut
Descrizione:
Il fratello maggiore del dropdown visto insieme in classe. Il sito da copiare (solo la prima parte, va bene anche solo la navbar) è questo: https://www.revolut.com/en-IT/ ( attenzione, il layout prendetelo dallo screenshot, i contenuti dal sito )
L'obiettivo e' riprodurre il comportamento del dropdown associato ad ogni item della navbar
Buon lavoro, a domani!
*/

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
