---
author_name: "Nick Buonincontri"
author_url: http://ctl.columbia.edu/about/team/buonincontri/
date: 2016-08-25T12:07:21-04:00
draft: false
lede: "Borrowing ideas from dev-ops for better hardware management"
poster: filename
poster_source: ""
poster_sourceurl: ""
tags: ["salt", "deployment", "imaging"]
title: Dev-sys-ops-admin? Part 1
topics: 
- Sysadmin
type: post
---

At the CTL we have about 2 dozen utility machines spread over 6 physical locations, as well as another 3 dozen or so staff laptops.  Managing updates, user accounts, and printers for all these machines not only is not only a big job, but consists of many small repetitive steps - which makes it ripe for automation.  Having been exposed to devops practices at the CTL, I wanted to find a way to corral all these machines in a sustainable way.  The plan consists of three ‘legs’ using Deploy Studio to provide the base image, Salt to manage configuration, and Munki to manage applications.

Deploy Studio is used to provide ‘thin’ base images for these machines.  The image consists of the base OS, a single user, and Salt installed.  Using a smaller image permits faster imagaing.  It also decreases the complexity of the images, increasing their shelf-life.  Creating images is time consuming process, and I want to get the most out of each one.

Having Salt preinstalled ensures that I can control the machine once it’s up and running.  Using a configuration management tool, allows placing the config under version control which brings another layer of sanity to the process.  Salt is used to ensure that given user accounts are present, and other low level config.

Configuration management tools are really meant for servers, and so there are some friction points when using Salt for user oriented machines.  For example, OSX doesn’t have a package manager built in.  In our case, Salt is used to ensure that Munki is present.

Munki is the third leg of the stool, and is a tool specifically meant for deploying applications to OSX machines.  This allows me to push out new applications to specific machines or groups of machines.

When a new machine is imaged, Salt and Munki do all the heavy lifting for me, in a consistent and repeatable way.
