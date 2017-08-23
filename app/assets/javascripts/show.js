$(document).ready(function() {

  //show comic
  $('img').on('click', function(event) {
    event.preventDefault();
    $('.comic-details-background').fadeIn('300');
    $('.comic-details').fadeIn('300');
    var showLink = $(this).parent('a').attr('href');

    $.ajax({
      url: showLink,
      method: 'GET'
    }).done(function(data) {
      $('.comic-details').html(data);
    });
  });

  //next comic
  $('.comic-details').on('click', '.next-link', function(event) {
    event.stopPropagation();
    event.preventDefault();
    var nextLink = $('a.next-link').attr('href');

    $.ajax({
      url: nextLink,
      method: 'GET'
    }).done(function(data) {
      $('.comic-details').html(data);
    });
  });

  //previous comic
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

  //edit comic
  $('.comic-details').on('click', '.edit-comic-link', function(event){
    event.stopPropagation();
    event.preventDefault();
    var editLink = $('a.edit-comic-link').attr('href');

    $.ajax({
      url: editLink,
      method: 'GET'
    }).done(function(data){
      var div = $("<div>").html(data);
      var editForm = $(".edit-comic-form", div.get(0));
      $('.display-info').html(editForm);
    });
  });

  //update comic
  $('.comic-details').on('submit', '.edit_comic', function(event){
    event.stopPropagation();
    event.preventDefault();

    var formAction = $('.edit_comic').attr('action')
    var form = $('.edit_comic').serialize();
    var backToComicLink = $('.back-to-comic').attr('href')

    $.ajax({
      url: formAction,
      method: 'PATCH',
      data: form,
      dataType: 'json'
    })

    $.ajax({
      url: backToComicLink,
      method: 'GET'
    }).done(function(data){
      $('.comic-details').html(data);
    })
  });

  //destroy comic
  $('.comic-details').on('click', '.delete-comic-link', function(event){
    event.stopPropagation();
    event.preventDefault();

    var deleteAction = $('.delete-comic-link').attr('href');

    $.ajax({
      url: deleteAction,
      method: 'DELETE'
    })

    window.location.reload();
  });

  //show story
  $('.comic-details').on('click', '.story-link', function(event){
    event.stopPropagation();
    event.preventDefault();
    var storyLink = $(this).attr('href');

    $.ajax({
      url: storyLink,
      method: 'GET'
    }).done(function(data){
      var div = $('<div>').html(data);
      var storyData = $('.story-details', div.get(0));
      $('.display-info').html(storyData);
    });
  });

  //new story
  $('.comic-details').on('click', '.add-story-link', function(event){
    event.stopPropagation();
    event.preventDefault();
    var addStoryLink = $('a.add-story-link').attr('href');

    $.ajax({
      url: addStoryLink,
      method: 'GET'
    }).done(function(data){
      var div = $('<div>').html(data);
      var addStoryData = $('.add-story-form', div.get(0));
      $('.display-info').html(addStoryData);
    })
  });

  //create story
  $('.comic-details').on('submit', '.new_story', function(event){
    event.stopPropagation();
    event.preventDefault();

    var formAction = $('.new_story').attr('action');
    var form = $('.new_story').serialize();
    var backToComicLink = $('.back-to-comic').attr('href')

    $.ajax({
      url: formAction,
      method: 'POST',
      data: form,
      dataType: 'json'
    })

    $.ajax({
      url: backToComicLink,
      method: 'GET'
    }).done(function(data){
      $('.comic-details').html(data);
    })
  });

  //edit story
  $('.comic-details').on('click', '.edit-story-link', function(event){
    event.stopPropagation();
    event.preventDefault();
    var editStoryLink = $('a.edit-story-link').attr('href');

    $.ajax({
      url: editStoryLink,
      method: 'GET'
    }).done(function(data){
      var div = $('<div>').html(data);
      var editStoryData = $('.edit-story-form', div.get(0));
      $('.display-info').html(editStoryData);
    })
  });

  //update story
  $('.comic-details').on('submit', '.edit_story', function(event){
    event.stopPropagation();
    event.preventDefault();

    var formAction = $('.edit_story').attr('action')
    var form = $('.edit_story').serialize();
    var backToComicLink = $('.back-to-comic').attr('href')

    $.ajax({
      url: formAction,
      method: 'PATCH',
      data: form,
      dataType: 'json'
    })

    $.ajax({
      url: backToComicLink,
      method: 'GET'
    }).done(function(data){
      $('.comic-details').html(data);
    })
  });

  // destroy story
  $('.comic-details').on('click', '.delete-story-link', function(event){
    event.stopPropagation();
    event.preventDefault();
    var deleteAction = $('.delete-story-link').attr('href');
    var comicData = $('.back-to-comic').attr('href');

    $.ajax({
      url: deleteAction,
      method: 'DELETE'
    });

    $.ajax({
      url: comicData,
      method: 'GET'
    }).done(function(data){
      var div = $('<div>').html(data);
      var comicDetails = $('.comic-wrapper', div.get(0));
      $('.comic-details').html(comicDetails);
    });
  });

  //back to show story
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

    window.location.reload();
  });

  $('.comic-details').on('click', '.back-link', function(event) {
    event.preventDefault();
    $('.comic-details').fadeOut(400);
    $('.comic-details-background').fadeOut(400);

    window.location.reload();
  });

//allows the user to interact with the modal window
  $('.comic-details').on('click', '.comic-wrapper', function(event){
    event.stopPropagation();
  });

});
