---
title: Build your I18n translation files using gulp
---

From one hand, i want to have a flexible and dynamic source files for my app I18n/translations.
[ROR] have a great I18n source structure that split you translations to many files and i want to adopt it in my [angularjs] project.
From the other hand, serving  so many translation files to the end user can be a bad idea, i prefer to serve only one file with the specific locale that the user want.

The goal is to have a source folder with all the translation files, then use [gulp] to build a destination folder.

The source folder contain list of folder, named as the locale name (```en-US```) and contain all the translations for this specific locale.

## Source folder

```bash
locales
├── en-US
│   ├── country.json
│   ├── dashboard.json
│   ├── dashboard.state1.json
│   ├── dashboard.state2.json
│   ├── language.json
│   ├── layout.json
│   ├── login.json
│   └── utils.json
├── fr-FR
│   ├── country.json
│   ├── dashboard.json
│   ├── dashboard.state1.json
│   ├── dashboard.state2.json
│   ├── layout.json
│   ├── login.json
│   └── utils.json
└── he-IL
    ├── country.json
    ├── dashboard.json
    ├── dashboard.state1.json
    ├── dashboard.state2.json
    ├── layout.json
    ├── login.json
    └── utils.json

3 directories, 22 files
```

### Source file

locales/en-US/country.json

```json
{
    "country": {
        "navbarTitle": "World Countries",
        "list": {
            "pageTitle": "World Countries"
        },
        "name": "Name in english",
        "nativeName": "Name in native language",
        "capital": "Capital",
        "region": "Region",
        "subregion": "Sub Region",
        "population": "Population",
        "timezones": "Timezones",
        "altSpellings": "Spellings",
        "currencies": "Currencies",
        "languages": "Languages",
        "translations": "Translations",
        "borders": "Borders"
    }
}
```

locales/en-US/dashboard.json

```json
{
    "dashboard": {
        "title": "dashboard",
        "navbarTitle": "Dashboard"
    }
}
```


locales/en-US/dashboard.state1.json

```json
{
    "dashboard": {
        "state1": {
            "paragraph1": "This is the a paragraph for state number one.",
            "navbarTitle": "state 1"
        }
    }
}
```

## Destination folder

The destination folder will contain json file for each locale.

```bash
locales
├── en-US.json
├── fr-FR.json
└── he-IL.json

0 directories, 3 files
```

## The Gulp Task

First we need to make sure that we have [gulp] globally installed:

```bash
npm install -g gulp
```

Then, install the task [npm] dependencies (remember that they are **development dependencies**):

```bash
npm install --save-dev path streamqueue gulp-load-plugins gulp-extend
```

### The task source code

```js
(function() {

    'use strict';

    // dependencies
    var gulp          = require('gulp');
    var path          = require('path');
    var streamqueue   = require('streamqueue');
    var plugins       = require('gulp-load-plugins')();


    /**
    * Task Settings
    */
    var avilableLocales = ['en-US', 'fr-FR', 'he-IL'];

    var localesSourcePattern = 'config/locales/xxlocalexx/*.json';

    var targetDir = 'dist/locales';

    /**
    * build each avilable locale (from localesSourcePattern)
    * to his own json fle (en-US.json) at the target dir
    */
    gulp.task('build:locales', function () {
        return buildLocalesQueue()
            .pipe(gulp.dest(targetDir))
        ;
    });

    // build each avilable locale
    function buildLocalesQueue () {
        // Prepare the stream queue
        var localesQueue = streamqueue({ objectMode: true });

        // For each avilable locales
        for (var i = 0; i < avilableLocales.length; i++) {
            // Build the local and add to the stream queue
            localesQueue.queue(
                buildLocale(avilableLocales[i])
            );
        }

        return localesQueue.done();
    }

    // Combine all the source locale files to one dist locale file
    function buildLocale (locale) {
        var localePattern = localesSourcePattern.replace(/xxlocalexx/g, locale);

        return gulp.src(localePattern)
            .pipe(plugins.extend(locale + '.json'))
        ;
    }
})();
```

### Using the task

just run in your terminal:

```bash
gulp build:locales
```

result:

```bash
[10:01:11] Using gulpfile ~/develop/angular/angular-full-seed/gulpfile.js
[10:01:11] Starting 'build:locales'...
[10:01:11] Finished 'build:locales' after 94 ms
```

Now you can run this task by its own or use it as a sub task for your main build task.

[ROR]: http://rubyonrails.org/
[angularjs]: https://angularjs.org/
[gulp]: http://gulpjs.com/
[npm]: https://www.npmjs.com/
