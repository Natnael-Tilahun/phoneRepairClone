handlePermission();

var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4));

var home = home();

//var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var w = $(window).width();

var cmo = $('.mobile_option').size();

//Get the address from the web browser 

var url = location.href;

var getUrl = window.location;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

//Company colors

var iFixBlue = '#4AB7CB';

var iFixYellow = '#F2A905';

var blue_iFix_icon = {

    iconUrl: 'https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/vendor/leaflet/images/blue_iFix@2x.png',

	shadowUrl: 'https://unpkg.com/leaflet@1.3.4/dist/images/marker-shadow.png',

    iconSize:     [24,35], // size of the icon

    iconAnchor:   [11,37], // point of the icon which will correspond to marker's location

	shadowAnchor: [9,42],  // the same for the shadow

    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

}
var store_id = sessionStorage.getItem("store_id");
var store_name = sessionStorage.getItem("store_name");
var store_meta = sessionStorage.getItem("store_meta");


//$('#wpadminbar').addClass('position-initial');

//Class from bootstrap 3

$('.hide')

	.hide();


//Store market taken from store locator settings

$('#marker-title-img')

	.attr({

		'src': '/wp-content/plugins/wp-store-locator/img/markers/'+$('#store_marker').val()

	});

//For the template device repair relocate the wpsl-container

$('#wpsl-container')

	.appendTo('#store-locator-container');

$('#mf-container')

	.appendTo('#main-form-container');

if (mobile) {


	if ($('#franchise-form').exists()) {

		var franchiseForm = $('#franchise-form').parent().parent()[0].innerHTML;


		$('#ifar_ben')

			.parent()			

			.prepend(franchiseForm);

	}	

	$('.banner_title')

		.parent()

		.parent()

		.addClass('pl-4')

		.removeClass('pl-0');	

}else{

	$('.banner_title')

		.parent()

		.parent()

		.addClass('pl-0');

	$('#menu-menu-ppal')

		.find('.menu-item')

		.addClass('mx-auto')

	$('.float_options').on('mouseover', function(event) {

		$('#menu-device-list')

			.removeClass('d-none');

	});

	$('#ifar_ben')

		.height($('#franchise-form').height()+14);	

}

//Take the name of the device to put it in the url




if ($('.post-165').exists() || $('.post-878').exists()) {

	var a = $('<a>',{ href: url });

	//Take the url without params and avoid the last slash(if has it)

	var newUrl = a.prop('pathname').replace(/\/$/,"");

	var array = newUrl.split('/').filter(Boolean);	
	var last = array[array.length - 1];
	var path = '';
	var trimmedLast = last.replace(/-/g, ' ').toUpperCase();


	$('#inputDevice').val(trimmedLast);

	sessionStorage.setItem("device_name", trimmedLast);

	for (var i = 0; i < array.length; i++) {

		if (array[i]!='ifix' && array.length-1!=i){

			path = path+'/'+array[i];

			var title =	array[i].replace('repair-services','repairs').replace('smartphone-repairs','cell-phone').split('-').join(' ');

			if (i>1 || title.indexOf('mac')>=0) {				

				var title =	title.replace('repairs','');				

			}			

			$('<li>',{

				class:"breadcrumb-item",

				html:'<a href="'+$('.navbar-brand').attr('href')+path+'">'+capitalize(title.replace(' tablet',''))+'</a>'

			}).appendTo('.breadcrumb');

		}

	}

	$('<li>',{

		class:"breadcrumb-item active",

		'aria-current':"page",

		text:'Device Repair Type'

	}).appendTo('.breadcrumb');



	if($('#repair-types').exists()){


	$('.repair-item').each(function(index, el) {		
		var a = $(this).find('a');		

		var title = $(this).find('h5').text();

		var text=$('<div>',{

				html:title

		}).text();	

		var loc = location.href.replace(/\/$/,"");

		var array = loc.split('/').filter(Boolean);

		//console.log(text);

		//Build the url

		var initialRepair = $(this).find('h5').text();
		/*console.log(initialRepair);*/

		var repair = $(this)			

						.find('h5')

						.text()

						.replace('Service','')

						.replace('Replacement','')						

						.split(' ')

						.join('')

						.replace('WaterDamage','water')						

						.replace('<br/>diagnostic','')

						+'-repair';

		/*console.log(repair);*/

		var device_href = loc + '/' +array[array.length-1]+'-'+ initialRepair.split(' ').join('-').split('--').join('-').toLowerCase();

/*		console.log(device_href);*/
		$(a).attr('href',device_href);

		
		/*$(this).remove();		*/

	});

	}	

}

