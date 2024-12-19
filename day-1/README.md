# Day 01 Challenge - Grandpa's Christmas Gift List 🎅 

## Problem Statement 💪

Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day! 🎁

Your task is to complete the `checkDuplicate()` function to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking picture frames"
- "talking picture frames"
- " talking picture frames "

### Your tasks:
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.

### Stretch Goals:
1. Case Sensitivity: Handle cases where capitalization differs. For example: "Cat Hammock" should be flagged as a duplicate of "cat hammock".
Preserve Grandpa’s original capitalization (e.g., if "Cat Hammock" is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words.

2. Additional Features: Add functionality to delete or edit items on the list.

## Solution

### Key Steps Taken:
1. **Handling Duplicates**: 
   - We used the `trim()` method to remove any extra spaces from the beginning and end of the input string.
   - We used the `replace(/\s+/g, ' ')` method to remove extra spaces between words and normalize them to a single space.
   - We implemented case-insensitive comparison to handle duplicates regardless of capitalization.

2. **Preserving Capitalization**: 
   - The solution ensures that Grandpa’s original capitalization is preserved while still checking for duplicate entries.

3. **Adding Delete and Edit Functionality**: 
   - The ability to edit or delete items was added. This allows Grandpa to modify the list, removing duplicates or correcting errors manually.

### JavaScript Code Explanation:

```javascript
const listArr = []; // Array to store gift items

// Function to check for duplicates before adding the item
function checkDuplicate() {
  const itemText = itemInput.value.trim().replace(/\s+/g, ' '); // Clean input text

  // Ensure itemText is not already in the list (case-insensitive)
  if (listArr.some(item => item.toLowerCase() === itemText.toLowerCase())) {
    alert("This item is already in the list.");
  } else {
    listArr.push(itemText); // Add new item to the list
    renderList(); // Re-render the shopping list
  }
}

// Function to render the shopping list
function renderList() {
  shoppingList.innerHTML = '';
  listArr.forEach((gift, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = gift;

    // Create Edit and Delete buttons for each item
    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.onclick = () => editItem(index);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteItem(index);

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    shoppingList.appendChild(listItem);
  });
  itemInput.value = ''; // Clear input field after adding item
}

// Function to delete an item
function deleteItem(index) {
  listArr.splice(index, 1);
  renderList();
}

// Function to edit an item
function editItem(index) {
  itemInput.value = listArr[index];
  deleteItem(index); // Remove item and allow user to edit it
}

// Add event listeners
addItemButton.addEventListener('click', checkDuplicate);
itemInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    checkDuplicate();
  }
});
```

### Key Features:
- **No Duplicate Items**: The list automatically prevents adding duplicates, even if the user accidentally adds the same item with extra spaces or different capitalization.
- **Case Sensitivity Handling**: Grandpa’s original capitalization is preserved.
- **Item Editing and Deletion**: Users can edit or delete any item from the list as needed.
- **Responsive Design**: The application is fully responsive, making it suitable for various screen sizes and devices.

## Live Demo 🌐

You can try the app here: [Live Demo](https://javascriptmas-day-1.netlify.app/)

---

Thank you for checking out Grandpa's Christmas gift list challenge! 🎅🎁 Happy Holidays! 🎄
