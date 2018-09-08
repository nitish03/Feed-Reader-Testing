# Feed Reader Testing

## Introduction

This project is provided by [Udacity](https://github.com/udacity) and it is a web-based application that reads RSS feeds using JavaScript framework [Jasmine](http://jasmine.github.io/).

## How to complete the project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric).

## How to install?
Download the repository then click on the index.html file and launch in the browser, It will run the test but first will show up some articles feeds, to see the test scroll down.

## The test includes several parts.

### First test, RSS Feeds
1. It ensures all feeds have been defined.
2. It ensures feed's URL is defined and it is not empty.
3. It ensures feed's name is defined and it is not empty.

### Second test, The Menu
1. It ensures that menu element is hidden by default.
2. It ensures that menu changes the visibility when you click on the menu icon.

### Third test, Initial Entries
1. It ensures when the loadFeed function is called and completes its work.
2. It ensures there is a at least single entry element within the  feed container.

### Fourth test, New Feed Selection
1. It ensures when a new feed is loaded by the loadFeed function that the content actually changes.
