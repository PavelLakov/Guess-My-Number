'use strict';


// Initialize the secret number, score, and highscore variables
let sectetNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Event listener for the 'Check!' button
document.querySelector('.check').addEventListener('click', function () {
    // Get the user's guess
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // Check if there is a guess
    if (!guess) {
        // Display message if there is no number entered
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === sectetNumber) {
        // Display message if guess is correct
        document.querySelector('.message').textContent = 'Correct Number!!!!';

        // Display the correct number
        document.querySelector('.number').textContent = sectetNumber;

        // Change background color and style when the user wins the game
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        // Update highscore if current score is higher
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent=highscore;
        }
    } else if (guess > sectetNumber) {
        // Check if guess is too high
        if (score > 0) {
            // Display message and update score
            document.querySelector('.message').textContent = 'Too high!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // Display message if user lost the game
            document.querySelector('.message').textContent='You lost the game';

            // Change background color when the user loses the game
            document.querySelector('body').style.backgroundColor='#f44336';
        }
    } else if (guess < sectetNumber) {
        // Check if guess is too low
        if(score > 0){
            // Display message and update score
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // Display message if user lost the game
            document.querySelector('.message').textContent='You lost the game';

            // Change background color when the user loses the game
            document.querySelector('body').style.backgroundColor='#f44336';
        }
    }
});

// Event listener for the 'Again!' button
document.querySelector('.again').addEventListener('click',function(){
    // Reset score, secret number, and message
    score=20;
    sectetNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent='Start guessing.....';
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    // Reset background color and number width
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width='15rem'
});




