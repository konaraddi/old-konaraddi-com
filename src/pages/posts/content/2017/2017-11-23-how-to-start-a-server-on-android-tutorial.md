---
title: How To Start a Server on Android
date: 2017-11-23
---

Have you ever needed to whip up a test server but your laptop was too far away? Perhaps you're at a hackathon and you can't connect to a local web server on your laptop from your phone because of the network's configuration?

Well, here's some good news, you can run a server on your phone! _The following is a solution that works on Android phones._

## Install Termux

First, you'll need a terminal on your phone. [Termux](https://termux.com/) is an Android app available on the [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) and [F-Droid](https://f-droid.org/packages/com.termux/) that puts a terminal on your phone.

What exactly is Termux? Here's a description from Termux:

> Termux is an Android terminal emulator and Linux environment app that works directly with no rooting or setup required. A minimal base system is installed automatically - additional packages are available using the APT package manager.

Yup, you read that last line correctly, you can install packages! On your phone!

## Whip up the server

Before we make the server, let's make an `index.html` file so we can check if our server is working. Run `echo "Hey, it worked!" >> index.html`. This will create a file called `index.html` with "Hey, it worked!" as its contents.

For this tutorial, we're going to use Nodejs and the `http-server` module to whip up the web server.

1.  Install Nodejs by running `pkg install nodejs`. Note that `pkg` is the package manager that comes with Termux.
2.  Install the `http-server` npm module by running `npm install -g http-server`. We got the `npm` package manager when we installed Nodejs in the previous step.
3.  Run `http-server .` and now you're web server is up!
4.  Leave Termux (don't worry, it can run in the background), open your phone's browser, and go to `localhost:8080`. You should see our "Hey, it worked!" message from earlier.

Here's the full list of commands we ran:

```bash
$ echo "Hey, it worked!" >> index.html
$ pkg install nodejs
$ npm install -g http-server
$ http-server .
```

Pretty quick, right?

## What else can I do with Termux?

A lot. You can use Git, OpenSSH, Python, Ruby, and more. Checkout the Wiki to learn more about Termux: [https://wiki.termux.com/wiki/Main_Page](https://wiki.termux.com/wiki/Main_Page)

Thanks for reading!
