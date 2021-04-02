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
    audio = new Audio(`sounds/${number}.mp3`)
    audio.play()
};