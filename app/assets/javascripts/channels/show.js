$(document).ready(function() {

  $('img').on('click', function(event) {
    event.preventDefault();
    $('.comic-details').fadeIn('300');
    var link = $(this).parent('a').attr('href');

    $.ajax({
      url: link,
      method: 'GET'
    }).done(function(data) {

      $('.comic-details').css('display', 'block');
      $('.comic-details').html(data);
    });
  });

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

  $('.comic-details').on('click', '.back-link', function(event){
    event.preventDefault();  
  });

  $('body').on('click', function(event) {
    $('.comic-details').css('display', 'none')
  });

});
