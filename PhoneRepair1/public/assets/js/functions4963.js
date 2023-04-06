var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

function handlePermission() {

	/*if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(showPosition);

	}*/

}

//function that retrieves the position

/*function showPosition(position) {

	//Geolocation works only under a secure protocol(https)

	//Check the user authorization for get location

	navigator.permissions.query({name:'geolocation'}).then(

		function(result) {

			switch (result.state) {

				case 'granted':

					sessionStorage.setItem("latitude",position.coords.latitude);

					sessionStorage.setItem("longitude",position.coords.longitude);

					break;

				case 'prompt':

					console.log("prompt");

					break;

				case 'denied':

					if ($('#wpsl_settings').exists()) {

						var coords = $('#wpsl_settings').find('#start_latlng').val().split(',');

						sessionStorage.setItem("latitude",coords[0]);

						sessionStorage.setItem("longitude",coords[1]);

					}

					break;

			}

		}

	);

}*/

function home(){

	var data = $('.navbar-brand').attr('href');

	var page = location.href;

	var ret = false;

	if (data===page) {

		ret = page;

	}

	return ret;

}

function clearBox(elementID)
{
	document.getElementById(elementID).innerHTML = "";
}

function parameter(param){

	var results = new RegExp('[\?&]' + param + '=([^&#]*)').exec(window.location.href);

	if(results!==null){
		return decodeURI(results[1]);
	}

}
function defaultMap(coord){

	var home = $('.navbar-brand').attr('href');
	var lat = sessionStorage.getItem("latitude");
	var lng = sessionStorage.getItem("longitude");
	var text = $.trim($('#inputLocator').val());
	var search_radius = $('#wpsl_settings').find('#search_radius').val();
	var preloader_label = $('#wpsl_settings').find('#preloader_label').val();
	var no_results_label = $('#wpsl_settings').find('#no_results_label').val();
	var stores = L.layerGroup();
	var points = [];
	var bounds = [];
	var blueIcon = L.icon(blue_iFix_icon);
	var send = home.replace(/\/$/,"")+'/wp-admin/admin-ajax.php?action=store_search'+coord+'&max_results=7&search_radius='+search_radius+'&search='+text;
	
	//Added to use the WPSL filter option by WPSL cateogories
	var urlParams = new URLSearchParams(window.location.search);
	if(urlParams.has('filter')){
		send += "&filter=" + urlParams.get('filter');
	}
	if(getUrl.pathname.split('/')[1] == "black-friday"){
		send += "&filter=21";
	}
	
	if (text!='') {

		clearBox('result-row');

		$.ajax({
			url: send,
			beforeSend:function(){
				$('#loader-outer').show();
			},
			error:function(){
				unblockScreen();
			},
			success:function(data){
				if (data==='') {
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
						// ROW DISCOUNT FOR CORPORATES
						var row =
						"<div class='post'>"+
						/*"<div class='post-image'>"+
						"<img class='img-fluid w-100' src="+baseUrl+"/wp-content/uploads/2019/09/"+data[i].zip+".jpg' alt=''>"+
						"</div>"+*/
						"<div class='post-desc'>"+
						"<div class='post-meta'>"+
						"<ul class='list-inline'>"+
						"<li class='d-none store_id'>"+data[i].store+"</li>"+
						"<li><i class='la la-tag store_name hand'></i> "+data[i].store+openingSoon+"</li>"+
						"<br>"+
						"<li><i class='la la-map-signs'></i> "+data[i].state+"</li>"+
						"<li><i class='la la-map-pin'></i> "+data[i].city+"</li>"+
						"<li><i class='la la-map-marker'></i> "+data[i].zip+"</li>"+
						"<br>"+
						/*"<br>"+
						"<li class='la la-location-arrow'> "+data[i].address+"</li>"+*/
						"<li><a href='tel:"+data[i].phone+"'><i class='la la-phone'></i> "+data[i].phone+"</a></li>"+
						"<br>"+
						"<li><a class='text-black font-w-5' href='"+data[i].address2+"'><i class='la la-map-o'></i> "+'Get Directions'+"</a></li>"+
						"</ul>"+
						"</div>"+
						/*"<div class='holidays-label'>Holiday Special Discounts</div>"+*/
						"<div class='post-title'>"+
						"<a class='btn btn-theme store-btn' href='"+data[i].permalink+"'><h5 class='text-white mb-0'>"+"View Store"+"</h5></a>"+
						"</div></div></div>";

					}
					else if (data[i].id == 463){
						// ROW DISCOUNT FOR CORPORATES
						var row =
						"<div class='post'>"+
						/*"<div class='post-image'>"+
						"<img class='img-fluid w-100' src="+baseUrl+"/wp-content/uploads/2019/09/"+data[i].zip+".jpg' alt=''>"+
						"</div>"+*/
						"<div class='post-desc'>"+
						"<div class='post-meta'>"+
						"<ul class='list-inline'>"+
						"<li class='d-none store_id'>"+data[i].store+"</li>"+
						"<li><i class='la la-tag store_name hand'></i> "+data[i].store+openingSoon+"</li>"+
						"<br>"+
						"<li><i class='la la-map-signs'></i> "+data[i].state+"</li>"+
						"<li><i class='la la-map-pin'></i> "+data[i].city+"</li>"+
						"<li><i class='la la-map-marker'></i> "+data[i].zip+"</li>"+
						"<br>"+
						/*"<br>"+
						"<li class='la la-location-arrow'> "+data[i].address+"</li>"+*/
						"<li><a href='tel:"+data[i].phone+"'><i class='la la-phone'></i> "+data[i].phone+"</a></li>"+
						"<br>"+
						"<li><a class='text-black font-w-5' href='"+data[i].address2+"'><i class='la la-map-o'></i> "+'Get Directions'+"</a></li>"+
						"</ul>"+
						"</div>"+
						"<div class='add-sale-label'>Temporarily Closed</div>"+
						"<div class='post-title'>"+
						"<a class='btn btn-theme store-btn' href='"+data[i].permalink+"'><h5 class='text-white mb-0'>"+"View Store"+"</h5></a>"+
						"</div></div></div>";
					}else{
						var row =
						"<div class='post'>"+
						/*"<div class='post-image'>"+
						"<img class='img-fluid w-100' src="+baseUrl+"/wp-content/uploads/2019/09/"+data[i].zip+".jpg' alt=''>"+
						"</div>"+*/
						"<div class='post-desc'>"+
						"<div class='post-meta'>"+
						"<ul class='list-inline'>"+
						"<li class='d-none store_id'>"+data[i].store+"</li>"+
						"<li><i class='la la-tag store_name hand'></i> "+data[i].store+openingSoon+"</li>"+
						"<br>"+
						"<li><i class='la la-map-signs'></i> "+data[i].state+"</li>"+
						"<li><i class='la la-map-pin'></i> "+data[i].city+"</li>"+
						"<li><i class='la la-map-marker'></i> "+data[i].zip+"</li>"+
						"<br>"+
						/*"<br>"+
						"<li class='la la-location-arrow'> "+data[i].address+"</li>"+*/
						"<li><a href='tel:"+data[i].phone+"'><i class='la la-phone'></i> "+data[i].phone+"</a></li>"+
						"<br>"+
						"<li><a class='text-black font-w-5' href='"+data[i].address2+"'><i class='la la-map-o'></i> "+'Get Directions'+"</a></li>"+
						"</ul>"+
						"</div>"+
						"<div class='post-title'>"+
						"<a class='btn btn-theme store-btn' href='"+data[i].permalink+"'><h5 class='text-white mb-0'>"+"View Store"+"</h5></a>"+
						"</div></div></div>";
					}

					var col=$('<div>',{
						html:row,
						class: 'col-lg-12 col-md-12 md-mb-2 mt-2'
					});
					$('#result_maps').find('#result-row').append(col[0].outerHTML);
				}
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


					    var container = L.DomUtil.get('LeaftMap');
					    if(container != null){ container._leaflet_id = null; }

					    $('#LeaftMap').css({height:400});

					    map = L.map('LeaftMap', {
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
}

function capitalize(str) {



	var res = str.split(" ");

	var text = "";



	for (var i = 0; i < res.length; i++) {

		text=text+' '+res[i].substring(0,1).toUpperCase()+res[i].substring(1);

	}

	return text.trim();



}

function blockScreen(text,html) {

	$('#blockScreen')
	.removeClass('p-0')
	.height($(window).height())
	.find('img')
	.show();

	if (text) {

		$('#blockScreen')

		.find('img')

		.parent()

		.append('<p class="font-weight-bold text-black">'+text+'</p>');

	}
	if (html) {
		$('#htmlContainer').empty();
		$('#blockScreen')
		.find('.container')
		.find('.row')
		.find('.col')
		.find('#htmlContainer')
		.prepend('<button type="button" class="btn btn-sm btn-danger float-right" onclick="unblockScreen()">X</button><br>');
		$('#blockScreen')
		.addClass('p-0')
		.css({
			overflow : 'auto',
		})
		.find('img')
		.hide()
		.parent()
		.find('#htmlContainer')
		.append(html);
	}
	$('#blockScreen').removeClass('d-none');

}

function unblockScreen() {

	$('#blockScreen')

	.addClass('d-none');

	$('#blockScreen')

	.find('p')

	.remove();
	$('#htmlContainer').empty();
}

function myAlert(text,title,type,time) {

	if (!$('div').hasClass('alert')) {
		switch (type) {
			case 1:
			type = 'primary';
			break;
			case 2:
			type = 'secondary';
			break;
			case 3:
			type = 'success';
			break;
			case 4:
			type = 'danger';
			break;
			case 5:
			type = 'warning';
			break;
			case 6:
			type = 'info';
			break;
			case 7:
			type = 'light';
			break;
			default:
			type = 'dark';
			break;
		}

		$('#blockScreen')
		.find('img')
		.addClass('d-none');
		var alert = $('<div>',{
			class: "container border border-"+type+" alert alert-"+type,
			role: "alert"
		});

		$('#blockScreen')
		.find('img')
		.parent()
		.append(alert);
		blockScreen();
	}

	if (text) {
		$('.alert')
		.html('<span>'+text+'</span>');
	}

	if (title) {
		$('.alert')
		.prepend('<h4 class="alert-heading text-capitalize font-weight-bold">'+title+'</h4><hr>');
	}

	if (!time) {
		time = 5;
	}

	$('.alert')
	.removeClass('d-none')
	.fadeOut( time*1000, function() {
		unblockScreen();
		$('#blockScreen')
		.find('.alert')
		.remove();
		$('#blockScreen')
		.find('img')
		.removeClass('d-none');
	});

}

// Searches for the given pattern string in the given text string using the Knuth-Morris-Pratt string matching algorithm.
// If the pattern is found, this returns the index of the start of the earliest match in 'text'. Otherwise -1 is returned.
function kmpSearch(pattern, text) {
	if (pattern.length == 0)
        return 0;  // Immediate match

    // Compute longest suffix-prefix table
    var lsp = [0];  // Base case
    for (var i = 1; i < pattern.length; i++) {
        var j = lsp[i - 1];  // Start by assuming we're extending the previous LSP
        while (j > 0 && pattern.charAt(i) != pattern.charAt(j))
        	j = lsp[j - 1];
        if (pattern.charAt(i) == pattern.charAt(j))
        	j++;
        lsp.push(j);
    }

    // Walk through text string
    var j = 0;  // Number of chars matched in pattern
    for (var i = 0; i < text.length; i++) {
    	while (j > 0 && text.charAt(i) != pattern.charAt(j))
            j = lsp[j - 1];  // Fall back in the pattern
        if (text.charAt(i) == pattern.charAt(j)) {
            j++;  // Next char matched, increment position
            if (j == pattern.length)
            	return i - (j - 1);
        }
    }
    return -1;  // Not found
}

function formatDate(date) {
	var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	var d = new Date(date),
	month = '' + (d.getMonth() + 1),
	day = '' + d.getDate(),
	year = d.getFullYear(),
	hour    = d.getHours(),
	min  = d.getMinutes();
	var meridian = (hour < 12 ? "AM" : "PM");
    //month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;

    return d.getFullYear() + "-" + mL[month] + "-" + day + "-" +  (hour > 12 ? hour-12 : hour) + ":" + min + "-"+(hour == 12 ? "M" : meridian);
}
function urlify(text) {

	var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    //var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url,b,c) {
    	var url2 = (c == 'www.') ?  'http://' +url : url;
    	return '<a href="' +url2+ '" target="_blank">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
}
// Thanks to Maaaaark - https://github.com/maaaaark/bcSwipe/blob/master/jquery.bcSwipe.min.js

!function(t){t.fn.bcSwipe = function(e){var n={threshold:50};return e&&t.extend(n,e),this.each(function(){function e(t){1==t.touches.length&&(u=t.touches[0].pageX,c=!0,this.addEventListener("touchmove",o,!1))}function o(e){if(c){var o=e.touches[0].pageX,i=u-o;Math.abs(i)>=n.threshold&&(h(),t(this).carousel(i>0?"next":"prev"))}}function h(){this.removeEventListener("touchmove",o),u=null,c=!1}var u,c=!1;"ontouchstart"in document.documentElement&&this.addEventListener("touchstart",e,!1)}),this}}(jQuery);

// Swipe functions for Bootstrap Carousel

$('.carousel').bcSwipe({ threshold: 50 });

$.fn.exists = function(){ return this.length > 0; }


function alertDialog(text) {

}
