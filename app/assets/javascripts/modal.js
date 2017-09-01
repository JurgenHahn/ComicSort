$(document).ready(function() {

  var comicDetails = '.comic-details';
  var comicDetailsBackground = '.comic-details-background';

  //show modal
    $('img').on('click', function(event) {
        event.preventDefault();
        $(comicDetailsBackground).fadeIn('300');
        $(comicDetails).fadeIn('300');

        var showLink = $(this).parent('a').attr('href');

        $.ajax({
            url: showLink,
            method: 'GET'
        }).done(function(data) {
            $(comicDetails).html(data);
        });
    });

    //remove modal
    $(comicDetailsBackground).on('click', function(event) {
        $(comicDetails).fadeOut(400);
        $(comicDetailsBackground).fadeOut(400);
        window.location.reload();
    });

    //remove modal
    $(comicDetails).on('click', '.back-link', function(event) {
        event.preventDefault();
        $(comicDetails).fadeOut(400);
        $(comicDetailsBackground).fadeOut(400);
        window.location.reload();
    });

    //allows the user to interact with the modal window
    $(comicDetails).on('click', '.comic-wrapper', function(event){
        event.stopPropagation();
    });
});
