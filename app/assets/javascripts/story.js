$(document).ready(function(){

    var backToComicLink = '.back-to-comic';
    var backToStoryLink = '.back-to-story';
    var comicDetails = '.comic-details';
    var storyDetails = '.story-details';
    var addStoryLink = '.add-story-link';
    var newStoryForm = '.new_story';
    var editStoryLink = '.edit-story-link';
    var editStoryForm = '.edit_story';
    var displayInfo = '.display-info';
    var comicDetails = '.comic-details';
    var deleteStoryLink = '.delete-story-link';

    //show story
    $(comicDetails).on('click', '.story-link', function(event){
        event.stopPropagation();
        event.preventDefault();

        var storyLink = $(this).attr('href');

        $.ajax({
            url: storyLink,
            method: 'GET'
        }).done(function(data){
            var div = $('<div>').html(data);
            var storyData = $(storyDetails, div.get(0));

            $(displayInfo).html(storyData);
        });
    });

    //new story
    $(comicDetails).on('click', addStoryLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var addStoryHref = $(addStoryLink).attr('href');

        $.ajax({
            url: addStoryHref,
            method: 'GET'
        }).done(function(data){
            var div = $('<div>').html(data);
            var addStoryData = $('.add-story-form', div.get(0));

            $(displayInfo).html(addStoryData);
        })
    });

    //create story
    $(comicDetails).on('submit', newStoryForm, function(event){
        event.stopPropagation();
        event.preventDefault();

        var formAction = $(newStoryForm).attr('action');
        var form = $(newStoryForm).serialize();
        var backToComicHref = $(backToComicLink).attr('href');

        $.ajax({
            url: formAction,
            method: 'POST',
            data: form,
            dataType: 'json'
        })

        $.ajax({
            url: backToComicHref,
            method: 'GET'
        }).done(function(data){
            $(comicDetails).html(data);
        })
    });

    //edit story
    $(comicDetails).on('click', editStoryLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var editStoryHref = $(editStoryLink).attr('href');

        $.ajax({
            url: editStoryHref,
            method: 'GET'
        }).done(function(data){
            var div = $('<div>').html(data);
            var editStoryData = $('.edit-story-form', div.get(0));

            $(displayInfo).html(editStoryData);
        })
    });

    //update story
    $(comicDetails).on('submit', editStoryForm, function(event){
        event.stopPropagation();
        event.preventDefault();

        var formAction = $(editStoryForm).attr('action')
        var form = $(editStoryForm).serialize();

        $.ajax({
            url: formAction,
            method: 'PATCH',
            data: form,
            dataType: 'json'
        }).done(function(){

            $.ajax({
                url: formAction,
                method: 'GET'
            }).done(function(data){
              var div = $('<div>').html(data);
              var storyData = $(storyDetails, div.get(0));

              $(displayInfo).html(storyData);
            })
        });
  });

    // destroy story
    $(comicDetails).on('click', deleteStoryLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var deleteAction = $(deleteStoryLink).attr('href');
        var backToComicHref = $(backToComicLink).attr('href');

        $.ajax({
            url: deleteAction,
            method: 'DELETE',
            dataType: 'JSON'
        });

        $.ajax({
            url: backToComicHref,
            method: 'GET'
        }).done(function(data){
            $(comicDetails).html(data);
        });
    });

    //back to story
    $(comicDetails).on('click', backToStoryLink, function(event){
        event.stopPropagation();
        event.preventDefault();

        var backToStoryHref = $(backToStoryLink).attr('href');
        $.ajax({
            url: backToStoryHref,
            method: 'GET'
        }).done(function(data){

            var div = $('<div>').html(data);
            var storyData = $(storyDetails, div.get(0));

            $(displayInfo).html(storyData);
        });
    });

});
