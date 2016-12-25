$( document ).ready(function() {
    console.log( "ready!" );
    Home();
});

var Home = function(){
    $("#home").on("click",function(e){
      e.preventDefault()
      $("body").html(body)
      console.log("YES")
      });
}