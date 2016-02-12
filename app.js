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


