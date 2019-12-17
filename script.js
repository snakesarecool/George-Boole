var question = "Which of the following is a school color?"; 

var correct = 3; //The first answer is at position 0, the last is at 3.

var answers = ['Red', 'Green', 'Blue', 'Yellow']; 

var answerButtons = document.getElementsByClassName("quizButton"); 

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot]; 

    answerButtons[spot].addEventListener('click', function() {
        disableAll(); 
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style','background-color:rgb(76, 175, 80);')
        }else {
            this.setAttribute('style','background-color:rgb(210, 50, 35);')
           
        }
    }); 

}

document.getElementById("question").innerHTML = question; 

function changeColor() {
document.getElementById('demo2').setAttribute('style','background-color:rgb(210,50,35);')
}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled', true); 
    }
}
