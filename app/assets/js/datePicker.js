const inputDate = document.querySelector('input[name="datePicker"]');
if (inputDate){
	const datepicker = new Datepicker(inputDate,{
		nextArrow: ' >',
		prevArrow: ' <',
		buttonClass: 'btn text-primary',
	})
}
