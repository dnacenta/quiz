var user = {}
var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}

function question2() {

  var firstQuestion = prompt('Does null === 0 ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if ((firstQuestion.toLowerCase() === 'yes') || (firstQuestion.toLowerCase() === 'y'))  {
    firstQuestion = true
  } else if ((firstQuestion.toLowerCase() === 'no') || (firstQuestion.toLowerCase() === 'n')) {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}

function question3() {
  var thirdQuestion = prompt('What is better: pizza, hamburger or vegetables');
  thirdQuestion = thirdQuestion.toLowerCase();
  switch (thirdQuestion) {
    case 'pizza':
    	thirdQuestion = false;
    	break;
    case 'hamburger':
    	thirdQuestion = true;
    	break;
    case 'vegetables':
    	thirdQuestion = false;
    	break;
    default:
    	alert("Say what??");
    	return question3();
    	break;
  }
  responses.push(thirdQuestion);
}

function question4() {
	var fourthQuestion = prompt('Which one is better: Indiana Jones, Star Wars or James Bond');
	switch (fourthQuestion.toLowerCase()) {
		case 'indiana jones':
      fourthQuestion = false;
		case 'star wars':
      fourthQuestion = true;
		case 'james bond':
			fourthQuestion = false;
			break;
    return question4();
    	break;
	}
  responses.push(fourQuestion);
}

function evaluate(responsesArray) {

	valid_answers = 0;
	wrong_answers = 0;

	for (i=0; i < responsesArray.length; i++) {
		if (responsesArray[i] == true) {
			valid_answers += 1;
		}
		else {
			wrong_answers +=1;
		}
	}

	user.valid = valid_answers;
	user.wrong = wrong_answers;

	showResults();
}

function showResults() {

	alert("Nice to meet you " + user.name);
  if (user.valid > 1)  
	alert(user.valid + "answers were ok ");
	alert(user.wrong + "answers were like shit");
// display the user results

}

// call the function, passing it the responses array

question1();

question2();

question3();

question4();

evaluate(responses);