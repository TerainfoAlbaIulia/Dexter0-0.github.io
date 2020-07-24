// Scroll to top butoon animation

jQuery(document).ready(function()
{
  $( "#ScrollToTopButton" ).append('<a class="ScrollToTopButton" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
  
  var $window = $(window);
  var distance = 80;
    
  $window.scroll(function() 
  {
    if($window.scrollTop() >= distance) 
    {
      $(".ScrollToTopButton").fadeIn();
    }
    else
    {
      $(".ScrollToTopButton").fadeOut();
    }
  });
      
  $('.ScrollToTopButton').click(function() 
  {
    $('html, body').animate
    ({
      scrollTop: 0
    },800);
    
  });
})

// Drop Down Phone Navbar Animation
