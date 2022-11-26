$(() => {

   function expandSides() {

      const viewportSize = $('body').width();

      if (viewportSize >= 992) {

         let parentWrap = ".container, .container2";

         $(parentWrap).each(function() {

            const child_LeftSide = ".col-a, .row-a", 
                  child_RightSide = ".col-b";
            
            let sliceVal = viewportSize - $(this).innerWidth(),
                getValPadding = $(this).innerWidth() - $(this).width(),
                getValLt = $(this).find(child_LeftSide).innerWidth(),
                getValRt = $(this).find(child_RightSide).innerWidth(),

                // Calculation
                valLt = sliceVal / 2 + getValLt + getValPadding / 2,
                valRt = sliceVal / 2 + getValRt + getValPadding / 2;

            $(this).find('.expand-side-a').css('width', valLt);
            $(this).find('.expand-side-b').css('width', valRt);

            // Optional
            $(this).find('.expand-side-a .width-value span').text(valLt);
            $(this).find('.expand-side-b .width-value span').text(valRt);
            // End Optional
            
         });

      } else {

         $('.expand-side-a, .expand-side-b').css('width', '100%');

      }
   } expandSides();

   // Optional
   function getHeight() {
      divHeight1 = $('.container').find('.col-a .red-box').innerHeight();
      divHeight2 = $('.container').find('.col-b .red-box').innerHeight();
      divHeight3 = $('.container2').find('.expanded-wrap').innerHeight();

      $('.col-a .expanded-wrap').css('height', divHeight1);
      $('.col-b .expanded-wrap').css('height', divHeight2);
      $('.container2 .row-a').css('height', divHeight3);
   } getHeight();
   // End Optional

   $(window).on('resize', () => {
      expandSides();
      getHeight();
   });

});