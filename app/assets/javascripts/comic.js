$(document).ready(function() {

    var comicDetails = '.comic-details';
    var editComicLink = '.edit-comic-link';
    var deleteComicLink = '.delete-comic-link';
    var editComicForm = '.edit_comic';
    var backtoComicLink = '.back-to-comic';
    var nextLink = '.next-link';
    var previousLink = '.previous-link';

    //next comic
    $(comicDetails).on('click', nextLink, function(event) {
        event.stopPropagation();
        event.preventDefault();

        var nextComicHref = $(nextLink).attr('href');

        $.ajax({
            url: nextComicHref,
            method: 'GET'
        }).done(function(data) {
            $(comicDetails).html(data);
        });
    });

    //previous comic
    $(comicDetails).on('click', previousLink, function(event) {
        event.stopPropagation();
        event.preventDefault();

        var previousComicHref = $(previousLink).attr('href');

        $.ajax({
            url: previousComicHref,
            method: 'GET'
        }).done(function(data) {
            $(comicDetails).html(data);
        });
    });

    //edit comic
    $(comicDetails).on('click', editComicLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var editHref = $(editComicLink).attr('href');

        $.ajax({
            url: editHref,
            method: 'GET'
        }).done(function(data){
            var div = $('<div>').html(data);
            var editForm = $('.edit-comic-form', div.get(0));

            $('.display-info').html(editForm);
        });
    });

    //update comic
    $(comicDetails).on('submit', editComicForm, function(event){
        event.stopPropagation();
        event.preventDefault();

        var formAction = $(editComicForm).attr('action')
        var form = $(editComicForm).serialize();

        $.ajax({
            url: formAction,
            method: 'PATCH',
            data: form,
            dataType: 'json'
        }).done(function(data){

          $.ajax({
              url: formAction,
              method: 'GET'
          }).done(function(data){
              $(comicDetails).html(data);
          })
        });
    });

    //destroy comic
    $(comicDetails).on('click', deleteComicLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var deleteAction = $(deleteComicLink).attr('href');

        $.ajax({
            url: deleteAction,
            method: 'DELETE',
            dataType: 'JSON'
        })

        window.location.reload();
    });

    //back to show story
    $(comicDetails).on('click', backtoComicLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var backToComicHref = $(backtoComicLink).attr('href');
          $.ajax({
              url: backToComicHref,
              method: 'GET'
          }).done(function(data){
              $(comicDetails).html(data);
          });
    });

});
