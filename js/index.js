let audio;


document.querySelectorAll('.sound').forEach(button => {
    button.addEventListener('click', function () {
        if (audio)
            audio.pause()
        playSound(button.innerHTML[0]);
    });
});

document.addEventListener('keypress', function (event) {
    if (audio)
        audio.pause()
    playSound(event.key);
});

function playSound(number) {

    switch (number) {
        case '1':
            audio = new Audio('sounds/1-rick.mp3');
            return audio.play();
            break;
        case '2':
            audio = new Audio('sounds/2-gotHim.mp3');
            return audio.play();
            break;
        case '3':
            audio = new Audio('sounds/3-coffin.mp3');
            return audio.play();
            break;
        case '4':
            audio = new Audio('sounds/4-doIt.mp3');
            return audio.play();
            break;
        case '5':
            audio = new Audio('sounds/5-monitor.mp3');
            return audio.play();
            break;
        case '6':
            audio = new Audio('sounds/6-shotsFired.mp3');
            return audio.play();
            break;
        case '7':
            audio = new Audio('sounds/7-cares.mp3');
            return audio.play();
            break;
        case '8':
            audio = new Audio('sounds/8-bruh.mp3');
            return audio.play();
            break;
        case '9':
            audio = new Audio('sounds/9-again.mp3');
            return audio.play();
            break;
    }
};