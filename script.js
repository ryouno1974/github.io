$(function(){
    $('#top-btn').click(function(){
        $('html, body').animate({
            'scrollTop':0
          },500)
     });

    $('.header-list a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
         $('html, body').animate({ 
         'scrollTop': position 
          },500);
    });
     
    $('.photo img').click(function(){
      var pot = $(this).attr('src');
      $('.modal-window').css('background-image', 'none');
      $('.modal-window').css('background-image','url('+pot+')');
      $('.modal-window').fadeIn();
     
    })

    $('.modal-window').click(function(){
     $('.modal-window').fadeOut();

     


    })





















});