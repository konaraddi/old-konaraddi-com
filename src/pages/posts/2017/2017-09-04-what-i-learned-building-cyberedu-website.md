---
title: What I learned from building the CyberEdu website
date: 2017-09-04
category: life
---

This past summer I worked at CyberEdu. I led a team of 4 students in the development of UMD CyberEdu's website. Here's what I learned.

## GitHub for collaboration

When working on a team of 4 others, it's very inefficient to email each other a zipped file of code. Having a shared Google folder can make it a little more efficient, but not by much. GitHub offers an efficient solution.

Using a `git` client like [GitHub](https://github.com) makes it easy for multiple people to collaborate on a single codebase. With a single command, team members can get the most up-to-date codebase on their local computer. With another command, members can see the recent changes without even having to open their browser. And running a few commands will allow team members to publish code with a message on what changed.

By setting up [GitHub Pages](https://pages.github.com/) for a website-in-progress, team members can visit the website in development and see it get built from start to finish before having to publish the website. This makes it easy for supervisors to see how the website is coming along without having to download all the code and whip up a local web server themselves. Setting up the GitHub Pages is a one time task, so it doesn't become a burden for team members to maintain.

## Reduce the size of images

Our images used to take up several megabytes of space and would load slowly. Think images revealing themselves from top to bottom with a slow, stuttering animation. The larger the size of the image, the slower it loads. Compressing images can reduce the size of the images with negligible losses in quality. However, sometimes this won't be enough. Depending on where the images are to be displayed, it can be helpful to resize the images. For example, an image that is supposed to serve as a thumbnail doesn't need to be 960 x 960 pixels. A thumbnail with the size of 128 x 128 pixels could be sufficient and will load signficantly quicker.

Here are the two steps to reducing the size of an image:

1.  **Resize the image** depending on how large the image will appear to the user. It doesn't make sense for an image's size to exceed the size when displayed. You may find it beneficial to have various sized images for various device screens (e.g. smaller images for mobile).
2.  **Compress the image.** I recommend using online tools like [compressor.io](https://compressor.io) for image compression.

## CSS and JavaScript inline or separate files?

If all the CSS and JavaScript for a webpage were to be written inline, i.e. in the HTML file in between `<style>` and `<script>` tags respectively, the webpage would load faster than if the CSS and JavaScript were to be written in separate files. But large amounts of CSS and JavaScript that are written inline will only load faster for the user's inital/first visit. Inline CSS and JavaScript does not get cached by the user's browser. So if the user were to revisit the website, it would load slower than if it had all been cached. And the practice of inlining CSS and JavaScript makes the website less organized, making it harder for collaboration.

Keeping CSS and JavaScript in separate files will let the user's browser cache them, making the website load quicker on revisits. The practice of having folders for CSS and JavaScript can keep the website organized for collaboration.

If there are small amounts of CSS and JavaScript, then it's probably worth inlining them because it will load quickly on the initial and subsequent visits.

## Sass and CSS

After a while, the CSS for a website can start to get messy and difficult to maintain. Changing a single color across the website can require multiple `CTRL + C` s and `CTRL + V` s of hex values (e.g. `#3F51B5`)throughout several CSS pages. Common media queries will be used over and over again, each time specifying the pixels for the min/max width; this becomes tedious when we need to change the pixels in several places at once. Using a text editor's find and replace feature can aid with this.

Here's where Sass comes into the picture. It provides variables, functions, and more for your CSS. Changing the color scheme of your website becomes easier and handling media queries for responsive design becomes much more manageable.

Note that Sass is a CSS pre-processor, meaning that Sass is written and then converted to CSS. It is not meant to be linked directly to the HTML file.

[Learn more about Sass](http://sass-lang.com/)

## Mustache for templating

While developing the CyberEdu website, we ran into a problem where we were repeating a lot of identical HTML code. The only difference was the content of the HTML, the text that went between the tags.

So we used [mustache](https://mustache.github.io/), a tool that lets us reuse a specified HTML template (e.g. `template.html`) and provide content in the form of JSON data (e.g. `data.json`). `Mustache` can be used on either the client side or before publishing the website (using the CLI).

## Google PageSpeed Insights

[Google PadeSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) is a great tool for finding ways to optimize a published website on the web. Our team used it to figure out how we could make our website load faster. This is how we learned about the benefits of compressing CSS, JavaScript, and images. However, sometimes what Google PageSpeed Insights recommends may not be the best option. For example, sometimes it over compressed our images or suggested loading fonts/css after the page loads (which can lead to [the flash of unstyled content](https://en.wikipedia.org/wiki/Flash_of_unstyled_content)).

## Task runners

Our team found that several helpful tools were available as `npm` modules. For example, `http-server` (whipping up a local web server), `purifycss` (compressing CSS and removing the unused CSS), `minify` (minifying JavaScript), and `mustache` (for templating).

We found ourselves having to run the same set of commands over and over again in order to build and test the website after every change.

```bash
# For sass
$ sass styles.scss styles.css --sourcemap=none

# Minify css
$ purifycss index.html html/* js/* styles.css --min -o styles.min.css

# Minify js
$ minify js/resources_page.js > js/resources_page.min.js

# For templating a list of cards with content
$ mustache -p mustaches/resource_card.mustache data/resources.json mustaches/resources_cards_list.mustache > html/resources_cards_list.html

# Starting the local web server
$ http-server -a localhost -p 8000
```

We chose to use `npm run-scripts` as our build process. By defining several commands in `package.json` (and having Nodejs installed) we could make our own custom, easy-to-remember-and-type commands that others could use, provided that others have Nodejs installed and all necessary dependencies also listed in `package.json`.

Here's a snippet of our `package.json` file:

```json
....
"scripts": {
    "build": "./build.sh",
    "build-live": "watch './build.sh' ./mustaches",
    "test": "echo 'testing npm run to see if it's working and, if u see this, it's working'",
    "start": "./node_modules/.bin/http-server -a localhost -p 8000 -c-1"
},
....
```

Executing `npm run build` would run `./build.sh`. Executing `npm build-live` would run `watch './build.sh' ./mustaches`. This was essentially aliasing but with `npm run scripts` so that all team members could use these commands.

Complementing the `npm run-scripts`, we also used a shell script that would execute commands.

Here's our `build.sh` file:

```bash
#!/bin/bash

# For building the sass
sass styles.scss styles.css --sourcemap=none

# Minify css
./node_modules/.bin/purifycss index.html html/* js/* styles.css --min -o styles.min.css

# Minify js
./node_modules/.bin/minify js/resources_page.js > js/resources_page.min.js

# For building the resources page
#./node_modules/.bin/mustache -p mustaches/resource_card.mustache \
#data/resources.json mustaches/resources_cards_list.mustache > html/resources_cards_list.html
```

This file contained the set of the most used commands.

## Keep it DRY and quick

While developing the CyberEdu website, our team did not have a mentor. We also did not have much experience with website development. The way we found out about the tools above was by following two rules:

1.  Don't repeat yourself (DRY) while you're coding.
2.  Make the development quick, be efficient

By following the above 2 rules, our team was able to improve the CyberEdu website and improve the development phase of the website despite having no mentor.

## Final thoughts

At the time of this post, the website looks nice on mobile.

But it appears to be lacking on desktop since it's not utitlizing the left and right margins. This is something our team plans on fixing when we have more content for the website to showcase.

If you disagree, found a mistake, or would like to share your thoughts on this post, please feel free to contact me. I'm always interested in learning more about how I can be better and if I made any mistakes.

Thanks for reading this post!
