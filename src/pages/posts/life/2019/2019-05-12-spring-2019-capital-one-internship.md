---
title: Spring 2019 SWE Internship at Capital One
date: 2019-05-12
---

I was an intern on the C4ML Forecasting Platform team where I worked on forecasting the number of Capital One credit card holders that will charge off in the upcoming months. 

---

This past spring, I was a returning intern at Capital One's lab in College Park where I worked part-time and remotely with the Forecasting Platform team in NYC. 

The first few weeks were a little slow since we were in the process of wrapping things up from MALCOLM (the same project I worked on when I was interning at Capital One in Fall 2018). I put some existing documentation on GitHub pages and fixed some bugs in MALCOLM's front end. Then we moved on to our next project.

## Loss Forecasting

The team's next project was to predict overall losses so we can avoid them from occurring to some extent (the forecasting will influence the credit policy which affects losses) and to determine the amount of money to set aside to pay off our future losses.

For around a month or so, there wasn't much work to do because the team was in the process of ironing out the project details and learning about time series analysis so I spent much of my time learning about time series analysis and forecasting by reading through some of the chapters in [Forecasting: Principles and Practice](https://otexts.com/fpp2/).

My internship project was to forecast the total number of charge offs, since that correlates with losses, using ARIMA and MARIMA models. An ARIMA model tries to forecast the next data point using previous data points. A MARIMA model does same but it also takes into consideration a set of given variables. To predict the next charge off monthly totals, an ARIMA model would use the previous charge off totals and a MARIMA model would do the same but it also takes into consideration the totals for different types of charge offs (or whatever set of variables you choose from the data). We're interested in comparing results from ARIMA and MARIMA models because both are designed for time series data and the charge off data was time series data. We would expect the MARIMA model to outperform the ARIMA model because it takes into consideration multiple variables.

I developed a few ARIMA models to forecast the total number of charge offs based on the monthly total number of charge offs since 2000. Then I made a MARIMA model using data from multiple types of charge offs to predict the total number of charge offs. Then I compared the MARIMA models with the ARIMA model to see whether the MARIMA produced more accurate forecasts for each type of charge off by using more predictors. The ARIMA models' forecasts more closely matched the actual data and the MARIMA model's forecast was too extreme but there could've been a better set of predictors to use in the MARIMA; I should've considered the age of a bank account when developing the MARIMA model.

## Conclusion

I learned a lot about time series modelling and enjoyed using R with RStudio. Some of the material I learned at work made it easier to pick up the material in my Introduction to Data Science course.

If I could do my internship again, I would communicate with my supervisor more often and keep her posted with my progress on the work I was doing. There were a couple times where it seemed like my supervisor didn't know I was doing the modelling work that she had explicitly assigned me until I messaged her the results over Slack.

Finding motivation to do the work was easy because the modelling was intrinsically interesting work. I'm more interested in front end work but I think it's good to be aware of some machine learning techniques so I can recognize problems that could be solved with those techniques and have a general idea of how to develop the solution.
