// Class Selectors
const formTitle = document.querySelector('#form-title');
const formDescription = document.querySelector('#form-description');
const formDueDate = document.querySelector('#form-duedate');
const formPriority = document.querySelector('#form-priority');

function createCardObjects() {
    let cardObject = {
        Title: formTitle,
        Description: formDescription,
        "Due Date": formDueDate,
        Priority: formPriority
    }
    localStorage.setItem('cardObject', JSON.stringify(cardObject));
}
