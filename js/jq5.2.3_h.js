$(document).ready(function () {

  $('nav').hide();
  $(document).mousemove(function(e){
    const vertical = e.pageY;

    if(vertical <= 50) {
      $('nav').show();
    } else {
      $('nav').hide();
    }
  });


  $('html, body').css({
    height: '100%',
    margin: '0'
  })
  $('html').css({
    scrollBehavior: 'smooth',
  })
  $('nav').css({
    position: 'fixed',
  })
  $('#container').css( {

    top: '0',
    left: '0',
    width: '200%',
    height:' 100vh',
    display: 'flex',
  });
  $('h1').css({
    textAlign: 'center',
    margin: '0'
  })
  $('#section1').css( {
    width: '100%',
    backgroundColor: '#ccc',
  height: '100%',
  paddingRight: '100px',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  })
  $('#section2').css( {
    width: '100%',
    backgroundColor: '#cc0',
    height: '100%',
    paddingRight: '100px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
  })
})