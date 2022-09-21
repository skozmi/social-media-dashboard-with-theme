$(document).ready(()=>{
  $("#inputToggle").on("click", ()=>{
      if($("#toggleText").text()=="Dark mode"){
        $("#toggleText").text("Light mode");
        $("#toggleContainer").addClass("dark");
        $("body").addClass("dark");
        $(".view").css("background" , "hsl(228, 28%, 20%)");
        $(".card-body").removeClass("social-media"); 
      }
      else {
        $("#toggleText").text("Dark mode");
        $("#toggleContainer").removeClass("dark");
        $("body").removeClass("dark");
        $(".view").css("background","white");
        $(".card-body").addClass("social-media");
      }
  });

  $(function() {
    $('#toggle-one').bootstrapToggle();
  });
});




