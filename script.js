const thebox = document.getElementById("thebox");
let x = 0;
let y = 0;

function moveUP(){
        y+=1;
        thebox.style.top = y + "px";
};
function moveDOWN(){
        y-=1;
        thebox.style.top = y - "px";
};
function goLEFT(){
        x+=1;
        thebox.style.left = x + "px";
}
function goRIGHT(){
        x-=1;
        thebox.style.left = x - "px";
};
