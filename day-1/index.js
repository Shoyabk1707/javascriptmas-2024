// Get references to DOM elements
const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const shoppingList = document.getElementById('shopping-list');
const listArr = [];

 
let editIndex = null;  

 
function checkDuplicate() {
    const itemText = itemInput.value.trim().replace(/\s+/g, ' ');  

     
    if (editIndex !== null) {
         
        listArr[editIndex] = itemText;
        editIndex = null; 
    } else {
        
        const lowerCaseItem = itemText.toLowerCase();
        if (listArr.some(item => item.toLowerCase() === lowerCaseItem)) {
            alert("This item is already in the list!");
            return;  
        }
        listArr.push(itemText);  
    }

    renderList();  
}
 
function renderList() {
    shoppingList.innerHTML = '';  
    listArr.forEach((gift, index) => {
 
        const listItem = document.createElement('li');
        listItem.textContent = gift;
 
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editItem(index));
 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteItem(index));
 
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);

         
        shoppingList.appendChild(listItem);
    });

    itemInput.value = '';  
}

 
function editItem(index) {
 
    itemInput.value = listArr[index];
     
    editIndex = index;
}
 
function deleteItem(index) {
 
    listArr.splice(index, 1);
    renderList();  
}
 
addItemButton.addEventListener('click', checkDuplicate);
 
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate();
    }
});
