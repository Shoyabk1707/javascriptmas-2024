# Day 03 - Santa's Emoji Hack 👍

## Challenge

### Santa's Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people use negative emoji shortcodes, he wants positive emojis to appear instead. Specifically, negative emojis such as 😠, 👎, and 🤦‍♂️ should be replaced with positive emojis like 🎁, 👏, and 🎅.

### Objective

Write a function that checks if a lowercase word starts and ends with a colon (`:`). If it does, check if it exists in the `hackedEmojis` object and replace it with the corresponding emoji. If not, return the original word.

Additionally, extend the functionality to replace any negative emojis added directly to the text with their positive counterparts.

### Example Input and Output

**Input:**  
`:cry:`

**Output:**  
😄

**Input:**  
"Just read your article :thumbsdown:"

**Output:**  
"Just read your article 👏"

---

## Solution

### 1. Function to Replace Shortcodes with Emojis

```javascript
// The hackedEmojis object with negative emojis and their replacements
const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}

// Function to replace an individual shortcode with the corresponding emoji
function emojifyWord(word) {
    // Check if the word starts and ends with a colon
    if (word.startsWith(":") && word.endsWith(":")) {
        // Extract the shortcode (remove the colons)
        const shortcode = word.slice(1, -1); 

        // Check if the shortcode is in the hackedEmojis object
        if (hackedEmojis[shortcode]) {
            return hackedEmojis[shortcode]; // Return the corresponding emoji
        }
    }
    
    return word; // If no match, return the original word
}

// Example usage of emojifyWord:
console.log(emojifyWord(":angry:")); // 🎁
```

### 2. Function to Replace Shortcodes in a Phrase

```javascript
// Function to replace all shortcodes in a phrase with their emojis
function emojifyPhrase(phrase) {
    // Split the phrase into words
    const words = phrase.split(" ");

    // Apply emojifyWord to each word
    const emojifiedWords = words.map(emojifyWord);

    // Join the modified words back into a single phrase
    return emojifiedWords.join(" ");
}

// Example usage of emojifyPhrase:
console.log(emojifyPhrase("Just read your article :thumbsdown:")); // Just read your article 👏
console.log(emojifyPhrase("Those shoes :puke:")); // Those shoes 🤩
```

### Stretch Goal: Replacing Direct Emojis

Extend the functionality to replace both shortcodes and emojis that are directly used in the text.

```javascript
// Enhanced emojifyWord function that handles both shortcode and direct emojis
function enhancedEmojifyWord(word) {
    const negativeEmojis = {
        "😠": "🎁",
        "👎": "👏",
        "🤦‍♂️": "🎅",
        "😭": "‍😄",
        "🤮": "🤩"
    };

    // First, check if it's a shortcode (like :angry:)
    if (word.startsWith(":") && word.endsWith(":")) {
        const shortcode = word.slice(1, -1);
        if (hackedEmojis[shortcode]) {
            return hackedEmojis[shortcode];
        }
    }
    
    // Then, check if it's a negative emoji
    if (negativeEmojis[word]) {
        return negativeEmojis[word];
    }

    // Return the word unchanged if no match
    return word;
}

// Enhanced emojifyPhrase that also checks for direct emoji replacements
function enhancedEmojifyPhrase(phrase) {
    const words = phrase.split(" ");
    const emojifiedWords = words.map(enhancedEmojifyWord);
    return emojifiedWords.join(" ");
}

// Example usage with direct emojis and shortcodes:
console.log(enhancedEmojifyPhrase("That was :angry:! :thumbsdown:")); // That was 🎁! 👏
console.log(enhancedEmojifyPhrase("She was crying :cry: and puking :puke:")); // She was crying ‍😄 and puking 🤩
```

### Example

**Input:**  
"That was :angry:! :thumbsdown:"

**Output:**  
"That was 🎁! 👏"

**Input:**  
"She was crying :cry: and puking :puke:"

**Output:**  
"She was crying ‍😄 and puking 🤩"

---

### Resources

- 📚 [`startsWith()` by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
- 📚 [`in` by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
- 📚 [`split()` by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
