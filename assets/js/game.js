$(document).ready(function() {

//DECLARING VARIABLES
//=================================================================

var questions = [
	{
		question: "Where do bananas grow?", 
		choices: [
			"On Trees", "On Herbs", "Under Water", "In the Desert"
		],
		correct: "On Herbs"
	},
	{
		question: "What is Michael J Fox&apos;s middle name?", 
		choices: ["Joseph", "Andrew", "Michael", "James"
		],
		correct: "Andrew"
	}
];
var num = 0;

$("#question").html(questions[num].question);
trivia();

function trivia(){
	for(var i = 0; i < questions[num].choices.length; i++){
		var $newButton = $("<button>");
		$newButton.attr("id", "q"+i);
		$newButton.attr("data-answer", questions[num].choices[i]);
		$newButton.html(questions[num].choices[i]);
		$("#rightBox").append($newButton);
		$("#q"+i).on("click", function(){
			if($(this).attr("data-answer") === questions[num].correct){
				console.log("correct!");
				num++;
			} else {
				console.log("wrong...");
			}

		});
	}
}

// $("#rightBox").on("click", function(event){
// 	console.log($(event.target));
// });


//FUNCTIONS
//=================================================================
// function makeQuestion(q){
// 	$("#question").html("<h1>" + q.question + "</h1>");
// }


// function makeButtons(q){
// 	//for(var i = 0; i < questions.length; i++){

// 	//	$("#rightBox").append("<button>" + q.choices[1] + "</button>");
// 	//}

// 	q.choices.forEach(function(choice, count) {
//  // here we are doing something for each choice
//  		debugger;
//  		$("#rightBox").append("<button value='"+choice+"'id='q'"+count+">" + choice + "</button><br>");
//  		$("#q"+count).addClass("choices");
//  		$(".choices").on("click", function(){
//  			$(this).val() === choice.
//  		});
// 	});



// }

// // ONCLICK & EVENT LISTENERS 
// //=================================================================
// $('#').on('click', function() {
	
// });



// //pop()ing will remove a question from the array
// var currentQuestion = questions.pop();
// makeButtons(currentQuestion);
// makeQuestion(currentQuestion);

// //DEBUGGER
// //=================================================================

// console.log(questions);
// //console.log(questions.choices[0]);


});
