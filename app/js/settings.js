import * as data from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  toggleHide();
  submitInfo();

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
  const submitButton = document.getElementById("submitFeedback");
  submitButton.addEventListener("click", saveInfo);
}

function saveInfo() {
  let newSubscriptionData = {};
  // const subscriberEmail = generalElementGrabber("emailName");
  // newSubscriptionData.subscriberEmail = subscriberEmail.value;

  // const subscriptionByUser = generalElementGrabber("userSelection");
  // newSubscriptionData.subscriptionByUser = subscriptionByUser.value;

  // let subscriptionCadence = null;
  // const newInfoAvailable = generalElementGrabber("newInfoAvailable");
  // const onceAWeek = generalElementGrabber("onceAWeek");

  // if (newInfoAvailable.checked) {
  //   subscriptionCadence = newInfoAvailable.value;
  // }
  // if (onceAWeek.checked) {
  //   subscriptionCadence = onceAWeek.value;
  // }

  // newSubscriptionData.subscriptionCadence = subscriptionCadence;

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
