# Day 04 - Christmas Movie Emoji Quiz 🎬

## Challenge

### Christmas Movie Emoji Quiz 🎅🍿

Get ready for a fun holiday challenge! 🎄 In this challenge, you'll create a Christmas Movie Emoji Quiz game. Your task is to build an app that gives players a set of emoji clues representing a Christmas movie, and they must guess the correct movie.

The app will:

1. Present the player with a random set of emojis from a list of Christmas movies.
2. Allow the player to input their guess.
3. Provide feedback on whether their guess is correct or incorrect.
4. Give the player 3 attempts to guess the movie.
5. Display the correct movie if the player fails to guess after 3 attempts.
6. Automatically load the next movie after a brief pause.
7. When all movies have been guessed, the app should display “That’s all folks!”

---

## Solution

### HTML Structure

You'll need the following HTML structure:

```html
<div id="emoji-clues-container"></div>
<form id="guess-form">
    <input type="text" id="guess-input" name="guess-input" placeholder="Enter your guess">
    <button type="submit">Submit</button>
</form>
<div id="message-container"></div>
```

### JavaScript Code

```javascript
const guessForm = document.getElementById('guess-form')
const messageContainer = document.getElementById('message-container')
const emojiCluesContainer = document.getElementById('emoji-clues-container')
const submitBtn = document.querySelector('button')

let currentTitle = ''
let attempts = 3
const copyFilms = [...films]  // Array containing film objects with emoji and titles

// Function to render random emoji clues from the films array
function renderRandomEmoji() {
    if (copyFilms.length === 0) {
        emojiCluesContainer.textContent = `That's all folks!`
        guessForm.disabled = true
        return
    }

    const randomIndex = Math.floor(Math.random() * copyFilms.length)
    emojiCluesContainer.textContent = copyFilms[randomIndex].emoji.join(" ")
    emojiCluesContainer.setAttribute('ariaLabel', `${copyFilms[randomIndex].ariaLabel}`)
    currentTitle = copyFilms[randomIndex].title.toLowerCase()
    copyFilms.splice(randomIndex, 1)  // Remove the selected film from the array
}

// Function to get the user’s guess
function getUserGuess(e) {
    e.preventDefault()
    const formData = new FormData(guessForm)
    const userGuess = formData.get("guess-input").trim().replace(/\s+/g, " ").toLowerCase()
    return userGuess
}

// Function to compare the user’s guess with the correct movie title
function comparison(filmTitle, userGuess) {
    if (filmTitle === userGuess) {
        messageContainer.textContent = `Correct! ✅`
        submitBtn.disabled = true
        attempts = 3
        setTimeout(() => {
            renderRandomEmoji()
            messageContainer.textContent = `You have ${attempts} guesses remaining.`
            submitBtn.disabled = false
        }, 3000)
        guessForm.reset()
    } else {
        attempts--
        messageContainer.textContent = `Incorrect! ❌`
        submitBtn.disabled = true

        setTimeout(() => {
            if (attempts > 0) {
                messageContainer.textContent = `You have ${attempts} guesses remaining.`
                submitBtn.disabled = false
            } else {
                attempts = 3
                messageContainer.textContent = `The film was ${currentTitle.toUpperCase()}!`
                setTimeout(() => {
                    renderRandomEmoji()
                    messageContainer.textContent = `You have ${attempts} guesses remaining.`
                    submitBtn.disabled = false
                }, 3000)
            }
        }, 1500)

        guessForm.reset()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderRandomEmoji()
})

guessForm.addEventListener("submit", (e) => {
    const userGuess = getUserGuess(e)
    comparison(currentTitle, userGuess)
})
```

---

## Breakdown of the Game Flow

1. **Displaying Random Emoji Clues:**
   - Each movie has associated emoji clues. The game randomly selects an emoji set from the `films` array.
   - The emoji clues are displayed in the `emojiCluesContainer`, and the correct movie title is stored in the `currentTitle` variable (converted to lowercase for easy comparison).

2. **User Guess:**
   - Players can type their guess in the input field. The game uses the `getUserGuess` function to retrieve the user's input, trims extra spaces, and converts it to lowercase.

3. **Comparison and Feedback:**
   - The `comparison` function checks whether the user's guess matches the correct movie title.
   - If correct, the game displays a "Correct!" message, resets the attempts, and after a 3-second pause, shows a new set of emoji clues.
   - If incorrect, the game displays an "Incorrect!" message and decreases the attempts. After all attempts are used up, it reveals the correct movie and moves to the next question after a short pause.

4. **Game End:**
   - Once all movies in the `films` array have been used, the game displays "That's all folks!" and disables the form.

---

### Example Data Structure for Films

```javascript
const films = [
    { title: "Die Hard", emoji: ["🌇", "💣", "👮", "✈️", "🔫"], ariaLabel: "Die Hard" },
    { title: "Home Alone", emoji: ["🏠", "👦", "🧑‍🦳", "🎁"], ariaLabel: "Home Alone" },
    { title: "The Polar Express", emoji: ["🚂", "🎅", "❄️", "🛷"], ariaLabel: "The Polar Express" },
    // Add more films here
]
```

---

### Stretch Goals

1. **AI-Enhanced Answer Checking:**  
   Implement AI or fuzzy string matching to allow for answers that are close but not an exact match (e.g., "Polar Express" vs "The Polar Express").

2. **Improved UX:**
   - Disable the form/button when the game is over or while waiting for the next question.
   - Add more interactive elements or animations to make the quiz more engaging.

---

### Resources

- 📚 [`Array.prototype.splice()` by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- 📚 [`String.prototype.toLowerCase()` by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- 📚 [`setTimeout()` by MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

 