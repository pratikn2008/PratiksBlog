player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":" ;
document.getElementById("player2_name").innerHTML = player2_name + ":" ;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn = " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn = " + player2_name;

function send(){  
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log("actual_answer");

    if(number1 , number2 == ""){
        document.getElementById("Alert").innerHTML = "Please Enter The Numbers In The Input Boxes";
        document.getElementById("Alert").style.backgroundColor = "white";
        } 
        else{
    question_word = "<h4>" + number1 + "  X  " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id= 'input_check_box'>";
    check_button = "<br><br><button class ='btn btn-info' onclick ='check()'>Check</button>";
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("Alert").innerHTML = "";
    document.getElementById("Alert").style.backgroundColor = "red";
    }
}

question_turn = player1_name;
answer_turn = player2_name;

function check()
{
    actual_answer = parseInt(number1) * parseInt(number2);
	get_answer = document.getElementById("input_check_box").value;
	if(get_answer == actual_answer)	
	{
		if(answer_turn == player1_name)
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("Alert").innerHTML = "Hooray! the answer is correct. You got one point";
            document.getElementById("Alert").style.backgroundColor = "white";
            document.getElementById("Alert").style.color = "green";
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("Alert").innerHTML = "Hooray! the answer is correct. You got one point!";
            document.getElementById("Alert").style.backgroundColor = "white";
            document.getElementById("Alert").style.color = "green";
		}
	}
    else{
        document.getElementById("Alert").innerHTML = "The answer is incorrect. You dont get any point!";
        document.getElementById("Alert").style.backgroundColor = "white";
        document.getElementById("Alert").style.color = "red";
    }
	
	if(question_turn == player1_name)
	{
		question_turn = player2_name;
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		question_turn = player1_name;
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
	}

	if(answer_turn == player1_name)
	{
		answer_turn = player2_name;
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		answer_turn = player1_name;
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
    if(player1_score == "3"){
    winner();
    }
    if(player2_score == "3"){
    winner();
    }
}

function winner() {
    if(player1_score == "3"){
    document.getElementById("winner").innerHTML = "Congragulations " +player1_name+ "! You Are The Winner.";
    document.getElementById("winner").style.color = "green";
    document.getElementById("winner").style.backgroundColor = "white";
    document.getElementById("Alert").innerHTML = "";
    document.getElementById("Alert").style.backgroundColor = "red";
    }
    else{
        document.getElementById("winner").innerHTML = "Congragulations " +player2_name+ "! You Are The Winner.";
        document.getElementById("winner").style.color = "green";
        document.getElementById("winner").style.backgroundColor = "white";
        document.getElementById("Alert").innerHTML = "";
        document.getElementById("Alert").style.backgroundColor = "red";
    }
    document.getElementById("player1_score").innerHTML = "0";
    document.getElementById("player2_score").innerHTML = "0";
    player1_score = 0;
    player2_score = 0;
    button();
}

function button(){
    document.getElementById("replay").style.backgroundColor = "green";
    document.getElementById("replay").style.color = "white";
    document.getElementById("replay").style.borderColor = "green";
}

function replay(){
    document.getElementById("winner").innerHTML = "";
    document.getElementById("winner").style.backgroundColor = "red";
    document.getElementById("Alert").innerHTML = "";
    document.getElementById("Alert").style.backgroundColor = "red";
    window.location = "index.html";
}
