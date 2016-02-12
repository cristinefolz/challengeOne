var taskOne = { name: "do some stuff", date: "02/16/2016" };
var taskTwo = { name: "do some more stuff", date: "02/18/2016" };
var $list = $('#toDoTable');	

var toDos = [taskOne, taskTwo];

toDos.forEach(function(todo){
	$list.append('<tr>\
					<td>' + todo.name + '\
					</td>\
					<td>' + todo.date + '\
					</td>\
					<td>\
						<button type="button" class="btn btn-primary deleteToDo">Done</button>\
					</td>\
				</tr>');
})



function toToDo(event){
	event.preventDefault();
	var $element = $(event.target);
	var $form = $element.closest('form');
	var $inputs = $form.find('input')
	var taskName = $("#taskName").val();
	var dueDate = $("#dueDate").val();
	

	if(taskName && dueDate) {       // to prevent having empty fields being submitted (testing truthiness of variables)

		$list.append('<tr>\
						<td>' + taskName + '\
						</td>\
						<td>' + dueDate + '\
						</td>\
						<td>\
							<button type="button" class="btn btn-primary deleteToDo">Done</button>\
						</td>\
					</tr>');
		
		$('.deleteToDo').on('click', deleteToDo);
	}	

	$('taskName').val('');
	$('dueDate').val('');

}

var deleteToDo = function(event) {
	event.preventDefault();
	$(event.target).closest('tr').remove();
}




$('#submit-button').on('click', toToDo);
$('.deleteToDo').on('click', deleteToDo);






// function findCheck(){
// 	var box = $(this);
// 	if( box.is(':checked')){
// 		alert("Good work! You finished");
// 	} else {
// 		alert("Work harder");
// 	}
// };

// $('.unique-check').on('click',findCheck);


















// function youdidit(){
	
// 	if($('.unique-check').checked = true)	{
// 		window.alert("Good work! You finished");
// 	} else if ($('.unique-check').checked = false){
// 		window.alert("Well get to work!");
// 	} else {
// 		return false;
// 	}
// }

// $('.unique-check').on('click', youdidit);







