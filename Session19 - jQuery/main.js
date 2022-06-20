$("#hide").click(function(){
  $("p").hide();
});

$("#show").click(function(){
  $("p").show();
});


$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});
$(document).ready(function(){
  $("button").click(function(){
    $(".test").hide();
  });
});

$("p").append("Some appended text.");
$("p").prepend("Some prepended text.");
$("img").after("Some text after");
$("img").before("Some text before");

$("p").css({"background-color": "yellow", "font-size": "200%"});
$("p").css("background-color", "yellow");

$("p").click(function(){
  // action goes here!!
});
$("p").dblclick(function(){
  $(this).hide();
});
$("#p1").mouseenter(function(){
  alert("You entered p1!");
});
$("#p1").mouseleave(function(){
  alert("Bye! You now leave p1!");
});
$("#p1").mousedown(function(){
  alert("Mouse down over p1!");
});

$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
}); 