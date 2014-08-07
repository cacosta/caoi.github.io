---
layout: post
date: 2014-08-01 20:08:14+00:00
permalink: easy-screensaver-shortcut
title: "Keep Your Computer Secure: Easy Screen Saver Shortcuts"
comments: true
categories:
- tutorials
---

I don't like ***Hot Corners***. Yeah, I said it. Hot Corners are a feature on Apple computers that allow you to link a particular system feature to a corner of your screen so all you have to do is drag or track your pointer to initiate that feature, such as a screen saver, show desktop, etc. I find Hot Corners annoying because more often than not, my pointer sporadically finds its way to these corners when I least expect them to, for example during a presentation or when a fellow developer wants to hop into the driver's seat on my laptop, accidentally setting off a dizzying leap into the subjective layers that make up my own "MacOSX Sys Pref Universe".

What I do like are [Keyboard Shortcuts](http://www.danrodney.com/mac/). Quick, efficient, and sexy, keyboard shortcuts allow you to seamlessly utilize features of your computer with the stroke of a key (or two or sometimes three) but once you have them locked into memory, utilizing a computer's feature is literally at your fingertips.

Ah, the good 'ol trusty screen saver. Having the ability to quickly lock and start your screen saver is a very important security feature every computer user should adopt, especially if they work at a company where you deal with sensitive content. Don't depend on your screen saver coming up 15-20 min after you leave it idle as a form of prevention from your personal information being accessible by anyone. Lock it. And I mean lock it good.

Let's take a look at a couple of ways you can access your locked screen saver quickly and efficiently:

###<i class="fa fa-check fa-lg"></i> First, lock your Screen Saver

#### <i class="fa fa-download"></i> **How?**
* Click on the <i class="fa fa-apple"></i> symbol in the upper left corner of you computer screen and select *System Preferences* from the drop down menu.
  
  ![System Preferences](/assets/macosx-sys-pref.png "System Preferences")

* Select the *Security & Privacy* icon under the *Personal* section of System Preferences.

  ![Security & Privacy](/assets/macosx-sys-pref-security.png "Security & Privacy")

* Make sure "Require password *immediately* after sleep or screen saver begins" is checked.

  ![Require password](/assets/macosx-sys-pref-security-screensaver-lock.png "Require Password")

###<i class="fa fa-check fa-lg"></i> Next, create an easy shortcut to start your Sreen Saver

#### <i class="fa fa-download"></i> **How?**
* Open the **Automator** application located inside the **Applications** folder

  ![Automator App - Service](/assets/app-automator.png "Automator App - Service")

* Choose the **Service** icon

  ![Automator App - Service](/assets/app-automator-service.png "Automator App - Service")

* In the search bar located in the upper left of the application, type in a search for *Start Screen Saver*. Click on the **Start Screen Saver** option once it shows up in the results list just below it.

  ![Automator App - Search](/assets/app-automator-search.png "Automator App - Search")

* Drag the *Start Screen Saver* option over to the larger window to the right. This will add it as a property of the automated service you are creating. Make sure the service drop-down selections are exactly as you see them in this example.

   ![Automator App - Drag](/assets/app-automator-drag.png "Automator App - Drag")

* In the application menubar under **File**, select **Save** and give your new Service a name, something like "Start Screen Saver". Once your service is saved, close out of the Automator application.
* Click on the <i class="fa fa-apple"></i> symbol in the upper left corner of you computer screen and select *System Preferences* from the drop down menu.
* Select the **Keyboard** icon located in the **Hardware** section. 
* Click on the **Services** gear icon in the left menu box, then in the right menu box scroll down towards the end until you get to the **General** category. You should see an option for the new service you created. Enable it by checking the box and then double-click to the right of the option to add/record a shortcut. I liked to use **&#94;&#8984;S** since its easy to remember and does not conflict with any other shortcuts when you are accessing system features.
  
  ![System Preferences - Keyboard Shortcuts](/assets/macosx-sys-pref-keyboard-shortcuts.png "System Preferences - Keyboard Shortcuts")

  Voíla! Now you should be able to access your locked screen saver by using your shortcut key.


###<i class="fa fa-check fa-lg"></i> Alternate option: add the lock icon to your menubar

#### <i class="fa fa-download"></i> **How?**

* Open the **Keychain Access.app** located in **Aplications** <i class="fa fa-arrow-right"></i> **Utilities**

  ![Kechain Access](/assets/app-keychain-access.png "Keychain Access")

* In the top menubar, under **Keychain Access** drop down, select **Preferences**.

  ![Kechain Access - Preferences](/assets/app-keychain-access-pref.png "Keychain Access - Preferences")

* Enable the option **show keychain status in menubar** and close this window. Close out of the Keychain Access app.

  ![Kechain Access - Enable](/assets/app-keychain-access-enable.png "Keychain Access - Enable")

* Now you should see a lock icon in your top menubar. Click on this icon and it should activate your locked screen saver.

  ![Menubar Lock Icon](/assets/menubar-lock-icon.png "Menubar Lock Icon")

  There you have it. Easy Access to your screen saver, locked and secure. Happy computing!

<a class="scrollup" href="#">Scroll</a>