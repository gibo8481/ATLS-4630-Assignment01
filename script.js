/**
 * Resources: MDN JavaScript and the DOM
 */
// 

// to do form, update, and remove list
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// update name in heading
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const heading = document.getElementById('heading');

// process todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
});

// proces name form
nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    updateName();
})

function updateName(){
    const newName = nameInput.value + "'s"; // add apostrophe s to user input
    const currText = heading.textContent; // grab current text from heading
    const updatedText = currText.replace('My', newName); 
    heading.textContent = updatedText;
}


function addTask(){


    // create a "new task" from user input
    const newTask = document.createElement('li');
    newTask.innerHTML = ` <span>${todoInput.value}</span>
            <button class="crossOff">Cross Off</button>
            <button class="delete">Delete</button>
        `;


    // cross off button to show if completed or delete

    /**Originally was going to try to "cross off" the item on the list
     * Could not figure it out
     * So now it just updates the text and the color of the button
     */
    const crossOffbtn = newTask.querySelector('.crossOff');
    crossOffbtn.addEventListener('click', () => {
    crossOffbtn.textContent = "Completed"; // task done yay
    crossOffbtn.style.backgroundColor = '#1E5359'; // change button to greenish
});
    // delete the task from the list
    const deleteBtn = newTask.querySelector('.delete');
    deleteBtn.addEventListener('click', () => {
        newTask.remove();
    })

    list.appendChild(newTask); // add to list
    input.value = ''; // reinitalize input
}



   
