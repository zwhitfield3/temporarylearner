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
