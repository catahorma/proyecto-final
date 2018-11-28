$('.carousel').carousel({
  interval: 2000
})


// Regular map
function regular_map() {
var var_location = new google.maps.LatLng(40.725118, -73.997699);

var var_mapoptions = {
center: var_location,
zoom: 14
};

var var_map = new google.maps.Map(document.getElementById("map-container"),
var_mapoptions);

var var_marker = new google.maps.Marker({
position: var_location,
map: var_map,
title: "New York"
});
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', regular_map);



(function($){
	$(document).ready(function(){
		$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
			event.preventDefault(); 
			event.stopPropagation(); 
			$(this).parent().siblings().removeClass('open');
			$(this).parent().toggleClass('open');
		});
	});
})(jQuery);