if (window.location.search.indexOf('store=yes') > -1) {
   $('#accordion').find('a').attr('aria-expanded', 'true');
	$('#collapse1').addClass('show');
}

$('#banner-cta').on('click', function(event){
	$('#accordion').find('a').attr('aria-expanded', 'true');
	$('#collapse1').addClass('show');
})

if ($('.page-id-172').exists()) {
	
	$('#accordion').find('a').attr('aria-expanded', 'true');
	$('#collapse1').addClass('show');
	var a = $('<a>',{ href: url });
	//Take the url without params and avoid the last slash(if has it)

	var newUrl = a.prop('pathname').replace(/\/$/,"");
	//console.log("hola");
	var arr	=newUrl.split('/');
	//console.log(arr);
	var last = arr[arr.length - 1];
	var penultimate = arr[arr.length - 2];

	if (last.includes('-')){
		var splitted = last.split('-');
	}
	else{
		var splitted = last;
	}

	console.log(splitted);

	if (penultimate.includes('-')){
		var splittedPenultimate = penultimate.split('-');
	}
	else{
		splittedPenultimate = penultimate;
	}

	var trimmedSentence ="Dji";
	var trimmedSentence2 ="Apple";
	for (var i = 1; i <= splitted.length - 1; i++) {
		trimmedSentence += ' ' + splitted[i];
		trimmedSentence2 += ' ' + splitted[i];
	}
	var trimmedMavic = trimmedSentence.toUpperCase();
	var trimmedWatch = trimmedSentence2.toUpperCase();


	if (splitted[splitted.length - 1] == "other") {
		var trimmedLast = splitted[splitted.length -1].toUpperCase();		
	}
	else if (splitted[splitted.length - 3] == "broken") {
		var trimmedLast = splitted[splitted.length-3].toUpperCase() + ' ' + splitted[splitted.length - 2].toUpperCase() + ' ' + splitted[splitted.length -1].toUpperCase();		
	}
	else if (last.includes('-')) {
		var trimmedLast = splitted[splitted.length - 2].toUpperCase() + ' ' + splitted[splitted.length -1].toUpperCase();
	}
	else {
		var trimmedLast = splitted.toUpperCase();
	}

	var trimmedPenultimate = splittedPenultimate[splittedPenultimate.length - 2].toUpperCase() + ' ' + splittedPenultimate[splittedPenultimate.length -1].toUpperCase();

	if (trimmedPenultimate == "DRONE REPAIRS" || trimmedPenultimate == "MAC REPAIRS"
		|| trimmedPenultimate == "COMPUTER REPAIRS" || trimmedPenultimate == "CONSOLE REPAIRS" || trimmedPenultimate =="OTHER REPAIRS"){
		$('#inputDevice').val(trimmedLast);
		sessionStorage.setItem("device_name", trimmedLast);
		sessionStorage.setItem("repair_type", "OTHER");
	}
	else if(trimmedLast == "ASUS TABLET" || trimmedLast == "OTHER TABLET" || trimmedLast == "OTHER SMARTPHONE" ){
		$('#inputDevice').val(trimmedLast);
		sessionStorage.setItem("device_name", trimmedLast);
		sessionStorage.setItem("repair_type", "OTHER");
	}
	else if(trimmedPenultimate == "MAVIC REPAIRS"){
		$('#inputDevice').val(trimmedMavic);
		sessionStorage.setItem("device_name", trimmedMavic);
		sessionStorage.setItem("repair_type", "OTHER");	
	}
	else if(trimmedPenultimate == "APPLE WATCH"){
		$('#inputDevice').val(trimmedWatch);
		sessionStorage.setItem("device_name", trimmedWatch);
		sessionStorage.setItem("repair_type", "OTHER");	
	}
	else{
		sessionStorage.setItem("repair_type", trimmedLast);
	}
}	

