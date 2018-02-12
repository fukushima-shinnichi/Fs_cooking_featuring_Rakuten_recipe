
function get_cooking_api(){
  
  document.getElementById("search_btn").addEventListener("click",function(){
    
    var choice_cooking = document.getElementById("choice_cooking").value;
    var URL = "https://app.rakuten.co.jp/services/api/Recipe/CategoryRanking/20170426?applicationId=";
    var myID = "1079913679878702825";
    var after_URL = "&categoryId=";
    var all_URL = URL+myID+after_URL+choice_cooking;
    
    $(function(){
      
      $(".recipe").remove();
      
      $.ajax({
        
        url: all_URL,
        dataType: "json",
        
      }).done(function(data){
        
        for(var i=0; i<=3; i++){
          
          function add_recipe_ranking(){
            
            $("#slide").append("<div class='recipe' id = recipe_"+i+"></div>");
            $("#recipe_" + i).append("<h2>" + data.result[i]["recipeTitle"] + "</h2>");
            $("#recipe_" + i).append("<div id=image_area_" + i + "></div>");
            $("#image_area_" + i).append("<a class='cook_url' id='cook_url_" + i + "'" +"href=" + data.result[i]["recipeUrl"] + "></a>");
            $("#cook_url_" + i).append("<img class='cook_img' src='" + data.result[i]["foodImageUrl"] + "'>");
            $("#recipe_" + i).append("<p>" + data.result[i]["recipeDescription"] + "</p>");
  
          };
          
          add_recipe_ranking();
          
          
        };

        swipe_func();
        
      });
      
      
      function swipe_func(){
        
        var startX;
        var moveX;
        var result_moveX;
        var nowMarginLeft;
        var sumMargin;
        
        function touchStart_func(){
          $("#slide").on("touchstart",function(){
            startX = event.touches[0].pageX;
            nowMarginLeft = parseInt($(this).css("marginLeft"));
            return true;
          });
          return true;
        };
        
        function touchMove_func(){
          $("#slide").on("touchmove",function(){
            moveX = event.changedTouches[0].pageX;
            result_moveX = moveX - startX;
            $(this).css("marginLeft", nowMarginLeft + result_moveX);
            sumMargin = nowMarginLeft + result_moveX;
            return true;
          });
          return true;
        };
        
        function touchEnd_func(){
          $("#slide").on("touchend",function(){
            if(sumMargin <= -1125){
              $(this).animate({
                marginLeft: nowMarginLeft,
              });
            }else if(sumMargin >= 0){
              $(this).animate({
              marginLeft: nowMarginLeft,
              });
            }else if(result_moveX >= 100){
              $(this).animate({
                marginLeft: nowMarginLeft + 375,
              });
            }else if(result_moveX <= -100){
              $(this).animate({
                marginLeft: nowMarginLeft - 375,
              });
            }else{
              $(this).animate({
                marginLeft: nowMarginLeft,
              });
            };
          });
        };
        
        touchStart_func();
        touchMove_func();
        touchEnd_func();
      };
      
    });
    
  });
  
};


get_cooking_api();


$(function(){
  
  function add_circle_btn_func(){
    
    $("#search_btn").on("click",function(){
      
      $(".circle_btn").remove();
      
      for(var i = 0; i<=3; i++){
        
        $("#button_area").append("<button class='circle_btn' id='circle_btn_" + i +"'></button>");
        $("#circle_btn_" + i).append('<i class="fas fa-circle"></i>');
      
      };
      
      move_slide_push_btn();
      
      
    });
    
  };
  
  function move_slide_push_btn(){
    
    $("#circle_btn_0").on("click",function(){
      $("#slide").animate({
        marginLeft: -375 * 0 + "px",
      },function(){
        $(".fa-circle").css("color", "rgba(169,169,169,0.8)");
        $("#circle_btn_0 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      });
    });
    
    $("#circle_btn_1").on("click",function(){
      $("#slide").animate({
        marginLeft: -375 * 1 + "px",
      },function(){
        $(".fa-circle").css("color", "rgba(169,169,169,0.8)");
        $("#circle_btn_1 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      });
    });
    
    $("#circle_btn_2").on("click",function(){
      $("#slide").animate({
        marginLeft: -375 * 2 + "px",
      },function(){
        $(".fa-circle").css("color", "rgba(169,169,169,0.8)");
        $("#circle_btn_2 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      });
    });
    
    $("#circle_btn_3").on("click",function(){
      $("#slide").animate({
        marginLeft: -375 * 3 + "px",
      },function(){
        $(".fa-circle").css("color", "rgba(169,169,169,0.8)");
        $("#circle_btn_3 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      });
    });

  };
  
  function circle_btn_change_color_func(){

    setInterval(function(){
      var silde_now_marginLeft = parseInt($("#slide").css("marginLeft"));

      $(".circle_btn .fa-circle").css("color", "rgba(169,169,169,0.8)");

      if(silde_now_marginLeft == -375 * 0){
        $("#circle_btn_0 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      }else if(silde_now_marginLeft == -375 * 1){
        $("#circle_btn_1 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      }else if(silde_now_marginLeft == -375 * 2){
        $("#circle_btn_2 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      }else if(silde_now_marginLeft == -375 * 3){
        $("#circle_btn_3 .fa-circle").css("color", "rgba(255,99,71,0.8)");
      }else{
        $(".circle_btn .fa-circle").css("color", "rgba(169,169,169,0.8)");
      };

    },1000);

  };
  

  add_circle_btn_func();
  circle_btn_change_color_func();
  
});












/*==========   javascript swipe test   ============*/
/*
function js_touch_func(){
  
  var startX;
  var moveX;

  function touchStart(){

    document.getElementById("slideTest").addEventListener("touchstart", function(){
      //console.log(event.touches[0].pageX);
      //console.log(event.touches[0].pageY);
      startX = event.touches[0].pageX;
    });

  };

  function touchMove(){

    document.getElementById("slideTest").addEventListener("touchmove", function(){
      //console.log(event.changedTouches[0].pageX);
      //console.log(event.changedTouches[0].pageY);
      moveX = event.changedTouches[0].pageX;
    });

  };

  function touchEnd(){

    document.getElementById("slideTest").addEventListener("touchend", function(){
      var moving_amount = moveX-startX;
      console.log(moving_amount);
      
      if(moving_amount <= 50){
        // Left moveing
        var element_left = document.getElementById("slideTest");
        var cssGet_left = getComputedStyle(element_left, null);
        var css_left = cssGet_left.getPropertyValue("margin-left");
        var css_left_Int = parseInt(css_left);
        console.log(css_left_Int);
        element_left.style.marginLeft = css_left_Int - 200 + "px";
     
      }else if(moving_amount >= 50){
        // Right moveing
        var element_left = document.getElementById("slideTest");
        var cssGet_left = getComputedStyle(element_left, null);
        var css_left = cssGet_left.getPropertyValue("margin-left");
        var css_left_Int = parseInt(css_left);
        console.log(css_left_Int);
        element_left.style.marginLeft = css_left_Int + 200 + "px";
        
      };
    });

  };
  
  touchStart();
  touchMove();
  touchEnd();
  
};

//js_touch_func();
*/
/*===============        =======================*/