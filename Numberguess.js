
var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

document.getElementById('btn').addEventListener('click', function () {

    var guess = parseInt(document.getElementById('guessInput').value);
    if (guess < 1 || guess > 100) {
        displayBlink('Please enter a number between 1 and 100.');
        return;
    }

    attempts++;
    if (guess === randomNumber) {
        lock.src="unlocked.jpg";
        display('Congratulations! You have guessed the correct number in ' + attempts + ' attempts.');
        attempts = 0;
    } 

    else if (attempts >= 5) {
        displayBlink('Game Over! You have used all your attempts. The correct number was ' + randomNumber + '.');
        attempts = 0;
    } 

    else if (guess < randomNumber) {
        displayBlink('Number is too low. Try a higher number.');
    }

     else {
        displayBlink('Number is too high. Try a lower number.');
    }
});

function display(msg) {
    var msgElement = document.getElementById('msg');
    msgElement.textContent = msg;
}

function displayBlink(msg) {
    var msgElement = document.getElementById('msg');
    msgElement.textContent = msg;
    msgElement.classList.add('blink');
    setTimeout(() => {
        msgElement.classList.remove('blink');
    }, 1000);
}

