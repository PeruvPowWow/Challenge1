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

  // Creates an alert if the Title, Description or Due Date input areas are empty
  if (!formTitle.value || !formDescription.value || !formDueDate.value) {
    alert("Please complete the form.");
    return;
  }

  // Creates a newCard object with Title, Description, Due Date, and Priority values equal to whatever the user typed
  const newCard = {
    Title: formTitle.value,
    Description: formDescription.value,
    "Due Date": formDueDate.value,
    Priority: formPriority.value,
  };

  taskCards.push(newCard);

  // Resets all input values to be empty
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

    // Appends each part of the article to the page
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

// Functions and Event Listeners from Bulma for creating a Modal

document.addEventListener('DOMContentLoaded', () => {
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  document.addEventListener('keydown', (event) => {
    if(event.key === "Escape") {
      closeAllModals();
    }
  });
});