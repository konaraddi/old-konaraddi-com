---
title: Summer 2018 Internship at Thermo Fisher Scientific
date: 2018-08-22
---

This past summer I was an intern at Thermo Fisher Scientific. It's a large biotech company that makes and sells both software and hardware to other biotech companies and research labs around the globe. If you've worked in a bio-related research lab, then you've likely seen the company's name printed on an instrument.

## The work

When there was work, I was usually writing SQL queries to validate or extract data, staging tables with Informatica, or generating reports in Cognos. Cognos is a browser-based tool from IBM that joins all the dimension tables with the corresponding fact table(s) and then allows the user to drag and drop fields to create a tabular report. It works best in Internet Explorer. At the time, I thought the people who built it must have been CSS gods because it looks just like an application built with Java. But, in hindsight, it was probably a Java applet. However, it'd be pretty dope if IBM has a style guide or pattern library complete with default-Java-app-looking templates and components for the web. It'd be both ugly and beautiful. But I digress.

For staging tables, I used Informatica. It's a desktop application that makes it easier to stage tables. However, there were a lot of repetitive parts to it that could've (and should've) been automated by Informatica.

For example, let's say you have some data coming from several tables in database A and you need to put the data into several tables in database B. Let's suppose you need to run a filter across all fields that are strings (e.g. maybe you want to trim them to remove outer white spaces). You'll need to copy and paste the trim filter for _every_ field in _every_ table. It's not just a simple copy and paste either, because you'll need to change the name of field that the filter is running on. So the `CUSTOMER` field would get `LTRIM(RTRIM(CUSTOMER))`, then the `CUST_ADDRESS` would get `LTRIM(RTRIM(CUST_ADDRESS))`, and you would keep using the `LTRIM(RTRIM(X))` filter where `X` is the field name. There's no way of automating this; so it'll take `N * M * Z` time where `N` is the average number of fields per table, `M` is the number of tables, and `Z` is how long, on average, it takes for you to type `LTRIM(RTRIM(_____))` for each field. Since Thermo Fisher Scientific is a big company with lots of tables, it usually takes at least a couple hours but largely depends on the scope of the project.

There was another time where I came across a slow, complex, error-prone and repetitive process that could be automated _without_ changes to Informatica itself. So I automated almost all of it.

Another intern and I had to generate SQL scripts for creating tables for a specific database `A`. These scripts were to be modelled of the scripts for the generation of tables in database `B`. But we couldn't just copy and paste the scripts for generating tables in `B` and use them for the tables in `B`. We had to change the types of most fields because the databases `A` and `B` were from two different providers (one was Oracle and the other from SAP) so the names of certain types would differ. We also needed to add 3 new fields to each table. Then we had to look for certain fields that needed to be removed because we needed them for `A` and but not for `B`. In addition to this, we only needed a portion of the scripts for tables in `B` and needed to discard lines that followed a certain pattern. After removing the irrelevant part, it needed to be replaced by several other lines of SQL queries. But these weren't just copy and paste queries because we needed to change the names in the queries for each SQL query depending on the name of the current table we were generating for database `A`. We had to go through this process for 150 tables while remembering the above rules.

If we manually did the above for each table to be generated, then it would take us around ~30 seconds to make a SQL script for one table in `A`. For 150 tables, that's ~1.25 hours. But we didn't need to do it manually.

The instructions we were given can be broken down and arranged into a set of rules (specifically if/then statements) and translated to a program for the computer to run. So I wrote a program in JavaScript that would take the exact contents of the SQL scripts for database `B` and the name of the table to be created in database `A` (so 2 inputs that can be quickly copied and pasted by the user) and then the output was the SQL script for generating the table in database `A`. It took care of changing types, replacing/adding/removing certain fields, removing certain lines that matched a Regex pattern, adding new queries, and edge cases.

A task that would've taken around ~1.25 _hours_ for 150 tables, now takes around 5 _minutes_ with the program. It's the fast, simple, error-free and less repetitive alternative.

The other intern and I also created a repository on SharedPoint for consolidating project documentation and making all documentation easily accessible. Before the repository, project documentation was scattered across employees' PCs and buried in Outlook email threads which made it difficult to find documentation and often resulted in several individuals asking for the same documents at different times.

## Down time

There was a lot of down time; time where I had no work to do despite asking if there was any work for me to do.

So, in addition to aimlessly surfing the web, I did some stuff in my free time.

Read the following books:

- [_Atomic Design_](http://atomicdesign.bradfrost.com/) by Brad Frost
- [_Deep Work_](http://calnewport.com/books/deep-work/) by Cal Newport
- [_The Design of Everyday Things_](https://mitpress.mit.edu/books/design-everyday-things) by Don Norman
- [_The Subtle Art of Not Giving A F\*ck_](https://markmanson.net/books/subtle-art) by Mark Manson

Also read through some of _Cracking the Coding Interview_ and solved a few questions on Leetcode.

Completed two online courses:

- [_Learning How To Learn_](https://www.coursera.org/learn/learning-how-to-learn) on Coursera
- [_Better Web Typography for a Better Web_](https://betterwebtype.com/) from Matej Latin

Worked on a web app to recursively visualize the prerequisites of a course offered at my university.

Folded a few new origami models and memorized a new model (the Origami Man).

Walked around a lot because otherwise I'd be sitting around for hours.

Wrote a couple posts for my personal website (excluding this one).

### An observation

During the days where I had lots of free time, I noticed that if I spent my time aimlessly surfing the web then I felt tired when I got home. But when I read a book, worked on a post, or did some origami, I usually felt energetic, or at least less tired, when I got home. I believe it's because activities with no purpose tend to drain energy while activities with purpose can provide some juice (or at least be less draining). And I guess that's because when you're aimlessly surfing the web, you're looking for a purpose, which introduces some complexity and thus drains energy. On the other hand, doing origami or reading a book is a specific activity with a purpose and can be considered more simple or straightforward than aimlessly surfing the web so it drains less energy.
