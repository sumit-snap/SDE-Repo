var cofA, cofB, cofC, result;

function init(){
    cofA = document.querySelector("#valueofA");
    cofB = document.querySelector("#valueofB");
    cofC = document.querySelector("#valueofC");
    result = document.querySelector("#result");
}

function updateEquation(){
    
    document.getElementById("a").innerHTML = cofA.value==1?"":cofA.value;
    document.getElementById("b").innerHTML = cofB.value==1?"":cofB.value;
    document.getElementById("c").innerHTML = cofC.value;
}

function solve(){
    if(eval(cofA.value) !== undefined && eval(cofB.value) !== undefined && eval(cofC.value) !== undefined){
        let a = cofA.value, b = cofB.value, c = cofC.value;
        let discriminant = getDiscriminant(a, b, c);
        if (discriminant<0){
            result.innerHTML = "There is no real root :'/";
        }
        else if (discriminant===0){
            let root1 = (-b+Math.sqrt(discriminant))/(2*a);
            let root2 = (-b-Math.sqrt(discriminant))/(2*a);
            result.innerHTML = "There is real and equal root.<br>";
            result.innerHTML += "x<sub>1</sub>: " + root1 + "<br>";
            result.innerHTML += "x<sub>2</sub>: " + root2 + "<br>";
        }
        else{
            let root1 = (-b+Math.sqrt(discriminant))/(2*a);
            let root2 = (-b-Math.sqrt(discriminant))/(2*a);
            result.innerHTML = "There is real and distinct root.<br>";
            result.innerHTML += "x<sub>1</sub>: " + root1 + "<br>";
            result.innerHTML += "x<sub>2</sub>: " + root2 + "<br>";
        }
    }
    else{
        result.innerHTML = "Please enter all the values";
    }
}

function getDiscriminant(a, b, c){
    return Math.pow(b, 2)-4*a*c;
}