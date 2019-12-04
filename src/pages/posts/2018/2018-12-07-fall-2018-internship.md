---
title: Fall 2018 Software Engineering Internship at Capital One
date: 2018-12-07
category: life
---

TL;DR: I interned with the C4ML Credit Monitoring team where I added new components and endpoints to a web app used by engineers within the two largest, asset-generating programs at Capital One. The web app enables engineers to view insights for their models from a residual analysis pipeline. I also developed a model to predict charge offs.

---

This past fall I was a software engineering intern at Capital One. I was amongst the first batch of interns at Capital One's [new](https://today.umd.edu/articles/capital-one-tech-incubator-opens-diamondback-garage-b93bbf87-a326-44c6-a207-5f4c418b387f) [lab](http://www.dbknews.com/2018/12/10/umd-college-park-discovery-district-wework-capital-one-hotel/) in College Park.

It was part time (~15 hours per week) and I worked remotely with the NYC Credit Monitoring team within Capital One's Center for Machine Learning organization. Most coworkers were working in New York City.

## Introduction

The Credit Monitoring team is building a machine learning pipeline, called Malcolm, for use amongst data science and engineering teams within Capital One. Data scientists and engineers can submit a machine learning model to the pipeline and glean insights on their model. Malcolm can help engineers find features that could be strong candidates for further feature engineering, discover correlation between features and residuals, determine whether a model is over or underestimating risk at a feature level, and much more.

Malcolm is a work in progress but is currently used by two of the largest asset generating programs within Capital One's Card organization (presumably for dogfooding). The Credit Monitoring team is working on making Malcolm ready for production so it can be used by other teams besides two teams under Card.

## The work

I worked on the web app for Malcolm (`malcolm-web`).

The Malcolm pipeline deposits insights in AWS S3 buckets in the form of mostly html, csv, png, and json files and then `malcolm-web` displays these results for engineers. Before I started as an intern, there was one developer working on the web app. The developer left Capital One and, apart from a README depicting the folder structure and how to run the web app (the usual `npm start`, `npm t`, `npm run build`), there was little knowledge transfer.

The web app is built with React (front end) and Flask (back end). Flask is used to fetch assets from S3 to be served to the front end and as a proxy for authenticating with S3 (so the secret/password for S3 authentication is on the server and not in the user's browser). React is used to display assets from Flask.

### What I did

I added new components and routes to the front end and new API endpoints to the back end. The below is a detailed list of additions and changes made.

Front End Changes

- UI Enhancements
  - Added a submit button for viewing results for a specific model (previously, users just had to know to click Enter with the cursor in the textbox)
  - Added a loading animation (previously, users were unsure if the web app worked because there's no visual cue that something is loading and stuff is slow load)
  - Added ability to sort table by column headers
  - Added tooltips to annotate stuff
  - Added alternating stripes for tables
  - Made the logo also behave as a home button
- New Features
  - Added lightboxes to graphs with zoom in/out options
  - Added link to download or view raw results from GAMERA
  - Added new page for viewing results for models that used ensembling methods
    - Somer's D scores, a lift chart, feature and chi square values, and heatmaps
- Other
  - Created a FAQs page
  - Refactored components for reusability and broke down monolithic components into smaller, isolated components that do one thing

Back End Changes

- Added an API endpoint to serve results from GAMERA
- Added an API endpoint to process and serve ensemble results
- Added an API endpoint to fetch any given file from S3 and serve it as it is

I also went through some of Andrew Ng's machine learning course on Coursera and made a machine learning model to predict charge offs based on credit bureau data. It wasn't very accurate (AUROC = 0.55) but it was ~~marginally~~ better than flipping a coin. I used Pandas to manipulate and preprocess the credit bureau data then scikit-learn to create a model using a random forest classifier.

## Thoughts

Since I was working remotely, almost all communications with the team were through Slack (messaging) and Zoom (video calling). Slack is the most complete chat application I've used. It makes GroupMe look primitive. But sometimes I was unsure whether a coworker had a positive, neutral, or negative reaction to something I said because some emojis in some contexts are ambiguous.

I think there should have been code reviews so that I learn to write better code and so other engineers have a better time maintaining and developing with the code I wrote.

Coworkers were very friendly and I had a good experience.
