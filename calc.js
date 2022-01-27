const eqnbox = document.querySelector("#eqn");
const keypad = document.querySelector("#keypad");
const alert = document.querySelector("#alert");

const evaluate = () => {
    try {
        const abc = JSON.stringify(eqnbox.value);
        return eval(JSON.parse(abc));
    } catch (error) {
        console.log("Please enter a valid expression");
        alert.classList.remove("opacity-0");
        alert.classList.add("opacity-100");
        setTimeout(()=>{
            alert.classList.remove("opacity-100");
            alert.classList.add("opacity-0");
        },2000);
        return "";
    }
    
};


keypad.addEventListener('click', e =>{
    if (e.target.innerText == "=")
    { 
        eqnbox.value = evaluate();
    }
    else if (e.target.innerText == "Clear"){
        eqnbox.value = ""
    }
    else if (e.target.innerText == "Backspace"){
        eqnbox.value = eqnbox.value.slice(0,-1)
    }
    else if((e.target.innerText).length === 1){
        eqnbox.value += (e.target.innerText);
    }
    else{
        //pass
    }
});