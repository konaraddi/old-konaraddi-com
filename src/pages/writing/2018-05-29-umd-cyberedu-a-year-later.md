---
title: University of Maryland CyberEdu — A Year Later
date: 2018-05-29
category: Blog
---

The purpose of this post is to document past and present work at UMD’s CyberEdu program. It may be useful for upcoming CyberEdu employees. If you're not a CyberEdu employee, you may want to skip the Background section. As of May 2018, I have been a student employee at UMD CyberEdu, averaging less than 10 hours per week towards work, since late March 2017.

## Background

A few years ago, a group of students at University of Maryland (UMD), the director of the cybersecurity honors program (ACES), and an IT specialist started the UMD CyberEdu program with the intention of making an educational, interactive game that teaches students the basics of cybersecurity (how to make strong passwords, how phishing works, why using HTTP websites on open, public Wi-Fi networks is a bad idea, etc.). It would be parallel to the short readings and quizzes on sexual assault and alcohol consumption many college students are required to read and take before attending university or college.

The few that started the program had the foresight to see that there was an empty void to be filled in the coming years. And they were right. Today, there are programs and software, similar to UMD’s CyberEdu, appearing at schools across the nation.

The UMD CyberEdu program’s goal was to have the CyberEdu game become a requirement for each student at UMD to complete before attending the university. And if that worked out, then the game could be licensed to other universities and colleges. And then research could be done on the game and the students who played the game to explore the implications of games in education. But none of these things materialized (yet?).

### CyberEdu’s structure

Before we continue, let’s go over the employee hierarchy (for lack of better phrasing) in UMD’s CyberEdu program. This will be useful when discussing CyberEdu.

There are two supervisors. One of them is the director of the ACES program (a cybersecurity honors program) at UMD. The other is an IT specialist who handles cases regarding ethics and technology (e.g. a student stealing another student’s university login credentials) at UMD. Both are interested in research projects (the director of ACES has a PhD).

There are five students working for CyberEdu. Supervisors meet with the students once every other month on average. It’s relatively hands off. The high level decisions are made by the supervisors with the input of the students. All other decisions are made by students.

### ACES plays the CyberEdu game

The students who made the CyberEdu game were graduating the same year I joined. The ACES director was one of the two supervisors of the CyberEdu program. Students in ACES were the beta testers of the CyberEdu game. Each ACES student had to play the CyberEdu game for a grade. As a member of ACES, I played the game too.

The game was buggy, some called the game “broken”, and very slow. The storyline in the game was subpar. I had only one positive thing to say about the game: it’s impressive that a group of students with no mentor and no experience managed to build something of such complexity.

## Joining CyberEdu

In March 2017, a friend told me about an on-campus job opportunity with UMD’s CyberEdu program.
The original team of students working on CyberEdu were graduating and were looking for students to take their positions and continue the work on the CyberEdu game. I emailed the program’s supervisor, got an interview, and later got the part time job.

I and the other four people who joined CyberEdu were the new team of employees that would replace the graduating seniors (the previous, original team). We were to work on the CyberEdu game for \$10/hr for up to 10 hours per week.

## Building the CyberEdu website

Before we were to start working on the CyberEdu game, our supervisors wanted us to build a website for the CyberEdu game over the Summer of 2017. We spent a part of the summer building a website. It wasn’t a large website. But building it took a while because we were spending only a few hours on it per week, none of us had prior web development experience, and we didn’t plan out the layout ahead of time. A lot of time was spent reiterating and redoing parts of the website. If we had made rough sketches of how we wanted each portion of the website to look before we started building the website, then we could have built the website significantly quicker.

We learned a lot from building the website. We learned JavaScript, Git, how to use npm, and more. I wrote about what we learned in an earlier post titled “What I learned from building the CyberEdu website”.

## Abandoning the CyberEdu game

After we built the website, it was time to work on the CyberEdu game.

The previous, original team who started and worked for CyberEdu left behind no documentation for the web-based game they had developed.

The CyberEdu game was written in JavaScript without modern tooling. The game was made by rendering elements in the DOM as if the elements were blocks to be rendered on a pixel-by-pixel basis. But it didn't look like retro video games because the previous team had set up a coordinate system of pixels then used to make jpegs and gifs appear on the screen. The width and height of the game were fixed so the game’s UI didn’t scale across screen sizes. In other words, they had set up their own system of pixels to be used for positioning gifs and jpegs with JavaScript then attached event listeners to the jpegs and gifs for interactions. I don’t know what the thought process was when making these decisions but it seems like they deliberately avoided writing CSS for positioning elements.

