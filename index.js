// Add a todo

//access the button element
// console.log(document.getElementById('add-todo'));

const button = document.getElementById('add-todo');
// console.log(button);


// function to run when the button is clicked
function handleAddTodo() {  
    
    //access the input element and 
    const input = document.getElementById('todo-input');
   // const input = document.querySelector('input');
   // Check if input value is empty
   if (input.value.trim() === '') {
    alert('Please enter a todo item.');
    return; // Stop execution if input is empty
   }
    // console.log(input.value);
    // create list item to go into my unordered list
    const ul = document.getElementById('todo-list');
    const li = document.createElement('li');
    // console.log(ul);
    // console.log('created list iem',li);

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
    // Toggle class for strikethrough effect when checkbox is checked
       if (checkbox.checked) {
           li.classList.add('completed');
       } else {
           li.classList.remove('completed');
       }
   });
   // Set the input text to my list item text
   const textSpan = document.createElement('span');
   textSpan.textContent = input.value;
    // Append checkbox and text span to the list item
    li.appendChild(checkbox);
    li.appendChild(textSpan);

    // append my list item to my ul (as a child element)
    ul.appendChild(li);
    
    // console.log('button is clicked!')
    // Clear input field after adding todo
    input.value = '';
}
 
//add an event listener
button.addEventListener('click', handleAddTodo);
