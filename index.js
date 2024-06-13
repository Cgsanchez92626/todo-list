// Add a todo

//access the button element
console.log(document.getElementById('add-todo'));

const button = document.getElementById('add-todo');
console.log(button);


//add an event listener
function handleAddTodo() {
    console.log('button is clicked!')
};
//add an event listener
button.addEventListener('click', handleAddTodo);
