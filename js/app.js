
$(document).ready(function() {
	$('body').on('click', 'a', function(){
		var attribut = $(this).attr('href');
		$(attribut).toggle();
	});
});



// recupere donnée contenu dans json user-7.json

/*
$.getJSON( "http://vps227573.ovh.net/u-7.json", function( data ) {
	var elts = $("[elt]");
	
	for (var i = 0; i < elts.length; i++) {
		
		var attr = $(elts[i]).attr('elt');
		var valeur = data[attr];
		$(elts[i]).html(valeur);

	};
});
*/
/*
$.getJSON('http://vps227573.ovh.net/u-7.json', function(data) {
	var fullname =  "{{last_name}} {{first_name}}";
	var info = Mustache.to_html(fullname, data);
	$('h1').html(info);
});

*/
$.getJSON('http://vps227573.ovh.net/u-7.json', function(data) {
  var template = $('#template').html();
  Mustache.parse(template);   // optional, speeds up future uses
  var rendered = Mustache.render(template, data);
  $('body').html(rendered);
});