$('#wpjb-share').find('a').each(function(index, el) {	
	var share_url = $(el).attr('href');
	if (index<3) {
		$(el).attr('href',share_url+location.href);		
	}	
});
$('.job-type').css({

	color: iFixBlue,

	fontWeight : 'bold'

});	

$('.job-location').css({

	color: iFixBlue,

	fontWeight : 'bold'

});

$('.job-date').css({

	color: iFixBlue,

	fontWeight : 'bold'

});

$('.job-features').appendTo('#job_features_container');

$('.sjb-page').find('.sjb-filters').css({

	backgroundColor : iFixYellow,		

}).addClass('rounded');

$('.sjb-page').find('.sjb-filters').find('form').find('.row').find('.sjb-search-keywords').find('.form-group').find('input').css({

	textIndent  : '10px',		

}).addClass('rounded');

$('.sjb-page').find('.sjb-filters').find('form').find('.row').find('div').find('.form-group').find('select').addClass('form-control').css({

	textIndent  : '10px',

}).addClass('rounded');

$('.sjb-page').find('.sjb-filters').find('form').find('.row').find('div').find('.btn').css({		

	backgroundColor : iFixBlue,

	textIndent  : '10px',

}).addClass('rounded');

$('.sjb-page').find('.sjb-listing').find('.list-view').css({

	margin:0,

	padding:0

});

$('.job-description').each(function(index, el) {		

	var href =$(this).find('.job_link').text();

	var njd=$(this).find('p').eq(0).text().replace("[…]","<a href='"+href+"'>[…]</a>");

	$(this).find('p').eq(0).html(njd);

});

if($('#map').exists()){
	$('#map').css({
		height:'440',
		width: 'auto'
	});
	var mapid = $('#map').attr('id');
	var address1 =	$.trim(	
						$('#map_address')
						.text()
					);
	var address =	address1
					.split(',');	
	var last = $.trim(address.pop());
	var penul = address.pop();	
	var search = $.trim((penul+' '+last).replace('Suite','').replace('Space','').toLowerCase());
	var endpoint = 'https://nominatim.openstreetmap.org/search?q='+search+'&format=jsonv2&addressdetails=1&accept-language=en&countrycodes=us';
	$.ajax({
		url: endpoint,
		complete:function(data){					
			data.responseJSON.forEach(function (element) {
				var city = element.address.county 				
				if (element.address.town) {
					city = element.address.town;
				}
				if (element.address.city) {
					city = element.address.city;
				}
				if (element.address.road) {
					city = element.address.road;
				}
				if (address1.toLowerCase().indexOf(city.toLowerCase())>=0) {
					var coord ='&lat='+element.lat+'&lng='+element.lon;
					var wpsl = $('.navbar-brand').attr('href')+'/wp-admin/admin-ajax.php?action=store_search&max_results=30&search_radius=1500'+coord+'&search='+search;
					$.ajax({
						url: wpsl,
						beforeSend:function(){
							blockScreen();
						},						
						complete:function(data_wpsl){
							unblockScreen();
							data_wpsl.responseJSON.forEach(function(data_wpsl_element) {
								if (data_wpsl_element.city.toLowerCase().indexOf(city.toLowerCase())>=0 || 
									data_wpsl_element.address.toLowerCase().indexOf(city.toLowerCase())>=0) {
									var lat = data_wpsl_element.lat;
									var lng = data_wpsl_element.lng;
									var name = data_wpsl_element.store;
									var state = data_wpsl_element.state;
									var address = data_wpsl_element.address;
									var permalink = data_wpsl_element.permalink;									
									var popup = L.popup({
										    className:'overMarkerPopup'
										})
									    .setLatLng(lat+lng)
									    .setContent('<a href="'+permalink+'">'+name+'</a>');

									var mapid = 'map';			
									var container = L.DomUtil.get(mapid);			
								    var mymap = L.map(mapid).setView([lat,lng],15);
								    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
								        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
								        maxZoom: 15		        
								    }).addTo(mymap);
									var blueIcon = L.icon(blue_iFix_icon);								    								    
								    var marker = L.marker([lat,lng],{
							            win_url: permalink,
							            icon: blueIcon
							        }).bindPopup(popup).addTo(mymap);
							        $('#'+mapid).addClass('rounded');
								    return false;
								}
							});							
						}
					});
					return false;	
				}				
			})
		}
	});		

}