var bounds = [];
var stores = L.layerGroup();
var points = [];
var blueIcon = L.icon(blue_iFix_icon);
var getUrl = window.location;
var blackUrl = getUrl.pathname.split('/')[1];
console.log(blackUrl);


$(function(){
	$('div.product-chooser').not('.disabled').find('div.product-chooser-item').on('click', function(){
		$(this).parent().parent().find('div.product-chooser-item').removeClass('selected');
		$(this).addClass('selected');
		$(this).find('input[type="radio"]').prop("checked", true);

	});
});


$('#loader-outer').hide();

function clearBox(elementID)
{
	document.getElementById(elementID).innerHTML = "";
}

if (sessionStorage.getItem("store_id")){
	$('#first-step-form').addClass('d-none');
	$('#selected-store').removeClass('d-none');
	$('#second-step-form').removeClass('d-none');
}

if ($('body').hasClass('page-id-12') || $('body').hasClass('page-id-1570')){

	$('#stores').find('div').each(function(index, el) {
		console.log("click");

		var lat = $(el).data('lat');
		var lng = $(el).data('lng');
		var name = $(el).data('store');
		var url = $(el).data('url');
		var state = $(el).data('state');
		var address = $(el).data('address');
		if (url!='') {
			var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$('#wpsl_settings').find('#permalink_slug').val()+'/'+url;
		}else{
			var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$(el).data('permalink');
		}
		var text = '<a href='+permalink+' target="_blank">'+name+', '+state+'</a><br>'+address;
		var popup = L.popup({
			className:'overMarkerPopup'
		})
		.setLatLng(lat+lng)
		.setContent(text);
		var point=L.marker([lat,lng], {icon: blueIcon}).bindPopup(popup).addTo(stores);
		if(index===0){
			points=[lat,lng];
		}
		bounds.push([lat, lng]);
	});

	var streets   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});

	$('#initialMap').css({height:400});

	map = L.map('initialMap', {
		center: [points[0],points[1]],
		zoom:6,
		layers: [streets, stores],
		gestureHandling: true
	});

	var baseMaps = {
		"Streets": streets
	};

	var overlayMaps = {
		"Stores": stores
	};

	L.control.layers(baseMaps, overlayMaps).addTo(map);
	map.fitBounds(L.latLngBounds([bounds]).pad(0.2));
}

if ($('body').hasClass('page-id-1402')){

	$('#stores').find('div').each(function(index, el) {
		console.log("click");

		var lat = $(el).data('lat');
		var lng = $(el).data('lng');
		var name = $(el).data('store');
		var url = $(el).data('url');
		var state = $(el).data('state');
		var address = $(el).data('address');
		if (url!='') {
			var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$('#wpsl_settings').find('#permalink_slug').val()+'/'+url;
		}else{
			var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$(el).data('permalink');
		}
		var text = '<a href='+permalink+' target="_blank">'+name+', '+state+'</a><br>'+address;
		var popup = L.popup({
			className:'overMarkerPopup'
		})
		.setLatLng(lat+lng)
		.setContent(text);
		var point=L.marker([lat,lng], {icon: blueIcon}).bindPopup(popup).addTo(stores);
		if(index===0){
			points=[lat,lng];
		}
		bounds.push([lat, lng]);
	});

	var streets   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});

	$('#initialMap').css({height:400});

	map = L.map('initialMap', {
		center: [points[0],points[1]],
		zoom:6,
		layers: [streets, stores],
		gestureHandling: true
	});

	var baseMaps = {
		"Streets": streets
	};

	var overlayMaps = {
		"Stores": stores
	};

	L.control.layers(baseMaps, overlayMaps).addTo(map);
	map.fitBounds(L.latLngBounds([bounds]).pad(0.2));
}

$('#wpsl-search-btn')

