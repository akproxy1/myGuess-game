// const randomNumber = Math.floor(Math.random() * 2) + 1
//     console.log('Random Number', randomNumber)
// const myGuess = Number(prompt('Enter a number between 1 and 2..'))
let range = 2;
const randomNumber = Math.floor(Math.random() * range) + 1;
let userName = prompt("Enter a username");

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//set cookie username
setCookie("username", userName, 7);

let score = 0;
let stage = 1;

function checkGuess(range) {
  console.log("Random Number", randomNumber);

  const myGuess = Number(prompt(`Enter a number between 1 and ${range} ..`));

  if (myGuess === randomNumber) {
    score += 10;
    stage = stage + 1;
    // setting cookies of the score
    setCookie("score", score, 7);

    //console.log('You got it right' );
    alert(`You are correct. You scored is ${score}. Press Enter 
 for Stage ${stage}`);
    checkGuess(range + 1);
  } else if (myGuess > randomNumber) {
    alert(
      `Your guess is ${myGuess} which is greater than the correct number ${randomNumber} `
    );
  } else if (myGuess < randomNumber) {
    alert(
      `Your guess is ${myGuess} which is less than the correct number ${randomNumber} `
    );
  } else {
    alert("Your guess is wrong, Game over");
  }
}
checkGuess(range);
