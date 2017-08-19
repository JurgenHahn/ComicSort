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

  // replaces the comic details with the comic edit form
    $('.comic-details').on('click', '.edit-link', function(event){
      event.stopPropagation();
      event.preventDefault();
      var editLink = $('a.edit-link').attr('href');

      $.ajax({
        url: editLink,
        method: 'GET'
      }).done(function(data){
        var div = $("<div>").html(data);
        var editForm = $(".comic-edit-form", div.get(0));
        $('.display-info').html(editForm);
      });
    });

// replaces the comic details with the story details in the js modal
  $('.comic-details').on('click', '.story-link', function(event){
    event.stopPropagation();
    event.preventDefault();
    var storyLink = $('a.story-link').attr('href');

    $.ajax({
      url: storyLink,
      method: 'GET'
    }).done(function(data){
      var div = $("<div>").html(data);
      var storyData = $(".story-details", div.get(0));
      $('.display-info').html(storyData);
    });
  });

  $('.comic-details').on('submit', '.edit_comic', function(event){
    event.stopPropagation();
    event.preventDefault();

    var formAction = $('.edit_comic').attr('action')
    var volume = $('#comic_volume').val();
    var issue = $('#comic_issue').val();
    var coverPrice = $('#comic_cover_price').val();
    var price = $('#comic_price').val();
    var cover = $('#comic_cover').val();
    var coverArtists = $('#comic_cover_artists').val();
    var editorInChief = $('#comic_editor_in_chief').val();
    var tags = $('#comic_tags').val();
    if ($('#comic_annual:checked').val() === 1){
      var annual = $('#comic_annual:checked').val();
    } else{
      var annual = 0
    }
    if ($('#comic_owned:checked').val() === 1){
      var owned = $('#comic_owned:checked').val();
    } else{
      var owned = 0
    }

    $.ajax({
      url: formAction,
      method: 'PATCH',
      dataType: 'json',
      data: {comic: {
          volume: volume,
          issue: issue,
          cover_price: coverPrice,
          price: price,
          cover: cover,
          cover_artists: coverArtists,
          editor_in_chief: editorInChief,
          tags: tags,
          annual: annual,
          owned: owned
        }}
      })
      var backToComicLink = $('.edit_comic').attr('action')

      $.ajax({
        url: formAction,
        method: 'GET'
      }).done(function(data){
        $('.comic-details').html(data);
      })

    });

  // returns to the comic details from the story details, comic-edit-form
  $('.comic-details').on('click', '.back-to-comic', function(event){
    event.stopPropagation();
    event.preventDefault();
    var backToComicLink = $('a.back-to-comic').attr('href');
      $.ajax({
          url: backToComicLink,
          method: 'GET'
      }).done(function(data){
        $('.comic-details').html(data);
      });
  });

//on click returns user to the index
  $('.comic-details-background').on('click', function(event) {
    $('.comic-details').fadeOut(400);
    $('.comic-details-background').fadeOut(400);
  });

  $('.comic-details').on('click', '.back-link', function(event) {
    event.preventDefault();
    $('.comic-details').fadeOut(400);
    $('.comic-details-background').fadeOut(400);
  });

//allows the user to interact with the modal window
  $('.comic-details').on('click', '.comic-wrapper', function(event){
    event.stopPropagation();
  });

});
