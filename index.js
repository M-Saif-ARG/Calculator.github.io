let screen = document.getElementById('screen');
button = document.querySelectorAll('button');
let screenValue  ;
for(item of button){
    item.addEventListener('click', (e)=>{
        buttonText= e.target.innerText;
        console.log('Button text is ',buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screen.value);
        }
        else if(buttonText == "𝝿"){
            buttonText = '3.141592653589793';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == "abs"){
            screen.value = Math.abs(screenValue);
        }
        else if(buttonText == "√"){
            screen.value = Math.sqrt(screenValue);
        }
        else if(buttonText == "del"){
            screen.value = screen.value.slice(0,-1);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        })
}