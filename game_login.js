function addUser(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    if(player1_name , player2_name == ""){
        document.getElementById("Alert").innerHTML = "Please Enter Player Names";
        document.getElementById("Alert").style.backgroundColor = "white";
    }
    else{
        window.location = "game_page.html";
    }
}
