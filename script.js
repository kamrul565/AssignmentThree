

let lo = 10, hi = 30;



function getRandomArbitrary(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}

let num = getRandomArbitrary(lo, hi);
console.log(num);

let f = 0;

for(let i = 3; i > 0; i--) {
    let x = prompt(`Enter A Number between ${lo} and ${hi} : (${i} chances remaining)`)

    let val = parseInt(x);

    if(num == x) {
        f = 1;
        break;
    }
    else if(x < num) {
        alert('Correct answer is greater!');
    }
    else {
        alert('Correct answer is smaller!');
    }

}

let p = document.querySelector('#result');

if(f) {
    p.innerHTML = 'You Win!';
    p.style.color = 'green';
}
else {
    p.innerHTML = 'You Lose!';
    p.style.color = 'red';
}

