# Challenge 1: ProjectPAL

ProjectPAL is a web application designed to help students stay organized with thier project tasks. It features a simple and intuitive interface for adding, viewing, and managing projects. 

## Overview

ProjectPAL is aimed at providing students with a user-friendly playform to keep track of project and assignments. There are features like project creation, priority setting, and light/dark mode toggling, it helps with productivity and organization

## Changes Made

* Implemented light/dark mode toggle with local storage persistence
* Improved from validation and error handling
* Improve UI for better usability and to make it look nicer

## Mock-Up Comparison

Our design closely follows the initial mock-up that we came up with. Our goal was to make it easy to navigate and to manage their projects

## Installation

To run this project, all you need is a modern web browser

## Usage

* Add a New Project:
   - Enter the project title, description, due date, and priority in the input fields on the left side of the page.
   - Click the "submit" button to add the project

* View Projects:
   - Added projects will appear on the right side 

* Toggle Light/Dark Mode:
   - Click the sun/moon icon button in the header to switch between light and dark mode.

## Technologies Used

* HTML: For structuring the web pages
* CSS: For styling the application
* JavaScript: For interactive functionality and local storage management
* Bulma CSS For responsive components

## Future Improvements

## Project Structure

projectpal/
│
├── assets/
│   ├── styles.css      # Main stylesheet
│   ├── script.js       # JavaScript for form handling
│   └── logic.js        # JavaScript for theme toggling
│
├── index.html          # Main HTML file
└── README.md           # Project README file

## Customzation

## Contributing

## Conclusion

## Deployment Link

## Repository Link

https://github.com/PeruvPowWow/Challenge1


Team Checklist: 

HTML
- Create a header with the title of "Project Pal"
- Create 4 labels (Title, Due Date, Description, Priority)
- Create 3 input boxes (Title, Due Date, Description)
- Create a dropdown for Priority (low, med, high)
- Create a button with an h2 of "Submit"
- Create a section for holding the "task cards" generated from the input fields on the left.

Javascript
- Create new objects for each "task card"
- Submit button generates and displays data in "task cards"
- Local Storage for each card already created