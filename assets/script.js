// ID Selectors
const formContainer = document.querySelector(".container-right");
const formTitle = document.querySelector("#form-title");
const formDescription = document.querySelector("#form-description");
const formDueDate = document.querySelector("#form-duedate");
const formPriority = document.querySelector("#form-priority");
const submit = document.getElementById("submit");

let taskCards = [];

// Function to push new user input to localStorage
function addArticle(event) {
  event.preventDefault();

  if (!formTitle.value || !formDescription.value || !formDueDate.value) {
    alert("Please complete the form.");
    return;
  }

  const newCard = {
    Title: formTitle.value,
    Description: formDescription.value,
    "Due Date": formDueDate.value,
    Priority: formPriority.value,
  };

  taskCards.push(newCard);
  formTitle.value = "";
  formDescription.value = "";
  formDueDate.value = "";
  formPriority.value = "";

  storeTaskCards();
  renderTaskCards();
}

// Function to render localStorage into articles
function renderTaskCards() {
  formContainer.innerHTML = "";

  for (let i = 0; i < taskCards.length; i++) {
    const taskCard = taskCards[i];

    const article = document.createElement("article");
    const title = document.createElement("h2");
    const description = document.createElement("h3");
    const duedate = document.createElement("p");
    const priority = document.createElement("button");
    const priorityDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");

    deleteBtn.setAttribute("class", "delete is-pulled-right");
    priorityDiv.setAttribute("class", "priority-div");
    priority.setAttribute("class", "button is-small");
    article.setAttribute("data-index", i);

    title.textContent = taskCard.Title;
    description.textContent = taskCard.Description;
    duedate.textContent = "Due: " + taskCard["Due Date"];
    priority.textContent = "Priority: " + taskCard.Priority;

    // Adds class to priority button based on user selection
    switch (taskCard.Priority) {
      case "HIGH":
        priority.classList.add("is-danger");
        break;
      case "MEDIUM":
        priority.classList.add("is-warning");
        break;
      case "LOW":
        priority.classList.add("is-success");
        break;
      default:
        break;
    }

    article.appendChild(deleteBtn);
    article.appendChild(title);
    priorityDiv.appendChild(priority);
    article.appendChild(priorityDiv);
    article.appendChild(description);
    article.appendChild(duedate);
    formContainer.appendChild(article);
  }
}

// Function to render stored user data
function init() {
  const storedTaskCards = JSON.parse(localStorage.getItem("taskCards"));
  if (storedTaskCards !== null) {
    taskCards = storedTaskCards;
  }

  renderTaskCards();
}

// Function to store user data as JSON in localStorage
function storeTaskCards() {
  localStorage.setItem("taskCards", JSON.stringify(taskCards));
}

// Submit button logic
submit.addEventListener("click", addArticle);

// Delete article logic
formContainer.addEventListener("click", function (event) {
  const element = event.target;

  if (element.matches(".delete") === true) {
    const index = element.parentElement.getAttribute("data-index");
    taskCards.splice(index, 1);

    storeTaskCards();
    renderTaskCards();
  }
});

// Clear all article logic
const clear = document.getElementById("clearBtn");
clear.addEventListener("click", clearAll);

function clearAll() {
  if (taskCards.length > 0) {
    taskCards = [];

    storeTaskCards();
    renderTaskCards();
  }
}

init();

// // Global Variables

// let projects = [];
// let storedTaskCards = [];

// // Initialization Function

// updateCardStorage();

// // Submit button
// const submit = document.getElementById("submit");
// submit.addEventListener("click", addArticle);

// // Clear button

// const clear = document.getElementById("clearBtn");
// clearBtn.addEventListener("click", clearProject);

// function clearProject() {
//   if (storedTaskCards !== null) {
//     storedTaskCards = [];
//     setLocalStorageObj("Task Cards", storedTaskCards);
//     window.location.reload();
//   } else {
//     return;
//   }
// }

// // Creates a new task object with Title, Description, Due-Date and Priority.
// // Adds the object to storage and calls a function to create the new task.
// function addArticle() {
//   const newCard = {
//     Title: formTitle.value,
//     Description: formDescription.value,
//     "Due Date": formDueDate.value,
//     Priority: formPriority.value,
//   };

//   storedTaskCards.push(newCard);

//   setLocalStorageObj("Task Cards", storedTaskCards);
//   createTaskCards();
// }

// // Called once when the page is first loaded. Creates each "task card" that was in local storage.
// function renderStoredTaskCards() {
//   for (let i = 0; i < storedTaskCards.length; i++) {
//     const article = document.createElement("article");
//     article.setAttribute("data-index", i);

//     const title = document.createElement("h2");
//     const description = document.createElement("h3");
//     const duedate = document.createElement("p");
//     const priority = document.createElement("button");
//     const priorityDiv = document.createElement("div");
//     const deleteBtn = document.createElement("button");

//     deleteBtn.setAttribute("class", "delete is-pulled-right");
//     priorityDiv.setAttribute("class", "priority-div");
//     priority.setAttribute("class", "button is-danger is-small");

//     title.textContent = storedTaskCards[i].Title;
//     description.textContent = storedTaskCards[i].Description;
//     duedate.textContent = "Due: " + storedTaskCards[i]["Due Date"];
//     priority.textContent = "Priority: " + storedTaskCards[i].Priority;

//     article.appendChild(deleteBtn);
//     article.appendChild(title);
//     article.appendChild(duedate);
//     article.appendChild(description);
//     priorityDiv.appendChild(priority);
//     article.appendChild(priorityDiv);
//     formContainer.appendChild(article);
//   }
// }

// // Called every time the "submit" button is pressed. Creates a new task and appends it to the DOM.
// function createTaskCards() {
//   const article = document.createElement("article");

//   const title = document.createElement("h2");
//   const description = document.createElement("h3");
//   const duedate = document.createElement("p");
//   const priority = document.createElement("p");
//   const priorityDiv = document.createElement("div");
//   const deleteBtn = document.createElement("button");

//   priority.setAttribute("class", "button is-danger is-small");
//   priorityDiv.setAttribute("class", "priority-div");
//   deleteBtn.setAttribute("class", "delete is-pulled-right");

//   title.textContent = formTitle.value;
//   description.textContent = formDescription.value;
//   duedate.textContent = "Due: " + formDueDate.value;
//   priority.textContent = "Priority: " + formPriority.value;

//   article.appendChild(deleteBtn);
//   article.appendChild(title);
//   article.appendChild(duedate);
//   article.appendChild(description);
//   priorityDiv.appendChild(priority);
//   article.appendChild(priorityDiv);
//   formContainer.appendChild(article);

//   formTitle.value = "";
//   formDescription.value = "";
//   formDueDate.value = "";
// }

// // Gets the storedTaskCards object array in local storage, if there is one.
// function updateCardStorage() {
//   const storedTasks = getLocalStorageObj("Task Cards");
//   if (storedTasks !== null) {
//     storedTaskCards = storedTasks;
//     renderStoredTaskCards();
//   } else {
//     return;
//   }
// }

// // Local Storage Functions for Getting and Setting.

// function setLocalStorageObj(element, obj) {
//   localStorage.setItem(element, JSON.stringify(obj));
// }

// function setLocalStorageItem(element, item) {
//   localStorage.setItem(element, item);
// }

// function getLocalStorageObj(obj) {
//   const localStorageObj = JSON.parse(localStorage.getItem(obj));
//   return localStorageObj;
// }

// function getLocalStorageItem(item) {
//   const localStorageItem = localStorage.getItem(item);
//   return localStorageItem;
// }
