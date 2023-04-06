
//indeed job board
if ($('#indeed-jobs').exists() || $('#indeed-jobs-banner').exists()) {
	
	var loc_filter = [];
	var jt_filter = [];
	//Loop the job list
	$('#indeed-jobs').find('p').each(function(i,e){
		//Jop Object Title
		var a = $(this).find('a').addClass('text-secondary')[0].outerHTML;
		//Job Title
		var text = $(this).find('a').text();
		//Job details url
		var href = $(this).find('a').attr('href');
		//Job Type, Location, salary
		var span = $(this).find('span').text();
		//Turn text into array
		var arr = span.split('|');
		var location = $.trim(arr[0]);
		var time = $.trim(arr[1]);
		var salary = $.trim(arr[2]);
		salary = salary.replace(/Salary:/g,'');
		//Any location except Boca
		if (location.toLowerCase().indexOf('boca')<0) {
			//Fill the array with locations if not exist in the array
			if($.inArray(location, loc_filter) === -1) {
				loc_filter.push(location);
			}
		    //Fill the array with job type if not exist in the array
		    if($.inArray(time, jt_filter) === -1) {
		    	jt_filter.push(time);
		    }

			//Add to table
			$('#indeed-jobs-div').append('<div class="job-list mt-3">	<div class="job-list-left">	<div class="job-list-icon"> <i class="la la-suitcase"></i></div>	<div class="job-list-title"> <h6 class="job-title">'+text+'</h6><ul class="list-inline job-list-info"><li class="list-inline-item"><i class="la la-map-marker"></i>'+location+'</li>	<li class="list-inline-item"><i class="la la-money"></i>'+salary+'</li>	</ul></div>	</div>	<div class="job-list-right"><div class="job-list-time mr-3"> <span>'+time+'</span>	</div> <a class="btn btn-theme" data-text="Job Details" href="'+href+'"><span>Job Details</span></a></div></div>');
			$('#indeed-jobs-table').find('tbody').append('<tr><td>'+a+'</td><td>'+location+'</td><td>'+time+'</td><td>'+salary+'</td><td align="middle"><a href="'+href+'" class="btn btn-outline-secondary border border-info shadow mx-auto">Job Details</a></td></tr>');	
			
		}else{
			$(this).remove();	
		}		
	});
	//Sort the array
	loc_filter.sort();	
	$.each(loc_filter, function(i, el){
		//Attach to select
		$('#loc_filter').append('<option value="'+el+'">'+el+'</option>');
	});
	//Sort the array
	jt_filter.sort();
	$.each(jt_filter, function(i, el){
		//Attach to select
		$('#jt_filter').append('<option value="'+el+'">'+el+'</option>');
	});
	$('#main-content')
	.css({
		paddingTop: 10,		
	});
	
	$('#indeed-jobs').hide();
	var table = $('#indeed-jobs-table').DataTable({
		columnDefs: [
		{
			targets: 4,
			orderable: false
		} 
		],
		order: [[ 1, "asc" ]],		
		scrollX: true
	});
	$('.dataTables_scroll').addClass('rounded shadow');
	$('#loc_filter').on( 'change', function () {	
		var value = $(this).val();
		$('#indeed-jobs-div .job-list').each(function(){
			var $this = $(this);
			if($this.text().indexOf(value) === -1)
	             $this.closest('#indeed-jobs-div .job-list').hide();
	        else $this.closest('#indeed-jobs-div .job-list').show();
			}); 
	});

	$('#cat_filter').on( 'change', function () {	
		var value = $(this).val();	
		console.log(value);
		$('#indeed-jobs-div .job-list').each(function(){
			var $this = $(this);
			if($this.text().indexOf(value) === -1)
	             $this.closest('#indeed-jobs-div .job-list').hide();
	        else $this.closest('#indeed-jobs-div .job-list').show();
			});
	} );

	$('#jt_filter').on( 'change', function () {		
		var value = $(this).val();
		$('#indeed-jobs-div .job-list').each(function(){
			var $this = $(this);
			if($this.text().indexOf(value) === -1)
	             $this.closest('#indeed-jobs-div .job-list').hide();
	        else $this.closest('#indeed-jobs-div .job-list').show();
			});
	} );
}