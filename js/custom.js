jQuery(document).ready(function($) {
	console.log('called');
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 

	if(mm<10) {
	    mm = '0'+mm
	} 

	today = yyyy + '-' + mm + '-' + dd;
	console.log(today);
$('#event_start').datepicker({
	dateFormat : 'yy-mm-dd',
	minDate: today
});

$('#event_end').datepicker({
	dateFormat : 'yy-mm-dd',
	minDate: today
});

});