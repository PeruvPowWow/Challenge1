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
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete");

  title.textContent = formTitle.value;
  description.textContent = formDescription.value;
  duedate.textContent = "Due: " + formDueDate.value;
  priority.textContent = "Priority: " + formPriority.value;

  article.appendChild(deleteBtn);
  article.appendChild(title);
  article.appendChild(duedate);
  article.appendChild(priority);
  article.appendChild(description);
  formContainer.appendChild(article);
}
