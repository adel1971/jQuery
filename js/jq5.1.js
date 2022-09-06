$(document).ready(function(){
    // Add smooth scrolling to all links

    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        const hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({

          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });




    $('html, body,.main').css({
      height: '100%',
      margin: '0'
    })
  $('nav').css({
    position: 'fixed',
  })
  $('h1').css({
    textAlign: 'center',
  margin: '0'
  })
 $('#section1').css( {
    width: '100%',
    backgroundColor: '#CCC',
    height: '100%'
  })
  $('#section2').css( {
    width: '100%',
    backgroundColor: '#CC0',
    height: '100%'
  })


  });













