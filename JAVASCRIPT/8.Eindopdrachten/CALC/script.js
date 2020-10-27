let screen = document.getElementById("screen");
let value1, value2, rekenValue;

let operators = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '%': function (a, b) { return a % b },
    '*': function (a, b) { return a * b },
    '/': function (a, b) { return a / b },
}

function nummer(i) {
    if (isNaN(screen.innerText)) {
        screen.innerText = i;
    } else if(screenLength() == false){ toevoegen(i); }
}

function toevoegen(i) {
    let temp = screen.innerText;
    if (screen.innerText.charAt(0) == 0 && screen.innerHTML.length != 1 && !screen.innerHTML.includes(".")) {
        temp = temp.substring(1);
    }
    temp = temp + i;
    screen.innerText = temp;
    document.getElementById("changeC").innerHTML = "C";
}

function screenLength(){
    let j = screen.innerHTML.toString();
    if(j.length > 13){
        return true;
    } else { return false;}
}

function methodeReken(i) {
    switch (i) {
        case "posiNeg":
            value1 = screen.innerText;
            screen.innerText = value1 * -1;
            break;
        case "modulo":
            rekenValue = "%";
            value1 = screen.innerText;
            screen.innerText = 0;
            break;
        case "delen":
            rekenValue = "/";
            value1 = screen.innerText;
            screen.innerText = 0;
            break;
        case "keer":
            rekenValue = "*";
            value1 = screen.innerText;
            screen.innerText = 0;
            break;
        case "plus":
            rekenValue = "+";
            value1 = screen.innerText;
            screen.innerText = 0;
            break;
        case "min":
            rekenValue = "-";
            value1 = screen.innerText;
            screen.innerText = 0;
            break;
        case "comma":
            if (!screen.innerHTML.includes(".")) { toevoegen("."); }
            break;
        case "is":
            value2 = screen.innerText;
            let answer = operators[rekenValue](parseFloat(value1), parseFloat(value2));
            screen.innerText = Math.round(answer * 100) / 100;
            break;
        case "reset":
            screen.innerHTML = 0;
            document.getElementById("changeC").innerHTML = "AC";
            break;
    }
}