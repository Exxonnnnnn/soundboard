let audio;


document.querySelectorAll('.sound').forEach(button => {
    button.addEventListener('click', function () {
        if (audio)
            audio.pause()
        playSound(button.id);
        console.log(button.id)
    });
});

document.addEventListener('keypress', function (event) {
    if (audio)
        audio.pause()
    playSound(event.key);
});

function playSound(number) {

    switch (number) {
        case 'rick':
            audio = new Audio('sounds/rick.mp3');
            return audio.play();
            break;
        case 'got-him':
            audio = new Audio('sounds/got-him.mp3');
            return audio.play();
            break;
        case 'coffin':
            audio = new Audio('sounds/coffin.mp3');
            return audio.play();
            break;
        case 'do-it':
            audio = new Audio('sounds/do-it.mp3');
            return audio.play();
            break;
        case 'monitor':
            audio = new Audio('sounds/monitor.mp3');
            return audio.play();
            break;
        case 'shots-fired':
            audio = new Audio('sounds/shots-fired.mp3');
            return audio.play();
            break;
        case 'no-one-cares':
            audio = new Audio('sounds/no-one-cares.mp3');
            return audio.play();
            break;
        case 'bruh':
            audio = new Audio('sounds/bruh.mp3');
            return audio.play();
            break;
        case 'd-join':
            audio = new Audio('sounds/d-join.mp3');
            return audio.play();
            break;
        case 'd-leave':
            audio = new Audio('sounds/d-leave.mp3');
            return audio.play();
            break;
        case 'd-ping':
            audio = new Audio('sounds/d-ping.mp3');
            return audio.play();
            break;
        case 'nick-cock':
            audio = new Audio('sounds/nice-cock.mp3');
            return audio.play();
            break;
        case 'pornhub-intro':
            audio = new Audio('sounds/pornhub-intro.mp3');
            return audio.play();
            break;
        case 'shut-up-1':
            audio = new Audio('sounds/shut-up-1.mp3');
            return audio.play();
            break;
        case 'shut-up-2':
            audio = new Audio('sounds/shut-up-2.mp3');
            return audio.play();
            break;
        case 'here-we-go-again':
            audio = new Audio('sounds/here-we-go-again.mp3');
            return audio.play();
            break;
        case 'wasted':
            audio = new Audio('sounds/wasted.mp3');
            return audio.play();
            break;
        case 'your-cut':
            audio = new Audio('sounds/your-cut.mp3');
            return audio.play();
            break;
    }
};