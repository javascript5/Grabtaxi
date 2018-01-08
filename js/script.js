$(document).ready(function(){
  $('.btn_video_preview').click(function(){
    $('.video_box').css({"left":"0%"});
    var video = $(".video_ctrl").get(0);
    video.play();
  });

  $('.skip_video').click(function(){
    $('.video_box').css({"left":"-500%"});
    var video = $(".video_ctrl").get(0);
    video.pause();
    video.load();
  });
  $('.btn_starter_link').click(function(){
    $('body').css({"overflow":"visible"});
    $('#step2').css(
      {"opacity": "1", "z-index": "10"}
    );
    $("#logo_2").css({"opacity": "1","top":"0px"});
    $('#logo_2').delay(500).queue(function(){
      $(this).css({"margin-top":"0px", "z-index": "0"});
    });

    $('.page1 span').css({"background-color":"#0fe880"});
    $('.page2 span,.page3 span,.page4 span,.page5 span,.page6 span').css({"background-color":"#0a5632"});

       $('.line').delay(1000).queue(function(){
    $(this).css({"width":"100%"});
  });

   $('.line2').delay(1100).queue(function(){
    $(this).css({"width":"100%"});
  });

  $('.phone').delay(1900).queue(function(){
        $(this).css({"top":"0px"})
   });


   $('.screen').delay(2300).queue(function(){
      $(this).css({ "background-position-x":"-307px",});

       
    });


    $('#how_to_1').delay(3000).queue(function(){
      $(this).css({"left":"0px"});
    });
    

    $('.bg_black').delay(3500).queue(function(){
       $(this).css({"opacity":"0.7"});
    });
    

  
   $('.next').delay(4000).queue(function(){
        $(this).css({"opacity":"1"})
        $('.line').css({"width":"0px"});
        $('.line2').css({"width":"0px"});
   });




    
    // alert('12');
  });

  $('.page1,.page2').trigger('click');
    $('.page1').click(function(){
    $("#how_to_1").css({"left":"0"});
    $("#how_to_1").css({"transition":"all 2s ease"});
    $("#how_to_1_clone").css({"left":"-500px"});
    $('.call_btn').css({"top":"-500px"});
    $('.bg_black').css({"opacity":"0.7"});
    $(".screen").css({"background-position-x":"-307px"});
    $('.box_driver').css({"top":"-50%"});
    $('.drive_popup').css({"bottom":"-50%"});
    $('.social_sh').css({"right":"-50%"});
    $('.social_end').css({"top":"-50%"});
    $('.page1 span').css({"background-color":"#0fe880"});
    $('.page2 span,.page3 span,.page4 span,.page5 span,.page6 span').css({"background-color":"#0a5632"});
  });


  $('.page2').click(function(){
    $("#how_to_1").css({"left":"-9999px"});
    $("#how_to_1_clone").css({"left":"0px"});
    $('.call_btn').css({"top":"10%","z-index":"9"});
    $('.bg_black').css({"opacity":"0.7"});
    $(".screen").css({"background-position-x":"-307px"});
    $('.box_driver').css({"top":"-50%"});
    $('.drive_popup').css({"bottom":"-50%"});
    $('.social_sh').css({"right":"- 50%"});
    $('.social_end').css({"top":"-50%"});
    $('.page2 span').css({"background-color":"#0fe880"});
    $('.page1 span,.page3 span,.page4 span,.page5 span,.page6 span').css({"background-color":"#0a5632"});
  });


  $('.page3, .call_btn h1').click(function(){
    $("#how_to_1").css({"left":"-9999px"});
    $("#how_to_1_clone").css({"left":"-500px"});
    $(".screen").css({"background-position-x":"-614px"});
    $('.bg_black').css({"opacity":"0"});
     $('.call_btn').css({
       "top":"-50%",
       "z-index":"0",
      });
    $('.box_driver').css({"top":"-50%"});
    $('.drive_popup').css({"bottom":"-50%"});
    $('.social_sh').css({"right":"-50%"});
    $('.social_end').css({"top":"-50%"});
    $('.page3 span').css({"background-color":"#0fe880"});
    $('.page2 span,.page1 span,.page4 span,.page5 span,.page6 span').css({"background-color":"#0a5632"});
  });


   $('.page4').click(function(){
    $("#how_to_1").css({"left":"-9999px"});
    $("#how_to_1_clone").css({"left":"-500px"});
    $(".screen").css({"background-position-x":"-921px"});
    $('.bg_black').css({"opacity":"0.7"});
     $('.call_btn').css({
       "top":"-50%",
       "z-index":"0",
      });
    $('.box_driver').css({"top":"20%"});
    $('.drive_popup').css({"bottom":"-50%"});
    $('.social_sh').css({"right":"-50%"});
    $('.social_end').css({"top":"-50%"});
    $('.page4 span').css({"background-color":"#0fe880"});
    $('.page2 span,.page3 span,.page1 span,.page5 span,.page6 span').css({"background-color":"#0a5632"});
  });

  $('.page5').click(function(){
    $("#how_to_1").css({"left":"-9999px"});
    $("#how_to_1_clone").css({"left":"-500px"});
    $(".screen").css({"background-position-x":"-1228px"});
    $('.bg_black').css({"opacity":"0.7"});
     $('.call_btn').css({
       "top":"-50%",
       "z-index":"0",
      });
    $('.box_driver').css({"top":"-50%"});
    $('.drive_popup').css({"bottom":"-10px"});
    $('.social_sh').css({"right":"10px"});
    $('.social_end').css({"top":"-50%"});
    $('.page5 span').css({"background-color":"#0fe880"});
    $('.page2 span,.page3 span,.page4 span,.page1 span,.page6 span').css({"background-color":"#0a5632"});
  });

  $('.page6').click(function(){
    $("#how_to_1").css({"left":"-9999px"});
    $("#how_to_1_clone").css({"left":"-500px"});
    $(".screen").css({"background-position-x":"-1228px"});
    $('.bg_black').css({"opacity":"0.8"});
     $('.call_btn').css({
       "top":"-50%",
       "z-index":"0",
      });
    $('.box_driver').css({"top":"-50%"});
    $('.drive_popup').css({"bottom":"-10px"});
    $('.social_sh').css({"right":"-50%"});
    $('.social_end').css({"top":"35%"});
    $('.drive_popup').css({"bottom":"-50%"});
    $('.page6 span').css({"background-color":"#0fe880"});
    $('.page2 span,.page3 span,.page4 span,.page5 span,.page1 span').css({"background-color":"#0a5632"});
  });
    




});