.on('click', function(event) {

	$('#result-carousel').removeClass('d-none');

	var home = $('.navbar-brand').attr('href');


	var stores = L.layerGroup();
	var points = [];
	var bounds = [];
	var blueIcon = L.icon(blue_iFix_icon);


	event.preventDefault();
	var lat = sessionStorage.getItem("latitude");
	var lng = sessionStorage.getItem("longitude");
	var text = $.trim($('#inputLocator').val());
	var search_radius = $('#wpsl_settings').find('#search_radius').val();
	var max_results = $('#wpsl_settings').find('#max_results').val();
	var preloader_label = $('#wpsl_settings').find('#preloader_label').val();
	var no_results_label = $('#wpsl_settings').find('#no_results_label').val();


	if (text!='') {
		var endPoint = 'https://nominatim.openstreetmap.org/search?format=jsonv2&accept-language=en&countrycodes=us&q='+text;
		$.ajax({
			url: endPoint,
			beforeSend: function() {
				$('#loader-outer').show();
			},
			success: function(d){
				if (d && d.length>0){
					var lat = d[0].lat;
					var lng = d[0].lon;
					var coord ='&lat='+lat+'&lng='+lng;
					if($('body').hasClass('page-id-12')  || $('body').hasClass('page-id-1570')){
						defaultMap(coord);
					}
					else if (($('#corpmap').exists() && blackUrl == "holidays")) {
						console.log("corpmap");
						$('#LeaftMap').addClass('d-none');
						$('#initialMap').addClass('d-none');
						send = home.replace(/\/$/,"")+'/wp-admin/admin-ajax.php?action=corp_stores'+coord+'&max_results=7&search_radius='+search_radius+'&search='+text;
						/*$('.corporate').each(function(index, el) {
							var lat = $(el).data('lat');
							var lng = $(el).data('lng');
							console.log(lng);
							var name = $(el).data('store');
							var url = $(el).data('url');
							var state = $(el).data('state');
							var address = $(el).data('address');
							if (url!='') {
								var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$('#wpsl_settings').find('#permalink_slug').val()+'/'+url;
							}else{
								var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$(el).data('permalink');
							}
							var text = '<a href='+permalink+' target="_blank">'+name+', '+state+'</a><br>'+address;
							var popup = L.popup({
								className:'overMarkerPopup'
							})
							.setLatLng(lat+lng)
							.setContent(text);
							var point=L.marker([lat,lng], {icon: blueIcon}).bindPopup(popup).addTo(stores);
							if(index===0){
								points=[lat,lng];
							}
							bounds.push([lat, lng]);
						});
						*/
						$.ajax({
							url: send,
							beforeSend:function(){
								$('#loader-outer').show();
							},
							error:function(){
								unblockScreen();
							},
							success:function(data){
								if (!data.length > 0) {
									myAlert(no_results_label,'Location',6,3);
									console.log("nodata");
									Swal.fire({
										title: no_results_label,
										text: 'Please try again with another zip code',
										type: 'warning',
										confirmButtonText: 'Cool'
									});
									return false;
								}
								$('title_locations').removeClass('d-none')
								$('body_locations').removeClass('d-none');
								$('hero_locations').addClass('d-none');
								$('#select_label').removeClass('d-none');
								$('#stores_image').addClass('d-none');
								$('#result_maps').removeClass('d-none');
								$('#initialMap').hide();

								$("#stores").html('');
								$('#result_maps').find('ul').html('');
								console.log(data);

								unblockScreen();

								for (var i = 0; i < data.length; i++) {
									var lat = data[i].lat;
									var lng = data[i].lng;
									var name = data[i].store;
									var state = data[i].state;
									var address = data[i].address;
									var permalink = data[i].permalink;
									var text = '<a href='+permalink+' target="_blank">'+name+', '+state+'</a><br>'+address;
									var popup = L.popup({
										className:'overMarkerPopup',
									})
									.setLatLng(lat+lng)
									.setContent(text)
								    //.openOn(map);
								    var point=L.marker(
								    	[lat,lng], {icon: blueIcon}
								    	).bindPopup(popup).addTo(stores).on('mouseover', function (e) {
								    		this.openPopup();
								    	});
								    	if(i===0){
								    		points=[lat,lng];
								    	}
								    	bounds.push([lat, lng]);
								    }

								    var streets   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
								    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
								    });
								    var container = L.DomUtil.get('corpmap');
								    if(container != null){ container._leaflet_id = null; }
								    $('#corpmap').css({
								    	height: '400px'
								    }).addClass('rounded');

								    var map = L.map('corpmap', {
								    	center: [points[0],points[1]],
								    	zoom:6,
								    	layers: [streets, stores],
								    	gestureHandling: true
								    });

								    var baseMaps = {
								    	"Streets": streets
								    };

								    var overlayMaps = {
								    	"Stores": stores
								    };

								    L.control.layers(baseMaps, overlayMaps).addTo(map);
								    map.fitBounds(L.latLngBounds([bounds]).pad(0.2));

						    //$('#cities').empty();

						    if ($('body').hasClass('page-template-device-repair') && mobile) {

						    	$('#LeaftMap').css({

						    		margin:'auto 20px',

						    	})

						    }

						    unblockScreen();

						},
						complete: function(data){
							$('#loader-outer').hide();
						}

					});

					}
					else{
						$('#result-carousel').owlCarousel({
						});

						/*clearBox('#result-carousel');*/
						blockScreen($('#preloader_label').val());
						$.ajax({
							url: $('.navbar-brand').attr('href').replace(/\/$/,"")+'/wp-admin/admin-ajax.php?action=store_search'+coord+'&max_results=4&search_radius='+search_radius+'&search='+text,
							beforeSend:function(){
								$('#loader-outer').show();
							},
							error:function(){
								unblockScreen();
							},
							success:function(data){
								console.log(data);
								if (data==='') {
									Swal.fire({
										title: no_results_label,
										text: 'Please try again with another zip code',
										type: 'warning',
										confirmButtonText: 'Cool',
										confirmButtonColor: '#79d2e3'
									});
									return false;
								}
								$("#stores").html('');
								console.log("click");
								$('#result_maps').find('ul').html('');

								for (var i=0; i<$('.item').length; i++) {
									$("#result-carousel").trigger('remove.owl.carousel', [i])
									.trigger('refresh.owl.carousel');
								}
								for (var i = 0; i < data.length; i++) {
									var category = 'franchise';									
									if (data[i].terms && data[i].terms!= 'repair') {
										var category = data[i].terms;
									}
									var openingSoon = '';
									if(data[i].terms.includes("Opening Soon")){
										var openingSoon = '. <strong>Opening Soon</strong>';
									}
									if (data[i].terms == 'corporate' || data[i].id == 483 || data[i].id == 523 || data[i].id == 414 || data[i].id == 410 || data[i].id == 390 || data[i].id == 525 || data[i].id == 412){
										var div =
										"<div class='team-member style-3'>"+
									/*"<div class='post-image'>"+
									"<img class='img-fluid w-100' src="+baseUrl+"/wp-content/uploads/2019/09/"+data[i].zip+".jpg' alt=''>"+
									"</div>"+*/
									"<div class='post-desc'>"+
									"<div class='post-meta'>"+
									"<ul class='list-inline'>"+
									"<li class='d-none store_id'>"+data[i].id+"</li>"+
									"<li class='d-none store_category'>"+category+"</li>"+
									"<li class='location-name'><i class='la la-tag hand'></i> "+data[i].store+openingSoon+"</li>"+
									"<br>"+
									"<li class='store_state'><i class='la la-map-signs'></i> "+data[i].state+"</li>"+
									"<li class='store_city'><i class='la la-map-pin '></i> "+data[i].city+"</li>"+
									"<li><i class='la la-map-marker'></i> "+data[i].zip+"</li>"+
									"<br>"+
									/*"<br>"+
									"<li class='la la-location-arrow'> "+data[i].address+"</li>"+*/
									"<li><a style='background: none;' class='text-black store_phone' href='tel:"+data[i].phone+"'><i class='la la-phone'></i> "+data[i].phone+"</a></li>"+
									"<br>"+
									"<li class='store_address2'><a style='background: none;' class='text-black font-w-5' href='"+data[i].address2+"' target='_blank'><i class='la la-map-o'></i> "+'Get Directions'+"</a></li>"+
									"</ul>"+
									"</div>"+
									"<!--div class='holidays-label'>Holiday Specials Discounts</div-->"+
									"<div class='post-title'>"+
									"<a class='btn btn-theme store-btn'><h5 class='text-white mb-0'>"+"Select Store"+"</h5></a>"+
									"</div></div></div>";
								    }
									else if (data[i].id == 463){
									var div =
									"<div class='team-member style-3'>"+
					
					/*"<div class='post-image'>"+
									"<img class='img-fluid w-100' src="+baseUrl+"/wp-content/uploads/2019/09/"+data[i].zip+".jpg' alt=''>"+
									"</div>"+*/
									"<div class='post-desc'>"+
									"<div class='post-meta'>"+
									"<ul class='list-inline'>"+
									"<li class='d-none store_id'>"+data[i].id+"</li>"+
									"<li class='d-none store_category'>"+category+"</li>"+
									"<li class='location-name'><i class='la la-tag hand'></i> "+data[i].store+openingSoon+"</li>"+
									"<br>"+
									"<li class='store_state'><i class='la la-map-signs'></i> "+data[i].state+"</li>"+
									"<li class='store_city'><i class='la la-map-pin '></i> "+data[i].city+"</li>"+
									"<li><i class='la la-map-marker'></i> "+data[i].zip+"</li>"+
									"<br>"+
									/*"<br>"+
									"<li class='la la-location-arrow'> "+data[i].address+"</li>"+*/
									"<li><a style='background: none;' class='text-black store_phone' href='tel:"+data[i].phone+"'><i class='la la-phone'></i> "+data[i].phone+"</a></li>"+
									"<br>"+
									"<li class='store_address2'><a style='background: none;' class='text-black font-w-5' href='"+data[i].address2+"' target='_blank'><i class='la la-map-o'></i> "+'Get Directions'+"</a></li>"+
									"</ul>"+
									"</div>"+
									"<div class='add-sale-label'>Temporarily Closed</div>"+
									"<div class='post-title'>"+
									"<a class='btn btn-theme store-btn'><h5 class='text-white mb-0'>"+"Select Store"+"</h5></a>"+
									"</div></div></div>";
								}else{
									var div =
									"<div class='team-member style-3'>"+
									/*"<div class='post-image'>"+
									"<img class='img-fluid w-100' src="+baseUrl+"/wp-content/uploads/2019/09/"+data[i].zip+".jpg' alt=''>"+
									"</div>"+*/
									"<div class='post-desc'>"+
									"<div class='post-meta'>"+
									"<ul class='list-inline'>"+
									"<li class='d-none store_id'>"+data[i].id+"</li>"+
									"<li class='d-none store_category'>"+category+"</li>"+
									"<li class='location-name'><i class='la la-tag hand'></i> "+data[i].store+openingSoon+"</li>"+
									"<br>"+
									"<li class='store_state'><i class='la la-map-signs'></i> "+data[i].state+"</li>"+
									"<li class='store_city'><i class='la la-map-pin '></i> "+data[i].city+"</li>"+
									"<li><i class='la la-map-marker'></i> "+data[i].zip+"</li>"+
									"<br>"+
									/*"<br>"+
									"<li class='la la-location-arrow'> "+data[i].address+"</li>"+*/
									"<li><a style='background: none;' class='text-black store_phone' href='tel:"+data[i].phone+"'><i class='la la-phone'></i> "+data[i].phone+"</a></li>"+
									"<br>"+
									"<li class='store_address2'><a style='background: none;' class='text-black font-w-5' href='"+data[i].address2+"' target='_blank'><i class='la la-map-o'></i> "+'Get Directions'+"</a></li>"+
									"</ul>"+
									"</div>"+
									"<div class='post-title'>"+
									"<a class='btn btn-theme store-btn'><h5 class='text-white mb-0'>"+"Select Store"+"</h5></a>"+
									"</div></div></div>";
								}
								var item=$('<div>',{
									html:div,
									class: 'item'
								});

								$('#result-carousel').trigger('add.owl.carousel', [item[0].outerHTML]);
								$('#result-carousel').trigger('refresh.owl.carousel');
							}
						},
						complete: function(data) {
							$('#loader-outer').hide();
						}
					})
.fail(function(f) {
	console.log("error",f);
})
}
}
else{
	myAlert(no_results_label,'Location',6,3);
	Swal.fire({
		title: no_results_label,
		text: 'Please try again with another zip code',
		type: 'warning',
		confirmButtonText: 'Cool',
		confirmButtonColor: '#79d2e3'
	});
}

},
complete: function (data) {
	$('#loader-outer').hide();
}
});

}
else{
	var home = $('.navbar-brand').attr('href');
	var lat = sessionStorage.getItem("latitude");
	var lng = sessionStorage.getItem("longitude");
	var coord ='&lat='+lat+'&lng='+lng;
	var text = $.trim($('#inputLocator').val());
	var search_radius = $('#wpsl_settings').find('#search_radius').val();
	var preloader_label = $('#wpsl_settings').find('#preloader_label').val();
	var no_results_label = $('#wpsl_settings').find('#no_results_label').val();
	var stores = L.layerGroup();
	var points = [];
	var bounds = [];
	var blueIcon = L.icon(blue_iFix_icon);
	console.log(blackUrl);
	var send = home.replace(/\/$/,"")+'/wp-admin/admin-ajax.php?action=store_search'+coord+'&max_results=7&search_radius='+search_radius+'&search='+text;
	if ($('#corpmap').exists() && blackUrl == "holidays") {
		console.log("corpmap");
		$('#LeaftMap').addClass('d-none');
		$('#initialMap').addClass('d-none');
		send = home.replace(/\/$/,"")+'/wp-admin/admin-ajax.php?action=corp_stores'+coord+'&max_results=7&search_radius='+search_radius+'&search='+text;
		$('.corporate').each(function(index, el) {
			var lat = $(el).data('lat');
			var lng = $(el).data('lng');
			console.log(lng);
			var name = $(el).data('store');
			var url = $(el).data('url');
			var state = $(el).data('state');
			var address = $(el).data('address');
			if (url!='') {
				var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$('#wpsl_settings').find('#permalink_slug').val()+'/'+url;
			}else{
				var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"/")+$(el).data('permalink');
			}
			var text = '<a href='+permalink+' target="_blank">'+name+', '+state+'</a><br>'+address;
			var popup = L.popup({
				className:'overMarkerPopup'
			})
			.setLatLng(lat+lng)
			.setContent(text);
			var point=L.marker([lat,lng], {icon: blueIcon}).bindPopup(popup).addTo(stores);
			if(index===0){
				points=[lat,lng];
			}
			bounds.push([lat, lng]);
		});

		var streets   = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		});
		var container = L.DomUtil.get('corpmap');
		$('#corpmap').css({
			height: '400px'
		}).addClass('rounded');

		var map = L.map('corpmap', {
			center: [points[0],points[1]],
			zoom:6,
			layers: [streets, stores],
			gestureHandling: true
		});

		var baseMaps = {
			"Streets": streets
		};

		var overlayMaps = {
			"Stores": stores
		};

		L.control.layers(baseMaps, overlayMaps).addTo(map);
		map.fitBounds(L.latLngBounds([bounds]).pad(0.2));
	}
}

});

