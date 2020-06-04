import * as data from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  buttonsToToggle();

  // submitInfo();
});

function generalElementGrabber(elementID) {
  return document.getElementById(elementID);
}

function loadUserData() {
  //blah blah blah
  console.log("user data loaded");
}

const buttons = {
  subscription: generalElementGrabber("subscriptionButton"),
  viewButton: generalElementGrabber("view"),
  editButton: generalElementGrabber("edit"),
  removeButton: generalElementGrabber("remove"),
  saveButton: generalElementGrabber("save"),
  cancelButton: generalElementGrabber("cancel"),
  noButton: generalElementGrabber("no"),
  yesButton: generalElementGrabber("yes"),
};

const buttonFunctions = {
  subscriptionDropdown() {
    if (buttons.viewButton.hidden && !buttons.saveButton.hidden) {
      buttons.viewButton.hidden = true;
      buttons.editButton.hidden = true;
      buttons.removeButton.hidden = true;
      buttons.saveButton.hidden = true;
      buttons.cancelButton.hidden = true;
    } else if (buttons.viewButton.hidden && !buttons.yesButton.hidden) {
      buttons.viewButton.hidden = true;
      buttons.editButton.hidden = true;
      buttons.removeButton.hidden = true;
      generalElementGrabber("areYouSure").hidden = true;
      buttons.noButton.hidden = true;
      buttons.yesButton.hidden = true;
    } else if (buttons.viewButton.hidden) {
      buttons.viewButton.hidden = false;
      buttons.editButton.hidden = false;
      buttons.removeButton.hidden = false;
      generalElementGrabber("areYouSure").hidden = true;
      buttons.noButton.hidden = true;
      buttons.yesButton.hidden = true;
    } else {
      buttons.viewButton.hidden = true;
      buttons.editButton.hidden = true;
      buttons.removeButton.hidden = true;
    }
  },

  viewSubscription() {
    //send url to content script
  },

  editSubscription() {
    //more work here
    // debugger;
    buttons.viewButton.hidden = true;
    buttons.editButton.hidden = true;
    buttons.removeButton.hidden = true;
    buttons.saveButton.hidden = false;
    buttons.cancelButton.hidden = false;
    buttons.subscription.input = buttons.subscription.innerText;
  },

  editSubscriptionSave() {
    //save new name to firebase for this user
  },

  editSubscriptionCancel() {
    buttons.viewButton.hidden = false;
    buttons.editButton.hidden = false;
    buttons.removeButton.hidden = false;
    buttons.saveButton.hidden = true;
    buttons.cancelButton.hidden = true;
  },

  removeSubscription() {
    buttons.viewButton.hidden = true;
    buttons.editButton.hidden = true;
    buttons.removeButton.hidden = true;
    generalElementGrabber("areYouSure").hidden = false;
    buttons.noButton.hidden = false;
    buttons.yesButton.hidden = false;
  },

  removeSubscriptionDeny() {
    buttons.viewButton.hidden = false;
    buttons.editButton.hidden = false;
    buttons.removeButton.hidden = false;
    generalElementGrabber("areYouSure").hidden = true;
    buttons.noButton.hidden = true;
    buttons.yesButton.hidden = true;
  },

  removeSubscriptionConfirm() {
    //remove subscriptionModule from DOM and remove from data store on firebase
  },
};

function buttonsToToggle() {
  buttons.subscription.addEventListener(
    "click",
    buttonFunctions.subscriptionDropdown
  );

  buttons.viewButton.addEventListener(
    "click",
    buttonFunctions.viewSubscription
  );
  buttons.editButton.addEventListener(
    "click",
    buttonFunctions.editSubscription
  );
  buttons.removeButton.addEventListener(
    "click",
    buttonFunctions.removeSubscription
  );
  buttons.cancelButton.addEventListener(
    "click",
    buttonFunctions.editSubscriptionCancel
  );
  buttons.noButton.addEventListener(
    "click",
    buttonFunctions.removeSubscriptionDeny
  );
  buttons.yesButton.addEventListener(
    "click",
    buttonFunctions.removeSubscriptionConfirm
  );
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

  appData.userData.subscriptionData.push(newSubscriptionData);
  console.log("subscriptionData", appData);
}

//   function addOptionElement(elementID) {
//     const elementToManipulate = document.getElementById(elementID);
//     const listElement = document.getElementById("userSelection");
//     const userOption = document.createElement("option");

//     if (elementToManipulate.checked === true) {
//       userOption.value = "enaz321";
//       userOption.text = "Enaz321";
//       userOption.id = "1";

//       listElement.appendChild(userOption);
//     } else {
//       listElement.removeChild(document.getElementById("1"));
//     }
//   }

//   function toggleHide(listElementID, checkboxElementID) {
//     //   debugger;
//     const checkboxElement = document.getElementById(checkboxElementID);
//     const elementToToggle = document.getElementById(listElementID);

//     if (checkboxElement.checked) {
//       elementToToggle.hidden = false;
//     } else {
//       elementToToggle.hidden = true;
//     }
//   }
