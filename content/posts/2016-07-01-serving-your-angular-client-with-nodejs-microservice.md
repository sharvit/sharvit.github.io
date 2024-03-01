---
title: Serving angular client with node.js micro service
---

So you build your angularjs app and you need to serve the app in production.
The common mistake is serving your client side from your main API.
I believe the best option is just having a nodejs micro service that serving our static angular app.

The first problem serving angular app is the html5 routing system.

let's say this is your router:

```javascript
$locationProvider.html5Mode(true);

$urlRouterProvider.when("/dashboard", "/dashboard/state1").otherwise("/login");

$stateProvider
  .state("app.login", {
    url: "/login",
    templateUrl: "templates/states/login/login.html",
  })
  .state("app.dashboard", {
    url: "/dashboard",
    templateUrl: "templates/states/dashboard/dashboard.html",
  });
$stateProvider.state("app.dashboard.state1", {
  url: "/state1",
  templateUrl: "templates/states/dashboard/state1/state1.html",
});
$stateProvider.state("app.dashboard.state2", {
  url: "/state2",
  templateUrl: "templates/states/dashboard/state2/state2.html",
});
```

Your urls will looks like that:

```
my-domain.com -> go to my-domain.com/login
my-domain.com/login
my-domain.com/dashboard -> go to my-domain.com/dashboard/state1
my-domain.com/dashboard/state1
my-domain.com/dashboard/state2
```

So if you normally go to `my-domain.com` it will work fine and angular will naturaly change the url to `my-domain.com` and will show the `app.login` state.
Angular will do it well until you will try to reload or open `my-domain.com/login` or whatever route, your service will need to serve the index.html for all this routes.

First thing you will need to tell angular what is the base route.
Add this line to your `index.html`

```html
<head>
  ...
  <base href="/" />
  ...
</head>
```

Install dependencies

```bash
npm install express cors path compression --save
```

Create your `server.js` file

```javascript
(function () {
  "use strict";

  // use new relic if license key exists
  if (typeof process.env.NEW_RELIC_LICENSE_KEY === "string") {
    require("newrelic");
  }

  var express = require("express"),
    cors = require("cors"),
    path = require("path"),
    compress = require("compression"),
    PORT = process.env.PORT || 3000,
    PRODUCTION_DOMAIN = "my-domain.com",
    APP_FOLDER = "build/release",
    RELEASE_PATH = path.resolve(__dirname, APP_FOLDER),
    INDEX_FILE = path.resolve(RELEASE_PATH, "index.html"),
    STATIC_URLS = [
      "/fonts/",
      "/icons/",
      "/images/",
      "/locales/",
      "/scripts/",
      "/styles/",
      "/favicons/",
    ],
    server = express();
  // Enable All CORS Requests
  server.use(cors());

  // use gzip compress
  server.use(compress());

  // // don't index unless production
  server.use(function (req, res, next) {
    if (req.hostname.indexOf(PRODUCTION_DOMAIN) < 0) {
      res.setHeader("X-Robots-Tag:", "noindex, nofollow");
    }

    return next();
  });

  // Cache the static urls
  server.use(function (req, res, next) {
    for (var i = 0; i < STATIC_URLS.length; i++) {
      if (req.url.indexOf(STATIC_URLS[i]) === 0) {
        res.setHeader("Cache-Control", "public, max-age=345600"); // 4 days
        res.setHeader(
          "Expires",
          new Date(Date.now() + 345600000).toUTCString(),
        );
      }
    }

    return next();
  });

  // use express to serve the static release files
  server.use(express.static(RELEASE_PATH));

  // support html5mode for angular
  // serve the index file
  server.get("/*", function (req, res, next) {
    // Do not serve the index for static urls
    for (var i = 0; i < STATIC_URLS.length; i++) {
      if (req.url.indexOf(STATIC_URLS[i]) === 0) {
        return next();
      }
    }

    // Use res.sendFile, as it streams instead of reading the file into memory.
    res.sendFile(INDEX_FILE);
  });

  // run the server and start listen to the port
  server.listen(PORT);

  // Render some console log output
  console.log("Angular app is running on port " + PORT);
})();
```

Just run

```bash
node server.js
```

You can run it on your favorite platform.
