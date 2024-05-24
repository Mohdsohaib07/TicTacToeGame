
const gameboard = document.querySelectorAll(".choice");
let currentplayer;
function userChoice(valuee){
    if(valuee=="X"){
        currentplayer ="X";
        document.getElementById("ab").textContent = "X will make the first Move ";
        document.getElementById("X").setAttribute("onclick","null");

    }
    else if(valuee=="O"){
        currentplayer ="O";
        document.getElementById("ab").textContent = "O will make the first Move ";
        document.getElementById("O").setAttribute("onclick","null");

    }
}
function chosen(value){
    if(currentplayer=="X"){
        for(let a = 0; a<gameboard.length;a++){
            if(value==gameboard[a].textContent){
                gameboard[a].textContent='X';
                gameboard[a].style.color="yellow"; 
                currentplayer="O"; 
            }
        } 
    }
    else{  for(let a = 0; a<gameboard.length;a++){
           if(value==gameboard[a].textContent){
            gameboard[a].textContent='O';
            gameboard[a].style.color="orange"; 
            currentplayer="X";  
        }
    }
    }
  checkWinX(); 
  checkWinO();
  checkDraw();
}
function reset(){
    for(let b = 0;b<gameboard.length;b++){
        gameboard[b].textContent=b+1;
        gameboard[b].style.color="white";
        document.getElementById("ab").textContent = 'who will Play first ?';
        document.getElementById("ab").style.color = 'black';
        document.getElementById("ab").style.fontSize = "2em"; 
    }
    clickable();
    document.getElementById("X").setAttribute("onclick",`userChoice("X")`);
    document.getElementById("O").setAttribute("onclick",`userChoice("O")`);
}
// X ki win check krrey hai
function checkWinX(){
    if(gameboard[0].textContent=="X" && gameboard[1].textContent=="X" && gameboard[2].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[3].textContent=="X" && gameboard[4].textContent=="X" && gameboard[5].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[6].textContent=="X" && gameboard[7].textContent=="X" && gameboard[8].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[0].textContent=="X" && gameboard[3].textContent=="X" && gameboard[6].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();

    }
    else if(gameboard[1].textContent=="X" && gameboard[4].textContent=="X" && gameboard[7].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[2].textContent=="X" && gameboard[5].textContent=="X" && gameboard[8].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[0].textContent=="X" && gameboard[4].textContent=="X" && gameboard[8].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[2].textContent=="X" && gameboard[4].textContent=="X" && gameboard[6].textContent=="X"){
        document.getElementById("ab").textContent ="X Won";
        document.getElementById("ab").style.color = "Blue";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    } 
}
// O ki win check krrey hai
function checkWinO(){
    if(gameboard[0].textContent=="O" && gameboard[1].textContent=="O" && gameboard[2].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[3].textContent=="O" && gameboard[4].textContent=="O" && gameboard[5].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[6].textContent=="O" && gameboard[7].textContent=="O" && gameboard[8].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[0].textContent=="O" && gameboard[3].textContent=="O" && gameboard[6].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();

    }
    else if(gameboard[1].textContent=="O" && gameboard[4].textContent=="O" && gameboard[7].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[2].textContent=="O" && gameboard[5].textContent=="O" && gameboard[8].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[0].textContent=="O" && gameboard[4].textContent=="O" && gameboard[8].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    }
    else if(gameboard[2].textContent=="O" && gameboard[4].textContent=="O" && gameboard[6].textContent=="O"){
        document.getElementById("ab").textContent ="O Won";
        document.getElementById("ab").style.color = "orange";
        document.getElementById("ab").style.fontSize = "2.5em";
        unclickable();
    } 
}
function checkDraw(){
    let dc = 0;
    for(let k = 0;k<9;k++){
        if(gameboard[k].textContent=="X" || gameboard[k].textContent=="O"){
            dc++;
        }
    }
    if(dc==9){
        document.getElementById("ab").style.color = "red";
        return  document.getElementById("ab").textContent="it's a Draw";
    }
}
function unclickable(){
    for(let a = 0; a<gameboard.length;a++){
        gameboard[a].onclick=null;}
}
function clickable(){
    for(let a = 0; a<gameboard.length;a++){
        gameboard[a].setAttribute("onclick",`chosen(${a+1})`);}
}