Cloning the repository from Github took a while because the previous team had uploaded several gifs, videos, and uncompressed jpegs to the Github repository. So the repository was [over a gigabyte in size](https://help.github.com/articles/what-is-my-disk-quota/#file-and-repository-size-limitations).

The game was crippled by bugs and poor organization of programming logic. There were no unit tests. So every aspect of the game had to be tested manually after a change was made. I think that's why there were so many bugs.

For the previous team, maintenance was an afterthought. They thought they would be the only ones working on the CyberEdu game when they started it. They must have also thought it would be done by the time they graduated. One could argue those assumptions are reasonable since they spent four years working on it, but the assumptions were wrong.

It’s hard to blame the previous team for their shortcomings because they were just students with no experience and no mentor. The supervisors of UMD’s CyberEdu program did not have experience with game or web development either. However, the upcoming team and I did not have game or web development experience either.

Wait, so why were we hired?

Well, there were only five students who wanted a part time job with CyberEdu because the positions were poorly advertised so only half the students in ACES knew about it (no one else at UMD knew about it) and most, if not all, ACES students had a poor perception of CyberEdu because of the low quality game they were forced to play for a hour for a homework grade (the class was unrelated to CyberEdu but the director of ACES is a supervisor for CyberEdu so it almost checks out). So all five students, including me, got a job.

The CyberEdu game's lack of documentation, subpar organization of code, and unnecessary complexity made it difficult for me and the new team members to get started. We never contributed code to the game. It was decided that we would be better of starting over from scratch. Our supervisors were unhappy about that because four years and thousands of dollars were spent on a buggy, low-quality, and unmaintainable game. Our supervisors wanted us to continue to work on the game [because they had already spent resources on it](https://en.wikipedia.org/wiki/Sunk_cost).
We convinced one of the supervisors that it should be abandoned. The other still wants to do something with the game but hasn’t said much about it.

[Here’s the Github repository for the CyberEdu game](https://github.com/UMDCyberEdu/game). All credit goes to the previous, original CyberEdu team.

## Motivations of those involved

At this point, it’s worth taking a step back to look at the motivations of everyone involved.

_Why did I and other students want to work for CyberEdu?_

To make money, get experience, have a potentially interesting project on our resume to talk about, and to learn something new.

_Why did the supervisors of CyberEdu start and continue the program?_

They were investing money, from University of Maryland, into CyberEdu with the hopes that years down the road it would blossom into an interesting research project. Five years after CyberEdu started, it hasn't gotten there quite yet but there's still hope and reason to believe it could become an interesting research project.

## CyberEdu Pivots

After building a website for the CyberEdu game and then abandoning the game, the team and I proposed an idea: a webapp with short readings, videos, and quizzes on cybersecurity related topics.

In contrast to the game, we wanted to build something that would be easy to iterate over, easy to contribute to, maintainable, modular, and focus more on the delivery and quality of content than the technical details.

A problem with the CyberEdu game was adding new content meant adding lots of code too. As a result, the game had lots of similar pieces of code. But our web app would have code written up front and then adding content would be as simple as putting markdown files in a folder and running a command to render them into pages.

We made a mockup of what we'd like our webapp to look like using Figma.
[Here's an early mockup](https://www.figma.com/proto/ORkv3rerirVfFih11cIO4Fps/CyberEdu?scaling=contain&redirected=1&node-id=4%3A5).

It's supposed to be a small course and similar to what you'd see at Khan Academy and Lynda Training.

We decided to look for a front end framework that would make development and maintenance as easy as possible.

### React vs Vue

After some research, the team decided we would use either Vue.js or React.js to build the web app.

Both React and Vue are popular front end frameworks.
Both enable developers to compose reusable components.
Both offer an implementation of the Flux design pattern (in case the application would need it later).
React has Redux (Redux is view-layer agnostic but is associated with React since Dan Abramov created Redux and works on React) and Vue has Vuex.
Both offer solutions for client-side routing.
Both frameworks make it easier to maintain applications.

We didn't care about the small difference in performance because our application would be relatively small so the difference in React and Vue's performance would likely be negligible and we expect performance to depend largely on the code written anyway. After all, one could make slow Vue/React/_insert-any-front-end-framework_ apps. (But Vue did beat React in performance according to most posts at the time.)

Initially I wanted to use React because it's just JavaScript. Vue is also JavaScript but writing Vue applications means memorizing the Vue's HTML directives (e.g. `v-if`) which isn't JavaScript. With Vue, it feels like there's more magic occurring. But **the team and I chose Vue** because Vue's [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) make writing HTML/CSS/JS really neat and doesn't require developers to know JavaScript as well as they would for React.

## CyberEdu meetings

CyberEdu meetings were rarely productive. As the lead developer of the team, I felt like I kinda had to push people into doing something constructive during the meeting. One member of the team would often say "Let's do X during the next meeting". Sometimes I'd agree and sometimes I'd say something along the lines of "Why don't we knock it out now? It'll be quick and we can start with Y next meeting".

Meetings were often us postponing things or loosely planning out stuff. Concrete details were rarely stamped out. Maybe it was because we were afraid of being wrong and having to go back and change things. Having to go back and change things is inevitable so I think it's best to try to do most things right anyway. But I also believe the team was incentivized to hold and attend meetings because they got paid for their time in meetings. If one was looking to make money by doing the least amount of work than look no further than holding and attending a meeting.

Most meetings were inefficient. Few were fruitful.

I found that the best meetings were the ones that had a focus or explicit purpose before the meeting began.

## What's next?

We’re currently working on building a web app focused on educating students on the basics of cyber security through short readings, videos, and follow up quizzes. I hope it will be adopted by UMD and other universities in the future when we are done.

Sometime later I'd like to fork the CyberEdu webapp into an open source template where other schools can create a small, custom course on the web too.
