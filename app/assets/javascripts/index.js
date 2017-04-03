$(document).ready(function() {

  var dozen = 12;

  $(function(){
    // $('.thumb-nail').slice(0, dozen).show();
  });

  $(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //  $('.thumb-nail').slice(dozen, dozen + 12).show();
    //  dozen = dozen + 12;
     }
  });

});
