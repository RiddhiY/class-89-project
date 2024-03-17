player1_name=localStorage.getItem("player_1_name");
player2_name=localStorage.getItem("player_2_name");
document.getElementById("p1_name").innerHTML=player1_name;
document.getElementById("p2_name").innerHTML=player2_name;
document.getElementById("question_turn").innerHTML="Question Turn:"+player1_name;
document.getElementById("answer_turn").innerHTML="Answer Turn:"+player2_name;
p1_score=0;
p2_score=0;
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

q_turn="p1";
a_turn="p2";

function send(){

    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    q_tag='<h4>'+number1+"X"+number2+'</h4>';
    input_tag='<br>Answer: <input type="text" id="input_check_tag">';
    check_button='<br><br><button class="btn btn-info" onclick="check()">Check</button>'
    row=q_tag+input_tag+check_button;

     document.getElementById("output").innerHTML=row;
     document.getElementById("number1").value="";
     document.getElementById("number2").value="";

}
function check(){
    get_answer=document.getElementById("input_check_tag").value;
    if(get_answer==actual_answer){
        if(a_turn=="p1"){
            p1_score=p1_score+1;
            document.getElementById("player1_score").innerHTML=p1_score;
        }
        else {
            p2_score=p2_score+1;
            document.getElementById("player2_score").innerHTML=p2_score;
        }
        alert("Right Answer!")
    }
    else{
        alert("Wrong Answer, the correct answer is "+actual_answer)
    }
    if(q_turn=="p1"){
        q_turn="p2";
        a_turn="p1";
        document.getElementById("question_turn").innerHTML="Question turn: "+player2_name;
        document.getElementById("answer_turn").innerHTML="Answer turn: "+player1_name;
    }
    else{
       a_turn="p1";
       q_turn="p2";
       document.getElementById("question_turn").innerHTML="Question Turn: "+player1_name;
       document.getElementById("answer_turn").innerHTML="Answer Turn: "+player2_name;
    }
    document.getElementById("output").innerHTML="";
}

