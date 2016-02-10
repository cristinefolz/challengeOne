function sayitworked(event){
	var $element = $(event.target);
	var $form = $element.closest('form');
	var $inputs = $form.find('input')
	var value1 = $inputs.first().val();
	var value2 = $inputs.eq(1).val();
	
	console.log("hey, it worked", value1, value2);
	
	return false;

}

$('#submit-button').on('click',sayitworked);














function youdidit(){
	window.alert("Good work! You finished");
}

$('unique-check').on('click', youdidit);