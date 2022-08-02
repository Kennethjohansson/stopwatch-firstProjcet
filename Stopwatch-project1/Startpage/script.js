let [seconds, minutes, hours] = [0,0,0]; 
let timerRef = document.getElementById('time');
let int = null;
let bStart = false;
let lapNow = null;


document.getElementById('start').addEventListener('click', ()=> {
    if (!bStart) {
        bStart = true;
        int = setInterval(time, 10);
        document.getElementById('start').textContent = 'Stop';
    } else {
        bStart = false;
        clearInterval(int);
        document.getElementById('start').textContent = 'Start';
    }
});

document.getElementById('reset').addEventListener('click', ()=> {
    [seconds, minutes, hours] = [0,0,0];
    clearInterval(int);
    timerRef.innerHTML = '00 : 00 : 00';
    lapRecord.innerHTML = '';
    start.innerHTML = "Start";
    bStart = false
})

document.getElementById('lap').addEventListener('click', () => {
   lapNow = `<div class="lap">${h} : ${m} : ${s}</div>`
    lapRecord.innerHTML += lapNow;
    }) 


function addZero(number) {
    return number < 10 ? "0" + number : number
}

function time() {
    seconds+=1;
    if(seconds === 60){
        seconds = 0;
        minutes++;

    }
    if(minutes === 60){
        minutes = 0;
        hours++;
    }
    if(hours === 24){
        hours = 0;
    }

     h = addZero(hours);
     m = addZero(minutes);
     s = addZero(seconds);
     timerRef.innerHTML = `${h} : ${m} : ${s}`;  
    }
    