//Init a timeout variable to be used below

var timeout = null;

if ($('body').hasClass('page-id-0')){
	$('#mf-container').addClass('d-none');
}





$('#wpforms-form-283').on('submit', function(e) {

	e.preventDefault();
	var count = 0;
	var input = 0;

	$(this).find('input').each(function(i,el){
		var required = $(el).attr('required');
		if (required!=undefined) {
			if ($(el).val()!='') {
				input++;
			}
			count++;
		}
	});
	if (input===count && input>0) {
		$.ajax({
			url: $('.navbar-brand').attr('href').replace(/\/$/,"")+'/connect_dashboard/app',
			beforeSend: function(){
				$('#loader-outer').show();
			},
			data: $(this).serialize()+'&action=partnership',
			complete: function(d){

				$('#loader-outer').hide();
				myAlert("We'll contact you soon.",'Thank you',3);
				Swal.fire({
					title: 'Done!',
					text: "We'll contact you soon, thank you",
					type: 'success',
					confirmButtonText: 'Cool',
					confirmButtonColor: '#79d2e3'
				});
			},
		});
	}
});



$("#ContactForm")

.submit(function( event ){

	event.preventDefault();

	$.ajax({

		url: $('.navbar-brand').attr('href').replace(/\/$/,"")+'/connect_dashboard/app',

		data: $('form#ContactForm').serialize()+'&action=contact',

		beforeSend:function(){
			$('#loader-outer').show();
		},

		complete:function (){
			$('#loader-outer').hide();
		},

		success:function (){

			Swal.fire({
				title: 'Done!',
				text: "We'll contact you soon, thank you",
				type: 'success',
				confirmButtonText: 'Cool',
				confirmButtonColor: '#79d2e3'
			});

			$('#ContactForm')

			.trigger("reset");

		},

		error:function (error){

			myAlert(error,'Error',3);
			Swal.fire({
				title: 'Error!',
				type: 'error',
				confirmButtonText: 'Cool',
				confirmButtonColor: '#79d2e3'
			});

		}

	});

});


