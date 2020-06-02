import * as data from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  userSelection();

  // submitInfo();
});

function generalElementGrabber(elementID) {
  return document.getElementById(elementID);
}

function loadUserData() {
  //blah blah blah
  console.log("user data loaded");
}

function submitInfo() {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", saveInfo);
}

function userSelection() {
  const shareFeedbackButton = document.getElementById("shareFeedback");
  shareFeedbackButton.addEventListener("click", toggleHide);
}

function saveInfo() {
  let newSubscriptionData = {};
  console.log("newSubscriptionData", newSubscriptionData);
  const subscriberEmail = generalElementGrabber("emailName");
  newSubscriptionData.subscriberEmail = subscriberEmail.value;

  const subscriptionByThread = generalElementGrabber(
    "subscriptionType-byThread"
  );
  newSubscriptionData.subscriptionByThread = subscriptionByThread.value;

  const subscriptionByUser = generalElementGrabber("userSelection");
  newSubscriptionData.subscriptionByUser = subscriptionByUser.value;

  let subscriptionCadence = null;
  const newInfoAvailable = generalElementGrabber("newInfoAvailable");
  const onceAWeek = generalElementGrabber("onceAWeek");

  if (newInfoAvailable.checked) {
    subscriptionCadence = newInfoAvailable.value;
  }
  if (onceAWeek.checked) {
    subscriptionCadence = onceAWeek.value;
  }

  newSubscriptionData.subscriptionCadence = subscriptionCadence;

  const subscriptionName = generalElementGrabber("learningsName");
  newSubscriptionData.subscriptionName = subscriptionName.value;

  appData.userData.subscriptionData.push(newSubscriptionData);
  console.log("subscriptionData", appData);
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
