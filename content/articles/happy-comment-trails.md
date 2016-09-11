---
author_name: "Jonah Bossewitch"
author_url: "http://alchemicalmusings.org/about/"
date: "2010-09-20"
topics: 
- Projects
tags: ["opensource", "plugin", "wordpress"]
title: "Happy Comment Trails"
type: "post"
---

<p>This semester we upgraded our WordPress Multi-User (MU) installation to WordPress3. WordPress runs our <a href="http://edblogs.columbia.edu/">EdBlogs</a> course blogging platform, a system we support that is designed for multi-user course blogs. WordPress3 brings the WordPress MU fork back into the fold of the core WordPress distribution and continues the gradual improvement of its technical architecture and design. </p>

<!--more-->

<p>We concentrated on revamping our standard themes and worked harder than I anticipated to make sure that the default experience within a newly created blog makes educational sense.  </p>

<p>WordPress is very customizable, but many of its plugins are designed for a single blog installation. They present a bewildering array of configuration options and don't always make sense out of the box. WordPress provides hooks into every nook and cranny of the system, but finding the right one often involves a coding expedition. Running an industrial WordPress farm is much more difficult than setting up a single, successful blog.<br /><br />When we launched EdBlogs last year, many faculty inquired about better assessment tools to help them evaluate student participation. Wordpress has some built-in facilities to list users' posts, but WordPress does not expose an interface for aggregating all of their comments. All the data exists in the database but was not accessible to users. Faculty and students alike will benefit from more easily tracking each others' contributions. </p>

<p>This fall we launched a new WordPress widget that lists all of a blog's participants, the number of posts <em>and comments</em>  that they contributed and links to a new custom profile page that displays a list of all of their posts and comments.  </p>

<p><b>Participants Widget:</b><br /><img alt="edblogs_participants.png" src="http://ccnmtl.columbia.edu/compiled/edblogs_participants.png" width="500" height="332" class="mt-image-none" /></p>

<p>This widget is <a href="http://github.com/ccnmtl/participants-widget">available</a> on github if you want to take it for a spin.</p>
