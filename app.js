const hoursEl = document.getElementById('days');
const daysEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

//JEE1
const JEE1 = '29 Jun 2022';
function countdown() {
    const JEE1Date = new Date(JEE1);
    const currentDate = new Date();

    const totalSeconds = (JEE1Date - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    hoursEl.innerHTML = days;
    daysEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
// function formatTime(time) {
//     return time < 0 ? (`0`) : time;
// }
countdown();


//JEE2

const hoursj2El = document.getElementById('daysj2');
const daysj2El = document.getElementById('hoursj2');
const minutesj2El = document.getElementById('minutesj2');
const secondsj2El = document.getElementById('secondsj2');


const JEE2 = '21 Jul 2022';

function countdownj2() {
    const JEE2Date = new Date(JEE2);
    const currentDate = new Date();

    const totalSecondsj2 = (JEE2Date - currentDate) / 1000;
    const daysj2 = Math.floor(totalSecondsj2 / 3600 / 24);
    const hoursj2 = Math.floor(totalSecondsj2 / 3600) % 24;
    const minutesj2 = Math.floor(totalSecondsj2 / 60) % 60;
    const secondsj2 = Math.floor(totalSecondsj2) % 60

    hoursj2El.innerHTML = daysj2;
    daysj2El.innerHTML = formatTime(hoursj2);
    minutesj2El.innerHTML = formatTime(minutesj2);
    secondsj2El.innerHTML = formatTime(secondsj2);
}
countdownj2();

//SRM1
const hourss1El = document.getElementById('dayss1');
const dayss1El = document.getElementById('hourss1');
const minutess1El = document.getElementById('minutess1');
const secondss1El = document.getElementById('secondss1');


const SRM1 = '23 Apr 2022';

function countdowns1() {
    const SRM1Date = new Date(SRM1);
    const currentDate = new Date();

    const totalSecondss1 = (SRM1Date - currentDate) / 1000;
    const dayss1 = Math.floor(totalSecondss1 / 3600 / 24);
    const hourss1 = Math.floor(totalSecondss1 / 3600) % 24;
    const minutess1 = Math.floor(totalSecondss1 / 60) % 60;
    const secondss1 = Math.floor(totalSecondss1) % 60

    hourss1El.innerHTML = dayss1;
    dayss1El.innerHTML = formatTime(hourss1);
    minutess1El.innerHTML = formatTime(minutess1);
    secondss1El.innerHTML = formatTime(secondss1);
}
countdowns1();


//SRM2
const hourss2El = document.getElementById('dayss2');
const dayss2El = document.getElementById('hourss2');
const minutess2El = document.getElementById('minutess2');
const secondss2El = document.getElementById('secondss2');


const SRM2 = '25 Jun 2022';

function countdowns2() {
    const SRM2Date = new Date(SRM2);
    const currentDate = new Date();

    const totalSecondss2 = (SRM2Date - currentDate) / 1000;
    const dayss2 = Math.floor(totalSecondss2 / 3600 / 24);
    const hourss2 = Math.floor(totalSecondss2 / 3600) % 24;
    const minutess2 = Math.floor(totalSecondss2 / 60) % 60;
    const secondss2 = Math.floor(totalSecondss2) % 60

    hourss2El.innerHTML = dayss2;
    dayss2El.innerHTML = formatTime(hourss2);
    minutess2El.innerHTML = formatTime(minutess2);
    secondss2El.innerHTML = formatTime(secondss2);
}
countdowns2();


//VIT
const hoursvitEl = document.getElementById('daysvit');
const daysvitEl = document.getElementById('hoursvit');
const minutesvitEl = document.getElementById('minutesvit');
const secondsvitEl = document.getElementById('secondsvit');


const VIT = '2 Jul 2022';

function countdownvit() {
    const vitDate = new Date(VIT);
    const currentDate = new Date();

    const totalSecondsvit = (vitDate - currentDate) / 1000;
    const daysvit = Math.floor(totalSecondsvit / 3600 / 24);
    const hoursvit = Math.floor(totalSecondsvit / 3600) % 24;
    const minutesvit = Math.floor(totalSecondsvit / 60) % 60;
    const secondsvit = Math.floor(totalSecondsvit) % 60

    hoursvitEl.innerHTML = daysvit;
    daysvitEl.innerHTML = formatTime(hoursvit);
    minutesvitEl.innerHTML = formatTime(minutesvit);
    secondsvitEl.innerHTML = formatTime(secondsvit);
}
countdownvit();

//MHCET
const hoursm1El = document.getElementById('daysm1');
const daysm1El = document.getElementById('hoursm1');
const minutesm1El = document.getElementById('minutesm1');
const secondsm1El = document.getElementById('secondsm1');


const MHCET = '05 Aug 2022';

function countdownm1() {
    const MHCETDate = new Date(MHCET);
    const currentDate = new Date();

    const totalSecondsm1 = (MHCETDate - currentDate) / 1000;
    const daysm1 = Math.floor(totalSecondsm1 / 3600 / 24);
    const hoursm1 = Math.floor(totalSecondsm1 / 3600) % 24;
    const minutesm1 = Math.floor(totalSecondsm1 / 60) % 60;
    const secondsm1 = Math.floor(totalSecondsm1) % 60

    hoursm1El.innerHTML = daysm1;
    daysm1El.innerHTML = formatTime(hoursm1);
    minutesm1El.innerHTML = formatTime(minutesm1);
    secondsm1El.innerHTML = formatTime(secondsm1);
}
countdownm1();

//CHEMISTRY
const hoursc1El = document.getElementById('daysc1');
const daysc1El = document.getElementById('hoursc1');
const minutesc1El = document.getElementById('minutesc1');
const secondsc1El = document.getElementById('secondsc1');


const CHEMISTRY = '7 May 2022';

function countdownc1() {
    const CHEMISTRYDate = new Date(CHEMISTRY);
    const currentDate = new Date();

    const totalSecondsc1 = (CHEMISTRYDate - currentDate) / 1000;
    const daysc1 = Math.floor(totalSecondsc1 / 3600 / 24);
    const hoursc1 = Math.floor(totalSecondsc1 / 3600) % 24;
    const minutesc1 = Math.floor(totalSecondsc1 / 60) % 60;
    const secondsc1 = Math.floor(totalSecondsc1) % 60

    hoursc1El.innerHTML = daysc1;
    daysc1El.innerHTML = formatTime(hoursc1);
    minutesc1El.innerHTML = formatTime(minutesc1);
    secondsc1El.innerHTML = formatTime(secondsc1);
}
countdownc1();


//ENGLISH
const hourse1El = document.getElementById('dayse1');
const dayse1El = document.getElementById('hourse1');
const minutese1El = document.getElementById('minutese1');
const secondse1El = document.getElementById('secondse1');


const ENGLISH = '14 May 2022';

function countdowne1() {
    const ENGLISHDate = new Date(ENGLISH);
    const currentDate = new Date();

    const totalSecondse1 = (ENGLISHDate - currentDate) / 1000;
    const dayse1 = Math.floor(totalSecondse1 / 3600 / 24);
    const hourse1 = Math.floor(totalSecondse1 / 3600) % 24;
    const minutese1 = Math.floor(totalSecondse1 / 60) % 60;
    const secondse1 = Math.floor(totalSecondse1) % 60

    hourse1El.innerHTML = dayse1;
    dayse1El.innerHTML = formatTime(hourse1);
    minutese1El.innerHTML = formatTime(minutese1);
    secondse1El.innerHTML = formatTime(secondse1);
}
countdowne1();



//PHYSICS
const hoursp1El = document.getElementById('daysp1');
const daysp1El = document.getElementById('hoursp1');
const minutesp1El = document.getElementById('minutesp1');
const secondsp1El = document.getElementById('secondsp1');


const PHYSICS = '20 May 2022';

function countdownp1() {
    const PHYSICSDate = new Date(PHYSICS);
    const currentDate = new Date();

    const totalSecondsp1 = (PHYSICSDate - currentDate) / 1000;
    const daysp1 = Math.floor(totalSecondsp1 / 3600 / 24);
    const hoursp1 = Math.floor(totalSecondsp1 / 3600) % 24;
    const minutesp1 = Math.floor(totalSecondsp1 / 60) % 60;
    const secondsp1 = Math.floor(totalSecondsp1) % 60

    hoursp1El.innerHTML = daysp1;
    daysp1El.innerHTML = formatTime(hoursp1);
    minutesp1El.innerHTML = formatTime(minutesp1);
    secondsp1El.innerHTML = formatTime(secondsp1);
}
countdownp1();



//MATHS
const hoursmt1El = document.getElementById('daysmt1');
const daysmt1El = document.getElementById('hoursmt1');
const minutesmt1El = document.getElementById('minutesmt1');
const secondsmt1El = document.getElementById('secondsmt1');


const MATHS = '7 Jun 2022';

function countdownmt1() {
    const MATHSDate = new Date(MATHS);
    const currentDate = new Date();

    const totalSecondsmt1 = (MATHSDate - currentDate) / 1000;
    const daysmt1 = Math.floor(totalSecondsmt1 / 3600 / 24);
    const hoursmt1 = Math.floor(totalSecondsmt1 / 3600) % 24;
    const minutesmt1 = Math.floor(totalSecondsmt1 / 60) % 60;
    const secondsmt1 = Math.floor(totalSecondsmt1) % 60

    hoursmt1El.innerHTML = daysmt1;
    daysmt1El.innerHTML = formatTime(hoursmt1);
    minutesmt1El.innerHTML = formatTime(minutesmt1);
    secondsmt1El.innerHTML = formatTime(secondsmt1);
}
countdownmt1();


//IP
const hoursip1El = document.getElementById('daysip1');
const daysip1El = document.getElementById('hoursip1');
const minutesip1El = document.getElementById('minutesip1');
const secondsip1El = document.getElementById('secondsip1');


const IP = '13 Jun 2022';

function countdownip1() {
    const IPDate = new Date(IP);
    const currentDate = new Date();

    const totalSecondsip1 = (IPDate - currentDate) / 1000;
    const daysip1 = Math.floor(totalSecondsip1 / 3600 / 24);
    const hoursip1 = Math.floor(totalSecondsip1 / 3600) % 24;
    const minutesip1 = Math.floor(totalSecondsip1 / 60) % 60;
    const secondsip1 = Math.floor(totalSecondsip1) % 60

    hoursip1El.innerHTML = daysip1;
    daysip1El.innerHTML = formatTime(hoursip1);
    minutesip1El.innerHTML = formatTime(minutesip1);
    secondsip1El.innerHTML = formatTime(secondsip1);
}
countdownip1();


function formatTime(time) {
    return time < 0 ? `0` : time;
}



setInterval(countdown, 1000);
setInterval(countdownj2, 1000);
setInterval(countdowns1, 1000);
setInterval(countdowns2, 1000);
setInterval(countdownm1, 1000);
setInterval(countdownc1, 1000);
setInterval(countdowne1, 1000);
setInterval(countdownp1, 1000);
setInterval(countdownmt1, 1000);
setInterval(countdownip1, 1000);
setInterval(countdownvit, 1000);

// CODE FOR PULL OUT

const btn = document.getElementById('btn');
const nav = document.getElementById('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle("active");
    btn.classList.toggle("active");
});


// Toggle Which exams are visible

a
b
c
d
e
f
g
h
i
j
k

var a = 1;
var b = 1;
var c = 1;
var d = 1;
var e = 1;
var f = 1;
var g = 1;
var h = 1;
var i = 1;
var j = 1;
var k = 1;

function MyFunc1() {
    if (a == 1) {
        const vis = document.getElementById('jee1');
        vis.style.display = 'none';
        return a = 0;
    }
    else {
        const vis = document.getElementById('jee1');
        vis.style.display = 'inline';
        return a = 1;
    }

};
function MyFunc2() {
    if (b == 1) {
        const vis = document.getElementById('srm1');
        vis.style.display = 'none';
        return b = 0;
    }
    else {
        const vis = document.getElementById('srm1');
        vis.style.display = 'inline';
        return b = 1;
    }

};
function MyFunc3() {
    if (c == 1) {
        const vis = document.getElementById('chemistry');
        vis.style.display = 'none';
        return c = 0;
    }
    else {
        const vis = document.getElementById('chemistry');
        vis.style.display = 'inline';
        return c = 1;
    }

};
function MyFunc4() {
    if (d == 1) {
        const vis = document.getElementById('english');
        vis.style.display = 'none';
        return d = 0;
    }
    else {
        const vis = document.getElementById('english');
        vis.style.display = 'inline';
        return d = 1;
    }

};
function MyFunc5() {
    if (e == 1) {
        const vis = document.getElementById('mhcet');
        vis.style.display = 'none';
        return e = 0;
    }
    else {
        const vis = document.getElementById('mhcet');
        vis.style.display = 'inline';
        return e = 1;
    }

};
function MyFunc6() {
    if (f == 1) {
        const vis = document.getElementById('physics');
        vis.style.display = 'none';
        return f = 0;
    }
    else {
        const vis = document.getElementById('physics');
        vis.style.display = 'inline';
        return f = 1;
    }

};
function MyFunc7() {
    if (g == 1) {
        const vis = document.getElementById('jee2');
        vis.style.display = 'none';
        return g = 0;
    }
    else {
        const vis = document.getElementById('jee2');
        vis.style.display = 'inline';
        return g = 1;
    }

};
function MyFunc8() {
    if (h == 1) {
        const vis = document.getElementById('maths');
        vis.style.display = 'none';
        return h = 0;
    }
    else {
        const vis = document.getElementById('maths');
        vis.style.display = 'inline';
        return h = 1;
    }

};
function MyFunc9() {
    if (i == 1) {
        const vis = document.getElementById('IP');
        vis.style.display = 'none';
        return i = 0;
    }
    else {
        const vis = document.getElementById('IP');
        vis.style.display = 'inline';
        return i = 1;
    }

};
function MyFunc10() {
    if (j == 1) {
        const vis = document.getElementById('SRM2');
        vis.style.display = 'none';
        return j = 0;
    }
    else {
        const vis = document.getElementById('SRM2');
        vis.style.display = 'inline';
        return j = 1;
    }

};

function MyFunc11() {
    if (k == 1) {
        const vis = document.getElementById('vit');
        vis.style.display = 'none';
        return k = 0;
    }
    else {
        const vis = document.getElementById('vit');
        vis.style.display = 'inline';
        return k = 1;
    }

};
