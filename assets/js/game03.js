$(document).ready(function() {

//DECLARING GLOBAL VARIABLES
//=================================================================
var questions, questionIndex, timeUp, correct, incorrect, clock;

//FUNCTIONS
//=================================================================
$("#start").on("click", function(){
	next();
	makeButtons();
});

function selectAnswer(){
	$(".btn").on("click", function(){
		//console.log(this);
	if( $(this).text() == questions[questionIndex].correct){
		rightScreen();
	}else{
		wrongScreen();
	}

	});
}

selectAnswer();

// function visualCounter(){
// 	clock = setInterval()
// }

function initalState(){
	questions = [
		{
			q: "Where do bananas grow?", 
			choices: [
				"On Trees", "On Herbs", "Under Water", "In the Desert"],
			correct: "On Herbs"
		},
		{
			q: "What is Michael J Fox's middle name?", 
			choices: ["Joseph", "Andrew", "Michael", "James"],
			correct: "Andrew"
		}, 
		{
			q: "When did Nelson Mandela die?", 
			choices: ["He's still alive", "2013", "1980", "1999"],
			correct: "2013"
		},
		{	
			q: "Which quote is correct?", 
			choices: ["Luke, I am your father.", "Do you feel lucky, punk?", "Toto, I don't think we're in Kansas anymore.", "Frankly, my dear, I don't give a damn."], 
			correct: ["Frankly, my dear, I don’t give a damn."]
		}, 
		{
			q: "What percent of our brain do we really use?", 
			choices: ["10%", "90%", "We use different parts for different functions.", "50%"], 
			correct: "We use different parts for different functions."
		}, 
		{
			q: "How many senses do we have?", 
			choices: ["6", "5", "20+", "10"], 
			correct: "20+"
		}, 
		{
			q: "Heroin has NOT been marketed as a remedy to which of the following?", 
			choices: ["Children's Cough", "The Common Cold", "Opiate Addiction", "Sleeplessness"], 
			correct: "Sleeplessness"
		}, 
		{
			q: "Which of the following is spelled incorrectly?", 
			choices: ["Brussels Sprouts", "Berernstain Bears", "Millenium", "Disburse"], 
			correct: "Millenium"
		}

	];

	questionIndex = -1; 
	correct = 0; 
	incorrect = 0; 
}

function next(){
	timeUp = setTimeout(wrongScreen, 1000 * 5);
	questionIndex++;
	askQuestion();
	makeButtons();
}

function askQuestion(){
	$("#questionArea").html(questions[questionIndex].q);
}

function makeButtons(){
	$("#button01").html(questions[questionIndex].choices[0]);
	$("#button02").html(questions[questionIndex].choices[1]);
	$("#button03").html(questions[questionIndex].choices[2]);
	$("#button04").html(questions[questionIndex].choices[3]);
}

function wrongScreen(){
	clearTimeout(timeUp);
	alert("WRONG!");
	//next();
}

function rightScreen(){
	clearTimeout(timeUp);
	$("#rightBox").empty("<button>"); 
	$("#rightBox").append("<h1> YOU DID IT!</h1>"); 
	alert("YEAHHHH!");
	// in 5 seconds it will go to next question. 
	timeUp = setTimeout(next, 1000 * 2);
}

initalState();


// ***************************************************************
// STOP! BELOW IS THE END OF THE DOCUMENT READY FUNCTION! 
});

