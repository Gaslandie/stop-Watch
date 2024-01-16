//variables pour nos boutons
const btnStartStop = document.querySelector('#startStopBtn');
const btnreset = document.querySelector('#resetBtn');

//nos secondes, minutes et heurs

let secondes = 0;
let minutes = 0;
let heures = 0;

//dans le cas ou on a seulement un digit ua niveau des secondes, minutes ou heures
let twoDigitsSecondes = 0;
let twoDigitsMinutes = 0;
let twoDigitsHeures = 0;

let timerInterval = null; //variable pour nous aider à arreter notre chrono
let timerStatus ="stopped"; //lorsque le chrono n'a pas pas commencé ou lorsqu'il est en pause


function stopWatch(){
    secondes ++;
    if(secondes / 60 === 1){
        secondes = 0;
        minutes ++;
        if(minutes / 60 === 1){
            minutes= 0;
            heures ++;
        }
    }
    // en cas d'un seul chiffre, on en veut deux, pour une seconde on veut 01 seconde au lieu de 1 seconde
    if(secondes < 10){
        twoDigitsSecondes = "0" + secondes.toString();//pour etre sur qu'on a bien la somme de deux strings
    }else{
        twoDigitsSecondes = secondes;
    }

    if(minutes < 10){
        twoDigitsMinutes = "0" + minutes.toString();//pour etre sur qu'on a bien la somme de deux strings
    }else{
        twoDigitsMinutes = minutes;
    }

    if(heures < 10){
        twoDigitsHeures = "0" + heures.toString();//pour etre sur qu'on a bien la somme de deux strings
    }else{
        twoDigitsHeures = heures;
    }


    let displayTimer = document.getElementById('timer').innerText = twoDigitsHeures +":"+ twoDigitsMinutes +":"+twoDigitsSecondes;
}
// window.setInterval(stopWatch,1000);

btnStartStop.addEventListener('click',function(){
    //quand on clique sur play augmente d'une seconde change le contenu html et change le statut
    if(timerStatus === "stopped"){
        timerInterval = setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        //quand on clique sur pause arrete l'augmentation et change le contenu à play
        clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

//pour reinitialiser, on arrete dabord le chrono avec clearInterval, on met nos secondes, minutes et heures à 0 et on change le html dans lelement timer

btnreset.addEventListener('click',function(){
    clearInterval(timerInterval);
    secondes = 0;
    minutes = 0;
    heures = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
})