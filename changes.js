let terre = 1;
let audio = new Audio(`sounds/lets_go_2.mp3`);
function changes(){
    console.log(".play");
    audio.pause();
    if ((total >= 15000) && (terre == 1)){
        terre++
        document.querySelector("svg").style.backgroundColor = "#351668";
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`);
        
    } else if ((total >= 50000) && (terre == 2)){
        terre++
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`);
        document.querySelector("svg").style.backgroundColor = "#27124b";
    } else if ((total >= 1000000) && (terre == 3)){
        terre++
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
    } else if ((total >= 20000000) && (terre == 4)){
        terre++
        document.querySelector("svg").style.backgroundColor = "#1f0d3e";
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
    } else if ((total >= 200000000) && (terre == 5)){
        terre++
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 
    } else if ((total >= 1000000000) && (terre == 6)){
        terre++
        document.querySelector("svg").style.backgroundColor = "#0d031e";
        document.querySelector(".clicker").setAttribute("href",`images/terre${terre}.png`); 

        victory = true;
        document.querySelector(".victoryModale").style.display = "grid"
    }

    if (mute == false){
        audio = new Audio(`sounds/lets_go_${terre+1}.mp3`);
        audio.play();
    }

    


   

   
}
