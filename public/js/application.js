$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  // Home()
  toggle()
});

var Home = function(){
    $("#home").on("click",function(e){
      // e.preventDefault()
      console.log("YES")
      var url = $(this).attr("href")
      var method = "GET"
      $.ajax({
      	url: url,
      	method: method
      }).done(function(res){
      	console.log(res)
    	$("body").html(res)
  })

      });
}


var toggle = function(){
	$(".img-responsive, .name").mouseenter(function(e){
		e.preventDefault()
		$(this).siblings('p').slideDown("slow");
		console.log("you")
	})
	$(".img-responsive, .name").mouseleave(function(e){
		e.preventDefault()
		$(this).siblings('p').slideUp("slow")
		console.log("you")
	})
}