/* 
 * © Code 581
 */

/*******************************************************************************
 * 
 *                  ANIMSITION (page loading)
 *  
 ******************************************************************************/
$(document).ready(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-down-sm',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});


/*******************************************************************************
 * 
 *                  PATH DRAWING
 *  
 ******************************************************************************/

$(document).ready(function() {
    var distancePerPoint = 1;
    var drawFPS          = 200;

    var orig = document.querySelector('#inner'), length, timer, i = 0;
    //orig.addEventListener('mouseover',startDrawingPath,false);
    //orig.addEventListener('mouseout', stopDrawingPath, false);
    
    startDrawingPath();   
    
    function startDrawingPath(){
      length = 0;
      orig.style.stroke = '#fff';
      timer = setInterval(increaseLength,1000/drawFPS);
    }

    function increaseLength(){
      var pathLength = orig.getTotalLength();
      length += distancePerPoint;
      orig.style.strokeDasharray = [length,pathLength].join(' ');
      if (length >= pathLength) {
          clearInterval(timer);
          // added because of three rings
          if (i < 2) {
            i++;
            if (i == 1)
              orig = document.querySelector('#middle');
            if (i == 2)
              orig = document.querySelector('#outter');
            startDrawingPath();
          }
      };
    }

    function stopDrawingPath(){
      clearInterval(timer);
      orig.style.stroke = '';
      orig.style.strokeDasharray = '';
    }

});


/*******************************************************************************
 * 
 *                  LOGO SVG ANIMATIONS
 *  
 ******************************************************************************/
$(document).ready(function() {

    $('#logo-svg').on("mouseover", function() {
        $stop = $("#s201");
        $stop[0].beginElement();
        
        
        $el = $("#gcircle");
        $el.addClass("grow");
        $el.on('webkitAnimationEnd', function() {
            $el.removeClass("grow");
        });
        /*
        el.addClass("grow");
        var newone = el.clone(true);
        el.before(newone);
        $("." + el.attr("grow") + ":last").remove();
        */
       
        /*
        el.removeClass("grow");
        void el.offsetWidth;
        el.addClass("grow");
        */
       
        /*
        $el[0].style.webkitAnimationPlayState = "running";
        $el.on('webkitAnimationEnd', function() {
            this.style.webkitAnimationPlayState = "paused";
        });
        */
       
    });
    
    // CODE FOR CALCULATING TRANSLATE FOR PATH SCALE
    /*
    $path_elem = $("#id_path");      
    //$xt = 7.055;
    //$yt = 8.265;
    $box = $path_elem[0].getBBox();
    $X = $box.width;
    $Y = $box.height;               
    $scale = 1.02;

    $newX = (1 - $scale) * ($box.x + $X/2);
    $newY = (1 - $scale) * ($box.y + $Y/2);
    */
        
});
    


