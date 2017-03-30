$(document).ready(function() {

    $('img').on('click', function(event) {
        event.preventDefault();

        var link = $(this).parent('a').attr('href');
        $.ajax({
            url: link,
            method: 'GET'
          }).done(function(data){

              console.log(data);

          });
    });
});
