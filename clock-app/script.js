
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hour = date.getHours();

    const secDegrees = ( sec / 60 ) * 360 + 90;
    const minDegrees = ( min / 60 ) * 360 + 90;
    const hourDegrees = (hour / 12) * 360 + 90; 
    
    secondHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    [secondHand, minHand, hourHand].forEach(el => el.style.transition = (sec === 0) ? 'none' : null );
}

setInterval(
    setDate,
    1000
)