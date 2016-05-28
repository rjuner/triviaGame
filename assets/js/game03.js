$(document).ready(function() {

//DECLARING GLOBAL VARIABLES
//=================================================================
var questions, questionIndex, timeUp, correct, incorrect, clock, countdown;

//FUNCTIONS
//=================================================================
$("#start").on("click", function(){
	next();
	makeButtons();
});

function selectAnswer(){
	$(".selection").on("click", function(){
		//console.log(this);
	if( $(this).text() == questions[questionIndex].correct){
		rightScreen();
	}else{
		wrongScreen();
	}

	});
}

function decrement(){
	//subtracts from countdown
	countdown--;
	console.log(countdown);
	$("#clock").show().html("TIME LEFT: " + countdown);
} 

function visualCounter(){
	countdown = 30;

	//will go to "foo" every second (1000)
	clock = setInterval(decrement, 1000);

}

function initalState(){
	questions = [
		{
			q: "Where do bananas grow?", 
			choices: [
				"On Trees", "On Herbs", "Under Water", "In the Desert"],
			correct: "On Herbs", 
			reason: "THIS IS THE REASON FOR WHATEVER #1"
		},
		{
			q: "What is Michael J Fox's middle name?", 
			choices: ["Joseph", "Andrew", "Michael", "James"],
			correct: "Andrew", 
			reason: "THIS IS THE REASON FOR WHATEVER #2"
		}, 
		{
			q: "When did Nelson Mandela die?", 
			choices: ["He's still alive", "2013", "1980", "1999"],
			correct: "2013", 
			reason: "THIS IS THE REASON FOR WHATEVER #3"
		},
		{	
			q: "Which quote is correct?", 
			choices: ["Luke, I am your father.", "Do you feel lucky, punk?", "Toto, I don't think we're in Kansas anymore.", "Frankly, my dear, I don't give a damn."], 
			correct: "Frankly, my dear, I don't give a damn.", 
			reason: "THIS IS THE REASON FOR WHATEVER #4"
		}, 
		{
			q: "What percent of our brain do we really use?", 
			choices: ["10%", "90%", "We use different parts for different functions.", "50%"], 
			correct: "We use different parts for different functions.", 
			reason: "THIS IS THE REASON FOR WHATEVER #5"
		}, 
		{
			q: "How many senses do we have?", 
			choices: ["6", "5", "20+", "10"], 
			correct: "20+", 
			reason: "THIS IS THE REASON FOR WHATEVER #6"
		}, 
		{
			q: "Heroin has NOT been marketed as a remedy to which of the following?", 
			choices: ["Children's Cough", "The Common Cold", "Opiate Addiction", "Sleeplessness"], 
			correct: "Sleeplessness", 
			reason: "THIS IS THE REASON FOR WHATEVER #7"
		}, 
		{
			q: "Which of the following is spelled incorrectly?", 
			choices: ["Brussels Sprouts", "Berernstain Bears", "Millenium", "Disburse"], 
			correct: "Millenium", 
			reason: "THIS IS THE REASON FOR WHATEVER #8"
		}

	];

	questionIndex = -1; 
	correct = 0; 
	incorrect = 0; 
}

function next(){
	timeUp = setTimeout(outofTime, 1000 * 5);
	questionIndex++;

	if(questionIndex < questions.length){
		askQuestion();
		makeButtons();
		selectAnswer();
	}else{
		endScreen();
	}
}

function askQuestion(){
	$("#questionArea").html(questions[questionIndex].q);
	$("#flavorText").hide();
	visualCounter();
}

function makeButtons(){
	$("#buttonHolder").show(); 
	$("#button01").html(questions[questionIndex].choices[0]);
	$("#button02").html(questions[questionIndex].choices[1]);
	$("#button03").html(questions[questionIndex].choices[2]);
	$("#button04").html(questions[questionIndex].choices[3]);
}

function wrongScreen(){
	clearTimeout(timeUp);

	$("#buttonHolder").hide().off("click");

	$("#flavorText").show().html("WRONG! <br>"  + "The answer is: " + questions[questionIndex].correct + "<br>Here's why: <br>" + questions[questionIndex].reason);

	// in 5 seconds it will go to next question. 
	timeUp = setTimeout(next, 1000 * 2);
	clearInterval(clock);
	$("#clock").hide();
}

function outofTime(){
	clearTimeout(timeUp);

	$("#buttonHolder").hide().off("click");

	$("#flavorText").show().html("OUT OF TIME! <br>" + "The answer is: " + questions[questionIndex].correct + "<br>Here's why: <br>" + questions[questionIndex].reason);

	// in 5 seconds it will go to next question. 
	timeUp = setTimeout(next, 1000 * 2);

	clearInterval(clock);
	$("#clock").hide();
}

function rightScreen(){
	clearTimeout(timeUp);

	$("#buttonHolder").hide().off("click");

	$("#flavorText").show().html("YESSSS! <br>" + "The answer is: " + questions[questionIndex].correct + "<br>Here's why: <br>" + questions[questionIndex].reason);

	// in 5 seconds it will go to next question. 
	timeUp = setTimeout(next, 1000 * 2);
	clearInterval(clock);
	$("#clock").hide();

}

function endScreen(){
	$("#flavorText").show().html("THANKS FOR PLAYING!</br>" + "<button id='reset'>Reset?</button>");
	$("#reset").on("click", function(){
	});

}

initalState();

// ***************************************************************
// STOP! BELOW IS THE END OF THE DOCUMENT READY FUNCTION! 
});

