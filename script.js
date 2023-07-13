let word = document.getElementById('word');
let input_value = document.getElementById('input-value');
let timer = document.getElementById('timer');
let score = document.getElementById('score');
let correct = document.getElementById('over');
let Start = document.getElementById('Start');
let score_value = 0;
let timer_count = 6;
let isplaying = false;
const array = [
    'Akhil', 'Ankit', 'cats', 'nerve', 'word', 'touch', 'bored', 'oil', 'claim', 'include', 'pancake', 'sad', 'afternoon',
    'tall', 'lip', 'material', 'separate', 'apparel', 'homely', 'paddle', 'river', 'actually', 'decision', 'riddle', 'room', 'obey', 'because',
    'want', 'value', 'engagement', 'involve', 'bitter', 'laptop', 'system', 'family', 'person', 'would', 'there', 'Dictionary', 'commonest'
    , 'writing', 'necessarily']
input_value.addEventListener("input", () => matchStart());
window.addEventListener("DOMContentLoaded", init);
Start.addEventListener("click", () => start());
function start() {
    setInterval(countdown, 1000);

    score.innerHTML = 0;

}
function init() {
    chnageword();
    setInterval(chechvalue, 50);
}
function matchStart() {
    if (matchword()) {
        chnageword();
        input_value.value = "";
    }
    else {
        if (timer_count == 0) {
            timer_count = 6;


        }
    }
}
function matchword() {
    if (input_value.value === word.innerHTML) {
        ChangeScore();
        correct.innerHTML = "Correct!!!"
        timer_count = 6;
        return true;
    }
    else {
        {
            correct.innerHTML = "Incorrect Word"
            return false;
        }
    }
}
function countdown() {

    if (timer_count > 0) {
        timer_count--;
        timer.innerHTML = timer_count;
    }
}
function ChangeScore() {
    score.innerHTML = ++score_value;

}
function chnageword() {
    let index = Math.floor(Math.random() * array.length);
    word.innerHTML = array[index].toLocaleUpperCase();
}
function chechvalue() {
    if (timer_count === 0) {
        correct.innerHTML = "Game Over &nbsp;" + "&#128078;"
    }
}

