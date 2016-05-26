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

//FUNCTIONS
//=================================================================
function makeQuestion(q){
	$("#question").html("<h1>" + q.question + "</h1>");
}


function makeButtons(q){
	//for(var i = 0; i < questions.length; i++){

	//	$("#rightBox").append("<button>" + q.choices[1] + "</button>");
	//}

	q.choices.map(function(choice) {
 // here we are doing something for each choice
 		debugger;
 		$("#rightBox").append("<button>" + choice + "</button><br>")
	});

}



//pop()ing will remove a question from the array
var currentQuestion = questions.pop();
makeButtons(currentQuestion);
makeQuestion(currentQuestion);

//DEBUGGER
//=================================================================

console.log(questions);
//console.log(questions.choices[0]);


});
