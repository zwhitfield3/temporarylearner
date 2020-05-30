document.addEventListener("DOMContentLoaded", function () {
  const subscribeViaUserButton = document.getElementById(
    "subscriptionType-byUser"
  );
  subscribeViaUserButton.addEventListener("change", changeHandler);
});
function changeHandler(event) {
  console.log("event", event);
  //   debugger;
  const eventWithTarget = event.target;
  if (eventWithTarget.id === "subscriptionType-byUser") {
    if (eventWithTarget.checked === true) {
      console.log("WE MADE IT");
    }
  }
}
