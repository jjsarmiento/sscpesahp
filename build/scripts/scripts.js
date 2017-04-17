$(document).ready(function(){
	// tabs scripts -- start
	$(".alert>span.close").click(function(){
		$(this).closest('div.alert').fadeOut("fast");
	});
	// tabs scripts -- end
});