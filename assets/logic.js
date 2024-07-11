const projectBody = document.querySelector("#project-body")
const leftContainerTitle = document.querySelector("#form-title");
const leftContainerDescription = document.querySelector("#form-description");
const leftContainerDueDate = document.querySelector("#form-duedate");
const leftContainerPriority = document.querySelector("#form-priority");
const leftContainerSubmitBnt = document.querySelector("#submit");
const leftContainerClearAllBtn = document.querySelector("#clearBtn");
const leftContainerAboutBtn = document.querySelector("#aboutBtn");
const modalHeader = document.querySelector("#modal-header");
const modalBody = document.querySelector("#modal-body");
const modalTitle = document.querySelector("#modal-title");
const modalFirstQuestion = document.querySelector("#modal-question1");
const modalSecondQuestion = document.querySelector("#modal-question2");
const modalThirdQuestion = document.querySelector("#modal-question3");

let darkModeArray = [leftContainerTitle, leftContainerDescription, leftContainerDueDate, leftContainerPriority, 
    leftContainerSubmitBnt, leftContainerClearAllBtn, leftContainerAboutBtn, modalHeader, modalBody, 
    modalTitle, modalFirstQuestion, modalSecondQuestion, modalThirdQuestion];

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("mode-toggle");
  const logoImg = document.getElementById("mode-img-toggle");

  const updateToggleButtonIcon = () => {
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "🌙";
    } else {
      toggleButton.textContent = "☀️";
    }
  };

  const toggleLogoImg = () => {
    if (document.body.classList.contains("dark-mode")) {
      logoImg.src = "./assets/images/projectpalheader-dark.png";
    } else {
      logoImg.src = "./assets/images/projectpalheader.png";
    }
  };

  if (localStorage.getItem("dark-mode") === "enabled") {
    projectBody.classList.add("dark-mode");
    
    for (let i = 0; i < darkModeArray.length; i++) {
        darkModeArray[i].classList.add("has-background-grey-darker");
        darkModeArray[i].classList.add("has-text-grey");
    }

    updateToggleButtonIcon();
    toggleLogoImg();
  }

  toggleButton.addEventListener("click", () => {
    projectBody.classList.toggle("dark-mode");

    for (i = 0; i < darkModeArray.length; i++) {
        darkModeArray[i].classList.toggle("has-background-grey-darker");
        darkModeArray[i].classList.toggle("has-text-grey");
    }
    
    updateToggleButtonIcon();
    toggleLogoImg();

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
