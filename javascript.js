let mossa_computer=document.querySelector("#mossa_computer");
let sfondo=document.querySelector("body");

let score_player=document.querySelector("#score_player");
let score_computer=document.querySelector("#score_computer");
let pareggio=document.querySelector("#pareggio");

let var_player=0;
let var_computer=0;
let var_pareggio=0;

let scelta_player=document.querySelectorAll("input");
let scelta_computer=0;

// 0 > Sasso
// 1 > Carta
// 2 > Forbici

let scelta_computer_precedente=3;

function game(){
    while(scelta_computer_precedente==scelta_computer){
        scelta_computer=Math.floor(Math.random()*3);
    }
    scelta_computer_precedente=scelta_computer;

    // scelta_computer=Math.floor(Math.random()*3);

    if(scelta_computer==0){
        mossa_computer.innerText="Sasso";
    }else if(scelta_computer==1){
        mossa_computer.innerText="Carta";
    }else if(scelta_computer==2){
        mossa_computer.innerText="Forbici";
    }

    if(scelta_player[0].checked){
        controllo(0,scelta_computer);
    }else if(scelta_player[1].checked){
        controllo(1,scelta_computer);
    }else if(scelta_player[2].checked){
        controllo(2,scelta_computer);
    }else{
        alert("Seleziona una Mossa");
    }
}

function azzera(){
    score_player.innerText="Punteggio Player: 0";
    score_computer.innerText="Punteggio Computer: 0";
    pareggio.innerText="Pareggio: 0";
    var_player=0;
    var_computer=0;
    var_pareggio=0;
}

function controllo(x,y){
    if(x==0 && y==2 || x==1 && y==0 || x==2 && y==1){
        var_player=var_player+1;
        score_player.innerText="Punteggio Player: "+var_player;
        sfondo.style.backgroundColor="green";
    }else if(x==0 && y==1 || x==1 && y==2 || x==2 && y==0){
        var_computer=var_computer+1;
        score_computer.innerText="Punteggio Computer: "+var_computer;
        sfondo.style.backgroundColor="red";
    }else{
        var_pareggio=var_pareggio+1;
        pareggio.innerText="Pareggio: "+var_pareggio;
        sfondo.style.backgroundColor="lightgray";
        sfondo.style.backgroundColor="lightgray";
    }
}
