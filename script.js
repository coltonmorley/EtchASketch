markerOn = true;

setGrid(8);
storedVal= 8;


function setGrid(n){
    storedVal=n;
    //Clear out old grid;
    const display = document.getElementById('display');
    display.innerHTML = "";
    //console.log(display);
    //For n rows and n columns
    for(let i = 0; i < n; i++){
        //Create row
        const row = document.createElement('div');
        row.classList.add('row');
        //Populate row with pizels
        for(let i = 0; i < n; i++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            // let mrk = mark(pixel);
            pixel.addEventListener("mouseover", mark);
            pixel.addEventListener("click", function() {markerOn?disableDraw():enableDraw()})
            row.appendChild(pixel);
        }
        //Add row to display
        display.append(row);
    }
}

function mark(){
    if(document.getElementById('rainbow').checked){
        var randColor = Math.floor(Math.random()*16777215).toString(16);
        randColor = "#" + randColor;
        console.log(randColor);
        this.style.backgroundColor = randColor;
    }
    else{
        this.style.backgroundColor = "black";
    }
}

function enableDraw (){
    console.log("Enable");
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener("mouseover", mark);
    });
    markerOn = true;
}

function disableDraw(){
    console.log("Disable");
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.removeEventListener("mouseover", mark);
    });
    markerOn = false;
}

function shake(){
     setGrid(storedVal);
     const etch = document.querySelector('.etcha');
     etch.classList.add('shake');
     setTimeout(() => {etch.classList.remove('shake')}, 1000);
    }
