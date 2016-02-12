var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

var people = [personOne, personTwo, personThree];

var $clientTable = $('#namePhoneTable');


people.forEach(function(person){
	$clientTable.append('<tr>\
					<td>' + person.firstName + '\
					</td>\
					<td>' + person.lastName + '\
					</td>\
					<td>' + person.phoneNumber + '\
					</td>\
				</tr>');
})


function addClient(event){
    event.preventDefault();
    var $element = $(event.target);
    var $form = $element.closest('form');
    var $inputs = $form.find('input');
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var phoneNumber = $("#phoneNumber").val();


    if(firstName && lastName && phoneNumber) {

    	$clientTable.append(('<tr>\
					<td>' + firstName + '\
					</td>\
					<td>' + lastName + '\
					</td>\
					<td>' + phoneNumber + '\
					</td>\
				</tr>'));
    }

    $('#firstName').val('');
	$('#lastName').val('');
	$('#phoneNumber').val('');

}

$('#submit-button').on('click', addClient);
