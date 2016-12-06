$(document).ready(function() {

  window.onscroll = function(){

    var top = $(".vision-wrapper").offset().top;
    var min = top-400;
    var max = top+300;
      var t = document.documentElement.scrollTop || document.body.scrollTop;
      if(t>min&&t<max){
        $('#header-bg').addClass('red-bg');
      }
      else{
        $('#header-bg').removeClass('red-bg');
      }
   }

});
