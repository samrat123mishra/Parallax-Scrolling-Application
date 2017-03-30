$(document).ready(function(){
	var scrolled;

      $(".jump li").click(function(){


            var select=$(this).attr('data-id');
                  // $(window).animate($(select).offset())


                   $('html, body').animate({
                      scrollTop: $(select).offset().top
                    }, 2000);

    });


    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
                 

        $(window).scroll(function() {
			scrolled = $(window).scrollTop();
			console.log(scrolled);
			$('#left_banner').css({'left': '-'+scrolled/10+'%' });
			$('#right_banner').css({'right': '-'+scrolled/10+'%' });
      
			/* var (scrolled * $('.first img')/$(window).width()); */
            //Movement of the title         
            
        
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
 
        }); 
    });    
});