document.addEventListener("DOMContentLoaded", function () {
  const subscribeViaUserButton = document.getElementById(
    "subscriptionType-byUser"
  );
  subscribeViaUserButton.addEventListener("change", changeHandler);

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", saveInfo);

  const navbar = document.getElementById("navbar");
  navbar.addEventListener("click", toggleNavBar);
});

function generalElementGrabber(elementID) {
  return document.getElementById(elementID);
}

let userData = [];

function saveInfo() {
  let subscriptionData = {};

  const subscriberEmail = generalElementGrabber("emailName");
  subscriptionData.subscriberEmail = subscriberEmail.value;

  const subscriptionByThread = generalElementGrabber(
    "subscriptionType-byThread"
  );
  subscriptionData.subscriptionByThread = subscriptionByThread.value;

  const subscriptionByUser = generalElementGrabber("userSelection");
  subscriptionData.subscriptionByUser = subscriptionByUser.value;

  let subscriptionCadence = null;
  const newInfoAvailable = generalElementGrabber("newInfoAvailable");
  const onceAWeek = generalElementGrabber("onceAWeek");

  if (newInfoAvailable.checked) {
    subscriptionCadence = newInfoAvailable.value;
  }
  if (onceAWeek.checked) {
    subscriptionCadence = onceAWeek.value;
  }

  subscriptionData.subscriptionCadence = subscriptionCadence;

  const subscriptionName = generalElementGrabber("learningsName");
  subscriptionData.subscriptionName = subscriptionName.value;

  console.log("subscriptionData", subscriptionData);
}

function changeHandler(event) {
  const listElement = document.getElementById("userSelection");
  const eventWithTarget = event.target;
  if (eventWithTarget.id === "subscriptionType-byUser") {
    addOptionElement(eventWithTarget.id);
    toggleHide(listElement.id, eventWithTarget.id);
  }
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
