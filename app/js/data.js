export let appData = {
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

  for (let key in appData.settings) {
    if (key === appDataLocation) {
      appData.settings[key] = passedData;
    }
  }

  // if(appData.generalData.appName === appDataLocation) {
  //   appData.generalData.appName = passedData
  // } else if (appData.generalData.appName === appDataLocation) {

  // }
}

export function fetchData() {
  //blah
}

export function deleteData() {
  //blah
}
