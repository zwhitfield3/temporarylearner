import * as data from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  userSelection();
  submitInfo();
});

function generalElementGrabber(elementID) {
  return document.getElementById(elementID);
}

function loadUserData() {
  //blah blah blah
  console.log("user data loaded");
}

function userSelection() {
  const subscribeViaUserButton = document.getElementById(
    "subscriptionType-byUser"
  );
  subscribeViaUserButton.addEventListener("change", changeHandler);
}

function submitInfo() {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", saveInfo);
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

  data.createData("subscriptionData", newSubscriptionData);
  console.log("subscriptionData", data.appData);
}

function addOptionElement(elementID) {
  const elementToManipulate = document.getElementById(elementID);
  const listElement = document.getElementById("userSelection");
  const userOption = document.createElement("option");

  if (elementToManipulate.checked === true) {
    userOption.value = "enaz321";
    userOption.text = "Enaz321";
    userOption.id = "1";

    listElement.appendChild(userOption);
  } else {
    listElement.removeChild(document.getElementById("1"));
  }
}

function changeHandler(event) {
  const listElement = document.getElementById("userSelection");
  const eventWithTarget = event.target;
  if (eventWithTarget.id === "subscriptionType-byUser") {
    addOptionElement(eventWithTarget.id);
    toggleHide(listElement.id, eventWithTarget.id);
  }
}

function toggleHide(listElementID, checkboxElementID) {
  //   debugger;
  const checkboxElement = document.getElementById(checkboxElementID);
  const elementToToggle = document.getElementById(listElementID);

  if (checkboxElement.checked) {
    elementToToggle.hidden = false;
  } else {
    elementToToggle.hidden = true;
  }
}
