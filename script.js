var question = ["What year was George Boole born?", 
                "What year did George Boole publish the pamphlet Mathematical Analysis of Logic?",  
                "When was Boole appointed professor of mathematics at Queens College, County Cork?", 
                "How many kids did Boole have with Mary Everest?", 
                "Telephone switching and electronic computers use binary digits and logical elements that rely on Boolean logic for their design and operation.", 
                "Did Boole publish Laws of Thought in 1854?", 
                "Boole is the inventor of Boolean Logic.", 
                "Boole is regarded as the founder of Computer science.", 
                "Boole founded a new branch of mathematics called Invariant Theory, later to inspire Einstein in which year?", 
                "What year did George Boole die?"]; 

var correct = [2, 2, 1, 2, 1, 1, 1,   1, 2,  3 ]; 

var answers = [ ['1799', '1800', '1815', '1840'],
                ['1825', '1830', '1847', '1864'],
                ['1820', '1847', '1850', '1862'],
                ['1', '3', '5', '7'], 
                ['True', 'False'], 
                ['True', 'False'], 
                ['True', 'False'], 
                ['True', 'False'], 
                ['1812', '1833', '1841', '1860'],
                ['1815', '1830', '1854', '1864'], ]; 

var questionNum = 0;

var answerButtons = document.getElementsByClassName("quizButton"); 

function setButtons() {
    for(var spot=0; spot<answers[questionNum].length; spot++)
    {
        answerButtons[spot].innerHTML = answers[questionNum][spot]; 

        answerButtons[spot].addEventListener('click', function() {
            disableAll(); 
            if(this.innerHTML == answers[questionNum][correct[questionNum]]) {
                this.setAttribute('style','background-color:rgb(76, 175, 80);'); 
            }else {
                this.setAttribute('style','background-color:rgb(210, 50, 35);'); 
            
            }
        }); 

    }

    document.getElementById("question").innerHTML = question[questionNum]; 
}

function changeColor() {
document.getElementById('demo2').setAttribute('style','background-color:rgb(210,50,35);')
}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled', true); 
    }
}
function resetStyle() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('style','background-color: white;'); 
        answerButtons[num].disabled= false; 
    }
}

function nextQuestion() {
    questionNum = questionNum + 1; 
    setButtons(); 
    resetStyle(); 
}

setButtons(); 

//document.getElementById('resetButton').addEventListener('click', nextQuestion());