$(document)

.find('#result-carousel')

.on('click', '.store-btn', function(event) {

	if ($('body').hasClass('page-id-12')){
		/*console.log("click");*/

		$('#contact-form').show();

		$('.textSelect').remove();

		$('#inputStore').val($(this).text());

		$('#inputName').focus();

		var store_id = $(this).parent().parent().find('.store_id').text();

		$('#form_store_id').val(store_id);
		var category = $(this)
		.parent()
		.find('.category')
		.text();
		if ($('#contact-form').find('#category').exists()) {
			$('#contact-form')
			.find('#category')
			.val(category);
		}else{
			$('#contact-form')
			.prepend('<input type="hidden" name="category" id="category" value="'+category+'">');
		}

	}
	else{
		/*console.log($(this).parent().parent().find('location-name').text());*/
		var store_name = $(this).parent().parent().find('.location-name').text();
		var store_id = $(this).parent().parent().find('.store_id').text();
		var store_category = $(this).parent().parent().find('.store_category').text();		
		var store_state = $(this).parent().parent().find('.store_state').text();
		var store_city = $(this).parent().parent().find('.store_city').text();
		var store_phone = $(this).parent().parent().find('.store_phone').text();
		var store_address2 = $(this).parent().parent().find('.store_address2').find('a').attr("href");

		document.getElementById("store-id").innerHTML = store_id;
		document.getElementById("store-category").innerHTML = store_category;
		document.getElementById("store-name").innerHTML = '<i class="la la-tag hand"></i>'+ store_name;
		document.getElementById("store-state").innerHTML = '<i class="la la-map-signs"></i>'+ store_state;
		document.getElementById("store-city").innerHTML = '<i class="la la-map-pin"></i>' +store_city;
		document.getElementById("store-phone").innerHTML = '<a style="background: none;" class="text-black" href="tel:'+ store_phone +'"><i class="la la-phone"></i> '+store_phone+' </a>';
		document.getElementById("store-address2").innerHTML = '<a style="background: none;" class="text-black font-w-5" href="'+store_address2+'" target="_blank"><i class="la la-map-o"></i> Get Directions </a>';

		$('#first-step-form').addClass('d-none');
		$('#selected-store').removeClass('d-none');
		$('#second-step-form').removeClass('d-none');


		/*console.log(store_name);*/
		sessionStorage.setItem("store_id", store_id);
		sessionStorage.setItem("location_name", store_name);
		sessionStorage.setItem("store-state", store_state);
		sessionStorage.setItem("store-city", store_city);
		sessionStorage.setItem("store-phone", store_phone);
		sessionStorage.setItem("store-address2", store_address2);
		sessionStorage.setItem("store_category", store_category);

		$('#category').val(store_category);
		$('#form_store_id').val(store_id);
		$('#inputStore').val(store_name);
		$('#inputDevice').focus();
	}
});

