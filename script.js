const thebox = document.getElementById("thebox");
let x = 0;
let y = 0;

function move(){

    switch(){
    case "goUp":
        y+=1;
        thebox.style.top = y + "px";
        break;
    case "goDown":
        y-=1;
        thebox.style.top = y - "px";
        break;
    case "goLeft":
        x+=1;
        thebox.style.left = x + "px";
        break;
    case "goRight":
        x-=1;
        thebox.style.left = x - "px";
        break;
    default:
        break;
    }
}
