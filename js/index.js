(function(){ 
    var navigationCheck = function() {
        if (screen.width <= 376) {
          document.getElementById('desktop-navigation').removeClass('nav-items');
        } 
    }

    $('#summary').on('click', function(event){
      event.preventDefault();
      $('#page-summary').toggle('slow');
  
    });
  
    $('#scroll ul li a[href^="#"]').click(function(event){
      event.preventDefault();
  
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 500);
    });
}());