const leftContainerTitle = document.querySelector("#form-title");
const leftContainerDescription = document.querySelector("#form-description");
const leftContainerDueDate = document.querySelector("#form-duedate");
const leftContainerPriority = document.querySelector("#form-priority");
const leftContainerSubmitBnt = document.querySelector("#submit");
const leftContainerClearAllBtn = document.querySelector("#clearBtn");
const leftContainerAboutBtn = document.getElementById("aboutBtn");

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
    document.body.classList.add("dark-mode");
    leftContainerTitle.classList.add("has-background-grey-darker");
    leftContainerTitle.classList.add("has-text-grey");
    leftContainerDescription.classList.add("has-background-grey-darker");
    leftContainerDescription.classList.add("has-text-grey");
    leftContainerDueDate.classList.add("has-background-grey-darker");
    leftContainerDueDate.classList.add("has-text-grey");
    leftContainerPriority.classList.add("has-background-grey-darker");
    leftContainerPriority.classList.add("has-text-grey");
    leftContainerSubmitBnt.classList.add("has-background-grey-darker");
    leftContainerSubmitBnt.classList.add("has-text-grey");
    leftContainerClearAllBtn.classList.add("has-background-grey-darker");
    leftContainerClearAllBtn.classList.add("has-text-grey");
    leftContainerAboutBtn.classList.add("has-background-grey-darker");
    leftContainerAboutBtn.classList.add("has-text-grey");
    updateToggleButtonIcon();
    toggleLogoImg();
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    leftContainerTitle.classList.toggle("has-background-grey-darker");
    leftContainerTitle.classList.toggle("has-text-grey");
    leftContainerDescription.classList.toggle("has-background-grey-darker");
    leftContainerDescription.classList.toggle("has-text-grey");
    leftContainerDueDate.classList.toggle("has-background-grey-darker");
    leftContainerDueDate.classList.toggle("has-text-grey");
    leftContainerPriority.classList.toggle("has-background-grey-darker");
    leftContainerPriority.classList.toggle("has-text-grey");
    leftContainerSubmitBnt.classList.toggle("has-background-grey-darker");
    leftContainerSubmitBnt.classList.toggle("has-text-grey");
    leftContainerClearAllBtn.classList.toggle("has-background-grey-darker");
    leftContainerClearAllBtn.classList.toggle("has-text-grey");
    leftContainerAboutBtn.classList.toggle("has-background-grey-darker");
    leftContainerAboutBtn.classList.toggle("has-text-grey");
    updateToggleButtonIcon();
    toggleLogoImg();

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "enabled");
    } else {
      localStorage.setItem("dark-mode", "disabled");
    }
  });
});
