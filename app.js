function toToDo(event){
	event.preventDefault();
	var $element = $(event.target);
	var $form = $element.closest('form');
	var $inputs = $form.find('input')
	var taskName = $inputs.first().val();
	var dueDate = $inputs.eq(1).val();
	var $list = $('#toDoTable');
	$list.append('<tr>\
					<td>' + taskName + '\
					</td>\
					<td>' + dueDate + '\
					</td>\
					<td>\
						<div class="checkbox">\
							<label>\
								 <input class= "unique-check" type="checkbox"> \
							</label>\
						</div>\
					</td>\
				</tr>');

	console.log("hey, it worked", value1, value2);
	
	return false;

}

$('#submit-button').on('click',toToDo);



// function youdidit(){
// 	window.alert("Good work! You finished");
// }

// $('.unique-check').on($('.unique-check').checked = true), youdidit);

















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







