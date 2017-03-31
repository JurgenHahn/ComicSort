$(document).ready(function() {

  //generates an ajax request on the show comic link rendering it in a hidden div
  $('img').on('click', function(event) {
    event.preventDefault();
    $('.comic-details-background').fadeIn('300');
    $('.comic-details').fadeIn('300');
    var showLink = $(this).parent('a').attr('href');

    $.ajax({
      url: showLink,
      method: 'GET'
    }).done(function(data) {
      $('.comic-details').css('display', 'block');
      $('.comic-details').html(data);
    });
  });

  //generates an ajax request on the next comic link
  $('.comic-details').on('click', '.next-link', function(event) {
    event.stopPropagation();
    event.preventDefault();
    var nextLink = $('a.next-link').attr('href');

    $.ajax({
      url: nextLink,
      method: 'GET'
    }).done(function(data) {
      $('.comic-details').css('display', 'block');
      $('.comic-details').html(data);
    });
  });

//generates an ajax request on the previous comic link
  $('.comic-details').on('click', '.previous-link', function(event) {
    event.stopPropagation();
    event.preventDefault();
    var previousLink = $('a.previous-link').attr('href');

    $.ajax({
      url: previousLink,
      method: 'GET'
    }).done(function(data) {
      $('.comic-details').css('display', 'block');
      $('.comic-details').html(data);
    });
  });

//prevents the default of the the back link trigger the event handler on the page
  $('.comic-details').on('click', '.back-link', function(event){
    event.preventDefault();
  });

//on click returns user to the index
  $('.comic-details-background').on('click', function(event) {
    $('.comic-details').fadeOut(400);
    $('.comic-details-background').fadeOut(400);
  });

  // $('.comic-details').on('click', '.edit-link', function(event){
  //   event.stopPropagation();
  // });

});
