---
layout: post
date: 2014-03-14 20:08:14+00:00
permalink: quick-and-dirty-dev-setup-newbie
title: "Quick &amp; Dirty Installation Guide for the Newbie Coder: Mac OS X"
comments: true
categories:
- code
---

When you're new to coding the web, it can be overwhelming. There are so many tools, languages, plugins, frameworks, terminologies, resources, and documentation, it's easy to get overwhelmed. I know I certainly did.

There are two setup guides that I often refer to when getting a computer **"code ready"**, they are: [Mac Dev Setup](https://github.com/nicolashery/mac-dev-setup) by Nicolas Hery and [Install How-to](http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/) by Moncef Belyamani. Both resources provide an exhaustive list of everything you need to get code ready on any Apple MAC OSX system but they can be very overwhelming for a someone new to coding. The majority of tools listed you won't need if all you are trying to build is a basic website o app until you become a more experienced programmer.

To help navigate these torrid installation waters as a newbie coder, I created a straightforward setup guide that walks you through everything you will need to get started coding basic websites and apps with HTML, CSS, and JavaScript. It is divided into two categories: *Basic Setup* and *Enhancements*. The [Basic Setup](#basic-setup) guides you through the essential tools, applications, and resources you will need to get coding right away. [Enhancements](#enhancements) are the "extras", plugins and configurations that I personally like to use to enhance my personal development workflow and make it more efficient.

<i class="fa fa-exclamation-circle fa-lg alarm"></i> **Notes**

*As part of the installation process, you will download various tools from the Internet. Make sure you are connected to the Internet before you begin.*

*I suggest you complete the <strong>Homework</strong> section at the end of each installation step (indicated by the <i class="fa fa-coffee"></i> symbol) before proceeding to the next step as some of the knowledge gained is useful in understanding the the next installation process.*

Let's get started shall we?

<h3 id="basic-setup">Basic Setup</h3>
- [System Update](#system-update)
- [Get To Know Your System](#system-info)
- [Internet Browser](#internet-browser)
- [Code Editor](#code-editor)
- [Command Line Interface (CLI)](#command-line-interface)
- [Homebrew](#homebrew)
- [Git &amp; Github](#git-github)
- [Hosting Server](#hosting)
	
<h3 id="enhancements">Enhancements</h3>

- [iTerm](#iterm)

---

<h3 id="system-update">System Update</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

Many of the tools you will install for coding and development are constantly being updated based on the latest operating system. To avoid a headache and broken installs down the road its a good idea to update your computer's operating system to the latest version any time you install something new to ensure a fresh and clean starting point. 

#### <i class="fa fa-download fa-lg"></i> **How?** ####

- Click on the **Apple Icon** located in the upper left corner of your screen's menu bar
- In the drop-down menu, select **Software Update…** which will open a new window listing any available updates
- If there updates to be installed, click the **Update** or **Update All** button and wait until all updates are complete before proceeding

#### <i class="fa fa-exclamation-circle fa-lg alarm"></i> **Note** ####

*To use this guide effectively you must have the latest Apple Mac OS X operating system installed which currently is OS X 10.9 Mavericks, although if you have OS X 10.8 Mountian Lion that will be fine.*

<h3 id="system-info">Get To Know Your System</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

When installing tools onto your computer, it's useful to know exactly which operating system version you are currently running so you know which version of a tool is compatible with your system for download. 

#### <i class="fa fa-download fa-lg"></i> **How?** ####

- Click on the **Apple Icon** located in the upper left corner of your screen's menu bar
- In the drop-down menu, select **About this Mac** which will open a new smaller window
-  Your current OS X version is listed just underneath the Apple icon. Write this down somewhere as you will need this information handy later in this guide.

#### <i class="fa fa-coffee fa-lg"></i> **Homework** ####

Apple loves to give their operating system versions fancy names like Snow Leopard, Mountain Lion, or the latest, Mavericks. To check which commercial name belongs to your current operating system version visit <http://en.wikipedia.org/wiki/OS_X#Versions> and match your version number with the one listed on the chart.

<h3 id="internet-browser">Internet Browser</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

In order to test how your HTML code files will look on the web you will need to view them through an Internet Browser. Most computers come pre-installed with one, for example Safari on Apple Mac computers but if you don't have one you will need to install it.

Most Professional Web Developers prefer to use [Firefox](http://www.mozilla.org/en-US/firefox/new/) or [Chrome](https://www.google.com/intl/en/chrome/) because they have the most useful debugging tools and plugins which help make developing for the web more efficient. My personal preference is Chrome, so that is what we will be installing in this guide.

#### <i class="fa fa-download fa-lg"></i> **How?** ####

- Visit [https://www.google.com/chrome/](https://www.google.com/intl/en/chrome/)
- Click the **Download** button and download the **.dmg** file to your desktop.
- Once the file has finished downloading, open the file and drag and drop the **Google Chrome** app icon into the **Applications** folder
- Open a **Finder** window and under **Devices** click on the the small "eject" icon next to the Chrome install disk image to unmount it. 

<h3 id="code-editor">Code Editor</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

Like a fellow coder gal described it, *"a code editor is like Microsoft Word but for code."* It's where you will create, edit, and browse your code files as part of your development projects. It can check for syntax errors in your code, highlight particular parts of your code to make it easier to read, and suggest code markup as you type to make your coding experience more efficient.

The most popular editors are [Text Mate](http://macromates.com/), [Text Wrangler](http://www.barebones.com/products/textwrangler/), and [Sublime Text](http://www.sublimetext.com/). Many hardcore developers are dedicated aficionados of [Vim](http://www.vim.org/), a pre-installed editor that runs within the CLI, because it allows you to work much faster than you would in any editor application. But mastering Vim takes A LOT of practice and CLI knowledge before you can become comfortable using it. I provide links to useful tutorials at the end of this section if you would like to learn more about how to use Vim.

The most popular choice among developers in the coding community and my personal preference is [Sublime Text](http://www.sublimetext.com/) so that is what we will install as part of this guide.

#### <i class="fa fa-download fa-lg"></i> **How?** ####

- Visit [http://www.sublimetext.com](http://www.sublimetext.com)
- Navigate to the **Download** tab in the top navigation menu bar
- Under the "Download" section, click the **OS X** link and download the **.dmg** file to your desktop
- Once the file has finished downloading, open the file and drag and drop the **Sublime Text** app icon into the **Applications** folder
- Open **Finder** and under **Devices** click on the the small "eject" icon next to the Sublime Text install disk image to unmount it 


#### <i class="fa fa-globe fa-lg"></i> **Additional Resources** ####

- [Open Vim Interactive Tutorial](http://www.openvim.com/tutorial.html)
- [Vim Adventures](http://vim-adventures.com/)

<h3 id="command-line-interface">Command Line Interface (CLI)</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

The **Command Line Interface (CLI)**, also known as the **console** or **terminal** window, is a tool that allows you to quickly interact with your entire computer system on the fly. By running specific "commands", or actions, onto a single "line" in the terminal window you can search directories, run applications, compile code, or install useful development tools all in one spot. It can be intimidating at first if you have never used it before, but trust me when I say, with a little practice, it will become your best friend in the wonderful wide world of web development. Try saying *that* ten times in a row in one breath!

#### <i class="fa fa-download fa-lg"></i> **How?** ####

Guess what? Your computer already comes pre-installed with a terminal application to access the CLI!

- Open **Finder** and navigate to **Applications** > **Utilities**
- Clck on **Terminal.app** to launch the application
- You should see a new window that looks a little something like this but with your system name instead of "cacosta" which is the name of my system:

	![Terminal](/assets/terminal.jpg "Terminal")
	
Leave the Terminal window open for use later in this guide.

At various points in this guide, you will be asked to enter commands in Terminal as part of certain installations. They will be formatted like so:

`[command prompt]$ some awesome command you will run`

The `$` appears automatically at the end of the **command prompt** in Terminal. The command prompt tells you exactly where you are in the directory tree of your computer system. You will be aksed to run various commands during certain installations as part of this guide but you will not paste the `$`, only what comes after it. Once you have pasted the command, press the **Return** key to run the command. 

#### <i class="fa fa-coffee fa-lg"></i> **Homework** ####

I suggest you take the time sooner rather than letter to complete Zed. A. Shaw's [The Command Line Crash Course](http://cli.learncodethehardway.org/book/). As your development experience grows, the more comfortable you are using the CLI the easier it will be to install and work with more advanced tools in the future.

<h3 id="homebrew">Homebrew</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

Web Developers use many different programming laguages to code the web. Most programming languages come with special code libraries all "packaged" up and ready for use as installable code to help you efficiently accomplish common and useful tasks in your project.
 
> Packages are installable bundles of source code. [[Skvorc](http://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884)]

As a developer you will eventually use so many of these code libraries in fact, it can become quite a challenge to keep track of installing, updating, managing, and configuring all of them on a consistent basis. Once package versions become incompatible with one another it can be a real drag trying to figure out where it all went wrong.

Enter [Homebrew](http://brew.sh/), a package manager that wrangles all of the updates and configurations for you! 

Our main concern for installing Homebrew as part of this guide is because it makes it so much easier to install Git for Github which we will do in the next section, so don't spend to much time worrying about it. It's a useful tool that will become essential to your web development workflow as you become a more experienced coder so it's good practice to install it and start using it now.

#### <i class="fa fa-download fa-lg"></i> **How?** ####

<i class="fa fa-exclamation-circle fa-lg alarm"></i> ***Note***: *If you are running <strong>OS X 10.9 Mavericks</strong>, then you can install the Xcode Command Line Tools directly from the command line by running `$ xcode-select --install` in Terminal, in which case you can skip Step 1 and you won't have to go through the download page and the questionnaire. Otherwise, if you are running OS X 10.8 Mountain Lion then you will need to complete the first step*

Homebrew requires **Command Line Tools** which is available as part of **Xcode**, a free developer toolbox provided by Apple, but rather than download the entire Xcode suite which is quite large, we can download the Command Line Tools independently from the Apple Developer site:

- Visit <http://developer.apple.com/downloads>
- Sign in with your Apple ID (the same one you use for iTunes and app purchases)
- If you don't already have an Apple Developer license, you will be prompted to create one:
	- Accept the agreeement
	- Fill out the questionaire to the best of your ability and click the **Register** button. This should take you to the [Downloads for Apple Developers](https://developer.apple.com/downloads/index.action) page
- On the "Downloads for Apple Developers" page, search for “command line tools” in the search field on the left
- After you receive a list of results, click on the download link for the version that matches your current operating system and download the **.dmg** file to your desktop. (You should already have your current OS X version written down for you to reference here but if you don't, see section [Get To Know Your System](#system-info) to find it)
- Once the file has finished downloading, open the file and double-click on the **.mpkg** installer to launch the installation
- Once the installation is complete, open a **Finder** window and under **Devices** click on the small "eject" icon next to the Command Line Tools install disk image to unmount it

Now that Command Line Tools are installed, next we can install **Homebrew**!

In the Terminal window, paste the following command after the command prompt(`$`), hit **Enter**, and follow the steps provided during installation:

`$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`

Once the installation is complete, close the current terminal window, open up a new one, and run the following command:

`$ brew doctor`

If Homebrew was installed successfully you should get the response `Your system is ready to brew`. If you did not get this response, follow the list of command steps that Homebrew tells you to run in order to fix your installation. Homebrew messages are generally very helpful and let you know exactly what to do. Once you have resolved any issues you can run `brew doctor` again to confirm a successful installation.
	
#### <i class="fa fa-globe fa-lg"></i> **Additional Resources** ####
- [How to install and use Homebrew](http://matthewcarriere.com/2013/08/05/how-to-install-and-use-homebrew/) by Matthew Carriere	
- [Homebrew Demystified](http://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884) by Bruno Skvorc
- [Homebrew FAQ Wiki](https://github.com/Homebrew/homebrew/wiki/)

<h3 id="git-github">Git & Github</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

[Github](http://www.github.com) is a hosting, code sharing, and social community for coders. Your profile on Github provides a public (or private if you choose) view to your code projects and can even serve as a portfolio or resume, showing off your awesome coding skills, apps, and contributions to potential employers.

At the heart of GitHub is an **open source version control system (VCS)** called **Git** which allows you to keep track of various changes in your code, back up your code to a remote location, and share code between team members or other developers you wish to collaborate with via the Github website. Git is a powerful tool and there can be quite a learning curve to mastering Git's full capabilities but like learning the command line interface, it just takes a bit of practice.

Since this post serves only as beginner's installation guide, I have provided useful tutorial links as homework at the end of this section that walk you through the basics of how to use GIT to push your code up to Github.

#### <i class="fa fa-download fa-lg"></i> **How?** ####

First, create an account on Github.com:

- Visit <https://github.com/>
- Fill out the sign-up form and hit the **Sign up for Github** button. You are now part of the Github community!

Next, install Git on your machine. There are a few different ways you can do this but now that we have Homebrew installed its easy!

Run the following:

`$ brew install git`

After the installation completes, test that it is installed by running the following command:

`$ git --version`

which should return the latest version of Git that you installed (e.g `git version 1.9.1`). If you would like to know what the latest version is, visit [git-scm.com](http://git-scm.com/downloads).


#### <i class="fa fa-coffee fa-lg"></i> **Homework** ####

To learn how to add your code to Git and push it to Github.com, complete the following tutorials:

* [Github Bootcamp](https://help.github.com/categories/54/articles)
* [Git Immersion](http://gitimmersion.com/index.html)

#### <i class="fa fa-globe fa-lg"></i> **Additional Resources** ####
	
* [Pro Git](http://git-scm.com/book)
* [Git Ref](http://gitref.org/)
* [Github Resource List](https://help.github.com/articles/what-are-other-good-resources-for-learning-git-and-github)

<h3 id="hosting">Hosting Server</h3>

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

What good is a website or app if it doesn't exist on the Internet so people can access it?

Generally, when you develop a website or an app, you code it **locally** first on your private computer system. Once your website or app is ready for its big debut, it must be uploaded from your computer to the Internet so that it can be made public. This is normally called a **release** to **production**.

#### <i class="fa fa-download fa-lg"></i> **How?** ####

#### <i class="fa fa-coffee fa-lg"></i> **Homework** ####

#### <i class="fa fa-globe fa-lg"></i> **Additional Resources** ####

---

<h3 id="iterm">iTerm</h3>])

#### <i class="fa fa-lightbulb-o fa-lg"></i> **Why?** ####

The default terminal application is perfectly fine to use but it's a little boring. Let's install a better one with features that make your work in the terminal more enjoyable. I like to use [iTerm2](http://www.iterm2.com/#/section/downloads).

#### <i class="fa fa-download fa-lg"></i> **How?** ####

- Visit [http://www.iterm2.com](http://www.iterm2.com/#/section/downloads)
- Click the **Stable Releases** click the download link and download the **.dmg** file to your desktop.
- Once the file has finished downloading, open the file and drag and drop the **iTerm2** app icon into the **Applications** folder
- Open a **Finder** window and under **Devices** click on the the small "eject" icon next to the iTerm2 install disk image to unmount it.


[Back to Top](#basic-setup)
