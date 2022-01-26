const eqnbox = document.querySelector("#eqn");
const keypad = document.querySelector("#keypad");

const evaluate = () => {
    const abc = JSON.stringify(eqnbox.value);
    return eval(JSON.parse(abc));
};


keypad.addEventListener('click', e =>{
    if (e.target.innerText == "=")
    { 
        eqnbox.value = evaluate();
    }
    else if (e.target.innerText == "Clear"){
        eqnbox.value = ""
    }
    else if((e.target.innerText).length === 1){
        eqnbox.value += (e.target.innerText);
    }
    else{
        //pass
    }
});