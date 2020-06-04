<h1>How to check extension out in development environment</h1>

- Clone the reop down
- Go to [settings](chrome://settings/) in chrome
- Click [extensions](chrome://extensions/)
- Turn `Developer mode` on
- Click `Load unpacked`
- Select the directory that you cloned the repo down to
- You'll see a new extension on your list of extensions on your browser bar
- Click and check out the awesomeness!

<h1>Current Look & States</h1>

![Image of create subscription page](/High Fidelity Designs/createSubscription.png)

![Image of create subscription page with users selected](/High\ Fidelity\ Designs/createSubscriptionWithUser.png)

![Image of subscription page](/High\ Fidelity\ Designs/subscription.png)

![Image of subscription page with subscription options](/High\ Fidelity\ Designs/subscriptionWithOptions.png)

![Image of settings page](/High\ Fidelity\ Designs/settingsPage.png)

![Image of settings page with dark mode and feedback](/High\ Fidelity\ Designs/settingsPagewithFeedback.png)

<h1>Initial notes </h1>

Add custom classes to tailwind, update/add class to `tailwind.config.js`. Then run `npx tailwindcss build tailwind.css -o app/css/output.css`. Then reload chrome extension in the browser. And voila!

<h1> App Roadmap </h1>

[] Be able to push to local storage working
<br>
[] Be able to fetch from local storage
<br>
[] Build out `subscriptions` page
<br>
[] Build out `settings` page
<br>
[] Create algorithm to grab all users names off of any site visted
<br>
[] Create algorithm that can grab any thread name off of any site visted
<br>
[] Create algorithm that will be able to keep tabs on whatever site the user subscribed to via user and or thread
<br>
[] Wire up algorithms to `create` page
<br>
[] Create algorithm for how the updates will be sent via email and or app notifications
<br>
[] Make sure all 3 pages can read and write data to local storage
<br>
[] Run app on lambda or some way to keep app updates and persistence continuous --> keep listener active in the cloud (in case user closes browser)
<br>
[] Create an anonymous feedback form that also anonymizes the data
<br>
[] Have the update notifications be inside the app and have view functionality of viewing the subscription by clicking on `view` on subscription
<br>
[] Have subscription button color change when it has new update or new notification
