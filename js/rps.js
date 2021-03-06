let audio;

const computerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            return 'rock';
            break;
    };
};

let content = document.querySelector('h1')

function playRPS(option) {
    const user = option;
    const computer = computerChoice();

    if (user === computer) {
        content.textContent = 'You tied!';

        return setTimeout(() => {
            content.textContent = 'Please select either rock, paper or scissors!';
        });
    }

    if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        audio = new Audio("../sounds/won.mp3");
        audio.play();
        content.textContent = 'Congrats, you won!';

        return setTimeout(() => {
            content.textContent = 'Please select either rock, paper or scissors!'
        }, 5000);

    } else {
        audio = new Audio("../sounds/lost.mp3");
        audio.play();
        content.textContent = 'Nice try, you lost!';

        return setTimeout(() => {
            content.textContent = 'Please select either rock, paper or scissors!'
        }, 5000);
    }
}

document.querySelectorAll(".myButton").forEach((button) => {
    button.addEventListener("click", function () {
        if (audio) audio.pause();

        playRPS(button.id);
    });
});
