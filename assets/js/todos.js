//Check Off Todos
$("ul").on("click","li", function(){
	$(this).toggleClass("complated");
});

//Click X to delete Todos
$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Add Todos
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		var todoText = $(this).val();
		if (todoText === "") {
			alert("Please Write Something..")
		}else{
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-minus'></i></span> " + todoText + "</li>");
	}
	}
});

$("#toggle-form").on("click","i", function(){
	$("input[type='text']").fadeToggle(500);
	$(this).toggleClass("fa-plus");
	$(this).toggleClass("fa-times");
});
