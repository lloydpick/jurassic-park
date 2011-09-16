
function blink(div) {
  $(div).fadeTo(400, 0.33).fadeTo(400, 1, function(){blink(div)});
}

function break_stuff() {
  $('#status-bars').removeClass('green').addClass('red');
  $('img#mongo1').addClass('flash');
  var text = 'SYSTEM FAILURE!'
  $('#status-bar-top').text(text);
  $('#status-bar-left').text(text);
  $('#status-bar-right').text(text);
  $('#status-bar-bottom').text(text);
}

$(function(){
    // break_stuff();

    $('#tabs').tabs({ fx: { opacity: 'none' } }).tabs('rotate', 2000);
  
    $('#outer').css({'height':(($(window).height())-30)+'px'});
    $('#inner').css({'height':(($('#outer').height())-30)+'px'});
    
    $('#map').css({'width':((($('#inner').width() / 3) * 2) -5)+'px'});
    $('#info').css({'width':(($('#inner').width() / 3))+'px'});
    
    $('.alerts').css({'height':(($('#info').height()) - 105)+'px'});
    $('.alerts').css({'width':(($('#info').width()) - 45)+'px'});
    $('.alerts .message').css({'width':(($('.alert').width()) - 100)+'px'});
    
    $('.alert').css({'width':(($('.alerts').width()) - 20)+'px'});
    
    $('#status-bars').css({'width':(($('#map').width())-40)+'px', 'height': (($('#map').height())-40)+'px'});
    
    $('#status-bar-left').css({'left':'-'+(($('#status-bars').height()/ 2) + 20)+'px'});
    $('#status-bar-left').css({'width':(($('#status-bars').height())+60)+'px'});
    $('#status-bar-right').css({'right':'-'+(($('#status-bars').height()/ 2) + 20)+'px'});
    $('#status-bar-right').css({'width':(($('#status-bars').height())+60)+'px'});
    
    blink($('#status-bars.red'));
    blink($('img.flash'))

    $(window).resize(function(){
      $('#outer').css({'height':(($(window).height())-30)+'px'});
      $('#inner').css({'height':(($('#outer').height())-30)+'px'});
      
      $('#map').css({'width':((($('#inner').width() / 3) * 2) -5)+'px'});
      $('#info').css({'width':(($('#inner').width() / 3))+'px'});
      
      $('.alerts').css({'height':(($('#info').height()) - 105)+'px'});
      $('.alerts').css({'width':(($('#info').width()) - 45)+'px'});
      $('.alerts .message').css({'width':(($('.alert').width()) - 100)+'px'});
      
      $('.alert').css({'width':(($('.alerts').width()) - 20)+'px'});
      
      $('#status-bars').css({'width':(($('#map').width())-40)+'px', 'height': (($('#map').height())-40)+'px'});
      
      $('#status-bar-left').css({'left':'-'+(($('#status-bars').height()/ 2) + 20)+'px'});
      $('#status-bar-left').css({'width':(($('#status-bars').height())+60)+'px'});
      $('#status-bar-right').css({'right':'-'+(($('#status-bars').height()/ 2) + 20)+'px'});
      $('#status-bar-right').css({'width':(($('#status-bars').height())+60)+'px'});
    });
});