---
title: Using TravisCI to automate your GatsbyJs website deployment to Github pages
---

[Gatsby](https://www.gatsbyjs.org/) is a free and open-source framework based on React that helps developers build blazing-fast websites and apps.
In this blog post, you will learn how I deploy my [Gatsby](https://www.gatsbyjs.org/) website to [Github Pages](https://pages.github.com/) using [TravisCI](https://travis-ci.org/) to automate the process.

## Choose your Github Pages type

| type                             | domain                                                 | repository name                    | `deploy` branch | `source-code` branch |
| -------------------------------- | ------------------------------------------------------ | ---------------------------------- | --------------- | -------------------- |
| **User or Organization website** | `<your-github-username>.github.io`                     | `<your-github-username>.github.io` | `master`        | `develop`            |
| **Project website**              | `<your-github-username>.github.io/<your-project-name>` | can be any name                    | `gh-pages`      | `master`             |

You `Github Pages` website will start existing once you have a repository on Github with the right name and branch.

## Setup your repository

First, create your Github repository based on the website type you wish to have, clone your repository, and put your project source-code in the `source-code` branch.

## Install gh-pages

The `gh-pages` library can publish files to a branch on GitHub. It is useful to push anything to Github.

```bash
npm install --save-dev gh-pages
```

## Create a deploy script

Add a deploy script to your `package.json` scripts:

```json
{
  "deploy": "gh-pages --dist public --branch DEPLOY_BRANCH_NAME"
}
```

> Replace `DEPLOY_BRANCH_NAME` with your `deploy-branch` name

## Manually deploy your website

Now, once you installed `gh-pages` and configured your deployment script, you can deploy your website manually to `Github Pages`.  
Run `yarn build && yarn deploy` (or `npm run build && npm run deploy` if working with `npm`) and go to your website URL.  
You should see your website there.

## Setup Travis

TravisCI let you test and deploy your Github project easily. Use it to run the deploy script on each update to the `source-code` branch.

### Setup your `.travis.yml` file

To setup Travis, first, add the following `.travis.yml` file to the root of your `source-code` branch.

```yml
language: node_js
node_js: 12
env:
  GITHUB_NAME: "YOUR_GITHUB_NAME"
  GITHUB_EMAIL: your-email@example.com
before_script:
  - git config --global user.email "${GITHUB_EMAIL}"
  - git config --global user.name "${GITHUB_NAME}"
  - git remote set-url origin "https://${GH_TOKEN}@github.com/sharvit/sharvit.github.io.git"
script: yarn build # replace with `npm run build` if using npm
deploy:
  on:
    branch: SOURCE_CODE_BRANCH_NAME
  provider: script
  skip_cleanup: true
  script: yarn deploy # replace with `npm run deploy` if using npm
```

> Replace `YOUR_GITHUB_NAME` with your real name, I am using "Avi sharvit", this used as the committer name.  
> Replace `your-email@example.com` with your email, this used as the committer email.  
> Replace `SOURCE_CODE_BRANCH_NAME` with your `source-code` branch name.

### Enable Travis

To enable Travis for your project, you can go to Travis website and use their dashboard, or you can use the CLI:
```bash
gem install travis
travis enable
```

### Create a Github token

To let Travis deploy to GitHub, Travis needs to have the right credentials.  
To do so, you to create a Github token with a `repo` scope.  
This can be done by visiting https://github.com/settings/tokens.

### Set your Github token in Travis

Set up an environment variable in Travis with the name `GH_TOKEN` and the value of the created token.  
This can be done from Travis dashboard or by the cli by running:
```bash
travis env set GH_TOKEN GITHUB_TOKEN_VALUE_HERE
```

> Replace `GITHUB_TOKEN_VALUE_HERE` with your newly created token.

### Commit and Push

Now you should be ready to go and push your changes to Github.
Travis will deploy your website to `Github Pages` with every commit pushed to your `source-code` branch in GitHub.
