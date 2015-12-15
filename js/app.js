
$(document).ready(function() {
	$('a').click(function(){
		var attribut = $(this).attr('href');
		$(attribut).toggle();
	});
});



// recupere donnée contenu dans json user-7.json

$.getJSON( "user-7.json", function( data ) {
	var elts = $("[elt]");
	
	for (var i = 0; i < elts.length; i++) {
		
		var attr = $(elts[i]).attr('elt');
		var valeur = data[attr];
		$(elts[i]).html(valeur);

	};
});

