    const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
    };

    let intervalId;
    const startChangingColor = function(){
        if (!intervalId){
            intervalId = setInterval(changeBgColor, 1000);  // Passed changeBgColor and 1000 ms to setInterval
        }
    };
    
function changeBgColor() {
document.body.style.backgroundColor = randomColor();
console.log('color is changing')
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
    console.log("color changing is stopped")
  };

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);