if ($('.page-id-963').exists()) {
	
	$('#accordion').find('a').attr('aria-expanded', 'true');
	$('#collapse1').addClass('show');
	var a = $('<a>',{ href: url });
	//Take the url without params and avoid the last slash(if has it)

	var newUrl = a.prop('pathname').replace(/\/$/,"");
	//console.log("hola");
	var arr	=newUrl.split('/');
	//console.log(arr);
	var last = arr[arr.length - 1];
	var penultimate = arr[arr.length - 2];

	if (last.includes('-')){
		var splitted = last.split('-');
	}
	else{
		var splitted = last;
	}

	if (penultimate.includes('-')){
		var splittedPenultimate = penultimate.split('-');
	}
	else{
		splittedPenultimate = penultimate;
	}

	if (splitted[splitted.length - 1] == "other") {
		var trimmedLast = splitted[splitted.length -1].toUpperCase();		
	}
	else if (splitted[splitted.length - 3] == "broken") {
		var trimmedLast = splitted[splitted.length-3].toUpperCase() + ' ' + splitted[splitted.length - 2].toUpperCase() + ' ' + splitted[splitted.length -1].toUpperCase();		
	}
	else if (last.includes('-')) {
		var trimmedLast = splitted[splitted.length - 2].toUpperCase() + ' ' + splitted[splitted.length -1].toUpperCase();
	}
	else {
		var trimmedLast = splitted.toUpperCase();
	}

	var trimmedPenultimate = splittedPenultimate[splittedPenultimate.length - 2].toUpperCase() + ' ' + splittedPenultimate[splittedPenultimate.length -1].toUpperCase();


	if (trimmedPenultimate == "DRONE REPAIRS" || trimmedPenultimate == "MAC REPAIRS"
		|| trimmedPenultimate == "COMPUTER REPAIRS" || trimmedPenultimate == "CONSOLE REPAIRS" || trimmedPenultimate =="OTHER REPAIRS"){
		$('#inputDevice').val(trimmedLast);
		sessionStorage.setItem("device_name", trimmedLast);
		sessionStorage.setItem("repair_type", "OTHER");
	}
	else if(trimmedLast == "ASUS TABLET"){
		$('#inputDevice').val(trimmedLast);
		sessionStorage.setItem("repair_type", "OTHER");
	}
	else{
		sessionStorage.setItem("repair_type", trimmedLast);
	}
}	

if ($('#repairForm').exists()) {
	var a = $('<a>',{ href: url });
	//Take the url without params and avoid the last slash(if has it)
	if (store_meta){
		var array = $.parseJSON(store_meta);	
		var category = sessionStorage.setItem("store_category",array.category);
	}
	var newUrl = a.prop('pathname').replace(/\/$/,"");
	//console.log("hola");
	var arr	=newUrl.split('/');
	var last = arr[arr.length - 1];

	var penultimate = arr[arr.length - 2];

	//var repair = capitalize(decodeURIComponent(last.replace(penultimate+'-','').split('-').join(' ')));

	//var device = capitalize(penultimate.split('-').join(' '));

	var store_id=sessionStorage.getItem("store_id");
		
	console.log(store_id);
	
	var city_store =sessionStorage.getItem("city_store");

	var store_name=sessionStorage.getItem("store_name");	
	console.log(store_name);

	var store_category=sessionStorage.getItem("store_category");


	if ($('#repairForm').find('#category').exists()) {
		$('#repairForm')
			.find('#category')
			.val(store_category);
	}else{
		$('#repairForm')
			.prepend('<input type="hidden" name="category" id="category" value="'+store_category+'">');
	}


	if (store_name) {

		$('#inputStore')

			.val(store_name);

		$('#form_store_id')

			.val(store_id);
		$('#form_city_store').val(city_store);

	}	

}

$('#menu-device-list').on('mouseleave',function(){

	$(this).addClass('d-none');

});

$('#btn-repair').on('click',function(e){

	e.preventDefault();

	//Check browser support

	if (typeof(Storage) !== "undefined") {

		var store_id=$('#store_container').data('id');
		var store_name=$('#store_container').data('name');
		var store_state=$('#store_container').data('state');
		var store_city=$('#store_container').data('city');
		var store_phone=$('#store_container').data('phone');
		var store_address2=$('#store_container').data('address2');

	    //Store

	    sessionStorage.setItem("store_id",store_id);
	    sessionStorage.setItem("city_store",store_city);
	    sessionStorage.setItem("location_name",store_name);
	    sessionStorage.setItem("store-state", store_state);
		sessionStorage.setItem("store-city", store_city);
		sessionStorage.setItem("store-phone", store_phone);
		sessionStorage.setItem("store-address2", store_address2);
	}

	location.href=$(this).attr('href');

});

