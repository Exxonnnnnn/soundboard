let audio;

document.querySelectorAll('.sound').forEach(button => {
    button.addEventListener('click', function () {
        if (audio)
            audio.pause();
        playSound(button.id);
    });
});

function playSound(name) {
    audio = new Audio(`../sounds/${name}.mp3`)
    audio.play()
};