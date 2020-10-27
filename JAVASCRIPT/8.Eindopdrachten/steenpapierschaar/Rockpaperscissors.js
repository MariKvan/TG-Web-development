function robot(i) {

    let x= Math.round(Math.random() * 2 ) + 1;
    switch(x){
        case 1: 
            document.getElementById("ai").innerHTML = "<img src=\"/JAVASCRIPT/8.Eindopdrachten/img/rock.png\">";
            if (i == 1){document.getElementById("outcome").innerHTML = "you win"}
            if (i == 2){document.getElementById("outcome").innerHTML = "you lose"}
            if (i == 3){document.getElementById("outcome").innerHTML = "draw"}
            break;  
        case 2: 
            document.getElementById("ai").innerHTML = "<img src=\"/JAVASCRIPT/8.Eindopdrachten/img/paper.png\">";
            break;  
        default: 
            document.getElementById("ai").innerHTML = "<img src=\"/JAVASCRIPT/8.Eindopdrachten/img/scissor.png\">";
            break;  
    }
    
}



