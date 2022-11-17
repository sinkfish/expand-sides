$(() => {

   function expandSides() {

      viewport = $('body').width();

      if (viewport >= 992) {

         boxInner = ".container, .container2";

         $(boxInner).each(function() {

            boxInnerSideLt = ".col-a, .row-a", 
            boxInnerSideRt = ".col-b",
            sliceVal = viewport - $(this).innerWidth(),
            getValPad = $(this).innerWidth() - $(this).width(),

            getValLt = $(this).find(boxInnerSideLt).innerWidth(),
            getValRt = $(this).find(boxInnerSideRt).innerWidth(),

            valLt = sliceVal / 2 + getValLt + getValPad / 2,
            valRt = sliceVal / 2 + getValRt + getValPad / 2;

            console.log(getValPad);

            $(this).find('.expand-side-a').css('width', valLt);
            $(this).find('.expand-side-b').css('width', valRt);

            $(this).find('.expand-side-a .width-value span').text(valLt);
            $(this).find('.expand-side-b .width-value span').text(valRt);
            
         });

      } else {

         $('.expand-side-a, .expand-side-b').css('width', '100%');

      }
   } expandSides();

   function getHeight() {
      divHeight1 = $('.container').find('.col-a .red-box').innerHeight();
      divHeight2 = $('.container').find('.col-b .red-box').innerHeight();
      divHeight3 = $('.container2').find('.expanded-wrap').innerHeight();

      $('.col-a .expanded-wrap').css('height', divHeight1);
      $('.col-b .expanded-wrap').css('height', divHeight2);
      $('.container2 .row-a').css('height', divHeight3);
   } getHeight();

   $(window).on('resize', () => {
      expandSides();
      getHeight();
   });

});