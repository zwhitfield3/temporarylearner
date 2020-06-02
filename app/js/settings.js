import * as data from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  toggleHide();
  submitFeedbackInfo();
  saveDarkModeInfo();
  // saveAllowFeedbackCollectionInfo();

  // submitInfo();
});

function generalElementGrabber(elementID) {
  return document.getElementById(elementID);
}

function loadUserData() {
  //blah blah blah
  console.log("user data loaded");
}

function submitFeedbackInfo() {
  const submitButton = document.getElementById("submitFeedback");
  submitButton.addEventListener("click", saveInfo);
}

function saveDarkModeInfo() {
  const darkModeSliderElement = document.getElementById("darkMode");
  darkModeSliderElement.addEventListener("click", () => {
    let darkMode = null;
    const darkModeSlider = generalElementGrabber("darkMode");
    darkMode = darkModeSlider.value;
    data.createData("darkMode", darkMode);
    console.log("data", data.appData);
  });
}

function saveInfo() {
  let feedback = {};
  const feedbackByUser = generalElementGrabber("userFeedback");
  feedback.feedbackByUser = feedbackByUser.value;
  data.createData("userFeedback", feedback);
  console.log("data", data.appData);
}

function toggleHide() {
  const buttonElement = document.getElementById("shareFeedback");
  const elementToToggle = document.getElementById("feedbackForum");

  buttonElement.addEventListener("click", function () {
    // debugger;
    if (elementToToggle.hidden) {
      elementToToggle.hidden = false;
    } else {
      elementToToggle.hidden = true;
    }
  });
}
