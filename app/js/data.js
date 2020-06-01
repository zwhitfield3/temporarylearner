var appData = {
  //app data
  generalData: {
    appName: "",
    timeUsedPast24Hr: "",
    timeUsedTotal: "",
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
      appColor: "",
    },
  },
};

function createData(appDataLocation, passedData) {
  //blah

  for (key in appData.generalData) {
    if (key === appDataLocation) {
      appData.generalData[key] = passedData;
    }
  }

  for (key in appData.userData) {
    if (key === appDataLocation) {
      appData.userData[key].push(passedData);
    }
  }

  for (key in appData.settings) {
    if (key === appDataLocation) {
      appData.settings[key] = passedData;
    }
  }

  // if(appData.generalData.appName === appDataLocation) {
  //   appData.generalData.appName = passedData
  // } else if (appData.generalData.appName === appDataLocation) {

  // }
}

function fetchData() {
  //blah
}

function deleteData() {
  //blah
}
