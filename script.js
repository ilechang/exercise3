
$(document).on("click","a", load);

function load(event){
  event.preventDefault();
  var file = $(this).attr("href");
  $("#ajax").load(file);
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
}

$(window).on("load",start);
function start(){
$("#menu").load("menu.html", init);
}

function init(){
  $("#menu a:first").click();
}
