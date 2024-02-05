/**
 * The file where everything comes together
 */
import { addTask, getAllTodoes } from "./scripts/todoList.js";
import { createNewTask } from "./scripts/createTodoElement.js";

// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?

// Read user input
const userInput = document.querySelector("#input-box");
const addButton = document.querySelector("#add-task-btn");
const deleteButton = document.querySelector(".deleteBtn");

addButton.addEventListener("click", () => {
  // 1. Read text input
  console.log("Button clicked");
  const title = userInput.value;

  // 2. Validate input
  if (title === "") {
    // If the input is empty return
    alert("Please write something.");
    console.log("You should write something.");
  }

  // 3. Create new todo
  else addTask(title);

  // 4. Update the DOM
  updateDisplay();

  // 5. Clear the input field
  userInput.value = "";
});

// Updating the DOM
const listContainer = document.querySelector("#display-task");

/**
 * A function for updating the DOM to reflect tasks - this function is used in addButton.addEventListener
 */
function updateDisplay() {
  // Get the updated list of all todoes
  const allTodoes = getAllTodoes();

  // Clear out the previous elements
  listContainer.innerHTML = "";

  // Go trough the list of all todoes and
  for (const data of allTodoes) {
    // Create a new HTML element
    const newElement = createNewTask(data);
    // const deletedElement = deleteTask(data);
    // Insert the new element into the DOM
    listContainer.appendChild(newElement);

    // Add event delegation for delete buttons
    listContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("deleteBtn")) {
        console.log("Delete button clicked");
        event.target.closest("li").remove(); // Remove the closest parent <li> element
        updateDisplay();
      }
    });
  }
}
