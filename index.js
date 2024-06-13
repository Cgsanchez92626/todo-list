// Add a todo

//access the button element
// console.log(document.getElementById('add-todo'));

const button = document.getElementById('add-todo');
console.log(button);


//function to run when the button is clicked
function handleAddTodo() {
     
    // create list item to go into my unordered list
    const  ul = document.querySelector('ul');
    console.log(ul);
    const li = document.createElement('li');
    // console.log('created list iem',li);

    //access the input element and 
    const input = document.querySelector('input');
   // Check if input value is empty
   if (input.value.trim() === '') {
    alert('Please enter a todo item.');
    return; // Stop execution if input is empty
   }
    console.log(input.value);
    // set the input text to my list item text
    li.textContent = input.value;
    // append my list item to my ul (as a child element)
    ul.appendChild(li);
    // console.log('button is clicked!')
    // Clear input field after adding todo
    input.value = '';
};
//add an event listener
button.addEventListener('click', handleAddTodo);
