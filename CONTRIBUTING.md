# Contributing Guidelines

## Submitting Feedback, Requests, and Bugs

The process for submitting feedback, feature requests, and reporting bugs usually takes place through [GitHub issues](https://help.github.com/articles/about-issues/). Make sure to use a pre-defined issue template as far as possible.

## Submitting Code and Documentation Changes

The process for accepting changes operates by [Pull Request (PR)](https://help.github.com/articles/about-pull-requests/) and has a few steps:

1. If you haven't submitted anything before, and you aren't (yet!) a collaborator on the project, **fork and clone** the repo:

        $ git clone https://github.com/<username>/nitp-web-front.git

2. Create a **new branch** for the changes you want to work on. Choose a topic for your branch name that reflects the change:

        $ git checkout -b <branch-name>

3. **Create or modify the files** with your changes. If you want to show other people work that isn't ready to merge in, commit your changes then create a pull request (PR) with _WIP_ or _Work In Progress_ in the title.

        https://github.com/nitpweb/nitp-web-front/pull/new/master

4. Once your changes are ready for final review, commit your changes then modify or **create your pull request (PR)**, assign as a reviewer or ping (using "`@<username>`") a mentor/maintainer (someone able to merge in PRs) active on the project

5. Allow others sufficient **time for review and comments** before merging. We make use of GitHub's review feature to comment in-line on PRs when possible. There may be some fixes or adjustments you'll have to make based on feedback.

6. Once you have integrated comments, or waited for feedback, a maintainer should merge your changes in!

## Branching

Our branching strategy is based on [this article](https://nvie.com/posts/a-successful-git-branching-model/) which I suggest you read.

- **master** a history of releases, once merged to from develop and tagged we create a release on the play store & GitHub releases.

- **develop**  the actively worked on next release of the app, what we branch off of while working on new features and what we merge into upon feature completion

All branches should have distinct history and should be visually easy to follow, for this reason only perform merge commits when merging code either by PR or when synchronising.

If you wish to rebase you should be following the [Golden Rule](https://www.atlassian.com/git/tutorials/merging-vs-rebasing#the-golden-rule-of-rebasing) and adhere to the advice in the heading [Aside: Rebase as cleanup is awesome in the coding lifecycle](https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase).

## Development

The project uses a Next.js deployment system to generate a Server-Side Rendered web app from the react codebase. To start a development server

1. Clone the project.
2. Open a terminal in the root of the project.
3. Make sure you have node installed on your system. If not, you may install it from [here](https://nodejs.org/en/download/).
4. Run `npm i` to install all the dependencies.
5. Run `npm start dev` to start up a development server.
6. Navigate to https://localhost:3000/ to view the app.

## Linting

PR should be linted properly locally. There is no system restriction applied for this, however, PRs will not be merged until they contain properly formatted code.

## Hope you have a wonderful experience contributing to the project 🎉