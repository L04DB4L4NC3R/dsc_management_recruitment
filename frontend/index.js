$(document).ready(function(){
    localStorage.clear();
    var question_number = 1;

    $('#final-submit').click(function(){
        var regno = document.getElementById("regno").value;
        var registrationcheck = {
            registrationNumber : regno
        }
        
        //this happens when the registration number is checked
        
        $.post("/check",registrationcheck,(resp, status)=>{
            if(resp.message)
                alert(resp.message);
            else{
                localStorage.setItem("user",regno)
                $('.form').fadeOut(300);
                setTimeout(function(){
                    $('.questions').fadeIn(600);
                },300);
            }
        })
        
    })

    $('#question-next').click(function(){
        question_number++;
        $('.question').fadeOut(300);
        setTimeout(function(){
            if(question_number == 2){
                $('#question-two').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 3){
                $('#question-three').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 4){
                $('#question-four').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 5){
                $('#question-five').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 6){
                $('#question-six').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 7){
                $('#question-seven').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 8){
                $('#question-eight').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 9){
                $('#question-nine').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 10){
                $('#question-ten').fadeIn(600);
                $('#question-previous').fadeIn(600);
                $('#question-next').text('Submit');
            }//registrationNumber
            else if(question_number == 11){
                $('.questions').fadeOut(300);
                var answerone = document.getElementById("answer-one").value;
                var answertwo = document.getElementById("answer-two").value;
                var answerthree = document.getElementById("answer-three").value;
                var answerfour = document.getElementById("answer-four").value;
                var answerfive = document.getElementById("answer-five").value;
                var answersix = document.getElementById("answer-six").value;
                var answerseven = document.getElementById("answer-seven").value;
                var answereight = document.getElementById("answer-eight").value;
                var answernine = document.getElementById("answer-nine").value;
                var answerten = document.getElementById("answer-ten").value;
                setTimeout(function(){
                    $('.thank-you').fadeIn(600);
                    var answer = {
                        answerOne : answerone,
                        answerTwo : answertwo,
                        answerThree : answerthree,
                        answerFour : answerfour,
                        answerFive : answerfive,
                        answerSix : answersix,
                        answerSeven : answerseven,
                        answerNine : answernine,
                        answerEight : answereight,
                        answerTen : answerten,
                        registrationNumber:localStorage.getItem("user")
                    }
                    $.post("/answer", answer, (resp, status)=>{
                        console.log(resp);
                    })
                },300)
            }
        },300);
    })

    $('#question-previous').click(function(){
        question_number--;
        $('.question').fadeOut(300);
        setTimeout(function(){
            if(question_number == 1){
                $('#question-one').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeOut(600);
            }
            else if(question_number == 2){
                $('#question-two').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 3){
                $('#question-three').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 4){
                $('#question-four').fadeIn(600);
                $('#question-previous').fadeIn(600);
                $('#question-next').text('Next');
            }
            else if(question_number == 5){
                $('#question-five').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }

            else if(question_number == 6){
                $('#question-six').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 7){
                $('#question-seven').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 8){
                $('#question-eight').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 9){
                $('#question-nine').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
            }
            else if(question_number == 10){
                $('#question-ten').fadeIn(600);
                $('#question-next').fadeIn(600);
                $('#question-previous').fadeIn(600);
                $('#question-next').text('Next');
            }
        },300);
    })


});
