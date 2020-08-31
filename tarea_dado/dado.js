function start(){
    let sorteo1 = Math.floor(Math.random()*6+1); 
    let sorteo2 = Math.floor(Math.random()*6+1); 

    switch(sorteo1){
        case 1:
            document.getElementById("uno").src = "Dados/cara1.png"; 
            break;
        case 2:
            document.getElementById("uno").src = "Dados/cara2.png";
            break;
        case 3:
            document.getElementById("uno").src = "Dados/cara3.png";
            break;
        case 4:
            document.getElementById("uno").src = "Dados/cara4.png";
            break;
        case 5:
            document.getElementById("uno").src = "Dados/cara5.png";
            break;
        case 6:
            document.getElementById("uno").src = "Dados/cara6.png";
            break;
        default: break;
    }

    switch(sorteo2){
        case 1:
            document.getElementById("dos").src = "Dados/cara1.png"; 
            break;
        case 2:
            document.getElementById("dos").src = "Dados/cara2.png";
            break;
        case 3:
            document.getElementById("dos").src = "Dados/cara3.png";
            break;
        case 4:
            document.getElementById("dos").src = "Dados/cara4.png";
            break;
        case 5:
            document.getElementById("dos").src = "Dados/cara5.png";
            break;
        case 6:
            document.getElementById("dos").src = "Dados/cara6.png";
            break;
        default: break;
    }


    if(sorteo1 != sorteo2){
        if(sorteo1 > sorteo2){
            document.getElementById("results").innerHTML = "Gana jugador 1 <img class='img-result' src='Dados/trofeo.png' alt=''>"
        }
        else{
            document.getElementById("results").innerHTML = "Gana jugador 2 <img class='img-result' src='Dados/trofeo.png' alt=''> "
        }
    }
    else{
        document.getElementById("results").innerHTML = "Ohhh es empate! <img class='img-result' src='Dados/emoji.png' alt=''>"
    }
}