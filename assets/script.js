// ID Selectors
const formContainer = document.querySelector(".container-right");
const formTitle = document.querySelector("#form-title");
const formDescription = document.querySelector("#form-description");
const formDueDate = document.querySelector("#form-duedate");
const formPriority = document.querySelector("#form-priority");

// function createCardObjects(event) {
//   event.preventDefault();

//   let cardObject = {
//     Title: formTitle,
//     Description: formDescription,
//     "Due Date": formDueDate,
//     Priority: formPriority,
//   };
//   localStorage.setItem("cardObject", JSON.stringify(cardObject));
// }

// Submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", addArticle);

// Creates a new task object with Title, Description, Due-Date and Priority.
// Adds the object to storage and calls a function to create the new task.
function addArticle() {
  const newCard = {
    Title: formTitle.value,
    Description: formDescription.value,
    "Due Date": formDueDate.value,
    Priority: formPriority.value,
  };

  localStorage.setItem("newCard", JSON.stringify(newCard));

  setLocalStorageObj("Task Cards", storedTaskCards);
  createTaskCards();
}

// Called once when the page is first loaded. Creates each "task card" that was in local storage.
function renderStoredTaskCards() {
  for (let i = 0; i < storedTaskCards.length; i++) {
    const article = document.createElement("article");
    article.setAttribute("data-index", i);

    const title = document.createElement("h2");
    const description = document.createElement("h3");
    const duedate = document.createElement("p");
    const priority = document.createElement("button");
    const priorityDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");

    deleteBtn.setAttribute("class", "delete is-pulled-right");
    priorityDiv.setAttribute("class", "priority-div");
    priority.setAttribute("class", "button is-danger is-small");

    title.textContent = storedTaskCards[i].Title;
    description.textContent = storedTaskCards[i].Description;
    duedate.textContent = "Due: " + storedTaskCards[i]["Due Date"];
    priority.textContent = "Priority: " + storedTaskCards[i].Priority;

    article.appendChild(deleteBtn);
    article.appendChild(title);
    article.appendChild(duedate);
    article.appendChild(description);
    article.appendChild(priorityDiv);
    priorityDiv.appendChild(priority);
    formContainer.appendChild(article);
  }
}

// Called every time the "submit" button is pressed. Creates a new task and appends it to the DOM.
function createTaskCards() {
  const article = document.createElement("article");

  const title = document.createElement("h2");
  const description = document.createElement("h3");
  const duedate = document.createElement("p");
  const priority = document.createElement("p");
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete");
  const priorityDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");

  priority.setAttribute("class", "button is-danger is-small");
  priorityDiv.setAttribute("class", "priority-div");
  deleteBtn.setAttribute("class", "delete is-pulled-right");

  title.textContent = formTitle.value;
  description.textContent = formDescription.value;
  duedate.textContent = "Due: " + formDueDate.value;
  priority.textContent = "Priority: " + formPriority.value;

  article.appendChild(deleteBtn);
  article.appendChild(title);
  article.appendChild(duedate);
  article.appendChild(description);
  article.appendChild(priorityDiv);
  priorityDiv.appendChild(priority);
  formContainer.appendChild(article);

  formTitle.value = "";
  formDescription.value = "";
  formDueDate.value = "";
}

// Gets the storedTaskCards object array in local storage, if there is one.
function updateCardStorage() {
  const storedTasks = getLocalStorageObj("Task Cards");
  if (storedTasks !== null) {
    storedTaskCards = storedTasks;
    renderStoredTaskCards();
  } else {
    return;
  }
}

// Local Storage Functions for Getting and Setting.

function setLocalStorageObj(element, obj) {
  localStorage.setItem(element, JSON.stringify(obj));
}

function setLocalStorageItem(element, item) {
  localStorage.setItem(element, item);
}

function getLocalStorageObj(obj) {
  const localStorageObj = JSON.parse(localStorage.getItem(obj));
  return localStorageObj;
}

function getLocalStorageItem(item) {
  const localStorageItem = localStorage.getItem(item);
  return localStorageItem;
}
