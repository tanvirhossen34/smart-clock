function updateClock() {
    const now = new Date();

    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    //number add
    const clock = document.querySelector('.clock');
    const radius = 140;

    for (let i = 1; i <= 12; i++) {
        const angle = (i * 30) * (Math.PI / 180);
        const x = radius * Math.sin(angle);
        const y = -radius * Math.cos(angle);

        const numberElement = document.createElement('div');
        numberElement.className = 'number';

        //12, 3, 6, 9 sudu number thakbe r baki gulo dash hoiye jabe
        if ([3, 6, 9, 12].includes(i)) {
            numberElement.textContent = i;
            numberElement.classList.add("main-number");
        }else{
            numberElement.textContent = " ";
            numberElement.classList.add("dot-mark");
        }
        
        numberElement.style.left = `calc(50% + ${x}px)`;
        numberElement.style.top = `calc(50% + ${y}px)`;
        clock.appendChild(numberElement);

    }

    document.getElementById('second').style.transform = `rotate(${second * 6}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minute * 6}deg)`;
    document.getElementById('hour').style.transform = `rotate(${(hour % 12) *30 + minute / 2}deg)`;


    //bangla
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').textContent = dateString;


    
}

setInterval(updateClock, 1000);
updateClock();