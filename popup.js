document.addEventListener("DOMContentLoaded", function () {
  loadUserData();
  console.log("appData", appData.userData.subscriptionData);
  const subscribeViaUserButton = document.getElementById(
    "subscriptionType-byUser"
  );
  subscribeViaUserButton.addEventListener("change", changeHandler);

  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", saveInfo);
});

function generalElementGrabber(elementID) {
  return document.getElementById(elementID);
}

let appData = {
  //app data
  generalData: {
    appName: "",
    timeUsedPast24Hr: "",
    timeUsedTotal: "",
    willAddMoreLata: "",
  },
  userData: {
    subscriptionData: {
      subscriberEmail: "",
      subscriptionByThread: "",
      subscriptionByUser: "",
      subscriptionCadence: "",
      subscriptionName: "",
    },
    settings: {
      darkMode: "",
      allowFeedbackCollection: "false",
      appColor: "",
    },
  },
};

function loadUserData() {
  //blah blah blah
  console.log("user data loaded");
}

function saveInfo() {
  const subscriberEmail = generalElementGrabber("emailName");
  appData.userData.subscriptionData.subscriberEmail = subscriberEmail.value;

  const subscriptionByThread = generalElementGrabber(
    "subscriptionType-byThread"
  );
  appData.userData.subscriptionData.subscriptionByThread =
    subscriptionByThread.value;

  const subscriptionByUser = generalElementGrabber("userSelection");
  appData.userData.subscriptionData.subscriptionByUser =
    subscriptionByUser.value;

  let subscriptionCadence = null;
  const newInfoAvailable = generalElementGrabber("newInfoAvailable");
  const onceAWeek = generalElementGrabber("onceAWeek");

  if (newInfoAvailable.checked) {
    subscriptionCadence = newInfoAvailable.value;
  }
  if (onceAWeek.checked) {
    subscriptionCadence = onceAWeek.value;
  }

  appData.userData.subscriptionData.subscriptionCadence = subscriptionCadence;

  const subscriptionName = generalElementGrabber("learningsName");
  appData.userData.subscriptionData.subscriptionName = subscriptionName.value;

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
