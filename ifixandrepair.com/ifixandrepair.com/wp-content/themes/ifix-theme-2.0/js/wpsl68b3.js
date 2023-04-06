var phone = $('.wpsl-contact-details').find('span').eq(0).text();
var email = $('.wpsl-contact-details').find('span').eq(1).text();
var cnpj = phone.replace(/\D/gm,"");
var p1=cnpj.substring(0,3);
var p2=cnpj.substring(3,6);
var p3=cnpj.substring(6);
var fp = p1+'-'+p2+'-'+p3;
var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];


$('<h6>',{
    html:'<i class="fas fa-phone-volume"></i> Contact Details'
}).prependTo('.wpsl-contact-details');

var title = $('.wpsl-contact-details').find('h6').html();

var store_category = $('.store_data').data('category');

if (store_category == "corporate"){
    $('.wpsl-contact-details').html('<h6>'+title+'</h6>'+' <a href="tel:'+cnpj+'">'+fp+'</a>'+'<br> '+email);
}
else if(store_category == "franchise"){
    $('.wpsl-contact-details').html('<h6>'+title+'</h6>'+' <a href="tel:'+cnpj+'">'+fp+'</a>'+'<br>');   
}
else if(store_category == "repair"){
    $('.wpsl-contact-details').html('<h6>'+title+'</h6>'+' <a href="tel:'+cnpj+'">'+fp+'</a>'+'<br>');      
}

$('.leafmap').each(function(index,el) {     
    var mapid = $(el).attr('id');
    var lat = $(el).data('lat');
    var lng = $(el).data('lng');    
    $('#'+mapid)
    .css({
        height: 400
    });
    var mymap = L.map(mapid,
    {
      gestureHandling: true
  }).setView([lat,lng],15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 17,
    }).addTo(mymap);

    var marker = L.marker([lat,lng], {icon: L.icon(blue_iFix_icon)}).addTo(mymap);
});

if($('.wpsl-location-address').find('span').eq(0)){
    var address = $('.wpsl-location-address').find('span').eq(0).text();
    var map_url = $('.wpsl-location-address').find('span').eq(1);
    if (map_url.text().indexOf('http')>=0) {
        $('.wpsl-location-address').find('span').eq(1).hide('fast');
        $('.wpsl-location-address').append(map_url);
        $('.wpsl-location-address').find('br').eq(0).remove();      
        $('.wpsl-location-address').find('span').eq(0).html(
            '<a target="_blank" href="'+map_url.text()+'">'+address+'</a>'
            );
    }
}
$('#btn-repair').on('click',function(e) {
    e.preventDefault();
    var Storage = window.sessionStorage;    
    // Check browser support    
    if (typeof(Storage) !== "undefined") {
        var store_id=$('#store_container').data('id');      
        var store_name=$('#store_container').data('name');
        var meta = JSON.stringify($('#main-section').data('meta'));      
        // Store
        sessionStorage.setItem("store_id",store_id);
        sessionStorage.setItem("store_name",store_name);
        sessionStorage.setItem("store_meta",meta);        
    }   
    location.href="repair-services?store=yes";
});

/*$('#btn-subscribe')    
    .on('click',  function(event) {
        event.preventDefault();
        var frm = $('#frm-subscribe').clone();
        $(frm)
            .attr('action',$('.navbar-brand').attr('href').replace(/\/$/,"/")+'connect_dashboard/app')
            .removeClass('d-none');
        blockScreen('',$(frm));        
    });*/
    $(document).on("submit", "form#frm-subscribe", function(event) {
        event.preventDefault();        
        $.ajax({
            url: $('.navbar-brand').attr('href').replace(/\/$/,"/")+'connect_dashboard/app',                        
            data: $('form#frm-subscribe').serialize(),
            beforeSend:function(){
                $('#loader-outer').show();
            },
            complete: function(data){   
                $('#loader-outer').hide();             
                Swal.fire({
                    title: 'Done!',
                    text: "Thank you for Signing Up!",
                    type: 'success',
                    confirmButtonText: 'Cool',
                    confirmButtonColor: '#79d2e3'
                });
            }
        });        
    });


    $(document).on("submit", "form#frm-subscribe-veterans", function(event) {
        event.preventDefault();        
        $.ajax({
            url: $('.navbar-brand').attr('href').replace(/\/$/,"/")+'connect_dashboard/app',                        
            data: $('form#frm-subscribe-veterans').serialize(),
            beforeSend:function(){
                $('#loader-outer').show();
            },
            complete: function(data){   
                $('#loader-outer').hide();             
                Swal.fire({
                    imageUrl: "http://localhost/ifix2/wp-content/themes/ifix-theme-2.0/images/bg/veteranscode.jpg",
                    imageWidth: 350,
                    imageHeight: 180,
                    html:
                    'Click <a href="http://localhost/ifix2/wp-content/themes/ifix-theme-2.0/images/bg/veteranscode.jpg" download>here</a> to download the code',
                    confirmButtonText: 'Cool',
                    confirmButtonColor: '#79d2e3'
                });
            }
        });        
    });


    $(document).on("submit", "form#frm-feedback", function(event) {
        event.preventDefault();        
        $.ajax({
            url: $('.navbar-brand').attr('href').replace(/\/$/,"/")+'connect_dashboard/app',                        
            data: $('form#frm-feedback').serialize(),
            beforeSend:function(){
                $('#loader-outer').show();
            },
            complete: function(data){   
                $('#loader-outer').hide();             
                Swal.fire({
                    title: 'Done!',
                    text: "Thank you for your feedback!",
                    type: 'success',
                    confirmButtonText: 'Cool',
                    confirmButtonColor: '#79d2e3'
                });
            }
        });        
    });