$(document)

.find('#result-carousel')

.on('click', '.store-btn', function(event) {

	if ($('body').hasClass('page-id-1402')){
		/*console.log("click");*/

		$('#contact-form').show();

		$('.textSelect').remove();

		$('#inputStore').val($(this).text());

		$('#inputName').focus();

		var store_id = $(this).parent().parent().find('.store_id').text();

		$('#form_store_id').val(store_id);
		var category = $(this)
		.parent()
		.find('.category')
		.text();
		if ($('#contact-form').find('#category').exists()) {
			$('#contact-form')
			.find('#category')
			.val(category);
		}else{
			$('#contact-form')
			.prepend('<input type="hidden" name="category" id="category" value="'+category+'">');
		}

	}
});

$(document)
.find('#selected-store')
.on('click', '.selected-store-btn', function(event) {
	$('#selected-store').addClass('d-none');
	$('#result-carousel').addClass('d-none');
	$('#first-step-form').removeClass('d-none');
	$('#second-step-form').addClass('d-none');
});

var store_id=sessionStorage.getItem("store_id");
var store_category=sessionStorage.getItem("store_category");
var store_name=sessionStorage.getItem("location_name");
var device_name=sessionStorage.getItem("device_name");
var repair_type = sessionStorage.getItem("repair_type");

