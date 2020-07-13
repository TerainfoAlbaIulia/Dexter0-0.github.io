jQuery(document).ready(function(){
    //   insert back to top button dynamicly
     $( "#ScrollToTopButton" ).append('<a class="ScrollToTopButton" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
      var $window = $(window);
      var distance = 80;
        // scroll
      $window.scroll(function() {
        // header
        if($window.scrollTop() >= distance) {
          $(".ScrollToTopButton").fadeIn();
        }else{
          $(".ScrollToTopButton").fadeOut();
        }
      });
      
      $('.ScrollToTopButton').click(function() {
        $('html, body').animate({
                scrollTop: 0
            }, 800);
     });
    })