$('.number').keydown(function (e) {

	// Allow: backspace, delete, tab, escape, enter and .

    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||

         // Allow: Ctrl/cmd+A

        (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||

         // Allow: Ctrl/cmd+C

        (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||

         // Allow: Ctrl/cmd+X

        (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||

         // Allow: home, end, left, right

        (e.keyCode >= 35 && e.keyCode <= 39)) {

             // let it happen, don't do anything

             return;

    }

    // Ensure that it is a number and stop the keypress

    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {

        e.preventDefault();

    }

});

$('<input>',{

	type:'hidden',

	name:'sheet_name',

	value:'Partnership'

}).prependTo('#wpforms-form-283');

/*$('#franchise-form')

	.addClass('shadow');*/

$('#wpforms-form-283')
	.find('label')
	.removeClass();

$('#wpforms-form-283')

	.find('input')

	.addClass('form-control rounded shadow-sm');

$('#wpforms-form-283')

	.find('select')

	.addClass('form-control rounded w-50 pr-0 shadow-sm');


$('#wpforms-form-283')

	.find('button')

	.addClass('btn btn-theme text-white')


//Request For Consideration Form

if ($('.post-1087').exists()) {

	$('.post-1087').addClass('container mt-4');

}




if(store_meta && $('.page-template-device-repair').exists() && !$('.home').exists()){	
	var array = $.parseJSON(store_meta);	
	var hours = array.hours;
	var today = array.day;
	var url = array.slug;
	var permalink_slug = $('#wpsl_settings').find('#permalink_slug').val();
	var permalink = $('.navbar-brand').attr('href').replace(/\/$/,"")+'/'+permalink_slug+'/'+url;
	var category = sessionStorage.setItem("store_category",array.category);
	var table = $('<table>',{
		class: 'table mt-3',
		html: `<thead><tr><th class="text-center">DAY</th><th class="text-center">OPEN</th><th class="text-center">CLOSE</th></tr></thead><tbody></tbody>`,
	});	
	var options = '';
	for (day in hours) {
		var time = hours[day][0].split(',');		
		var open = time[0];
		var close = time[1];
		if (today!=day) {
			options += '<option data-open="'+open+'" data-close="'+close+'">'+capitalize(day)+'</option>';
		}else{
			options += '<option selected data-open="'+open+'" data-close="'+close+'">'+capitalize(day)+'</option>';
			var tr = $('<tr>', {			
				html:'<td class="text-capitalize" id="combo"></td><td class="text-center">'+open+'</td><td class="text-center">'+close+'</td>'
			});			
		}				
	}
	$(table).find('tbody').append(tr);
	$(table).find('#combo').append('<select class="custom-select" id="opening-days">'+options+'</select>');
	
	$('#wpsl-container').find('.row').hide();

	var map = $('<div>',{
		id: 'store_map',
		class: 'h-100 w-100 rounded',		
		'data-lat': array[2],
		'data-lng': array[3],
	})
	.css({
		minHeight: $(window).height()/3.5,
	});
	var cardHeader = $('<div>', {
		class: 'card-header text-capitalize',
		text: store_name
	});
	var cardBody = $('<div>', {
		class: 'card-body',
		html: map[0].outerHTML+
		`<div class="d-flex flex-column mt-2">
			<div><span class="font-weight-bold">Address: </span>`+array['address']+`</div>
			<div><span class="font-weight-bold">Location: </span>`+array['city']+` `+array['state']+` `+array['zip']+`</div>
			<div><span class="font-weight-bold">Phone: </span>`+array['phone']+`</div>
			<div>`+table[0].outerHTML+`</div>
		</div>`
	});
	var card = $('<div>', {
		class: 'card',
	})
	.append(cardHeader[0].outerHTML+cardBody[0].outerHTML)
	.insertAfter('#store-locator-container');
	$('#store-locator-container').hide();
	var mymap = L.map('store_map').setView([array['lat'], array['lng']], 16);
    var marker = L.marker([array['lat'], array['lng']], {
    	win_url: permalink,
    	icon: L.icon(blue_iFix_icon)
    })
    .addTo(mymap)
    .on('click', function(){    	
    	 location.href = this.options.win_url;
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 17,
        center: [array['lat'], array['lng']]
    }).addTo(mymap);
}	
/*if (url.indexOf('franchising')>=0) {
	$('#menu-menu-ppal')
		.find('.menu-item')
		.css({
			fontSize : 15,
			fontWeight : 'bolder'
		})
}
if (url.indexOf('locations')>=0) {	
	jQuery(document).ready(function($) {		
		$('#wpsl-search-btn')
			.click();		
	});
}*/



var mq = window.matchMedia( "(max-width: 767px)" );
if (mq.matches) {
    $('#landing-secondary-section').find('#btn-call-now').prependTo('#landing-main-section');
    $('#landing-secondary-section').find('#btn-repair').prependTo('#landing-main-section');

    $('#landing-main-section').find('#btn-call-now').addClass('mb-3');
    $('#landing-main-section').find('#btn-repair').addClass('mb-3');
}
else {
    // window width is greater than 570px
}
