<h1>How to check extension out in development environment</h1>

- clone the reop down
- Go to [settings](chrome://settings/) in chrome
- Click [extensions](chrome://extensions/)
- Turn `Developer mode` on
- Click `Load unpacked`
- Select the directory that you cloned the repo down to
- You'll see a new extension on your list of extensions on your browser bar
- Click and check out the awesomeness!

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
