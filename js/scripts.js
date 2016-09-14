// Twitter
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

// Document ready load
$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $('.hero-about').stellar({
	  horizontalScrolling: false,
	  responsive: true
	});

  // jQuery tooltip example
	$(function () {
		$('#tt-01').tooltip();
	});
  // jQuery tooltip for buttons
  $(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

  // accordion fix
  $('#accordion').collapse().height('auto');

  // contact form: on submit
  // $('#input-submit').on('click', function() {
  // });

  // contact form: message text count
  $('#input-message').on('keyup', function() {
    // console.log("keyup happened"); // log keypress
    var charCount = $('#input-message').val().length; // store keypresses as variable
    console.log(charCount) // print amount of characters
    $("#char-count").html(charCount); // display count

    // conditional
    if(charCount > 50) {
      $('#char-count').css('color', 'red'); // turns characters red
      $('#char-count').css('font-weight', '700'); // increases font weight 
    } else {
      $('#char-count').css('color', 'black'); // turns characters black
    };
  });
  
  // 2.7
  $('#input-submit').on('click', function() {
    var msgCount = $('#input-message').val().length;
    if(msgCount == 0 || msgCount == "") {
      $('#input-message').css('border', '2px solid red');
    } else {
      var comment = $('#input-message').val();
      console.log(comment);
      $('#visible-comment').html(comment);
      $('#input-message').hide();
      $('#submit-result').html("Your message has been received");
      return false;
    };

  // 2.8 - Work
  console.log(works);

  });

}); // end document ready