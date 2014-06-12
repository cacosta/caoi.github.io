###My Personal Website

This is my first Jekyll-powered website which also serves as my personal website and my first time deploying to Github Pages, etc.


* For quick edits and new posts, I am making use of [Prose.io](https://github.com/prose/prose) by Prose
  * TO DO: Try utilizing the open-source Prose codebase on my own local server using [http-server](https://github.com/nodeapps/http-server) by Nodejitsu. I want to be able to edit locally before pushing up to Github Pages.
* Because GitHub Pages runs Jekyll in safe mode, I can't use any of Jekyll's cool plugins. My current way around this is utilizing a rake task to generate the neccessary site code using the plugins before a push to production.
