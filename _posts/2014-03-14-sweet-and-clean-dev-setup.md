---
layout: post
date: 2014-03-14 20:08:14+00:00
permalink: sweet-and-clean-dev-setup
title: "Sweet & Clean Dev Setup Guide for the Newbie Coder: Mac OSX"
comments: true
categories:
- code
---

When you're new to coding the web, it can be overwhelming. There are so many tools, languages, plugins, frameworks, terminologies, resources, and documentation, it's easy to get overwhelmed. I know I certainly did.

There are two setup guides that I often refer to when getting a computer **"code ready"**, they are Nicolas Hery's [Mac Dev Setup](https://github.com/nicolashery/mac-dev-setup) and Moncef Belyamani's [Install How-to](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/). Both provide an exhaustive list of everything you need to get up and running on any MAC OSX system but the entire list can be very overwhelming for a someone new to coding.

To help navigate these torrid waters as a newbie coder, I created a straightforward setup guide that walks you through everything you will need to code for the web. It is divided into two categories: *Basic Setup* and *Enhancements*. The [Basic Setup](#basic-setup) guides you through the essential tools, plugins, and resources you will need to get coding right away. [Enhancements](#enhancements) are the "extras" that I personally like to use as part of my personal development workflow.

Let's get started shall we?

<h3 id="basic-setup">Basic Setup</h3>
- [System update](#system-update)
- [Internet browser](#internet-browser)
- [Command Line Interface (CLI)](#command-line-interface)
- [Homebrew](#homebrew)

<h3 id="enhancements">Enhancements</h3>

---

<h3 id="system-update">System Update</h3>

<i class="fa fa-lightbulb-o fa-lg"></i> ***Why?*** 

Many of the tools you will install for coding and development are constantly being updated based on the latest operating system. To avoid a headache and broken installs down the road its a good idea to update your computer's system any time you install something new to ensure a fresh and clean starting point. 

<i class="fa fa-download fa-lg"></i> ***How?***

- Click on the **Apple Icon** in the upper left corner of your screen.
- In the drop-down menu, select **Software Update…** which will open a new window listing any available updates
- If there updates to be installed, click the **Update** or **Update All** button and wait until all updates are complete before proceeding.

<h3 id="internet-browser">Internet Browser</h3>

<i class="fa fa-lightbulb-o fa-lg"></i> ***Why?***

In order to test how your web project will look and function you will need an Internet Browser. Most cmoputers come pre-installed with one, for example Safari on Apple Mac computers but if you don't have one you will need to install it.

Most Professional Web Developers prefer to use [Firefox](http://www.mozilla.org/en-US/firefox/new/) or [Chrome](https://www.google.com/intl/en/chrome/) because they have the most useful debugging tools and plugins which help make developing for the web more efficient. My personal preference is Chrome, so that is what we will be installing in this guide.

<i class="fa fa-download fa-lg"></i> ***How?***

- Visit [https://www.google.com/chrome/](https://www.google.com/intl/en/chrome/)
- Click the **Download** button and download the **.dmg** file to your desktop.
- Once the file has finished downloading, open the file and drag and drop the **Google Chrome** app icon into the **Applications** folder
- Open a **Finder** window and under **Devices** click on the the small "eject" icon next to the Chrome install disk image to unmount it. 

<h3 id="command-line-interface">Command Line Interface (CLI)</h3>

<i class="fa fa-lightbulb-o fa-lg"></i> ***Why?***

The Command Line Interface (CLI), also known as the "console" or "terminal" window, is a tool that allows you to quickly interact with your entire computer system on the fly. It can be intimidating at first if you have never used it before, but trust me when I say, with a little practice, it will become your best friend in the  wide world of web development.

I suggest you take the time sooner rather than letter to complete Zed. A. Shaw's [The Command Line Crash Course](http://cli.learncodethehardway.org/book/). As your development experience grows, the more comfortable you are using the CLI the easier it will be to install and work with more advanced tools in the future. But let's not worry about that right now. We've got some more installing to do!

All computers come with a default terminal window application but they are not that fancy. Let's install an even better one with features that make your work in the terminal more enjoyable. I like to use [iTerm2](http://www.iterm2.com/#/section/downloads).

<i class="fa fa-download fa-lg"></i> ***How?***

- Visit [http://www.iterm2.com](http://www.iterm2.com/#/section/downloads)
- Click the **Stable Releases** click the download link and download the **.dmg** file to your desktop.
- Once the file has finished downloading, open the file and drag and drop the **iTerm2** app icon into the **Applications** folder
- Open a **Finder** window and under **Devices** click on the the small "eject" icon next to the iTerm2 install disk image to unmount it.

<i class="fa fa-coffee fa-lg"></i> Homework

- Zed. A. Shaw's [The Command Line Crash Course](http://cli.learncodethehardway.org/book/)

<h3 id="homebrew">Homebrew</h3>

<i class="fa fa-lightbulb-o fa-lg"></i> ***Why?***

Web Developers use many different programming laguages to accomplish different tasks as part of any given project. Most programming languages come with special code libraries all "packaged" up and ready-to-go as installable code to help you accomplish these tasks.
 
> Packages are installable bundles of source code. [[Skvorc](http://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884)]

You will use so mamy of these libraries in fact, it becomes daunting and downright hell to keep track of installing, updating, managing, and configuring them all. Once you're versions become incompatible it can be a real drag trying to figure out where it all went wrong.

Enter [Homebrew](http://brew.sh/), a package manager that wranlges all of the updates and configurations for you!

For more info on Homebrew and package management read Bruno Skvorc's article called [Homebrew Demystified](http://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884)


<i class="fa fa-download fa-lg"></i> ***How?***


[Back to Top](#basic-setup)