var store_state = sessionStorage.getItem("store-state");
var store_city = sessionStorage.getItem("store-city");
var store_phone = sessionStorage.getItem("store-phone");
var store_address2 = sessionStorage.getItem("store-address2");

/*var repair_type=sessionStorage.getItem("repair_type");*/
/*console.log(store_name);*/
if($('#repairForm').exists()){
	if (store_name) {
		$('#inputStore').val(store_name);
		document.getElementById("store-name").innerHTML = '<i class="la la-tag hand"></i>'+ store_name;
	}
	if (store_id){
		$('#form_store_id').val(store_id);
	}
	if (store_category){
		$('#category').val(store_category);
	}
	if (device_name) {
		$('#inputDevice').val(device_name);
	}
	if (repair_type) {
		$('#inputRepair').val(repair_type);
	}
	if (store_state) {
		document.getElementById("store-state").innerHTML = '<i class="la la-map-signs"></i>'+ store_state;
	}
	if (store_city) {
		document.getElementById("store-city").innerHTML = '<i class="la la-map-pin"></i>' +store_city;
	}
	if (store_phone) {
		document.getElementById("store-phone").innerHTML = '<a style="background: none;" class="text-black" href="tel:'+ store_phone +'"><i class="la la-phone"></i>' +store_phone+ '</a>';
	}
	if (store_address2) {
		document.getElementById("store-address2").innerHTML = '<a style="background: none;" class="text-black font-w-5" href="'+store_address2+'" target="_blank"><i class="la la-map-o"></i> Get Directions </a>';
	}

	$('#inputName').focus();
}

