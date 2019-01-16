---
title: The Future of Front End Development
date: 2018-08-15
category: Content
---

This post is inspired by [this Reddit post](https://www.reddit.com/r/webdev/comments/94uivb/where_do_you_think_web_dev_will_be_in_5_years_10/?utm_source=reddit-android) and I want to expand upon [my comment](https://www.reddit.com/r/webdev/comments/94uivb/where_do_you_think_web_dev_will_be_in_5_years_10/e3offks?utm_source=reddit-android).

This post assumes familiarity with web development and makes a lot of guesstimates.

## Web vs Native

For front end applications (i.e. apps with a user interface), the web will be preferred over native for an increasing number of cases.

### Browsers have access to hardware-related APIs

Web apps can already do most of the things a mobile app can do. They have access to the location, bluetooth, sensors, and can even send notifications (see [What Web Can Do Today](https://whatwebcando.today/) for more). As more hardware-related APIs become accessible via the browser, web apps will get closer and closer to doing everything a mobile app can do.

### Web apps can work offline

Web apps can go offline and be available on your homescreen (checkout [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)). So you can use a web app that only needs access to the Internet to either fetch content or update itself, which is exactly what content-focused mobile apps do today. Building a progressive web app will become easier over time as more tooling for it becomes available. CLI tools like `create-react-app` and `@vue/cli` have made setting up a progressive web app quick (albeit I can confirm configuring the progressive web app with `@vue/cli` is a frustrating experience at the time of this post).

### Faster to start using a web app

Using a web app for the first time is significantly smoother than using a mobile app for the first time. To use a web app, just visit a link (and, if it's a Progressive Web App, then maybe add it to your homescreen). To use a mobile app, you either visit a link or you search for it, then you download it, wait for it to download, and then open the app (which is usually slowest the first time around). The process of using a mobile app for the first time will take several seconds more than using a web app for the first time. This level of friction is at least one reason why we don't download apps too often.

### Central Marketplace

A central marketplace makes it easy for users to discover apps. Plus, those apps are usually scanned for malware. Mobile apps have central market places (e.g. Play Store) but web apps do not have a central market place.

If there's no market place for web apps, and web apps could make mobile apps mostly obsolete, then we'll have to let word-of-mouth or search engines decide what we download.

Android P's slices being extended to web apps would be pretty neat. There'd be no need for even installing the web app. Just Google "uber to home" and make a payment.

### Developers will write less code

Why build separate desktop apps for Windows, MacOS, and Linux or separate mobile apps for Android and iOS when you can just build one web app that runs everywhere? Right now, there are tools for doing something similar (e.g. React Native, Electron) but these tools either transpile developer's code to native code, produce another browser, produce resource-intensive/inefficient apps, or a combination of those.

I bet before we see desktop apps being fazed out in favor of offline progressive web apps, we'll see something similar to Electron but with almost none of the drawbacks because it'll use WebAssembly for the near-native performance.

### Performance

Today, mobile and desktop apps almost always outperform their web app counter parts. Heavy games are almost always mobile or desktop apps. But with the onset of [WebAssembly](https://webassembly.org/), web apps will attain near-native performance despite still being in the browser. The performance gap between web apps and native apps is going to shrink drastically.

We'll see games like League of Legends and Fortnite being played _in the browser_ with a negligible or near negligible drop in performance. [Here's a demo](https://webassembly.org/demo/) of a game built with Unity and ported to WebAssembly.

## Development with WebAssembly

As mentioned in the previous paragraph, WebAssembly will increase the performance of web apps. But how will WebAssembly impact how we build web apps?

### Ahead-of-time compilation

WebAssembly is a target for compilers and it's unlikely one would write WebAssembly by hand. So developers will build web apps using programming languages that compile to WebAssembly ahead of time (AOT) and then ship the resulting WebAssembly modules.

Being able to build web apps that compile ahead of time is awesome; **front end developers will be able to catch errors _before_ runtime**. When you build a web app with JavaScript, you catch almost all your errors at runtime. The best line of defense is writing a bunch of tests so they catch errors at runtime at least before code gets shipped. To catch errors before runtime, many developers have turned to TypeScript. TypeScript has become popular because it adds types to JavaScript and thus allows for some checks before runtime, both during transpilation and while writing code with TypeScript plugins/extensions/linters. TypeScript is also easy to get started with since it's a superset of JavaScript and the somewhat self-documenting nature of typed languages is a nice bonus.

A lot of people on Twitter, Reddit, GitHub, and more, have cited Rust as being positioned for popularity once WebAssembly matures. However, I somewhat disagree. Sure, Mozilla is pushing for Rust to be the go-to language to develop WebAssembly modules, and Rust, from what I've heard, is a nice language with new ideas. But it doesn't make sense for Rust to become popular because it takes a while to learn Rust and it takes longer to write programs in Rust compared to JavaScript. Once WebAssembly supports languages with garbage collection, Go will be preferred over Rust for writing WebAssembly modules because it's performance is near Rust and yet it's significantly easier to learn and quicker to write. From a business perspective, it makes a lot more sense to use Go over Rust, unless your business is game development, client-side machine learning, or anything else that requires the absolute best performance. In-browser game development will be done with Rust and C++.

Most web apps will be written in at least some JavaScript and include at least some WebAssembly modules.
Small or low-maintenance webapps will be mostly written in JavaScript because neither performance nor the need for catching errors ahead of time are concerns. Large web apps will be mostly written in AOT compiled, statically typed languages for the best performance and because catching errors before runtime enhances maintenance and development. I doubt web apps will use solely JavaScript or solely WebAssembly modules.

## Will _all_ front end apps be on the web?

I doubt it; there will be native apps with user interfaces but it won't be anywhere near as common as it is today. It'll likely be reserved for apps that need the absolute best possible performance and maybe security. As far as security is concerned, I don't know if either web or native is clearly a better option. However, I suspect governmental bodies will prefer native because the idea of being in control of the hardware and not being connected to the Internet _sounds_ like it must be more secure.

## Conclusion

Lots of exciting stuff happening and about to happen with the web. Most front end applications will be on the web within the next two decades. Few jobs in mobile or desktop app development will remain.

Full disclosure: I'm attending university and, apart from internships, I do not have real world experience in software development. I may be terribly wrong about many things in this post.
