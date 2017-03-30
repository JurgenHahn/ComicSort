$(document).ready(function() {



    $('img').on('click', function(event) {
        event.preventDefault();
        $('.comic-details').fadeIn('300');
        var link = $(this).parent('a').attr('href');

        $.ajax({
            url: link,
            method: 'GET'
          }).done(function(data){

            $('.comic-details').css('display', 'block');
            $('.comic-details').html(data);


          });


          $('.next-link').on('click', function(event){
            event.preventDefault();
            });

            $('body').on('click', function(event){
              $('.comic-details').css('display', 'none')

            });

    });


      // var showLink = $('a.next-link').attr('href');
      //
      // $.ajax({
      //   url: showLink,
      //   method: 'GET'
      // }).done(function(data){
      //
      //   $('.comic-details').css('display', 'block');
      //   $('.comic-details').html(data);
      //
      //   $('.comic-details').on('click', function(){
      //     $('.comic-details').css('display', 'none')
      //
      //   });

      // });


});