/*console.log("Hola"+$('.navbar-brand').attr('href').replace(/\/$/,"")+'/connect_dashboard/app');*/

$("#repairForm")

.submit(function( event ){

	event.preventDefault();

	$.ajax({

		url: $('.navbar-brand').attr('href').replace(/\/$/,"")+'/connect_dashboard/app',
		//url: 'https://ifixandrepair.com/connect_dashboard/app',
		beforeSend: function() {
			$('#loader-outer').show();
		},

		data: $('form#repairForm').serialize()+'&action=notify',

		complete: function(d){

			unblockScreen();

			$('#loader-outer').hide();
			$('#repairForm').trigger("reset");

			Swal.fire({
				title: 'Done!',
				text: "We'll contact you soon, thank you",
				type: 'success',
				confirmButtonText: 'Cool',
				confirmButtonColor: '#79d2e3'
			});

		},

	});

});
jQuery(document).ready(function($) {
	if ($('#stores').find('div').length>0 && $('#wpsl-search-btn').exists() && parameter('corporate')) {
		console.log("click");
		$('#wpsl-search-btn').click();
	}
	if ($('#stores').find('div').length>0 && $('#wpsl-search-btn').exists() && blackUrl == 'holidays') {
		console.log("HOLA");
		$('#wpsl-search-btn').click();
	}
	if($('#discountModal').exists()){
		$('#discountModal').modal('show');
	}
	if(sessionStorage.getItem("covid-alert-dismiss")){
		$("#covid-alert").hide();
	}else{
		$("#covid-alert").on('closed.bs.alert', function () {
  			sessionStorage.setItem("covid-alert-dismiss", true);
		});
	}
});

