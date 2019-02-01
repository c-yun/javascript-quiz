var question;
var qIndex = 0;
var score = 0;
var userChoice = 0;
var playerAnswer=0;
var allQuestions;

document.addEventListener("DOMContentLoaded", function() {
    var url = `https://opentdb.com/api.php?amount=10&category=14&type=multiple`;

    fetch(url)
        .then(function(data) {
        return data.json(); 
    })
        .then(function(json) {
            question = json.results[0].question;
            allQuestions = json.results;
           
            document.getElementById("questions").textContent = question; 
            for (i = 0; i < 3; i++) {
                document.getElementById("label" + i).textContent = json.results[0].incorrect_answers[i]
                
            }
            document.getElementById("label3").textContent = json.results[0].correct_answer;
            // console.log(json.results[0].question)
            // var theCurrentQuestion = json[qIndex];
            // console.log(userChoice);
        }) 
    });
    
document.forms['answer'].addEventListener('click', function(e) {
    console.log(e.target);
        userChoice = e.target;
        if (e.target.id === "d") {
        score++ 
        } else {
        score--
    }
})


document.getElementsByTagName("button")[0].addEventListener('click', function(e) {
        if (qIndex !== 9) {
        qIndex++;
    
        question = allQuestions[qIndex].question;
    
        document.getElementById("questions").textContent = question; 
        for (i = 0; i < 3; i++) {
            document.getElementById("label" + i).textContent = allQuestions[qIndex].incorrect_answers[i]
            
        }
        document.getElementById("label3").textContent = allQuestions[qIndex].correct_answer;
        
        } else {
        var scoreboard = document.getElementById("scoreboard");
        scoreboard.textContent = score;
        scoreboard.classList.remove("hide");

    }

});