/* Santas Emoji Hack! */

// The hackedEmojis object with negative emojis and their replacements
const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}

// 1. Function to replace an individual shortcode with the corresponding emoji
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

/* 2. Function to replace all shortcodes in a phrase with their emojis */
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

// Stretch Goal: Replace negative emojis in the text (if any) with the positive ones
// Update the hackedEmojis to include negative emoji values

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
