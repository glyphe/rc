jQuery(function($){
  $( '.handheld-nav-button' ).click(function(){
    $('.nav-header').toggleClass('nav-expand')
  })
})

function hide(target) {
    document.getElementById(target).style.display = 'none';
}