document.addEventListener("DOMContentLoaded", function () {
  const subscribeViaUserButton = document.getElementById(
    "subscriptionType-byUser"
  );
  subscribeViaUserButton.addEventListener("change", changeHandler);
});

// function generalElementGrabber() {
//     let generalElement = document
// }

function changeHandler(event) {
  console.log("event", event);
  //   debugger;
  const listElement = document.getElementById("userSelection");
  const eventWithTarget = event.target;
  if (eventWithTarget.id === "subscriptionType-byUser") {
    if (eventWithTarget.checked === true) {
      //   console.log("WE MADE IT");
      addOptionElement(eventWithTarget.id);
      toggleHide(listElement.id);
    }
  }
}

function addOptionElement(elementID) {
  const userOption = document.createElement("option");
  const listElement = document.getElementById("userSelection");

  userOption.value = "enaz321";
  userOption.text = "Enaz321";

  listElement.appendChild(userOption);
}

function toggleHide(elementID) {
  const elementToToggle = document.getElementById(elementID);
  if (elementToToggle.hidden === false) {
    elementToToggle.hidden = true;
  } else {
    elementToToggle.hidden = false;
  }
}
