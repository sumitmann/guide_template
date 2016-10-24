$(function(){
	$('#singup_modal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var recipient = button.data('control');
	$('#sign'+recipient).click();
	});
	$(document).on('click', '.pricetype', function(){
		var prtype = $(this).children("input");
        if(prtype.attr("id")=="dailyprice"){
            $("#tourhourwrap").removeClass('in');
        }
        if(prtype.attr("id")=="hourprice"){
           $("#tourhourwrap").addClass('in');
        }
    });
	$( "#tourdate" ).datepicker({ minDate: 0, dateFormat: 'dd/mm/yy' });
	$( "#dob" ).datepicker({dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, yearRange: "-60:-15"});
	$( "#guide_since" ).datepicker({maxDate: 0, dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true, yearRange: "-60:+0"});
	$('#tourhours').bootstrapNumber({
	upClass: 'default',
	downClass: 'warn'
});

});