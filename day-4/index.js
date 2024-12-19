/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from './data.js'

// Some useful elements
const guessInput = document.getElementById('guess-input')
const messageContainer = document.getElementsByClassName('message-container')[0]
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]
const guessForm = document.getElementById('guess-form')  // Get the form element

let currentFilmIndex = -1
let remainingGuesses = 3
let usedFilms = [] // Track used films

// Function to get a random movie from the films array
function getRandomFilm() {
  let randomIndex
  do {
    randomIndex = Math.floor(Math.random() * films.length)
  } while (usedFilms.includes(randomIndex)) // Ensure no film is repeated
  usedFilms.push(randomIndex) // Mark film as used
  return films[randomIndex]
}

// Function to handle the guess submission
function handleGuess(event) {
  event.preventDefault() // Prevent page refresh

  const userGuess = guessInput.value.trim().toLowerCase()
  const correctAnswer = films[currentFilmIndex].title.toLowerCase()

  if (userGuess === correctAnswer) {
    messageContainer.textContent = 'Correct!'

    setTimeout(() => {
      loadNewFilm() // Load new film after 3 seconds
    }, 3000)
  } else {
    remainingGuesses -= 1

    if (remainingGuesses > 0) {
      messageContainer.textContent = `Incorrect! You have ${remainingGuesses} guesses remaining.`
    } else {
      messageContainer.textContent = `The film was ${films[currentFilmIndex].title}!`

      setTimeout(() => {
        loadNewFilm() // Load new film after 3 seconds
      }, 3000)
    }
  }

  guessInput.value = '' // Clear the input field
}

// Function to load a new film
function loadNewFilm() {
  if (usedFilms.length === films.length) {
    messageContainer.textContent = "That's all folks!"
    guessForm.querySelector('button').disabled = true // Disable button when the game is over
  } else {
    remainingGuesses = 3
    const film = getRandomFilm()

    currentFilmIndex = films.indexOf(film) // Get the index of the current film
    emojiCluesContainer.textContent = film.emoji.join(' ') // Display the emoji clues
    messageContainer.textContent = `You have ${remainingGuesses} guesses remaining.` // Reset guesses
  }
}

// Initial call to load the first film
loadNewFilm()

// Event listener for form submission
guessForm.addEventListener('submit', handleGuess)