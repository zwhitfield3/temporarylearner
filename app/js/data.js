export let appData = {
  //app data
  generalData: {
    appName: "",
    timeUsedPast24Hr: "",
    timeUsedTotal: "",
    hasOpenedAppOnce: "",
    willAddMoreLata: "",
  },
  userData: {
    subscriptionData: [
      {
        subscriberEmail: "",
        subscriptionByThread: "",
        subscriptionByUser: "",
        subscriptionCadence: "",
        subscriptionName: "",
      },
    ],
    settings: {
      darkMode: "",
      allowFeedbackCollection: "false",
      userFeedback: [
        {
          feedbackByUser: "",
        },
      ],
    },
  },
};

export function createData(appDataLocation, passedData) {
  //blah

  for (let key in appData.generalData) {
    if (key === appDataLocation) {
      appData.generalData[key] = passedData;
    }
  }

  for (let key in appData.userData) {
    if (key === appDataLocation) {
      appData.userData[key].push(passedData);
    }
  }

  //new logic
  for (let key in appData.userData.settings) {
    if (key === appDataLocation) {
      if (typeof appData.userData.settings[key] === "object") {
        appData.userData.settings[key].push(passedData);
      } else if (typeof appData.userData.settings[key] === "string") {
        appData.userData.settings[key] = passedData;
      }
    }
  }

  //push to local storage
}

export function fetchData() {
  //blah
}

export function deleteData() {
  //blah
}
