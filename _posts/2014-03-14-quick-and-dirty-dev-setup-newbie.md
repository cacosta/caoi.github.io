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

To help navigate these torrid installation waters as a newbie coder, I created a straightforward setup guide that walks you through everything you will need to get started coding a basic website or app with HTML, CSS, and JavaScript. It is divided into two categories: *Basic Setup* and *Enhancements*. The [Basic Setup](#basic-setup) guides you through the essential tools, applications, and resources you will need to get coding right away. [Enhancements](#enhancements) are the "extras", plugins and configurations that I personally like to use to enhance my personal development workflow and make it more efficient.

*<i class="fa fa-warning alarm"></i> As part of the installation process, you will download various tools from the Internet. Make sure you are connected to the Internet before you begin.*

*<i class="fa fa-warning alarm"></i> I suggest you complete the <strong>Homework</strong> section at the end of each installation step (indicated by the <i class="fa fa-coffee"></i> symbol) before proceeding to the next step as some of the knowledge gained is useful in understanding the the next installation process.*

Let's get started shall we?

---

### Basic Setup
- [System Update](#system-update)
- [Get To Know Your System](#system-info)
- [Internet Browser](#internet-browser)
- [Code Editor](#code-editor)
- [Command Line Interface (CLI)](#command-line-interface)
- [Homebrew](#homebrew)
- [Git &amp; Github](#git-github)
	
### Enhancements
- [iTerm2](#iterm2)
- [Pretty Terminal](#pretty-terminal)
- [Sexy Editor](#sexy-editor)
- [Chrome Developer Tools](#chrome-dev-tools)
- [Dev Toolbox](#dev-toolbox)

---

<h2 id="basic-setup">Basic Setup</h2>

<h3 id="system-update"><i class="fa fa-check fa-lg"></i> System Update</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

Many of the tools you will install for coding and development are constantly being updated based on the latest operating system. To avoid a headache and broken installs down the road its a good idea to update your computer's operating system to the latest version any time you install something new to ensure a fresh and clean starting point. 

#### <i class="fa fa-download"></i> **How?** 

- Click on the **Apple Icon** located in the upper left corner of your screen's menu bar
- In the drop-down menu, select **Software Update…** which will open a new window listing any available updates
- If there updates to be installed, click the **Update** or **Update All** button and wait until all updates are complete before proceeding

#### <i class="fa fa-warning alarm"></i> **Note**

*To use this guide effectively you must have the latest Apple Mac OS X operating system installed which currently is OS X 10.9 Mavericks, although if you have OS X 10.8 Mountian Lion that will be fine.*

<h3 id="system-info"><i class="fa fa-check fa-lg"></i> Get To Know Your System</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

When installing tools onto your computer, it's useful to know exactly which operating system version you are currently running so you know which version of a tool is compatible with your system for download. 

#### <i class="fa fa-download"></i> **How?**

- Click on the **Apple Icon** located in the upper left corner of your screen's menu bar
- In the drop-down menu, select **About this Mac** which will open a new smaller window
-  Your current OS X version is listed just underneath the Apple icon. Write this down somewhere as you will need this information handy later in this guide.

#### <i class="fa fa-coffee"></i> **Homework**

Apple loves to give their operating system versions fancy names like Snow Leopard, Mountain Lion, or the latest, Mavericks. To check which commercial name belongs to your current operating system version visit <http://en.wikipedia.org/wiki/OS_X#Versions> and match your version number with the one listed on the chart.

<h3 id="internet-browser"><i class="fa fa-check fa-lg"></i> Internet Browser</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

In order to test how your HTML code files will look on the web you will need to view them through an Internet Browser. Most computers come pre-installed with one, for example Safari on Apple Mac computers but if you don't have one you will need to install it.

Most Professional Web Developers prefer to use [Firefox](http://www.mozilla.org/en-US/firefox/new/) or [Chrome](https://www.google.com/intl/en/chrome/) because they have the most useful debugging tools and plugins which help make developing for the web more efficient. My personal preference is Chrome, so that is what we will be installing in this guide.

#### <i class="fa fa-download"></i> **How?**

- Visit [https://www.google.com/chrome/](https://www.google.com/intl/en/chrome/)
- Click the **Download** button and download the **.dmg** file to your desktop.
- Once the file has finished downloading, open the file and drag and drop the **Google Chrome** app icon into the **Applications** folder
- Open a **Finder** window and under **Devices** click on the the small "eject" icon next to the Chrome install disk image to unmount it. 

<h3 id="code-editor"><i class="fa fa-check fa-lg"></i> Code Editor</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

Like a fellow coder gal described it, *"a code editor is like Microsoft Word but for code."* It's where you will create, edit, and browse your code files as part of your development projects. It can check for syntax errors in your code, highlight particular parts of your code to make it easier to read, and suggest code markup as you type to make your coding experience more efficient.

The most popular editors are [Text Mate](http://macromates.com/), [Text Wrangler](http://www.barebones.com/products/textwrangler/), and [Sublime Text 2](http://www.sublimetext.com/2). Many hardcore developers are dedicated aficionados of [Vim](http://www.vim.org/), a pre-installed editor that runs within the CLI, because it allows you to work much faster than you would in any editor application. But mastering Vim takes A LOT of practice and CLI knowledge before you can become comfortable using it. I provide links to useful tutorials at the end of this section if you would like to learn more about how to use Vim.

The most popular choice among developers in the coding community and my personal preference is [Sublime Text 2](http://www.sublimetext.com/) so that is what we will install as part of this guide.

#### <i class="fa fa-download"></i> **How?**

- Visit [http://www.sublimetext.com](http://www.sublimetext.com)
- Navigate to the **Download** tab in the top navigation menu bar
- Under the "Download" section, click the **OS X** link and download the **.dmg** file to your desktop
- Once the file has finished downloading, open the file and drag and drop the **Sublime Text** app icon into the **Applications** folder
- Open **Finder** and under **Devices** click on the the small "eject" icon next to the Sublime Text install disk image to unmount it 


#### <i class="fa fa-globe"></i> **Additional Resources**

- [Open Vim Interactive Tutorial](http://www.openvim.com/tutorial.html)
- [Vim Adventures](http://vim-adventures.com/)

<h3 id="command-line-interface"><i class="fa fa-check fa-lg"></i> Command Line Interface (CLI)</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

The **Command Line Interface (CLI)**, also known as the **console** or **terminal** window, is a tool that allows you to quickly interact with your entire computer system on the fly. By running specific "commands", or actions, onto a single "line" in the terminal window you can search directories, run applications, compile code, or install useful development tools all in one spot. It can be intimidating at first if you have never used it before, but trust me when I say, with a little practice, it will become your best friend in the wonderful wide world of web development. Try saying *that* ten times in a row in one breath!

#### <i class="fa fa-download"></i> **How?**

Guess what? Your computer already comes pre-installed with a terminal application to access the CLI!

- Open **Finder** and navigate to **Applications** > **Utilities**
- Clck on **Terminal.app** to launch the application
- You should see a new window that looks a little something like this but with your system name instead of "cacosta" which is the name of my system:

	![Terminal](/assets/terminal.jpg "Terminal")
	
Leave the Terminal window open for use later in this guide.

At various points in this guide, you will be asked to enter commands in Terminal as part of certain installations. They will be formatted like so:

`[command prompt]$ some awesome command you will run`

The `$` appears automatically at the end of the **command prompt** in Terminal. The command prompt tells you exactly where you are in the directory tree of your computer system. You will be aksed to run various commands during certain installations as part of this guide but you will not paste the `$`, only what comes after it. Once you have pasted the command, press the **Return** key to run the command. 

#### <i class="fa fa-coffee"></i> **Homework**

I suggest you take the time sooner rather than letter to complete Zed. A. Shaw's [The Command Line Crash Course](http://cli.learncodethehardway.org/book/). As your development experience grows, the more comfortable you are using the CLI the easier it will be to install and work with more advanced tools in the future.

<h3 id="homebrew"><i class="fa fa-check fa-lg"></i> Homebrew</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

Web Developers use many different programming laguages to code the web. Most programming languages come with special code libraries all "packaged" up and ready for use as installable code to help you efficiently accomplish common and useful tasks in your project.
 
> Packages are installable bundles of source code. [[Skvorc](http://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884)]

As a developer you will eventually use so many of these code libraries in fact, it can become quite a challenge to keep track of installing, updating, managing, and configuring all of them on a consistent basis. Once package versions become incompatible with one another it can be a real drag trying to figure out where it all went wrong.

Enter [Homebrew](http://brew.sh/), a package manager that wrangles all of the updates and configurations for you! 

Our main concern for installing Homebrew as part of this guide is because it makes it so much easier to install Git for Github which we will do in the next section, so don't spend to much time worrying about it. It's a useful tool that will become essential to your web development workflow as you become a more experienced coder so it's good practice to install it and start using it now.

#### <i class="fa fa-download"></i> **How?**

<i class="fa fa-warning alarm"></i> ***Note***: *If you are running <strong>OS X 10.9 Mavericks</strong>, then you can install the Xcode Command Line Tools directly from the command line by running `$ xcode-select --install` in Terminal, in which case you can skip Step 1 and you won't have to go through the download page and the questionnaire. Otherwise, if you are running OS X 10.8 Mountain Lion then you will need to complete the first step*

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

Once the installation is complete, close the current Terminal window, open up a new one, and run the following command:

`$ brew doctor`

If Homebrew was installed successfully you should get the response `Your system is ready to brew`. If you did not get this response, follow the list of command steps that Homebrew tells you to run in order to fix your installation. Homebrew messages are generally very helpful and let you know exactly what to do. Once you have resolved any issues you can run `brew doctor` again to confirm a successful installation.
	
#### <i class="fa fa-globe"></i> **Additional Resources**
- [How to install and use Homebrew](http://matthewcarriere.com/2013/08/05/how-to-install-and-use-homebrew/) by Matthew Carriere	
- [Homebrew Demystified](http://computers.tutsplus.com/tutorials/homebrew-demystified-os-xs-ultimate-package-manager--mac-44884) by Bruno Skvorc
- [Homebrew FAQ Wiki](https://github.com/Homebrew/homebrew/wiki/)

<h3 id="git-github"><i class="fa fa-check fa-lg"></i> Git &amp; Github</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**

[Github](http://www.github.com) is a hosting, code sharing, and social community for coders. Your profile on Github provides a public (or private if you choose) view to your code projects and can even serve as a portfolio or resume, showing off your awesome coding skills, apps, and contributions to potential employers.

At the heart of GitHub is an **open source version control system (VCS)** called **Git** which allows you to keep track of various changes in your code, back up your code to a remote location, and share code between team members or other developers you wish to collaborate with via the Github website. Git is a powerful tool and there can be quite a learning curve to mastering Git's full capabilities but like learning the command line interface, it just takes a bit of practice.

Since this post serves only as beginner's installation guide, I have provided useful tutorial links as homework at the end of this section that walk you through the basics of how to use GIT to push your code up to Github.

#### <i class="fa fa-download"></i> **How?**

First, create an account on Github.com:

- Visit <https://github.com/>
- Fill out the sign-up form and hit the **Sign up for Github** button. You are now part of the Github community!

Next, install Git on your machine. There are a few different ways you can do this but now that we have Homebrew installed its easy!

Run the following:

`$ brew install git`

After the installation completes, test that it is installed by running the following command:

`$ git --version`

which should return the latest version of Git that you installed (e.g `git version 1.9.1`). If you would like to know what the latest version is, visit [git-scm.com](http://git-scm.com/downloads).


#### <i class="fa fa-coffee"></i> **Homework**

To learn how to add your code to Git and push it to Github.com, complete the following tutorials:

* [Github Bootcamp](https://help.github.com/categories/54/articles)
* [Git Immersion](http://gitimmersion.com/index.html)

#### <i class="fa fa-globe"></i> **Additional Resources**
	
* [Pro Git](http://git-scm.com/book)
* [Git Ref](http://gitref.org/)
* [Github Resource List](https://help.github.com/articles/what-are-other-good-resources-for-learning-git-and-github)

---

<h2 id="enhancements">Enhancements</h2>

<h3 id="iterm2"><i class="fa fa-check fa-lg"></i> iTerm2</h3>
#### <i class="fa fa-lightbulb-o"></i> **Why?** 
The default terminal application is perfectly fine to use but it's a little boring. Let's install a better one with features that make working in the terminal more efficient and enjoyable. A popular terminal app among coders and one I personally like to use is [iTerm2](http://www.iterm2.com/#/section/downloads).

#### <i class="fa fa-download"></i> **How?** 
- Visit [http://www.iterm2.com](http://www.iterm2.com/#/section/downloads)
- Click the download link listed under **Stable Releases** and download the **.dmg** file to your desktop.
- Once the file has finished downloading, open the file and drag and drop the **iTerm2** app icon into the **Applications** folder
- Open a **Finder** window and under **Devices** click on the the small "eject" icon next to the iTerm2 install disk image to unmount it.

<h3 id="iterm"><i class="fa fa-check fa-lg"></i> Pretty Terminal</h3>
#### <i class="fa fa-lightbulb-o"></i> **Why?** 
As coders, we spend a lot of time in the terminal, so why not make it a more colorful and enjoyable place to be?

#### <i class="fa fa-download"></i> **How?**
1. I really like the [Monokai Soda](https://github.com/deepsweet/Monokai-Soda-iTerm) theme for iTerm:
  - Visit the Git Repo at <https://github.com/deepsweet/Monokai-Soda-iTerm>
  - Download the **.zip** file to your desktop by clicking on the **Download Zip** button located at the bottom of the right-hand sidebar
  - Once the file has finished downloading, unarchive the .zip file by double-clicking on it
  - In the **iTerm app**, under the **iTerm** tab in the top menu bar, click on **Preferences** (A quick way to access the preferences menu is **&#8984; + i**)
  - Click on the **Colors** tab and click on the **Load Presets** drop down.
  - Click **Import...** and navigate to the **.itermcolors** file located in the unzipped archive folder you downloaded to your desktop, then click the **Open** button to load this theme.
  - At this point, close all open **iTerm** windows.
  - Open the **Colors** tab again in the **Preferences** menu and locate the new theme in the **Load Presets** drop-down menu, click on it and make sure you can see the options change in the swatches above.
  - Now open a new iTerm window and voilà! A much prettier terminal!
2. Microsoft's **Consolas** font is a really nice font when viewed in a terminal window as it is easy on the eyes and much more readable:
  - If you have **Microsoft Office for Mac** already installed on your computer then Consolas will be installed as well but if you don't have Office, run the following commands in a new terminal window:
      
      ```bash
      $ brew install cabextract
      $ cd ~/Downloads
      $ mkdir consolas
      $ cd consolas
      $ curl -O http://download.microsoft.com/download/f/5/a/f5a3df76-d856-4a61-a6bd-722f52a5be26/PowerPointViewer.exe
      $ cabextract PowerPointViewer.exe
      $ cabextract ppviewer.cab
      $ open CONSOLA*.TTF
      ```
      [[Source]](http://blog.ikato.com/post/15675823000/how-to-install-consolas-font-on-mac-os-x)
  - Click **Install Font** and you now have Consolas installed! 
  - In **iTerm**, open the **Preferences** menu and select the **Text** tab
  - Under **Regular Font**, click on the **Change Font** button. Locate the **Consolas** font in the list and click to highlight it. In addition, highlight or enter a slightly bigger font size. I like to use **14pt** or **16 pt**. You should see your changes instantly.
3. Let's make the command prompt look a little sexy and much easier to understand:
  - Open a new **iTerm** window
  - Run the following command: `$ nano ~/.bash_profile`. If you don't have permissions, run `$ sudo nano ~/.bash_profile` and enter your Mac’s administration password if required, then hit return
  - Visit <https://github.com/gf3/dotfiles/blob/master/.bash_prompt> and copy the code snippet availalbe on that page
  - At the bottom of the open **.bash_profile** file, paste the code into the file
  - Press **ctrl + O** and hit return to save the file
  - Press **ctrl + X** to exit the file and return to the command line
  - In the terminal window, run the following command to refresh your profile: `$ source ~/.bash_profile`
  - Close the Terminal window and open a new one.
  - You should now see the command prompt looks similar to the screenshot located [here](http://cloud.gf3.ca/M5rG).

#### <i class="fa fa-globe"></i> **Additional Resources**

If you don't like the [Monokai Soda](https://github.com/deepsweet/Monokai-Soda-iTerm) theme, there are many others to choose from that you can install just like the theme you installed here. For example, [Espresso Libre](https://github.com/jurgemaister/Espresso-Libre) or [Solarized](http://ethanschoonover.com/solarized) are two popular themes that I also like. Check out the [iTerm2 Color Schemes Gallery](https://github.com/mbadolato/iTerm2-Color-Schemes) for even more themes!

I encourage you to play around with iTerm's settings in order to tailor the app to your liking. Consider creating your own themes in the **Preferences** menu and export them for others to enjoy using [this](http://tmtheme-editor.herokuapp.com/#/theme/Monokai) handy [editor](http://tmtheme-editor.herokuapp.com/#/theme/Monokai).  

<h3 id="sexy-editor"><i class="fa fa-check fa-lg"></i> Sexy Editor</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?**
As much as we spend a lot of time in the the terminal window, we also spend a ton of time in our editor of choice. Some developers prefer looking at their code in in a darker environment, and others are comfortable with a lighter look. Some like bright colors, while others prefer a minimalist feel. It all really comes down to preference.

I personally prefer a darker background with lighter text as I feel it is much easier on the eyes. It's nice to know that an editor like the one we installed, **Sublime Text**, is configurable to look and feel the way you prefer.

#### <i class="fa fa-download"></i> **How?**
1. Download the Sublime Text 2 UI theme called [Soda](https://github.com/buymeasoda/soda-theme) :
  - Visit <https://github.com/buymeasoda/soda-theme>
  - Click on the **Download ZIP** button on the right and download the **.zip** file to your desktop
  - Once the file has finished downloading, double-click on it to un-zip it
  - Rename the folder to **Theme - Soda**
  - Open **Sublime Text 2** app and find your Packages directory using the menu item **Preferences -> Browse Packages...**
  - Copy the downloaded folder you renamed into your Sublime Text Packages directory
2. Activate the Soda theme:
  - Open your User Settings Preferences file under **Preferences -> Settings - User**
  - Add (or update) your **theme** entry to be `"theme": "Soda Light.sublime-theme"` or `"theme": "Soda Dark.sublime-theme"`:

      Example:

      ```css
      {
        "theme": "Soda Dark.sublime-theme"
      }
      ```
  - Save this file
  - Restart Sublime Text 2
  - For further installation help and additional configuration options, check out <http://buymeasoda.github.io/soda-theme/>
3. Now lets change the color scheme of the main workspace area where you view code:
  - In **Sublime Text 2**, open a new file by navigating to **File -> New File** or **&#8984; + N**
  - Type some code or html into the new file. It is not neccessary to save this file.
  - Find the Color Scheme options under **Preferences -> Color Scheme -> Color Scheme - Default** and select a default color scheme to see its effect. I personally like **Espresso Libre** but try different ones until you find one you prefer.
  - For a preview of what the default color schemes look like with code files checkout out the [Sublime Text Default Color Scheme Gallery](http://theneum.com/sublime-text-2-color-schemes/). 

#### <i class="fa fa-globe"></i> **Additional Resources**

Check out [Color Sublime](http://colorsublime.com/) for more color schemes that can be installed in the same way you installed the UI theme. If you don't like the Soda UI theme, checkout [Spacegray](http://kkga.github.io/spacegray/) or [Flatland](https://github.com/thinkpixellab/flatland).

<i class="fa fa-warning alarm"></i> Understand that **color schemes** control how your *code* will look in Sublime Text 2 where **color themes** control how the Sublime Text 2 **UI** or *User Interface* application will look (e.g. file navigation side bar, tabs, top menu bar, etc)

<h3 id="chrome-dev-tools"><i class="fa fa-check fa-lg"></i> Chrome Developer Tools</h3>

#### <i class="fa fa-lightbulb-o"></i> **Why?** 

All good coders must know how to use their Internet browser's built-in debugging tool. It's an invaluable aid that helps you quickly troubleshoot bugs, code errors, layout issues, site performance, and more. 

Since this guide had you download Chrome as your Internet browser, this is the tool you will practice using. Try to practice using it on your projects as soon as possible. *Practice makes easy!*

#### <i class="fa fa-download"></i> **How?** 

- Visit <https://developers.google.com/chrome-developer-tools/>
- Walk through the documentation to familiarize yourself with how to use Chrome's developer tools

<h3 id="dev-toolbox"><i class="fa fa-check fa-lg"></i> Dev Toolbox</h3>

Here are a few additional tools, plugins, and resources I find useful for Web Development:

- [Web Developer Toolbar](http://chrispederick.com/work/web-developer/)
- [YSlow](http://developer.yahoo.com/yslow/)
- [ColorZilla](http://www.colorzilla.com/)
- [SugarBox](http://www.sugarbox.io/)
- [Gist](https://gist.github.com/) or [JS Fiddle](http://jsfiddle.net/)
- [Stack Overflow](http://stackoverflow.com/)
- [JS/CSS Minifier](http://fmarcia.info/jsmin/test.html)

*For more useful links, resources, tutorials, and articles related to web development click the <strong>Resources</strong> tab on my website or visit <https://delicious.com/iamca/dev-share>*

---

#### *Reference Notes*
<p class="small"><em>There is one setup guide that I often refer to when getting a computer <strong>"code ready"</strong>, and that is <a href="https://github.com/nicolashery/mac-dev-setup">Mac Dev Setup</a> by Nicolas Hery. This resource provide a comprehensive list of everything you will need to get your computer set up for coding the web but it can be very overwhelming for someone new to coding. The majority of the tools listed by these resources are not neccessary for a beginner coder learning to build a basic website or app and can be re-visited once you become a more experienced programmer or have a need to use specialized code languages and tools.</em></p>

---

<i class="fa fa-bullhorn fa-lg"></i> I'm looking for someone who could help me put together a similar dev setup guide for beginners but for the Windows operating system. If that person is you, [contact me](/contact/)!

<a class="scrollup" href="#">Scroll</a>