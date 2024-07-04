// ID Selectors
const formContainer = document.querySelector(".container-right");
const formTitle = document.querySelector("#form-title");
const formDescription = document.querySelector("#form-description");
const formDueDate = document.querySelector("#form-duedate");
const formPriority = document.querySelector("#form-priority");

// Submit button
const submit = document.getElementById("submit");
submit.addEventListener("click", addArticle);

function addArticle() {
  const newCard = {
    Title: formTitle.value,
    Description: formDescription.value,
    "Due Date": formDueDate.value,
    Priority: formPriority.value,
  };

  localStorage.setItem("newCard", JSON.stringify(newCard));

  const article = document.createElement("article");

  const title = document.createElement("h2");
  const description = document.createElement("h3");
  const duedate = document.createElement("p");
  const priority = document.createElement("p");

  title.textContent = formTitle.value;
  description.textContent = formDescription.value;
  duedate.textContent = "Due: " + formDueDate.value;
  priority.textContent = "Priority: " + formPriority.value;

  article.appendChild(title);
  article.appendChild(duedate);
  article.appendChild(priority);
  article.appendChild(description);
  formContainer.appendChild(article);
}

// Local Storage Functions for Getting and Setting

function setLocalStorageObj(element, obj) {
  LocalStorage.setItem(element, JSON.stringify(obj));
}

function setLocalStorageItem(element, item) {
  LocalStorage.setItem(element, item);
}

function getLocalStorageObj(obj) {
  const localStorageObj = JSON.parse(localStorage.getItem(obj));
  return localStorageObj;
}

function getLocalStorageItem(item) {
  const localStorageItem = localStorage.getItem(item);
  return localStorageItem;
}
